import type { NextComponentType, NextPageContext } from 'next';
import WidthWrapper from './WidthWrapper';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';

interface Props {}

const Navbar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <nav className='sticky inset-x-0 h-14 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <WidthWrapper>
        <div className='flex h-14 items-center border-b justify-between border-zinc-200 px-4'>
          <Link
            href='/'
            className='flex z-10 font-semibold'
          >
            <span>Twin Try-On</span>
          </Link>

          <div className='hidden items-center space-x-4 sm:flex'>
            <>
              <Link
                href='#pricing'
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                Pricing
              </Link>

              <LoginLink className={buttonVariants({ size: 'sm' })}>
                Get Started
              </LoginLink>
            </>
          </div>
        </div>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
