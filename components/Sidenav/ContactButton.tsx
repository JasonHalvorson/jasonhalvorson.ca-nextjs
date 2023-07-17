import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { ReactElement } from 'react';

export default function ContactButton(): ReactElement {
  return (
    <div className="w-full text-center">
      <a href="mailto:jason@halvorson.ca" type="button" className="inline-flex items-center px-4 py-2 mt-5 shadow-sm text-base font-medium rounded-md text-white bg-jhpurple hover:bg-jhblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jhpurple transition-colors duration-300">
        <EnvelopeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Get in Touch
      </a>
    </div>
  );
}
