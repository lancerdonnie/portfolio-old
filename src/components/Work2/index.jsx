import React, { useState } from 'react';
import './Work2.scss';
import project from './data';

// const data = {
//   name: 'Blanche Neige',
//   images: [
//     'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079144/portfolio/Blanche.png',
//     'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581668520/portfolio/chat.png',
//     'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079141/portfolio/book.png',
//     'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079140/portfolio/events.png',
//   ],
//   desc: 'An e-commerce website where you buy stuff and checkout',
//   link: 'https://blancheneige.netlify.com/',
//   git: 'https://github.com/lancerdonnie/blanche-neige',
//   tech: ['react', 'firebase'],
// };

const Index = () => {
  const [selected, setSelected] = useState(0);
  const [page, setPage] = useState(0);

  const data = project[page];

  const prevEnd = page === 0;
  const nextEnd = page === project.length - 1;

  const handleNext = () => {
    if (nextEnd) return;
    setSelected(0);
    setPage((i) => i + 1);
  };

  const handlePrev = () => {
    if (prevEnd) return;
    setSelected(0);
    setPage((i) => i - 1);
  };

  return (
    <div className="work2">
      <div className="work2__nav">
        <div onClick={handlePrev}>
          {!prevEnd && (
            <>
              <span className="material-icons">skip_previous</span>Prev
            </>
          )}
        </div>
        <div onClick={handleNext}>
          {!nextEnd && (
            <>
              Next <span className="material-icons">skip_next</span>
            </>
          )}
        </div>
      </div>
      <div>
        <div className="work2__images">
          {data.images.map((e, i) => (
            <div key={page + i} onClick={() => setSelected(i)}>
              <img
                className={`${selected === i ? 'selected' : ''}`}
                src={e}
                alt={data.name + ' picture' + i}
              />
            </div>
          ))}
        </div>
        <div className="work2__body">
          <div className="work2__left">
            <img
              key={page + selected}
              src={data.images[selected]}
              alt={data.name + ' picture'}
            />
          </div>
          <div className="work2__right">
            <div> {data.name}</div>
            <div> {data.desc}</div>
            <div className="work2__links">
              <a href={data.link} target="blank">
                <span className="material-icons">open_in_new</span>
              </a>
              <a href={data.git} target="blank">
                <i className="fab fa-github social"></i>
              </a>
            </div>
            <div className="tech">
              {data.tech.map((e, i) => (
                <span key={i}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
