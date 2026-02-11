import { useId, useMemo, useState } from 'react';

import { SearchIcon } from 'lucide-react';

import type {
    Column,
    ColumnDef,
    ColumnFiltersState,
    RowData,
    SortingState,
} from '@tanstack/react-table';
import {
    flexRender,
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData extends RowData, TValue> {
        filterVariant?: 'text' | 'range' | 'select';
    }
}

type TableProps<T> = {
    data: T[];
    columns: ColumnDef<T>[];
};

const DataTable = <T,>({ data, columns }: TableProps<T>) => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const [sorting, setSorting] = useState<SortingState>([
        {
            id: 'price',
            desc: false,
        },
    ]);

    const table = useReactTable({
        data: data ?? [],
        columns,
        state: {
            sorting,
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        onSortingChange: setSorting,
        enableSortingRemoval: false,
    });

    return (
        <div className="w-full">
            <div className="rounded-md border">
                <div className="flex flex-wrap gap-3 px-2 py-6">
                    {table
                        .getAllLeafColumns()
                        .filter((col) => col.columnDef.meta?.filterVariant) // only columns with a filter
                        .map((col) => (
                            <div key={col.id} className="w-96">
                                <Filter column={col} />
                            </div>
                        ))}
                </div>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow
                                key={headerGroup.id}
                                className="bg-muted/50"
                            >
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead
                                            key={header.id}
                                            className="relative h-10 border-t select-none"
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
                Data table with column filter
            </p>
        </div>
    );
};

function Filter({ column }: { column: Column<any, unknown> }) {
    const id = useId();
    const columnFilterValue = column.getFilterValue();
    const { filterVariant } = column.columnDef.meta ?? {};
    const columnHeader =
        typeof column.columnDef.header === 'string'
            ? column.columnDef.header
            : '';

    const sortedUniqueValues = useMemo(() => {
        if (filterVariant === 'range') return [];

        const values = Array.from(column.getFacetedUniqueValues().keys());

        const flattenedValues = values.reduce((acc: string[], curr) => {
            if (Array.isArray(curr)) {
                return [...acc, ...curr];
            }

            return [...acc, curr];
        }, []);

        return Array.from(new Set(flattenedValues)).sort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [column.getFacetedUniqueValues(), filterVariant]);

    if (filterVariant === 'range') {
        return (
            <div className="*:not-first:mt-2">
                <Label>{columnHeader}</Label>
                <div className="flex">
                    <Input
                        id={`${id}-range-1`}
                        className="flex-1 rounded-r-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        value={
                            (columnFilterValue as [number, number])?.[0] ?? ''
                        }
                        onChange={(e) =>
                            column.setFilterValue((old: [number, number]) => [
                                e.target.value
                                    ? Number(e.target.value)
                                    : undefined,
                                old?.[1],
                            ])
                        }
                        placeholder="Min"
                        type="number"
                        aria-label={`${columnHeader} min`}
                    />
                    <Input
                        id={`${id}-range-2`}
                        className="-ms-px flex-1 rounded-l-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        value={
                            (columnFilterValue as [number, number])?.[1] ?? ''
                        }
                        onChange={(e) =>
                            column.setFilterValue((old: [number, number]) => [
                                old?.[0],
                                e.target.value
                                    ? Number(e.target.value)
                                    : undefined,
                            ])
                        }
                        placeholder="Max"
                        type="number"
                        aria-label={`${columnHeader} max`}
                    />
                </div>
            </div>
        );
    }

    if (filterVariant === 'select') {
        return (
            <div className="*:not-first:mt-2">
                <Label htmlFor={`${id}-select`}>{columnHeader}</Label>
                <Select
                    value={columnFilterValue?.toString() ?? 'all'}
                    onValueChange={(value) => {
                        column.setFilterValue(
                            value === 'all' ? undefined : value,
                        );
                    }}
                >
                    <SelectTrigger id={`${id}-select`} className="w-full">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        {sortedUniqueValues.map((value) => (
                            <SelectItem
                                key={String(value)}
                                value={String(value)}
                            >
                                {value == 'available' ? 'Available' : 'Unavailable'}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        );
    }

    return (
        <div className="*:not-first:mt-2">
            <Label htmlFor={`${id}-input`}>{columnHeader}</Label>
            <div className="relative">
                <Input
                    id={`${id}-input`}
                    className="peer pl-9"
                    value={(columnFilterValue ?? '') as string}
                    onChange={(e) => column.setFilterValue(e.target.value)}
                    placeholder={`Search ${columnHeader.toLowerCase()}`}
                    type="text"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <SearchIcon size={16} />
                </div>
            </div>
        </div>
    );
}

export default DataTable;
