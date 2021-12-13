import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, MenuIcon, UsersIcon, XIcon } from '@heroicons/react/outline';
import DarkModeToggle from './DarkModeToggle';

const navigation = [ { name: 'Dashboard', href: '#', icon: HomeIcon, current: true }, { name: 'Team', href: '#', icon: UsersIcon, current: false }, { name: 'Projects', href: '#', icon: FolderIcon, current: false }, { name: 'Calendar', href: '#', icon: CalendarIcon, current: false }, { name: 'Documents', href: '#', icon: InboxIcon, current: false }, { name: 'Reports', href: '#', icon: ChartBarIcon, current: false } ];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Sidenav(props) {
    const [ sidenavOpen, setSidenavOpen ] = useState(false);

    return (
        <div>
            {/* Mobile sidenav */}
            <Transition.Root show={sidenavOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidenavOpen}>
                    <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                        <div className="relative flex-1 flex flex-col max-w-xs w-full dark:bg-gray-800 bg-white transition-colors duration-300">
                            <Transition.Child as={Fragment} enter="ease-in-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setSidenavOpen(false)}>
                                        <span className="sr-only">Close sidenav</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <img className="h-8 w-auto" src="/logo.png" alt="JH Logo" />
                                    <div className="flex-1 ml-4 text-bold dark:text-white text-gray-900 text-xl">Jason Halvorson</div>
                                </div>
                                <nav className="mt-5 px-2 space-y-1">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className={classNames(item.current ? 'dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-900' : 'dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover:text-white hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors duration-300')}>
                                            <item.icon className={classNames(item.current ? 'dark:text-gray-300 text-gray-500' : 'text-gray-400 dark:group-hover:text-gray-300 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6 transition-colors duration-300')} aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex-shrink-0 flex dark:bg-gray-700 bg-white border-t dark:border-gray-700 border-gray-200 p-4 transition-colors duration-300">
                                <div className="flex items-center mx-auto">
                                    <DarkModeToggle />
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14">{/* Force sidenav to shrink to fit close icon */}</div>
                </Dialog>
            </Transition.Root>

            {/* Static sidenav for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex-1 flex flex-col min-h-0 dark:bg-gray-800 bg-white border-r dark:border-gray-900 border-gray-200 transition-colors duration-300">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <img className="h-8 w-auto" src="/logo.png" alt="JH Logo" />
                            <div className="flex-1 ml-4 text-bold dark:text-white text-gray-900 text-xl">Jason Halvorson</div>
                        </div>
                        <nav className="mt-5 flex-1 px-2 space-y-1">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className={classNames(item.current ? 'dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-900' : 'dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover:text-white hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-300')}>
                                    <item.icon className={classNames(item.current ? 'dark:text-gray-300 text-gray-500' : 'text-gray-400 dark:group-hover:text-gray-300 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6 transition-colors duration-300')} aria-hidden="true" />
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex dark:bg-gray-700 bg-white border-t dark:border-gray-700 border-gray-200 p-4 transition-colors duration-300">
                        <div className="flex items-center mx-auto">
                            <DarkModeToggle />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button type="button" className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => setSidenavOpen(true)}>
                        <span className="sr-only">Open sidenav</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{props.children}</div>
                    </div>
                </main>
            </div>
        </div>
    );
}
