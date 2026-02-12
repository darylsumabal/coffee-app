import { Link } from '@inertiajs/react';

const NavBar = () => {
    return (
        <div className="flex w-full items-center gap-6">
            <Link href={'/'}>
                <img
                    src="https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s="
                    alt="sad"
                    className="h-14 w-14 rounded-full"
                />
            </Link>

            <div className="flex w-full gap-2 text-lg font-bold">
                <Link href={'/menu'}>Menu</Link>
                <Link href={'/orders'}>Orders</Link>
                {/* <SheetWithNoOverlay /> */}
            </div>
        </div>
    );
};

export default NavBar;
