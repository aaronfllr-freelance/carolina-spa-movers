import { PropsWithChildren } from 'react';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Section, SectionBackground, SectionContent, SectionOverlay } from '@/components/Section';
export default function DefaultLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar enableScroll/>
            <Section className='min-h-screen'>
                <SectionBackground color='gray' />
                <SectionContent className='pt-28 flex-col items-center justify-center text-black'>
                    {children}
                </SectionContent>
            </Section>
            <Footer />
        </>
    );
}
