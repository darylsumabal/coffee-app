import { AppContent } from '@/components/app-content';
import { usePage } from '@inertiajs/react';
import TableOrders from './table';

export type Orders = {
    order: {
        addon: {
            addon_name: string;
        };
        customer: {
            email: string;
            name: string;
        };
        drink: {
            drink_image: string;
            drink_name: string;
        };
        temperature: string;
        note?: string;
        created_at: string;
    };
    status: {
        position: number;
        status: boolean;
        id: string;
    };
    total_price: number;
    total_quantity: number;
};

const Order = () => {
    const { orders } = usePage<{ orders: Orders[] }>().props;

    return (
        <AppContent>
            <div className="space-y-2 py-20">
                <div>Orders</div>
                <TableOrders orders={orders} />
            </div>
        </AppContent>
    );
};

export default Order;
