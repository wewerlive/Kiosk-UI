import BackdropGradient from '@/components/BackdropGradient';
import WidthWrapper from '@/components/WidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Pricing from '@/components/Pricing-card';

export default function Home() {
  return (
    <>
      {/* hero */}
      <WidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center px-4'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            ArBuilder is now public!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Build your own{' '}
          <span className='text-blue-500 decoration-orange-500 underline'>
            experience
          </span>{' '}
          now.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 text-sm sm:text-lg'>
          ArBuilder is a tool that allows you to create your own AR experience.
          It is a no-code tool simplifying the process of creation.
        </p>
        <Link
          href='/dashboard'
          target='_blank'
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
        >
          Get Started <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </WidthWrapper>

      {/* preview */}
      <div className='relative isolate'>
        <BackdropGradient />
        <div>
          <div className='mx-auto max-w-6xl px-8'>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <Image
                  alt='product preview'
                  src='/dashboard-pre.png'
                  width={1366}
                  height={866}
                  className='rounded-xl bg-white p-1 shadow-xl ring-1 ring-gray-900/10'
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
        <BackdropGradient />
      </div>

      {/* features */}
      <div className='mx-auto mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Start building in seconds
            </h2>
            <p className='mt-4 text-xl pr-4 sm:pr-0 text-gray-600'>
              ArBuilder is a tool that allows you to create your own AR
              experience. It is a no-code tool simplifying the process of
              creation.
            </p>
          </div>
        </div>
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col border-l-4 space-y-2 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm text-blue-600 font-medium'>Step 1.</span>
              <span className='text-xl font-semibold'>Create an account</span>
              <span className='mt-2 text-zinc-700 pr-4 sm:pr-0'>
                Start out by basic plan or for more upgrade to a{' '}
                <Link
                  href='/pricing'
                  className='text-blue-600 underline underline-offset-2'
                >
                  premium plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col border-l-4 space-y-2 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm text-blue-600 font-medium'>Step 2.</span>
              <span className='text-xl font-semibold'>Connect your kiosk</span>
              <span className='mt-2 text-zinc-700 pr-4 sm:pr-0'>
                Pair your device with your account and upload your assets.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col border-l-4 space-y-2 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm text-blue-600 font-medium'>Step 3.</span>
              <span className='text-xl font-semibold'>Start building</span>
              <span className='mt-2 text-zinc-700 pr-4 sm:pr-0'>
                Create your own AR experience and share it with the world.
              </span>
            </div>
          </li>
        </ol>
        <div>
          <div className='mx-auto px-6 lg:px-8'>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='max-w-[1140px] lg:pb-32 relative'>
                <figure className='hidden absolute bottom-20 rotate-90 -left-20 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block'>
                  <div className='p-1.5 bg-gray-200 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]'>
                    <Image
                      width={1419}
                      height={732}
                      quality={100}
                      className='max-w-full h-auto rounded-[1.25rem]'
                      src='/file-preview.png'
                      alt='Image Description'
                    />
                  </div>
                </figure>

                <figure className='ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]'>
                  <div className='relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='flex space-x-1 absolute top-2/4 left-4 -translate-y-1'>
                      <span className='w-2 h-2 bg-red-200 rounded-full dark:bg-gray-700'></span>
                      <span className='w-2 h-2 bg-yellow-200 rounded-full dark:bg-gray-700'></span>
                      <span className='w-2 h-2 bg-green-200 rounded-full dark:bg-gray-700'></span>
                    </div>
                    <div className='flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200'>
                      www.arbuilder.com
                    </div>
                  </div>

                  <div className='bg-gray-800 rounded-b-lg'>
                    <Image
                      width={1419}
                      height={732}
                      quality={100}
                      className='max-w-full h-auto rounded-b-lg'
                      src='/dashboard-pre.png'
                      alt='Image Description'
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pricing */}
      <WidthWrapper className='mb-8 mt-16 text-center max-w-5xl'>
        <div
          id='pricing'
          className='mx-auto mb-10 sm:max-w-lg'
        >
          <h1 className='text-6xl font-bold sm:text-7xl'>Pricing</h1>
          <p className='mt-5 text-gray-600 text-sm sm:text-lg'>
            Whether you&apos;re a small business or a large enterprise, we have
            the perfect plan for you.
          </p>
        </div>
        <div className='pt-12 grid grid-cols-1 px-4 sm:px-0 gap-10 lg:grid-cols-2'>
          <Pricing />
        </div>
      </WidthWrapper>

      {/* stats */}
      <div className='py-10 sm:py-20'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className='mx-auto flex max-w-xs flex-col gap-y-4'
              >
                <dt className='text-base leading-7 text-gray-600'>
                  {stat.name}
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* testimonials */}
      <section className='relative isolate overflow-hidden px-6 py-16 sm:py-30 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <h2 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl'>
            What our customers are saying
          </h2>
          <figure className='mt-10'>
            <blockquote className='text-center text-xl font-medium leading-8 text-gray-900 sm:text-2xl sm:leading-9'>
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              <Image
                className='mx-auto rounded-full'
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
                width={40}
                height={40}
              />
              <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
                <div className='font-semibold text-gray-900'>Poti Black</div>
                <svg
                  viewBox='0 0 2 2'
                  width={3}
                  height={3}
                  aria-hidden='true'
                  className='fill-gray-900'
                >
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                  />
                </svg>
                <div className='text-gray-600'>CEO of Twinverse</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* companies */}
      <WidthWrapper>
        <div className='py-16'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
              Trusted by the world&apos;s most innovative teams
            </h2>
            <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 justify-center'>
              <Image
                className='col-span-2 max-h-12 object-contain lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'
                alt='Transistor'
                width={158}
                height={48}
              />
              <Image
                className='col-span-2 max-h-12 object-contain lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg'
                alt='Reform'
                width={158}
                height={48}
              />
              <Image
                className='col-span-2 max-h-12 object-contain lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
                alt='Tuple'
                width={158}
                height={48}
              />
              <Image
                className='col-span-2 max-h-12 object-contain sm:col-start-2 lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg'
                alt='SavvyCal'
                width={158}
                height={48}
              />
              <Image
                className='col-span-2 col-start-2 max-h-12 object-contain sm:col-start-auto lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg'
                alt='Statamic'
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </WidthWrapper>
    </>
  );
}

const stats: Stats[] = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
];
