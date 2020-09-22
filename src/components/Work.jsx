import React from 'react';
import './Work.scss';
import Project from './Project';
const Work = () => {
  const projects = [
    {
      name: 'Blanche Neige',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079144/portfolio/Blanche.png',
      desc: 'An e-commerce website where you buy stuff and checkout',
      link: 'https://blancheneige.netlify.com/',
      git: 'https://github.com/lancerdonnie/blanche-neige',
    },
    {
      name: 'Chat Pal',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581668520/portfolio/chat.png',
      desc:
        'A chat app where users can create rooms, join rooms to chat and chat with all users',
      link: 'https://lancers-chat-pal.herokuapp.com',
      git: 'https://github.com/lancerdonnie/chat-pal',
    },
    {
      name: 'Book Finder',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079141/portfolio/book.png',
      desc: 'A search page for google books',
      link: 'https://book-finder-by-lancer.netlify.com/',
      git: 'https://github.com/lancerdonnie/Book-Finder',
    },
    {
      name: 'Events Access',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079140/portfolio/events.png',
      desc: 'An Event entry managing system',
      link: 'https://events-access.herokuapp.com/',
      git: 'https://github.com/lancerdonnie/events-access',
    },
    {
      name: 'Donflix',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1600768987/portfolio/donflix.png',
      desc: 'A movie explorer',
      link: 'https://donflix.netlify.app/',
      git: 'https://github.com/lancerdonnie/donflix',
    },
    {
      name: 'Exercise Tracker',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079140/portfolio/exercise.png',
      desc: 'Track the duration of exercises',
      link: 'https://exercise-tracker-by-lancer.herokuapp.com/',
      git: 'https://github.com/lancerdonnie/Hacker-News_App',
    },
    {
      name: 'Caption Cards',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1582734471/caption%20cards/caption.png',
      desc:
        'A web application that allows people to add captions and an option to label the captions with tags',
      link: 'https://captioncardsbylancer.netlify.com/',
      git: 'https://github.com/lancerdonnie/caption-cards',
    },
    {
      name: 'Wejapa Blog',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1600768895/portfolio/wejapa.png',
      desc: 'A Php blog with image upload and auth',
      link: 'https://wejapablog.herokuapp.com/',
      git: 'https://github.com/lancerdonnie/wejapa-backend-php-wk-8',
    },
    {
      name: 'Bet Code Converter',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079140/portfolio/bconvert.png',
      desc: 'A website for converting Nigerian bet codes',
      link: 'https://windiestbed.htmlpasta.com/',
      git: 'https://github.com/lancerdonnie/Bet-Code-Converter',
    },
    {
      name: 'Hacker News',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079142/portfolio/hacker.png',
      desc: 'Searches Angolia Hacker News api for news',
      link: 'https://hacker-news-by-lancer.netlify.com/',
      git: 'https://github.com/lancerdonnie/Hacker-News_App',
    },
    {
      name: 'Barber shop',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1593702386/screencapture-barbershophng-netlify-app-2020-07-02-16_05_07.png',
      desc: 'Starter barbershop page',
      link: 'https://barbershophng.netlify.app/',
      git:
        'https://github.com/lancerdonnie/Barber-shop_Team-c_envarto_JL/tree/upload',
    },
    {
      name: 'Fruity',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1593703197/screencapture-localhost-50128-2020-07-02-16_17_18.png',
      desc: 'An e-commerce fruit selling page',
      link: '#',
      git: 'https://github.com/lancerdonnie/fruity/',
    },
    {
      name: 'Piggyvest Calculator',
      image:
        'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1593704269/screencapture-riskiestrest-htmlpasta-2020-07-02-16_37_11.png',
      desc: 'A calculator page for piggyvest interests',
      link: 'https://riskiestrest.htmlpasta.com/',
      git: 'https://github.com/lancerdonnie/PiggyVestInterestCalculator',
    },
  ];
  return (
    <div className="work">
      {projects.map((el, i) => {
        return <Project key={i} {...el} />;
      })}
    </div>
  );
};

export default Work;
