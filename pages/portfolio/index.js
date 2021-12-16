import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { portfolioItems } from '../../lib/portfolio';

export default function Portfolio() {
    return (
        <div className="dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
            <Head>
                <title>Jason Halvorson | Portfolio</title>
            </Head>

            <Breadcrumbs />
            <div className="relative max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="mt-1 text-4xl font-extrabold dark:text-white text-gray-900 sm:text-5xl transition-colors duration-300">My Portfolio</p>
                    </div>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {portfolioItems.map((item) => (
                        <div key={item.slug} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={item.image} alt="" />
                            </div>
                            <div className="flex-1 dark:bg-gray-800 bg-white p-6 flex flex-col justify-between transition-colors duration-300">
                                <div className="flex-1 items-center">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-jhpurple text-white mr-1">
                                            {tag}
                                        </span>
                                    ))}
                                    {/* TODO: make portfolio  */}
                                    <a href={`/portfolio/${item.slug}`} className="block mt-2">
                                        <p className="text-xl font-semibold dark:text-white text-gray-900 transition-colors duration-300">{item.title}</p>
                                        <p className="mt-3 text-base dark:text-gray-400 text-gray-500 transition-colors duration-300">{item.description}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
