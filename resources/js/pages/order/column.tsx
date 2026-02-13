import { Badge } from '@/components/ui/badge';
import type { Orders } from './Index';
import SwitchToggleLabelDemo from './toggle';
import type { ColumnDef } from '@tanstack/react-table';

export const columnOrder: ColumnDef<Orders>[] = [
    {
        header: 'Name',
        accessorFn: (e) => e.order.customer.name,
        cell: ({ row }) => (
            <div className="font-medium">
                {row.original.order.customer.name}
            </div>
        ),
        meta: {
            filterVariant: 'text',
        },
    },
    {
        header: 'Status',
        accessorFn: (e) => e.status.status,
        meta: {
            filterVariant: 'select',
        },

        cell: ({ row }) => {
            const createdAt = new Date(row.original.order.created_at);
            const now = new Date();
            const diffMinutes =
                (now.getTime() - createdAt.getTime()) / (1000 * 60);
            const isNew = diffMinutes < 5;
            return (
                <div className="relative inline-block">
                    {/* Badge */}
                    <Badge
                        variant={
                            row.original.status.status
                                ? 'default'
                                : 'destructive'
                        }
                        className="relative px-4 py-1"
                    >
                        {row.original.status.status ? 'Ready' : 'Pending'}
                    </Badge>

                    {/* Number at top-right */}
                    {isNew && (
                        <div className="absolute -top-2 -right-2 flex h-5 w-7 items-center justify-center rounded-md bg-emerald-600 text-xs text-white">
                            new
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        header: 'Position',
        accessorFn: (e) => e.status.position,
        cell: ({ row }) => <div>{row.original.status.position}</div>,
    },
    {
        header: 'Actions',
        id: 'actions',
        cell: ({ row }) => {
            return (
                <div>
                    <SwitchToggleLabelDemo
                        status={row.original.status.status}
                        id={row.original.status.id}
                    />
                </div>
            );
        },
    },
];
