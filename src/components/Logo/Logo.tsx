import Image from 'next/image';
import { CSSProperties, FC } from 'react';
import icon from '/public/assets/icon.svg';
import { cn } from '@/lib/utils';

export interface LogoProps {
    className?: string;
    style?: CSSProperties;
}

export const Logo: FC<LogoProps> = ({ className, style }) => (
    <Image
        src={icon}
        width='200'
        height='100'
        priority
        alt='Logo'
        className={cn`logo w-auto h-12 ${className}`}
        style={style}
    />
);
