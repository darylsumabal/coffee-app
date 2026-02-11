import { Button } from '@/components/ui/button';
import Card from './card';
import { Link } from '@inertiajs/react';

const LandingPage = () => {
    return (
        <div>
            <section className="flex flex-col items-center justify-between py-20 md:flex-row">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-5xl leading-tight font-extrabold text-gray-900">
                        POGI CHUPACHUPS <br />
                        <span className="text-green-700">Hi pogi 150</span>
                    </h2>
                    <p className="mt-6 max-w-md text-gray-600">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quisquam vitae sapiente sit voluptate? Voluptate
                        ipsum nemo quam minima aliquam laborum cupiditate
                        tenetur, accusamus eaque expedita culpa enim nulla rem
                        necessitatibus.
                    </p>
                    <Link href={'/menu'}>
                        <Button className="mt-8 rounded-full bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800">
                            Order Now
                        </Button>
                    </Link>
                </div>

                <div className="mt-8 flex justify-center md:mt-0">
                    <img
                        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                        alt="Coffee"
                        className="w-[420px] rounded-3xl shadow-lg"
                    />
                </div>
            </section>
            <div className="mb-8">
                <Card />
            </div>
        </div>
    );
};

export default LandingPage;
