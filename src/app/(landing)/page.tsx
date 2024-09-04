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
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary-50 dark:text-primary-50">
                  Hot Tub & Spa Relocation to Installation
                </h2>
                <p className="mb-8 font-normal text-gray-300 sm:text-xl dark:text-primary-50">
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
              src='/assets/images/movingspas/spamoving1.jpg'
              alt='Stock photo one'
              width='400'
              height='400'
            />
            <div className='p-4'>
              <h1 className='text-2xl mb-6 text-primary-50 font-bold'>About Us</h1>
              <p className='text-primary-50 mb-6'>
                We are The Spa Movers of the Carolinas. We know moving, and have the tools, equipment, and the vehicles to do the job right and on time. High decks, recessed tubs, patios, enclosed rooms, disposals, all in a day’s work.
                From any size, shape, make or model we have the tools to do the job. These products are virtually impossible for your average moving company to transport. We take great care to ensure your cargo arrives safely at its destination.
                We now offer long distance transportation, whether the product needs to go 2 miles or 200 make life easy with us, handling your move. 
              </p>
              <Button className='text-primary-900' href='/about'>LEARN MORE &gt; &gt;</Button>
            </div>
          </div>
          <div className='flex p-4 mx-auto justify-center max-w-7xl flex-col md:flex-row'>
            <div className='p-4'>
              <h1 className='text-2xl mb-6 text-primary-50 font-bold'>Our Services</h1>
              <p className='text-primary-50 mb-6'>
               We offer: Hauling, Moving, Transport, Removal, Disposal, Relocation, Licensed Electrician referrals, and Troubleshooting advice. We use the latest in tools and equipment to move your cargo. 
               This keeps your cost down and provides for safer transport.
              </p>
              <Button className='text-primary-900' href='/services'>LEARN MORE &gt; &gt;</Button>
            </div>
            <Image
              src='/assets/images/movingspas/spamoving2.jpg'
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
