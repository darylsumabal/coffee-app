import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ulrSrc } from '@/const/src';
import { router, usePage } from '@inertiajs/react';
import { useEchoPublic } from '@laravel/echo-react';
import type { Orders } from './Index';
import SwitchToggleLabel from './toggle';

type Auth = {
    auth: {
        user: string;
    };
};

const TableOrders = ({ orders }: { orders: Orders[] }) => {
    const { auth } = usePage<Auth>().props;
    useEchoPublic('orders', 'OrderEvent', () => {
        router.reload({
            only: ['orders'],
        });
    });

    return (
        <div className="space-y-2">
            <div className="w-full">
                <div className="[&>div]:rounded-sm [&>div]:border">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead>Name</TableHead>
                                <TableHead>Order</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Position</TableHead>
                                {auth?.user && <TableHead>Action</TableHead>}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders
                                .slice() // create a shallow copy to avoid mutating original array
                                // .sort((a, b) => {
                                //     const updatedA = new Date(
                                //         a.status.updated_at,
                                //     ).getTime();
                                //     const updatedB = new Date(
                                //         b.status.updated_at,
                                //     ).getTime();

                                //     return updatedB - updatedA;
                                // })
                                .sort(
                                    (a, b) =>
                                        (a.status.position ?? 999) -
                                        (b.status.position ?? 999),
                                )
                                .map((item, index) => {
                                    const createdAt = new Date(
                                        item.order.created_at,
                                    );
                                  
                                    const now = new Date();
                                    const diffMinutes =
                                        (now.getTime() - createdAt.getTime()) /
                                        (1000 * 60);
                                    const isNew = diffMinutes < 5;

                                    return (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div>
                                                    {item.order.customer.name}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar size="lg">
                                                        <AvatarImage
                                                            src={`${ulrSrc}/${item.order.drink.drink_image}`}
                                                            alt={
                                                                item.order.drink
                                                                    .drink_name
                                                            }
                                                        />
                                                        <AvatarFallback className="text-xs">
                                                            {
                                                                item.order.drink
                                                                    .drink_name
                                                            }
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="font-medium">
                                                        {
                                                            item.order.drink
                                                                .drink_name
                                                        }
                                                    </div>
                                                </div>
                                            </TableCell>

                                            <TableCell>
                                                {/* <div>
                                                <Badge
                                                    variant={`${item.status.status ? 'default' : 'destructive'}`}
                                                >
                                                    {item.status.status
                                                        ? 'Ready'
                                                        : 'Pending'}
                                                </Badge>
                                            </div> */}

                                                <div className="relative inline-block">
                                                    {/* Badge */}
                                                    <Badge
                                                        variant={
                                                            item.status.status
                                                                ? 'default'
                                                                : 'destructive'
                                                        }
                                                        className="relative px-4 py-1"
                                                    >
                                                        {item.status.status
                                                            ? 'Ready'
                                                            : 'Pending'}
                                                    </Badge>

                                                    {/* Number at top-right */}
                                                    {isNew && (
                                                        <div className="absolute -top-2 -right-2 flex h-5 w-7 items-center justify-center rounded-md bg-emerald-600 text-xs text-white">
                                                            new
                                                        </div>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {item.status?.position}
                                            </TableCell>
                                            {auth?.user && (
                                                <TableCell>
                                                    <SwitchToggleLabel
                                                        status={
                                                            item.status.status
                                                        }
                                                        id={item.status.id}
                                                    />
                                                </TableCell>
                                            )}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </div>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                    Table with avatar
                </p>
            </div>
        </div>
    );
};

export default TableOrders;
