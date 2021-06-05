import React, { useState } from 'react';
import './Work2.scss';

const project = {
  name: 'Blanche Neige',
  images: [
    'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079144/portfolio/Blanche.png',
    'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581668520/portfolio/chat.png',
    'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079141/portfolio/book.png',
    'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079140/portfolio/events.png',
  ],
  desc: 'An e-commerce website where you buy stuff and checkout',
  link: 'https://blancheneige.netlify.com/',
  git: 'https://github.com/lancerdonnie/blanche-neige',
  tech: ['react', 'firebase'],
};

const Index = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="work2">
      <div>Next</div>
      <div>
        <div className="work2__images">
          {project.images.map((e, i) => (
            <div
              className={`${selected === i ? 'selected' : ''}`}
              onClick={() => setSelected(i)}
            >
              <img src={e} alt={project.name + ' picture' + i} />
            </div>
          ))}
        </div>
        <div className="work2__body">
          <div className="work2__left">
            <img
              src={project.images[selected]}
              alt={project.name + ' picture'}
            />
          </div>
          <div className="work2__right">
            <div> {project.name}</div>
            <div> {project.desc}</div>
            <div className="tech">
              {project.tech.map((e) => (
                <span>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
