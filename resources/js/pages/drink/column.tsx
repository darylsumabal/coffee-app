import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import type { Addon } from '@/const/drink';
import { ulrSrc } from '@/const/src';
import type { ColumnDef } from '@tanstack/react-table';
import { DeleteAddon, DeleteDrink, EditAddon, EditDrink } from './action';
import type { Drink } from './Index';

export const columnDrink: ColumnDef<Drink>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
    },
    {
        header: 'Drink',
        accessorKey: 'drink_name',
        cell: ({ row }) => (
            <div className="flex items-center gap-3">
                <Avatar size="lg">
                    <AvatarImage
                        src={`${ulrSrc}/${String(row.original.drink_image)}`}
                        alt={row.original.drink_name}
                    />
                    <AvatarFallback className="text-xs">
                        {row.original.drink_name}
                    </AvatarFallback>
                </Avatar>
                <div className="font-medium">{row.getValue('drink_name')}</div>
            </div>
        ),
        meta: {
            filterVariant: 'text',
        },
    },
    {
        header: 'Price',
        accessorKey: 'price',
        cell: ({ row }) => <div>₱{row.getValue('price')}</div>,
        enableSorting: false,
        meta: {
            filterVariant: 'range',
        },
    },
    {
        header: 'Availability',
        accessorKey: 'availability', // ✅ FIX
        meta: { filterVariant: 'select' },
        filterFn: (row, id, value) => row.getValue(id) === value,
        cell: ({ row }) => (
            <Badge
                variant={
                    row.original.availability == 'available'
                        ? 'default'
                        : 'destructive'
                }
            >
                {row.original.availability == 'available'
                    ? 'Available'
                    : 'Unavailable'}
            </Badge>
        ),
    },
    {
        header: 'Actions',
        id: 'actions',
        cell: ({ row }) => (
            <div>
                <EditDrink row={row} />
                <DeleteDrink row={row} />
            </div>
        ),
    },
];

export const columnAddon: ColumnDef<Addon>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
    },
    {
        header: 'Addon',
        accessorKey: 'addon_name',
        cell: ({ row }) => (
            <div className="font-medium">{row.getValue('addon_name')}</div>
        ),
        meta: {
            filterVariant: 'text',
        },
    },
    {
        header: 'Price',
        accessorKey: 'extra_price',
        cell: ({ row }) => <div>₱{row.getValue('extra_price')}</div>,
        enableSorting: false,
        meta: {
            filterVariant: 'range',
        },
    },
    {
        header: 'Availability',
        accessorKey: 'availability', // ✅ FIX
        meta: { filterVariant: 'select' },
        cell: ({ row }) => (
            <Badge
                variant={row.original.availability ? 'default' : 'destructive'}
            >
                {row.original.availability ? 'Available' : 'Unavailable'}
            </Badge>
        ),
    },
    {
        header: 'Actions',
        id: 'actions',
        cell: ({ row }) => {
            return (
                <div>
                    <EditAddon row={row} />
                    <DeleteAddon row={row} />
                </div>
            );
        },
    },
];
