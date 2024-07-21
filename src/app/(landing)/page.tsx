import Image from 'next/image';

import { Button } from '@/components/Button';
import { Section, SectionBackground, SectionContent } from '@/components/Section';

export default function Home() {
    return (
    <>
      <Section className='min-h-screen'>
        <SectionBackground color='gray' />
        <SectionContent className='pt-28 flex-col items-center justify-center text-black'>
          <div className='flex p-4 flex-col md:flex-row '>
            <Image
              src='/images/one.jpg'
              alt='Stock photo one'
              width='400'
              height='400'
            />
            <div className='p-4'>
              <h1 className='text-2xl font-bold'>Lorem ipsum dolor</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button href='/one'>One</Button>
            </div>
          </div>
          <div className='flex p-4 flex-col md:flex-row'>
            <div className='p-4'>
              <h1 className='text-2xl font-bold'>Lorem ipsum dolor</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button href='/two'>two</Button>
            </div>
            <Image
              src='/images/two.jpg'
              alt='Stock photo two'
              width='400'
              height='400'
            />
          </div>
        </SectionContent>
      </Section>
    </>
    );
}
