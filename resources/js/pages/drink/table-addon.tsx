import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { Addon } from '@/const/drink';
import { Trash2Icon } from 'lucide-react';
import { useId } from 'react';
const TableAddon = ({ addons }: { addons: Addon[] }) => {
    const id = useId();
    return (
        <div className="w-full">
            <div className="[&>div]:rounded-sm [&>div]:border">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead>
                                <Checkbox id={id} aria-label="select-all" />
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="w-0">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {addons?.map((item) => (
                            <TableRow
                                key={item.id}
                                className="has-data-[state=checked]:bg-muted/50"
                            >
                                <TableCell>
                                    <Checkbox
                                        id={`table-checkbox-${item.id}`}
                                        aria-label={`product-checkbox-${item.id}`}
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">
                                        {item.addon_name}
                                    </div>
                                </TableCell>
                                <TableCell>{item.extra_price}</TableCell>
                                <TableCell className="flex items-center gap-1">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full"
                                        aria-label={`product-${item.id}-remove`}
                                    >
                                        <Trash2Icon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
                Product Table
            </p>
        </div>
    );
};

export default TableAddon;
