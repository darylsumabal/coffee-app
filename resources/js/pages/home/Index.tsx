import { Button } from '@/components/ui/button';
import Card from './card';
import { Link } from '@inertiajs/react';

const LandingPage = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-12">
            {/* HERO SECTION */}
            <section className="flex flex-col items-center justify-between py-12 gap-10 md:flex-row md:py-20">
                
                {/* TEXT */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                        POGI CHUPACHUPS <br />
                        <span className="text-green-700">Hi pogi 150</span>
                    </h2>

                    <p className="mt-4 max-w-md text-sm text-gray-600 sm:text-base md:mt-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quisquam vitae sapiente sit voluptate? Voluptate
                        ipsum nemo quam minima aliquam laborum cupiditate
                        tenetur, accusamus eaque expedita culpa enim nulla rem
                        necessitatibus.
                    </p>

                    <Link href={'/menu'}>
                        <Button className="mt-6 rounded-full bg-green-700 px-6 py-2 text-sm font-semibold text-white transition hover:bg-green-800 sm:mt-8 sm:px-8 sm:py-3 sm:text-base">
                            Order Now
                        </Button>
                    </Link>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center w-full md:w-auto">
                    <img
                        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                        alt="Coffee"
                        className="w-full max-w-xs rounded-3xl shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
                    />
                </div>
            </section>

            {/* CARD SECTION */}
            <div className="mb-12">
                <Card />

                <div className="mt-6 flex justify-center sm:mt-8">
                    <Link href="/menu">
                        <Button className="rounded-full border-2 border-gray-900 px-5 py-2 text-xs font-semibold transition-all duration-300 hover:cursor-pointer sm:px-6 sm:text-sm">
                            See More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
