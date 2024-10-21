import { Card } from "@/components/ui/card";

const services = [
    {
        title: 'Move & Transport',
        description: 'We move tubs for residents as well as businesses.',
        icon: '/assets/truckIcon.svg', // Replace with your icon path
        link: '/contact'
    },
    {
        title: 'Spa Packages & Consignment',
        description: 'We offer a great selection of spas and hot tubs.',
        icon: '/assets/handHoldingUsd.svg', // Replace with your icon path
        link: '/contact'
    },
    {
        title: 'Troubleshooting Advice',
        description: 'Having spa or hot tub trouble? We are here to help.',
        icon: '/assets/commentsIcon.svg', // Replace with your icon path
        link: '/contact'
    }
];
export default function ServicesPage() {
    return (
        <>
        <Card className="p-5 my-6 bg-primary-200 shadow-lg shadow-primary-900">
            <div className="container text-primary-900 mx-auto py-8">
                <h2 className="text-4xl font-extrabold text-center mb-4">Our Services</h2>
                <p className="text-center mb-8">
                    We provide services from moving to maintenance and everything in between. We are everything hot tubs!
                </p>
                <div className="grid grid-cols-1 min-h-52 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="border border-primary-900 p-6 rounded-lg text-center">
                            <img src={service.icon} alt={service.title} className="mx-auto mb-4 w-16 h-16" />
                            <h3 className="text-xl  font-semibold mb-2">{service.title}</h3>
                            <p className="mb-4">{service.description}</p>
                            <a href={service.link} className="text-primary-900 hover:underline">
                                LEARN MORE &gt;
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <h1 className="text-2xl font-semibold mb-4">Need help with something else?</h1>
                    <a href="/contact" className="text-primary-900 text-xl hover:underline">
                        Contact us for a free estimate
                    </a>
                </div>
            </div>
            </Card>
        </>
    )
}