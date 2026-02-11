import MenuSearchBar from '@/components/ui/menu-search-bar';
import SideBarMenu from '@/components/ui/sidebar-menu';

const Menu = () => {
  return (
    <div className='flex'>

    <div>
        <SideBarMenu/>
    </div>
     <div className="space-y-6">
    {/* HEADER */}
    <div className=" w-full p-4 z-50">
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
