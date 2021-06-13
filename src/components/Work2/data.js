const data = [
  {
    name: 'Xfund',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622099248/portfolio/xfund.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622099248/portfolio/xfund3.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622099248/portfolio/xfund2.png',
    ],
    desc: 'An Enterprise Pension and Asset Management Solution',
    link: 'https://xfund.vercel.app',
    git: '',
    tech: [
      'React',
      'Typescript',
      'Redux',
      'Cypress',
      'Sass',
      'SignalR',
      'PWA',
      'Ag-Grid',
      'Telerik',
    ],
    test: ['jide', '111111'],
  },
  {
    name: 'Donflix',
    images: [
      // 'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1600768987/portfolio/donflix.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623611207/portfolio/donflix2.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623611209/portfolio/donflix3.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623611207/portfolio/donflix5.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623611207/portfolio/donflix4.png',
    ],
    desc: 'A movie explorer',
    link: 'https://donflix.netlify.app/',
    git: 'https://github.com/lancerdonnie/donflix',
    tech: ['VueJs 3', 'Vuex', 'Sass', 'Typescript'],
  },
  {
    name: 'Blanche Neige',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623611474/portfolio/blanche2.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079144/portfolio/Blanche.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623611475/portfolio/blanche3.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623611474/portfolio/blanche4.png',
    ],
    desc: 'An e-commerce website where you buy stuff and checkout',
    link: 'https://blancheneige.netlify.com/',
    git: 'https://github.com/lancerdonnie/blanche-neige',
    tech: ['Firebase', 'React', 'Redux'],
  },

  {
    name: 'Incident Management System',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/ims3.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889258/portfolio/ims2.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/ims.png',
    ],
    desc: 'An incident management system used for clients to create issues or new requests. Enriched with customisable email notifications, priorities and many other features.',
    link: 'https://itap-ims.herokuapp.com/',
    git: 'https://github.com/lancerdonnie/incident-management-system',
    tech: ['React', 'Redux', '.Net Core', 'Ef Core', 'Sql Server', 'Docker'],
    test: ['11@gmail.com', 'jide'],
  },
  {
    name: 'Quiz',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/quiz.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889260/portfolio/quiz2.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889260/portfolio/quiz4.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/quiz5.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889260/portfolio/quiz3.png',
    ],
    desc: 'A simple quiz app',
    link: 'https://quizbylancer.netlify.app/',
    git: 'https://github.com/lancerdonnie/quiz',
    tech: ['React', 'Redux', 'Sass', 'Typescript', 'Tailwind', 'React-Spring'],
  },
  {
    name: 'Github',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/github.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/github2.png',
    ],
    desc: 'My github repository page clone',
    link: 'https://githubclone234.netlify.app/',
    git: 'https://github.com/lancerdonnie/GithubClone',
    tech: ['GraphQL', 'Html', 'CSS', 'Javascript'],
  },
  {
    name: 'ClapCoin',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623572128/portfolio/clap4.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623572128/portfolio/clap5.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623572128/portfolio/clap6.png',
      // 'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889258/portfolio/clap2.png',
      // 'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889258/portfolio/clap3.png',
      // 'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889258/portfolio/clap.png',
    ],
    desc: 'An Open Source Digital Currency',
    link: 'https://clapcoin.vercel.app/2',
    git: 'https://github.com/lancerdonnie/clapcoin-frontend',
    tech: ['React', 'NextJs', 'Tailwind'],
  },
  {
    name: 'Expense',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/expense.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889258/portfolio/expense2.png',
    ],
    desc: "A fullstack microservice application for viewing users' financial summary and recurring expensetrends",
    link: 'https://expensetrends.herokuapp.com/',
    git: 'https://github.com/lancerdonnie/ExpenseTrends',
    tech: [
      'React',
      'NextJS',
      'Typescript',
      'Tailwind (JIT)',
      'NodeJS',
      'MySql',
    ],
  },
  {
    name: 'Star Wars',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623610692/portfolio/starwars1.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1623610694/portfolio/starwars2.png',
    ],
    desc: 'An app that lists the names of Star Wars movies in a dropdown along with a list of the characters that appear in that movie.',
    link: 'https://star-wars-sage.vercel.app/',
    git: 'https://github.com/lancerdonnie/StarWars',
    tech: ['React', 'Framer Motion', 'Next', 'Tailwind', 'Zustand'],
  },
  {
    name: 'Url Shortener',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889257/portfolio/urlshort1.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889257/portfolio/urlshort.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889257/portfolio/urlshort2.png',
    ],
    desc: 'A Url shortener with a graphql playground',
    link: 'https://urlu.herokuapp.com/graphiql',
    git: 'https://github.com/lancerdonnie/UrlShortener',
    tech: ['NodeJS', 'Express', 'Typescript', 'TypeORM', 'Apollo', 'MySql'],
  },
  {
    name: 'Events Access',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079140/portfolio/events.png',
    ],
    desc: 'An Event entry managing system',
    link: 'https://events-access.herokuapp.com/',
    git: 'https://github.com/lancerdonnie/events-access',
    tech: ['Materialize CSS', 'NodeJS', 'MongoDB', 'React'],
  },
  {
    name: 'Book Finder',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079141/portfolio/book.png',
    ],
    desc: 'A search page for google books',
    link: 'https://book-finder-by-lancer.netlify.com/',
    git: 'https://github.com/lancerdonnie/Book-Finder',
    tech: ['React'],
  },
  {
    name: 'Open Sky',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/opensky2.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/opensky.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889259/portfolio/opensky3.png',
    ],
    desc: 'Shows flight information of major cities with heavy air traffic',
    link: 'https://myopenair.netlify.app/',
    git: 'https://github.com/lancerdonnie/opensky',
    tech: ['Material UI', 'React', 'Typescript'],
  },
  {
    name: 'Caption Cards',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1582734471/caption%20cards/caption.png',
    ],
    desc: 'A web application that allows people to add captions and an option to label the captions with tags',
    link: 'https://captioncardsbylancer.netlify.com/',
    git: 'https://github.com/lancerdonnie/caption-cards',
    tech: ['React', 'Redux', 'Styled Components'],
  },
  {
    name: 'Barber shop',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1593702386/screencapture-barbershophng-netlify-app-2020-07-02-16_05_07.png',
    ],
    desc: 'Starter barbershop page',
    link: 'https://barbershophng.netlify.app/',
    git: 'https://github.com/lancerdonnie/Barber-shop_Team-c_envarto_JL/tree/upload',
    tech: ['html', 'CSS'],
  },
  {
    name: 'Hacker News',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079142/portfolio/hacker.png',
    ],
    desc: 'Searches Angolia Hacker News api for news',
    link: 'https://hacker-news-by-lancer.netlify.com/',
    git: 'https://github.com/lancerdonnie/Hacker-News_App',
    tech: ['React', 'Bootstrap'],
  },
  {
    name: 'Wejapa Blog',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1600768895/portfolio/wejapa.png',
    ],
    desc: 'A Php blog with image upload and auth',
    link: 'https://wejapablog.herokuapp.com/',
    git: 'https://github.com/lancerdonnie/wejapa-backend-php-wk-8',
    tech: ['Php', 'Tailwind', 'MySql', 'Javascript'],
  },
  {
    name: 'Bet Code Converter',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079140/portfolio/bconvert.png',
    ],
    desc: 'A website for converting Nigerian bet codes',
    link: 'https://windiestbed.htmlpasta.com/',
    git: 'https://github.com/lancerdonnie/Bet-Code-Converter',
    tech: ['Puppeteer', 'Google Cloud Functions', 'Javascript'],
  },
  {
    name: 'Chat Pal',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581668520/portfolio/chat.png',
    ],
    desc: 'A chat app where users can create rooms, join rooms to chat and chat with all users',
    link: 'https://lancers-chat-pal.herokuapp.com',
    git: 'https://github.com/lancerdonnie/chat-pal',
    tech: ['Socket IO', 'Express', 'NodeJS'],
  },
  {
    name: 'Club',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889258/portfolio/club2.png',
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1622889258/portfolio/club.png',
    ],
    desc: 'A FullStack Application for Managing Club Members',
    link: 'https://clubboyage.herokuapp.com/',
    git: 'https://github.com/lancerdonnie/ClubManagement',
    tech: [
      'React',
      'NodeJS',
      'TypeORM',
      'PostGres',
      'Redux',
      'Typescript',
      'Tailwind',
    ],
  },
  {
    name: 'Fruity',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1593703197/screencapture-localhost-50128-2020-07-02-16_17_18.png',
    ],
    desc: 'A mobile app that shows information about fruits',
    link: '#',
    git: 'https://github.com/lancerdonnie/fruity/',
    tech: ['Flutter', 'rxdart', 'provider'],
  },
  {
    name: 'Piggyvest Calculator',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1593704269/screencapture-riskiestrest-htmlpasta-2020-07-02-16_37_11.png',
    ],
    desc: 'A calculator page for piggyvest interests',
    link: 'https://riskiestrest.htmlpasta.com/',
    git: 'https://github.com/lancerdonnie/PiggyVestInterestCalculator',
    tech: ['Html', 'CSS', 'Javascript'],
  },

  {
    name: 'Exercise Tracker',
    images: [
      'https://res.cloudinary.com/dtyrfo0fx/image/upload/q_auto/v1581079140/portfolio/exercise.png',
    ],
    desc: 'Track the duration of exercises',
    link: 'https://exercise-tracker-by-lancer.herokuapp.com/',
    git: 'https://github.com/lancerdonnie/Hacker-News_App',
    tech: ['MongoDB', 'NodeJS', 'React'],
  },
];

export default data;
