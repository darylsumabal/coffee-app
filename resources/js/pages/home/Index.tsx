import { Button } from "@/components/ui/button";
import Card from "./card";
import { Link } from "@inertiajs/react";


const LandingPage = () => {
  return (
    <div >

      <section className="flex flex-col md:flex-row justify-between items-center py-20">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            POGI CHUPACHUPS <br />
            <span className="text-green-700">Hi pogi 150</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam vitae sapiente sit voluptate? Voluptate ipsum nemo quam minima aliquam laborum cupiditate
            tenetur, accusamus eaque expedita culpa enim nulla rem necessitatibus.
          </p>
          <Link href={'/menu'}>
          <Button className="mt-8 px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
            Order Now
          </Button>
          </Link>
        </div>


        <div className="flex justify-center mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="Coffee"
            className="w-[420px] rounded-3xl shadow-lg"
          />
        </div>


      </section>
      <div className="mb-8">
        <Card/>
        </div>
    </div>
  );
};

export default LandingPage;
