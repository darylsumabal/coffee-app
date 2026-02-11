import MenuSearchBar from '@/components/ui/menu-search-bar';
import SideBarMenu from '@/components/ui/sidebar-menu';
import { CoffeeCard } from './coffee-card';
import { AppContent } from '@/components/app-content';

const Menu = () => {
    return (
        <div className="flex">
            <div>
                <SideBarMenu />
            </div>
            <div className="space-y-6">
                {/* HEADER */}
                <div className="z-50 w-full p-4">
                    <MenuSearchBar />
                </div>

                {/* COFFEE CARD GRID */}
                <div className="mx-auto w-full max-w-7xl">
                    <CoffeeCard />
                </div>
            </div>
        </div>
    );
};

Menu.layout = (page: React.ReactNode) => <AppContent>{page}</AppContent>;
export default Menu;
