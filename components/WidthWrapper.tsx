//@ts-nocheck

import type { NextComponentType, NextPageContext } from 'next';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const WidthWrapper: NextComponentType<NextPageContext, {}, Props> = ({
  children,
  className,
}: Props) => {
  return (
    <div className={cn('mx-auto w-full px-2.5 md:px-20', className)}>
      {children}
    </div>
  );
};

export default WidthWrapper;
