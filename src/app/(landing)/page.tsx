import Image from 'next/image';

import { Button } from '@/components/Button';
import { Section, SectionBackground, SectionContent } from '@/components/Section';

export default function Home() {
    return (
    <>
      <Section className='min-h-screen'>
        <SectionBackground color='grey' />
        <SectionContent className='pt-48 flex-col items-center justify-center text-black'>
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-primary-50">
                  Hot Tub & Spa Relocation to Installation
                </h2>
                <p className="mb-8 font-normal text-gray-300 sm:text-xl dark:text-primary-300">
                  Ready to move your hot tub without the hassle? 
                  Our expert team makes hot tub relocation easy and stress-free. 
                  Contact us today for a free quote and let us handle the heavy lifting! Call now or book online!
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <a href="/contact" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-primary-50 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                    </a>
                </div>
            </div>
          </div>
          <div className='flex p-4 max-w-7xl mx-auto justify-center flex-col md:flex-row '>
            <Image
              src='/images/one.jpg'
              alt='Stock photo one'
              width='400'
              height='400'
            />
            <div className='p-4'>
              <h1 className='text-2xl mb-6 text-primary-50 font-bold'>About Us</h1>
              <p className='text-primary-300 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button className='text-primary-900' href='/about'>Learn More</Button>
            </div>
          </div>
          <div className='flex p-4 mx-auto justify-center max-w-7xl flex-col md:flex-row'>
            <div className='p-4'>
              <h1 className='text-2xl mb-6 text-primary-50 font-bold'>Our Services</h1>
              <p className='text-primary-300 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button className='text-primary-900' href='/two'>two</Button>
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
