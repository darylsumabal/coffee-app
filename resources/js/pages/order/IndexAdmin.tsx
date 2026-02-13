import AppLayout from '@/layouts/app-layout';

import type { BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import type { Orders } from './Index';
import TableOrders from './table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Orders',
        href: '/admin/product',
    },
];

const IndexAdmin = () => {
    const { orders } = usePage<{ orders: Orders[] }>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Order" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <TableOrders orders={orders} />
            </div>
        </AppLayout>
    );
};

export default IndexAdmin;
