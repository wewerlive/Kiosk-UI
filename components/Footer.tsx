import type { NextComponentType, NextPageContext } from 'next';
import WidthWrapper from './WidthWrapper';
import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

interface Props {}

const Footer: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <WidthWrapper>
      <footer className='py-10 flex flex-col justify-center items-center gap-y-8 text-center'>
        <div className='space-x-6 sm:space-x-14'>
          {footerLinks.map(({ name, href }, i) => (
            <Link
              key={i}
              href={href}
              className='text-gray-400 text-sm hover:text-gray-500'
            >
              {name}
            </Link>
          ))}
        </div>
        <div className='space-x-12 flex'>
          {icons.map(({ icon, href }, i) => (
            <Link
              key={i}
              href={href}
              target='_blank'
              className='text-gray-600 text-sm hover:text-gray-500'
            >
              {icon}
            </Link>
          ))}
        </div>

        <p className='text-gray-400 text-sm'>
          © 2023 ArBuilder. All rights reserved.
        </p>
      </footer>
    </WidthWrapper>
  );
};

export default Footer;

const footerLinks: Links[] = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Press',
    href: '/press',
  },
  {
    name: 'Accessibility',
    href: '/accessibility',
  },
  {
    name: 'Partners',
    href: '/partners',
  },
];

const icons: Links[] = [
  {
    icon: <Facebook className='h-6 w-6 drop-shadow-2xl' />,
    href: 'https://facebook.com',
  },
  {
    icon: <Instagram className='h-6 w-6 drop-shadow-2xl' />,
    href: 'https://instagram.com',
  },
  {
    icon: <Twitter className='h-6 w-6 drop-shadow-2xl' />,
    href: 'https://x.com',
  },

  {
    icon: <Github className='h-6 w-6 drop-shadow-2xl' />,
    href: 'https://github.com',
  },
  {
    icon: <Youtube className='h-6 w-6 drop-shadow-2xl' />,
    href: 'https://youtube.com',
  },
];
