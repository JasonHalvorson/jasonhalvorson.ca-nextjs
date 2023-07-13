import { HomeIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import Link from 'next/link';

function getSlug() {
  const router = useRouter();
  // seperate by /
  const splitArray = router.asPath.split('/');
  // cut empty strings out of the array
  const filteredArray = splitArray.filter((item) => item !== '');

  // create objects inside slugs array
  // slugs example:
  // [
  //     { fullSlug: '/portfolio/item-1', slug: 'item-1' },
  //     { fullSlug: '/portfolio/item-2', slug: 'item-2' }
  // ]
  const slugs = filteredArray.map((item, index) => {
    const fullSlug = `/${filteredArray.slice(0, index + 1).join('/')}`;
    return {
      fullSlug,
      slug: item,
    };
  });

  return slugs;
}

export default function Breadcrumbs() {
  return (
    <nav className="dark:bg-gray-800 bg-white border-b dark:border-gray-700 border-gray-200 flex transition-colors duration-300" aria-label="Breadcrumb">
      <ol role="list" className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
        <li className="flex">
          <div className="flex items-center">
            <Link href="/" className="text-gray-400 hover:text-jhpurple transition-colors duration-300">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {getSlug().map((slugObject) => (
          <li key={slugObject.fullSlug} className="flex">
            <div className="flex items-center">
              <svg className="flex-shrink-0 w-6 h-full dark:text-gray-700 text-gray-200 transition-colors duration-300" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link href={`${slugObject.fullSlug}`} className="ml-4 text-sm font-medium dark:text-gray-400 text-gray-500 hover:text-jhpurple dark:hover:text-jhpurple transition-colors duration-300 capitalize">
                {slugObject.slug}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
