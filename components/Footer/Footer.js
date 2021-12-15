import { GithubIcon, LinkedinIcon } from '../../utils/icons';

const navigation = [
    {
        name : 'GitHub',
        href : 'https://github.com/JasonHalvorson/jasonhalvorson.ca-nextjs',
        icon : (props) => <GithubIcon {...props} />
    },
    {
        name : 'LinkedIn',
        href : 'https://www.linkedin.com/in/jason-halvorson/',
        icon : (props) => <LinkedinIcon {...props} />
    }
];

// Get current year for copyright
const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="dark:bg-gray-800 bg-white border-t dark:border-gray-800 border-gray-200 transition-colors duration-300 fixed bottom-0 w-full z-auto">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="dark:text-gray-400 text-gray-500 hover:dark:text-jhpurple hover:text-jhpurple transition-colors duration-300 h-6 w-6">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-base dark:text-gray-400 text-gray-500 transition-colors duration-300">&copy; Jason Halvorson {currentYear}</p>
                </div>
            </div>
        </footer>
    );
}
