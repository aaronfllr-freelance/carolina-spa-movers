import Image from 'next/image';

import { Button } from '@/components/Button';
import { Section, SectionBackground, SectionContent } from '@/components/Section';
import { Card } from '@/components/ui/card';

export default function Home() {
    return (
    <>
          <Card className='p-5 my-6 bg-primary-200 shadow-lg shadow-primary-900'>
            <div className="py-8 grid grid-cols-1 md:grid-cols-2 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="max-w-screen-md">
                <h1 className="mb-4 text-6xl tracking-tight font-extrabold text-text-light dark:text-text-dark">
                  Carolina Spa Movers
                </h1>
                <h2 className="mb-8 text-4xl text-text-light dark:text-text-dark">
                  Serving the Carolinas and beyond, we specialize in moving hot tubs and spas.
                </h2>
              </div>
              <Image className='mb-4 mx-auto'src={'/assets/northsouthcarolina.svg'} width={400} height={400} alt='North Carolina and South Carolina'/>
            </div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="max-w-screen-md">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-text-light dark:text-text-dark">
                    Hot Tub & Spa Relocation to Installation
                  </h2>
                  <p className="mb-8 font-normal text-text-light sm:text-xl dark:text-text-dark">
                    Ready to move your hot tub without the hassle? 
                    Our expert team makes hot tub relocation easy and stress-free. 
                    Contact us today for a free quote and let us handle the heavy lifting! Call now or book online!
                  </p>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <Button className='text-text-light dark:text-text-dark' href='/services'>   
                      Get started
                    </Button>
                  </div>
              </div>
          </div>
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className='flex p-4 max-w-7xl mx-auto justify-center flex-col md:flex-row '>
                <Image
                  src='/assets/images/movingspas/spamoving1.jpg'
                  alt='Stock photo one'
                  width='400'
                  height='400'
                />
                <div className='p-4'>
                  <h1 className='text-2xl mb-6 text-text-light dark:text-text-dark font-bold'>About Us</h1>
                  <p className='text-text-light dark:text-text-dark mb-6'>
                    We are The Spa Movers of the Carolinas. We know moving, and have the tools, equipment, and the vehicles to do the job right and on time. High decks, recessed tubs, patios, enclosed rooms, disposals, all in a day’s work.
                    From any size, shape, make or model we have the tools to do the job. These products are virtually impossible for your average moving company to transport. We take great care to ensure your cargo arrives safely at its destination.
                    We now offer long distance transportation, whether the product needs to go 2 miles or 200 make life easy with us, handling your move. 
                  </p>
                  <Button className='text-text-dark' href='/about'>LEARN MORE &gt; &gt;</Button>
                </div>
              </div>
          </div>
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className='flex p-4 mx-auto justify-center max-w-7xl flex-col md:flex-row'>
                <div className='p-4'>
                  <h1 className='text-2xl mb-6 text-text-light font-bold'>Our Services</h1>
                  <p className='text-text-light mb-6'>
                  We offer: Hauling, Moving, Transport, Removal, Disposal, Relocation, Licensed Electrician referrals, and Troubleshooting advice. We use the latest in tools and equipment to move your cargo. 
                  This keeps your cost down and provides for safer transport.
                  </p>
                  <Button className='text-text-light' href='/services'>LEARN MORE &gt; &gt;</Button>
                </div>
                <Image
                  src='/assets/images/movingspas/spamoving2.jpg'
                  alt='Stock photo two'
                  width='400'
                  height='400'
                />
              </div>
          </div>
          </Card>
    </>
    );
}
