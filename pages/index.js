import Head from 'next/head';

import { JavascriptIcon, ReactIcon, NextjsIcon, NodejsIcon, PythonIcon, CssIcon, SassIcon, HtmlIcon, PhpIcon, UbuntuIcon, CentosIcon, GithubIcon } from '../utils/icons';

const technologies = [
    {
        name: 'JavaScript, React, Next.js, Node.js',
        icons: [JavascriptIcon, ReactIcon, NextjsIcon, NodejsIcon],
        description: 'Knowledgeable in JavaScript and JavaScript frameworks/libraries such as React, Next.js, and Node.js.',
    },
    {
        name: 'Python',
        icons: [PythonIcon],
        description: 'Basic understanding of the Python language. Currently learning more via experimentation and online courses!',
    },
    {
        name: 'HTML, CSS, Sass',
        icons: [HtmlIcon, CssIcon, SassIcon],
        description: 'In-depth knowledge for creating beautiful, responsive websites with HTML, CSS and SASS.',
    },
    {
        name: 'PHP',
        icons: [PhpIcon],
        description: 'Over three years of experience with creating functional back-end websites with PHP.',
    },
    {
        name: 'Ubuntu, Centos',
        icons: [UbuntuIcon, CentosIcon],
        description: 'Proficient understanding of how to navigate and work within the Linux CLI.',
    },
    {
        name: 'GitHub',
        icons: [GithubIcon],
        description: 'Understanding of the GitHub platform and how to utilize Git to manage version control.',
    },
];

/*  <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{props.children}</div>
    </div> This is what was in sidenav.js surrounding {props.children} */

export default function Home() {
    return (
        <div className="dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
            <Head>
                <title>Jason Halvorson | Home</title>
            </Head>

            {/* TODO: Deal with sizing on larger monitors */}
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="relative dark:bg-gray-800 bg-white py-20 transition-colors duration-300">
                        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                            <p className="mb-2 text-3xl font-extrabold dark:text-white text-gray-900 tracking-tight sm:text-5xl transition-colors duration-300">Jason Halvorson</p>
                            <h2 className="text-base font-semibold tracking-wider text-jhpurple uppercase">Full-Stack Web Developer / Software Engineer</h2>
                            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">I'm a full-stack web developer and aspiring software engineer with a focus on functionality and UI/UX design. Want to know how I may help your project? Check out my project portfolio and online resume.</p>
                            <div className="mt-12">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {technologies.map(({ name, icons, description }) => (
                                        <div key={name} className="pt-6">
                                            <div className="flow-root dark:bg-gray-900 bg-gray-50 rounded-lg px-6 pb-8 shadow-lg hover:shadow-jhblue transition duration-300">
                                                <div className="-mt-6">
                                                    <div>
                                                        {icons.map((IconName) => (
                                                            <span key={IconName} className="inline-flex items-center justify-center p-3 mx-2 bg-jhblue rounded-md shadow-lg mb-5">
                                                                <div className="h-7 w-7 text-white" aria-hidden="true">
                                                                    <IconName />
                                                                </div>
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <h3 className="mt-4 text-lg font-medium dark:text-white text-gray-900 tracking-tight transition-colors duration-300">{name}</h3>
                                                    <p className="mt-5 text-base dark:text-gray-400 text-gray-500 transition-colors duration-300">{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
