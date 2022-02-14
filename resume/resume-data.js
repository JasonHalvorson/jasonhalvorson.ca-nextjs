import { PhoneIcon, MailIcon, GlobeAltIcon, LocationMarkerIcon } from '@heroicons/react/outline';

export const contact = [
    {
        type: 'Phone',
        icon: PhoneIcon,
        value: '+1 (250) 575-3719',
        link: 'tel:+1 (250) 575-3719',
    },
    {
        type: 'Email',
        icon: MailIcon,
        value: 'jason@halvorson.ca',
        link: 'mailto:jason@halvorson.ca',
    },
    {
        type: 'Website',
        icon: GlobeAltIcon,
        value: 'jasonhalvorson.ca',
        link: 'https://jasonhalvorson.ca',
    },
    {
        type: 'Location',
        icon: LocationMarkerIcon,
        value: 'Kelowna, BC, Canada',
    },
];

export const workExperience = [
    {
        id: 5,
        title: 'Web Developer',
        company: 'Orthoquest Pedorthics',
        period: '2021 - 2022',
        description: "Development of a front-end landing page for Orthoquest's Kelowna Kinesiology.",
    },
    {
        id: 4,
        title: 'Wordpress Developer',
        company: 'E3 Rehab',
        period: '2020 - 2021',
        description: "Full design and development of a responsive website for E3 Rehab's blog, storefront and podcasts.",
    },
    {
        id: 3,
        title: 'Wordpress Developer',
        company: 'Samesun Hostels',
        period: '2020',
        description: "Part-time development and maintenance for Samesun's group of companies.",
    },
    {
        id: 2,
        title: 'Tutor',
        company: 'Centre for Arts and Technology',
        period: '2019 - 2020',
        description: 'Employed by the school to tutor 6 of my Web Development classmates by helping them with their projects, reviewing material, and debugging their code.',
    },
    {
        id: 1,
        title: 'Housekeeper',
        company: 'Samesun Hostels',
        period: '2016 - 2017',
        description: 'Designating rooms to clean and dividing work between multiple co-workers, coordinating in a fast-paced team environment.',
    },
];

export const skills = {
    Technical: ['Next.js/React', 'HTML/PHP', 'JavaScript/jQuery', 'CSS/SASS', 'Node.JS', 'MySQL', 'TailwindCSS', 'Wordpress', 'Adobe XD', 'Adobe Illustrator', 'Adobe Photoshop'],
    Professional: ['Effective communication', 'Team player', 'Strong problem solver', 'Quick Learner'],
};

export const projects = [
    {
        name: 'E3Rehab Website',
        description: 'An extensive Wordpress website complete with a blog for their rehabilitation posts, as well as a Shopify storefront for their digital therapy programs.',
        link: 'e3rehab.com',
        tags: ['Wordpress'],
    },
    {
        name: 'Move Well, Be Well Website',
        description: 'Falling is a project I made during my first quarter at CAT, for Professional Development class. It features a silhouette representing me, and you can scroll to learn things about me, such as my personality colour.',
        link: 'movewellbewell.ca',
        tags: ['Next.js', 'React', 'TailwindCSS'],
    },
    {
        name: 'Next.js Notes App',
        description: 'An app for writing shareable notes. It features an expiration system, and allows users to use markdown syntax in their notes. Notes are stored in a PostgreSQL database.',
        link: 'notes.jasonhalvorson.ca',
        tags: ['Next.js', 'React', 'TailwindCSS', 'PostgreSQL'],
    },
    {
        name: 'LoL Ability Guessing Game',
        description: "A game where you're given the image and hotkey of a League of Legends champion's ability, and have to guess the name of that ability. Pulls and caches data from the Riot API so it is always up to date.",
        link: 'lol-ability-guessing-game.vercel.app',
        tags: ['Next.js', 'React', 'TailwindCSS'],
    },
];

export const education = [
    {
        name: 'The Modern React Bootcamp',
        description: 'Udemy.com',
    },
    {
        name: '2022 Complete Python Bootcamp',
        description: 'Udemy.com',
    },
    {
        name: 'The Complete Node.js Developer Course',
        description: 'Udemy.com',
        period: '2020',
    },
    {
        name: 'Centre for Arts & Technology',
        description: 'Advanced Diploma',
        period: '2018-2020',
    },
    {
        name: 'Central School',
        description: 'Highschool Diploma',
        period: '2015-2018',
    },
    {
        name: 'YMCA Youth Employment',
        description: 'Program Diploma',
        period: '2018',
    },
];
