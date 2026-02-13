import { Button } from '@/components/ui/button';
import { ulrSrc } from '@/const/src';
import { Link, router, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

type PageProps = {
  drinks: {
    id: number;
    drink_image: string;
    drink_name: string;
    price: number;
    availability: boolean;
  }[];
};

const Card = () => {
  const { drinks: initialDrinks = [] } = usePage<PageProps>().props;
  const [drinks, setDrinks] = useState(initialDrinks);

  useEffect(() => {
    const interval = setInterval(() => {
      router.get(
        '/',
        {},
        {
          only: ['drinks'],
          preserveScroll: true,
          preserveState: true,
          replace: true,
          onSuccess: (page) => setDrinks(page.props.drinks),
        }
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {drinks.map((i) => (
          <div
            key={i.id}
            className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
          >
            {/* IMAGE */}
            <img
              src={`${ulrSrc}/${i.drink_image}`}
              alt={i.drink_name}
              className="h-40 w-full object-cover sm:h-44 md:h-48 lg:h-52"
            />

            {/* CONTENT */}
            <div className="px-4 py-4 text-center">
              <h2 className="mb-1 text-base font-bold text-gray-900 sm:text-lg">
                {i.drink_name}
              </h2>

              <p className="text-xs text-gray-600 sm:text-sm">
                Price: ${i.price}
              </p>

              <p className="mt-1 text-xs sm:text-sm font-medium">
                <span
                  className={
                    i.availability
                      ? 'text-green-600'
                      : 'text-red-500'
                  }
                >
                  {i.availability ? 'Available' : 'Out of stock'}
                </span>
              </p>

              {/* OPTIONAL BUTTON */}
              {/* 
              <Link href="/menu">
                <Button className="mt-3 rounded-full border-2 border-gray-900 px-5 py-1.5 text-xs sm:text-sm font-semibold">
                  See More
                </Button>
              </Link>
              */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
