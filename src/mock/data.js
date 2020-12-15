import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nurbek Dildabekov',
  subtitle: 'CEO Positive Tech, Team lead, Full stack dev',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://hh.kz/resume/61aebf58ff0573a7520039ed1f595670454953', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Team Lead',
    info: 'Development of programs for internal use',
    info2: 'Web-based football pricing application',
    url: 'https://www.caerusrisk.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Developer',
    info: 'Expansion of the list of technologies',
    info2: '',
    url: 'https://www.wappalyzer.com/',
    repo: 'https://github.com/AliasIO/wappalyzer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Trader at Olimbet Bookmaker',
    info: 'Prepare trading models for in-play events and accurate entry of pricing variables\
    \
    Accurate manipulation of trading models and monitoring of market conditions to aid pricing for in-play events',
    info2: '  Accurate entry of in-play match data for in-play events\
    \
    Accurate entry of settlement criteria',
    url: 'https://olimpbet.kz/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'PHP backend developer',
    info: 'Developing special class by PHP programming language,using native library.',
    info2: 'Additional using ASANA ,GITLAB, SLACK in working procces',
    url: 'https://skugrid.com/web/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nurbek.dildabekov@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nurbek-dildabek-b0069a79/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nurbek91',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
