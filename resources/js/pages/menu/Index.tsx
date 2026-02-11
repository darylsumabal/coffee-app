import { AppContent } from '@/components/app-content';
import React from 'react';
import { CoffeeCard } from './coffee-card';


const Menu = () => {
    return (
        <div className="space-y-2">
            <div className="flex flex-col gap-6">
                <div className="space-y-6">
                    <div className="flex w-full gap-4">
                        <CoffeeCard />
                    </div>
                </div>
            </div>
        </div>
    );
};
Menu.layout = (page: React.ReactNode) => <AppContent>{page}</AppContent>;
export default Menu;
