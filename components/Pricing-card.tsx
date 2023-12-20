import type { NextComponentType, NextPageContext } from 'next';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { cn } from '@/lib/utils';
import { Check, HelpCircle, Minus } from 'lucide-react';

interface Props {}

const Pricing: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <TooltipProvider>
      {pricingItems.map(({ plan, tagline, quota, features, price }) => (
        <div
          key={plan}
          className={cn('relative rounded-2xl bg-white shadow-lg', {
            'border-2 border-blue-600 shadow-blue-200': plan === 'Pro',
            'border border-gray-200': plan === 'Free',
          })}
        >
          {plan === 'Pro' && (
            <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-orange-400 to-blue-500 px-3 py-2 text-sm font-medium text-white'>
              Upgrade to Pro
            </div>
          )}

          <div className='p-5'>
            <h3 className='my-3 text-center font-display text-3xl font-bold'>
              {plan}
            </h3>
            <p className='text-gray-500'>{tagline}</p>
            <p className='font-display my-5 text-6xl font-semibold'>
              ${plan === 'Free' ? price : price}
            </p>
            <p className='text-gray-500'>per month</p>
          </div>
          <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
            <div className='flex items-center space-x-1'>
              <p> {quota.toLocaleString()} designs/month included</p>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className='cursor-default ml-1.5'>
                  <HelpCircle className='h-4 w-4 text-zinc-500' />
                </TooltipTrigger>
                <TooltipContent className='w-80 p-2'>
                  The amount of designs you can create per month.
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <ul className='my-10 space-y-5 px-8'>
            {features.map(({ text, footnote, negative }) => (
              <li
                key={text}
                className='flex space-x-5'
              >
                <div className='flex-shrink-0'>
                  {negative ? (
                    <Minus className='h-6 w-6 text-gray-300' />
                  ) : (
                    <Check className='h-6 w-6 text-blue-500' />
                  )}
                </div>
                {footnote ? (
                  <div className='flex items-center space-x-1'>
                    <p
                      className={cn('text-gray-600', {
                        'text-gray-400': negative,
                      })}
                    >
                      {text}
                    </p>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger className='cursor-default ml-1.5'>
                        <HelpCircle className='h-4 w-4 text-zinc-500' />
                      </TooltipTrigger>
                      <TooltipContent className='w-80 p-2'>
                        {footnote}
                      </TooltipContent>
                    </Tooltip>
                  </div>
                ) : (
                  <p
                    className={cn('text-gray-600', {
                      'text-gray-400': negative,
                    })}
                  >
                    {text}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </TooltipProvider>
  );
};

export default Pricing;

const pricingItems: Pricing[] = [
  {
    plan: 'Free',
    tagline: 'For small business/local shops.',
    quota: 10,
    price: 0,
    features: [
      {
        text: '5 assets per design',
        footnote: 'The maximum amount of assets per design.',
      },
      {
        text: '2MB file size limit',
        footnote: 'The maximum file size of a single texture file.',
      },
      {
        text: 'Mobile-friendly interface',
      },
      {
        text: 'Higher-quality responses',
        footnote: 'Better algorithmic responses for enhanced content quality',
        negative: true,
      },
      {
        text: 'Priority support',
        negative: true,
      },
    ],
  },
  {
    plan: 'Pro',
    tagline: 'For larger enterprises/showrooms.',
    quota: 50,
    price: 29.89,
    features: [
      {
        text: '15 assets per design',
        footnote: 'The maximum amount of assets per design.',
      },
      {
        text: '10MB file size limit',
        footnote: 'The maximum file size of a single texture file.',
      },
      {
        text: 'Mobile-friendly interface',
      },
      {
        text: 'Higher-quality responses',
        footnote: 'Better algorithmic responses for enhanced content quality',
      },
      {
        text: 'Priority support',
      },
    ],
  },
];
