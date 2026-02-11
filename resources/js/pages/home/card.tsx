import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import React from 'react';

const Coffee = [
    {
        image: 'https://about.starbucks.com/uploads/2025/05/Starbucks-Iced-Horchata-1536x1067.jpg',
        name: 'Pa Chupachups',
        description: 'Enjoy Me. 💚',
    },
    {
        image: 'https://about.starbucks.com/uploads/2025/05/Starbucks-Iced-Horchata-1536x1067.jpg',
        name: 'Pa Chupachups',
        description: 'Enjoy Me. 💚',
    },
    {
        image: 'https://about.starbucks.com/uploads/2025/05/Starbucks-Iced-Horchata-1536x1067.jpg',
        name: 'Pa Chupachups',
        description: 'Enjoy Me. 💚',
    },
    {
        image: 'https://about.starbucks.com/uploads/2025/05/Starbucks-Iced-Horchata-1536x1067.jpg',
        name: 'Pa Chupachups',
        description: 'Enjoy Me. 💚',
    },
];

const Card = () => {
    return (
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
            {Coffee.map((i, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-2xl bg-white shadow-2xl"
                >
                    <img
                        src={i.image}
                        alt={i.name}
                        className="h-96 w-full object-cover"
                    />
                    <div className="px-8 py-12 text-center">
                        <h2 className="mb-6 text-4xl font-bold text-gray-900">
                            {i.name}
                        </h2>
                        <p className="mb-10 text-lg text-gray-600">
                            {i.description}
                        </p>
                        <Link href={'/menu'}>
                            <Button className="rounded-full border-2 border-gray-900 px-10 py-3 font-semibold transition-all duration-300 hover:cursor-pointer">
                                See More
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
