import { Link } from '@inertiajs/react';

const NavBar = () => {
    return (
        <div className="flex items-center gap-2 w-full">
            <Link href={'/'}>
                <img
                    src="https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s="
                    alt="sad"
                    className="4 h-14 w-14 rounded-full"
                />
            </Link>

            <div className="flex w-full justify-between">
                <Link href={'/menu'}>Menu</Link>
                {/* <SheetWithNoOverlay /> */}
            </div>
        </div>
    );
};

export default NavBar;
