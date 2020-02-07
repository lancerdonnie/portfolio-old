import React from 'react';
import './Work.scss';
import Project from './Project';
import blanche from '../assets/Blanche.PNG';
import bconvert from '../assets/bconvert.PNG';
import book from '../assets/book.PNG';
import events from '../assets/events.PNG';
import exercise from '../assets/exercise.PNG';
import hacker from '../assets/hacker.PNG';

const Work = () => {
  const projects = [
    {
      name: 'Blanche Neige',
      image: blanche,
      desc: 'An e-commerce website where you buy stuff and checkout',
      link: 'https://blancheneige.netlify.com/',
      git: 'https://github.com/lancerdonnie/blanche-neige'
    },
    {
      name: 'Book Finder',
      image: book,
      desc: 'A search page for google books',
      link: 'https://book-finder-by-lancer.netlify.com/',
      git: 'https://github.com/lancerdonnie/Book-Finder'
    },
    {
      name: 'Events Access',
      image: events,
      desc: 'An Event entry managing system',
      link: 'https://events-access.herokuapp.com/',
      git: 'https://github.com/lancerdonnie/events-access'
    },
    {
      name: 'Exercise Tracker',
      image: exercise,
      desc: 'Track the duration of exercises',
      link: 'https://exercise-tracker-by-lancer.herokuapp.com/',
      git: 'https://github.com/lancerdonnie/Hacker-News_App'
    },
    {
      name: 'Bet Code Converter',
      image: bconvert,
      desc: 'A website for converting Nigerian bet codes',
      link: 'https://windiestbed.htmlpasta.com/',
      git: 'https://github.com/lancerdonnie/Bet-Code-Converter'
    },
    {
      name: 'Hacker News',
      image: hacker,
      desc: 'Searches Angolia Hacker News api for news',
      link: 'https://hacker-news-by-lancer.netlify.com/',
      git: 'https://github.com/lancerdonnie/Hacker-News_App'
    }
  ];
  return (
    <div className='work'>
      {projects.map((el, i) => {
        return <Project key={i} {...el} />;
      })}
    </div>
  );
};

export default Work;
