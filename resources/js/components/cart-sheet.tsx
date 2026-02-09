import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { ShoppingBasket } from 'lucide-react';

const SheetWithNoOverlay = () => {
    return (
        <Sheet modal={false}>
            <SheetTrigger asChild>
                <ShoppingBasket />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>All Carts</SheetTitle>
                </SheetHeader>

                <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default SheetWithNoOverlay;
