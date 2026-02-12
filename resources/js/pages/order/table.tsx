import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Orders } from './Index';
import { ulrSrc } from '@/const/src';
import SwitchToggleLabel from './toggle';
import { usePage } from '@inertiajs/react';

const TableOrders = ({ orders }: { orders: Orders[] }) => {
    const { auth } = usePage().props;
    console.log(orders);
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
                            {orders.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div>{item.order.customer.name}</div>
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
                                                {item.order.drink.drink_name}
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <Badge
                                            variant={`${item.status.status ? 'default' : 'destructive'}`}
                                        >
                                            {item.status.status
                                                ? 'Ready'
                                                : 'Pending'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {item.status?.position}
                                    </TableCell>
                                    {auth?.user && (
                                        <TableCell>
                                            <SwitchToggleLabel
                                                status={item.status.status}
                                                id={item.status.id}
                                            />
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
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
