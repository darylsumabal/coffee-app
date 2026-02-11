import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { ulrSrc } from '@/const/src';
import { Trash2Icon } from 'lucide-react';
import { useId } from 'react';
import DialogEdit from './card';
import type { Drink } from './Index';

const TableDrink = ({ drinks }: { drinks: Drink[] }) => {
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
                            <TableHead>Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="w-0">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {drinks?.map((item) => (
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
                                    <Avatar className="rounded-sm" size="lg">
                                        <AvatarImage
                                            src={`${ulrSrc}/${String(item.drink_image)}`}
                                            alt={item.drink_name}
                                        />
                                        <AvatarFallback className="text-xs">
                                            {item.drink_name}
                                        </AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">
                                        {item.drink_name}
                                    </div>
                                </TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell className="flex items-center gap-1">
                                    <DialogEdit
                                        id={item.id}
                                        drink_name={item.drink_name}
                                        price={item.price}
                                        drink_image={null}
                                        is_available={false}
                                    />
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

export default TableDrink;
