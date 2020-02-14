import React from 'react';
import './Work.scss';
import Project from './Project';
const Work = () => {
  const projects = [
    {
      name: 'Blanche Neige',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1581079144/portfolio/Blanche.png',
      desc: 'An e-commerce website where you buy stuff and checkout',
      link: 'https://blancheneige.netlify.com/',
      git: 'https://github.com/lancerdonnie/blanche-neige'
    },
    {
      name: 'Chat Pal',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1581668520/portfolio/chat.png',
      desc:
        'A chat app where users can create rooms, join rooms to chat and chat with all users',
      link: 'https://lancers-chat-pal.herokuapp.com',
      git: 'https://github.com/lancerdonnie/chat-pal'
    },
    {
      name: 'Book Finder',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1581079141/portfolio/book.png',
      desc: 'A search page for google books',
      link: 'https://book-finder-by-lancer.netlify.com/',
      git: 'https://github.com/lancerdonnie/Book-Finder'
    },
    {
      name: 'Events Access',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1581079140/portfolio/events.png',
      desc: 'An Event entry managing system',
      link: 'https://events-access.herokuapp.com/',
      git: 'https://github.com/lancerdonnie/events-access'
    },
    {
      name: 'Exercise Tracker',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1581079140/portfolio/exercise.png',
      desc: 'Track the duration of exercises',
      link: 'https://exercise-tracker-by-lancer.herokuapp.com/',
      git: 'https://github.com/lancerdonnie/Hacker-News_App'
    },
    {
      name: 'Bet Code Converter',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1581079140/portfolio/bconvert.png',
      desc: 'A website for converting Nigerian bet codes',
      link: 'https://windiestbed.htmlpasta.com/',
      git: 'https://github.com/lancerdonnie/Bet-Code-Converter'
    },
    {
      name: 'Hacker News',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1581079142/portfolio/hacker.png',
      desc: 'Searches Angolia Hacker News api for news',
      link: 'https://hacker-news-by-lancer.netlify.com/',
      git: 'https://github.com/lancerdonnie/Hacker-News_App'
    }
  ];
  //https://res.cloudinary.com/dtyrfo0fx/image/upload/v1581668520/portfolio/chat.png
  return (
    <div className='work'>
      {projects.map((el, i) => {
        return <Project key={i} {...el} />;
      })}
    </div>
  );
};

export default Work;
