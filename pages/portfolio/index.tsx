import Head from 'next/head';
import Image from 'next/image';
// import Link from 'next/link';

import { getSortedPiecesData } from '@/lib/portfolio';
import { ReactElement } from 'react';
import { PortfolioPiece } from '@/types';
// import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

export async function getStaticProps() {
  const projects = getSortedPiecesData();

  return {
    props: {
      projects,
    },
  };
}

interface PortfolioProps {
  projects: PortfolioPiece[];
}

export default function Portfolio({ projects }: PortfolioProps): ReactElement {
  return (
    <div>
      <Head>
        <title>Jason Halvorson | Portfolio</title>
      </Head>

      {/* UNCOMMENT WHEN CHANGING TO PAGES */}
      {/* <Breadcrumbs /> */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold dark:text-white text-gray-900 sm:text-5xl transition-colors duration-300">My Portfolio</p>
          </div>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-none">
          {projects.map((project) => (
            <div key={project.position} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                {/* TODO: Add loading blur */}
                <Image className="h-48 w-full object-cover" src={`/img/portfolio/${project.image}`} alt={`${project.title} preview image`} width={400} height={200} priority />
              </div>
              <div className="flex-1 dark:bg-gray-800 bg-white p-6 flex flex-col justify-between transition-colors duration-300">
                <div className="flex-1 pieces-center">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex pieces-center px-3 py-0.5 rounded-full text-sm font-medium bg-jhpurple text-white mr-1">
                      {tag}
                    </span>
                  ))}
                  {/* <Link href={`/portfolio/${piece.slug}`}> Remove <a> href to use */}
                  <a className="block mt-2" href={project.link} target="_blank">
                    <p className="text-xl font-semibold dark:text-white text-gray-900 transition-colors duration-300">{project.title}</p>
                    <p className="mt-3 text-base dark:text-gray-400 text-gray-500 transition-colors duration-300">{project.description}</p>
                  </a>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
