import { contact, workExperience, skills, projects, education } from '@/resume/resume-data';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';

import { GithubIcon, LinkedinIcon } from '@/utils/icons';

export default function Resume(): ReactElement {
  return (
    <div className="max-w-5xl px-3 lg:px-5 mx-auto">
      <Head>
        <title>Jason Halvorson | Resume</title>
      </Head>
      <article className="mx-auto p-5 md:p-10 my-5 dark:bg-gray-800 bg-white shadow-jhpurple transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <Image height={64} width={64} className="h-16 w-16" src="/logo.png" alt="JH Logo" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold dark:text-white text-gray-900 tracking-wide transition-colors duration-300">Jason Halvorson</h1>
              <p className="text-sm font-medium text-gray-500">Full-Stack Web Developer / Software Engineer</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 mt-5 md:mt-0">
            {contact.map((item) => (
              <a key={item.type} className={`mt-1 text-sm dark:text-gray-300 text-gray-700  transition-colors duration-300 ${item.link ? 'hover:text-jhpurple dark:hover:text-jhpurple' : ''}`} href={item.link}>
                <item.icon className="mr-1 h-6 w-6 inline" /> {item.value}
              </a>
            ))}
          </div>
        </div>
        <hr className="my-10 dark:border-gray-500 border-gray-400 transition-colors duration-300" />
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">
          {/* Work Experience */}
          <div className="col-span-full md:col-span-9">
            <h2 className="text-2xl font-bold dark:text-white text-gray-900 tracking-wide border-l-jhpurple border-l-4 pl-3 transition-colors duration-300">Work Experience</h2>
            <ul role="list">
              {workExperience.map((job) => (
                <li key={job.id} className="py-5">
                  <div className="flex space-x-3">
                    <div className="flex-1 space-y-1">
                      <div className="md:flex md:items-center md:justify-between">
                        <h3 className="font-bold dark:text-white text-gray-900 transition-colors duration-300">{job.title}</h3>
                        <p className="text-sm dark:text-gray-500 text-gray-400 transition-colors duration-300">
                          {job.company} | {job.period}
                        </p>
                      </div>
                      <p className="dark:text-gray-400 text-gray-600 transition-colors duration-300">{job.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Skills */}
          <div className="col-span-full md:col-span-3">
            <h2 className="text-2xl md:text-right font-bold dark:text-white text-gray-900 tracking-wide border-l-jhblue border-l-4 pl-3 md:border-l-0 md:border-r-jhblue md:border-r-4 md:pr-3 transition-colors duration-300">Skills</h2>
            {Object.keys(skills).map((skillType) => (
              <div key={skillType} className="grid grid-cols-1 gap-y-2 mt-3">
                <h3 className="md:text-right font-bold dark:text-white text-gray-900 transition-colors duration-300">{skillType}</h3>
                <ul role="list">
                  {skills[skillType as keyof typeof skills].map((skill: string) => (
                    <li key={skill} className="py-1">
                      <p className="text-sm md:text-right dark:text-white text-gray-900 transition-colors duration-300">{skill}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Projects */}
          <div className="col-span-full md:col-span-9">
            <h2 className="text-2xl font-bold dark:text-white text-gray-900 tracking-wide border-l-jhpurple border-l-4 pl-3 transition-colors duration-300">Projects</h2>
            <ul role="list">
              {projects.map((project) => (
                <li key={project.name} className="py-3">
                  <div className="flex space-x-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold dark:text-white text-gray-900 transition-colors duration-300">{project.name}</h3>
                        <div>
                          {project.tags.map((tag) => (
                            <span key={tag} className="inline-flex pieces-center px-3 py-0.5 rounded-full text-sm font-medium bg-jhpurple text-white mr-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a href={project.link} target="_blank" className="text-jhpurple">
                        {project.link}
                      </a>
                      <p className="dark:text-gray-400 text-gray-600 transition-colors duration-300">{project.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Education */}
          <div className="col-span-full md:col-span-3">
            <h2 className="text-2xl md:text-right font-bold dark:text-white text-gray-900 tracking-wide border-l-jhblue border-l-4 pl-3 md:border-l-0 md:border-r-jhblue md:border-r-4 md:pr-3 transition-colors duration-300">Education</h2>
            <ul role="list">
              {education.map((edu) => (
                <li key={edu.name} className="py-2">
                  <p className="font-bold md:text-right dark:text-white text-gray-900 transition-colors duration-300">{edu.name}</p>
                  <p className="text-sm md:text-right dark:text-gray-400 text-gray-600 transition-colors duration-300">{edu.description}</p>
                  {edu.period ? (
                    <p className="text-sm md:text-right dark:text-gray-400 text-gray-600 transition-colors duration-300">{edu.period}</p>
                  ) : (
                    <p className="text-left md:text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-jhpurple text-white">
                        <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-jhgreen" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                        In Progress
                      </span>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <hr className="my-5 dark:border-gray-500 border-gray-400 transition-colors duration-300" />
          <div className="flex md:flex-row flex-col justify-center md:space-x-8 space-y-4 md:space-y-0 pt-5 dark:text-white text-gray-900 transition-colors duration-300">
            <a href="https://github.com/JasonHalvorson" target="_blank" className="hover:text-jhpurple transition-colors duration-300">
              <div className="flex">
                <div className="mr-4 flex-shrink-0 self-center h-8 w-8">
                  <GithubIcon />
                </div>
                <div>
                  <p className="mt-1">github.com/JasonHalvorson</p>
                </div>
              </div>
            </a>
            <a href="https://linkedin.com/in/Jason-Halvorson" target="_blank" className="hover:text-jhpurple transition-colors duration-300">
              <div className="flex">
                <div className="mr-4 flex-shrink-0 self-center h-8 w-8">
                  <LinkedinIcon />
                </div>
                <div>
                  <p className="mt-1">linkedin.com/in/Jason-Halvorson</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
