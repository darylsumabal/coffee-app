import CheckboxVerticalGroup from '@/components/check-box-vertical';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { usePage } from '@inertiajs/react';
import { PlusCircleIcon } from 'lucide-react';
import { Drink } from '../drink/Index';
import { ulrSrc } from '@/const/src';

type Coffee = {
    id: string;
    image: string;
    coffeeName: string;
    description: string;
    available: boolean;
    price: number;
};

const CoffeeItem: Coffee[] = [
    {
        id: '1',
        image: 'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
        coffeeName: 'milktea',
        description: 's',
        available: false,
        price: 12,
    },
    {
        id: '2',
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=w_3000,h_3074,x_0,y_0,c_fill',
        coffeeName: 'milktea',
        description: 's',
        available: false,
        price: 12,
    },
    {
        id: '3',
        image: 'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
        coffeeName: 'milktea',
        description: 's',
        available: false,
        price: 12,
    },
];
const CoffeeCard = () => {
    const { drinks } = usePage<{ drinks: Drink[] }>().props;
    return (
        <>
            {drinks.map((i) => (
                <Card
                    className="w-96 shadow-none hover:border-black"
                    key={i.id}
                >
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-end justify-between gap-4">
                                <div className="flex gap-2">
                                    <div>
                                        <img
                                            src={`${ulrSrc}/${i.drink_image}`}
                                            alt=""
                                            className="h-32 w-32 rounded-md"
                                        />
                                    </div>
                                    <ul className="flex flex-col justify-between">
                                        <li className="text-2xl">
                                            {i.drink_name}
                                        </li>
                                        <li>₱ {i.price}</li>
                                        <li>{i.is_available}</li>
                                    </ul>
                                </div>
                                <Dialog>
                                    <form>
                                        <DialogTrigger asChild>
                                            <div className="cursor-pointer">
                                                <PlusCircleIcon className="h-8 w-8" />
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="flex max-h-11/12 flex-col gap-0 border-none p-0">
                                            <ScrollArea className="flex max-h-full flex-col overflow-hidden rounded-md">
                                                <div>
                                                    <img
                                                        src={`${ulrSrc}/${i.drink_image}`}
                                                        alt=""
                                                        className="max-h-96 w-full rounded-t-md object-cover"
                                                    />
                                                </div>
                                                <div className="sticky top-0 bg-white p-4 font-bold capitalize shadow-sm">
                                                    <p>{i.drink_name}</p>
                                                </div>
                                                <div>
                                                    <ul className="mt-5 flex flex-col justify-between gap-5 px-4 py-2 text-xl">
                                                        <li className="font-bold">
                                                            ₱ {i.price}
                                                        </li>
                                                        <li className="text-sm text-gray-700">
                                                            {i.is_available}
                                                        </li>
                                                    </ul>
                                                </div>

                                                <Separator />
                                                <div className="p-4">
                                                    <CheckboxVerticalGroup />
                                                </div>

                                                <DialogFooter className="sticky bottom-0 z-10 rounded-b-md border-t bg-white px-4 py-4">
                                                    <div className="flex w-full justify-between">
                                                        <Button variant="default">
                                                            Check Out
                                                        </Button>
                                                        <div>
                                                            <p>Total: 100</p>
                                                        </div>
                                                    </div>
                                                </DialogFooter>
                                            </ScrollArea>
                                        </DialogContent>
                                    </form>
                                </Dialog>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default CoffeeCard;
