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
import { PlusCircleIcon } from 'lucide-react';

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
    {
        id: '4',
        image: 'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
        coffeeName: 'milktea',
        description: 's',
        available: false,
        price: 12,
    },
    {
        id: '5',
        image: 'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
        coffeeName: 'milktea',
        description: 's',
        available: false,
        price: 12,
    },
     {
        id: '6',
        image: 'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
        coffeeName: 'milktea',
        description: 's',
        available: false,
        price: 12,
    },
     {
        id: '7',
        image: 'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
        coffeeName: 'milktea',
        description: 's',
        available: false,
        price: 12,
    },
     {
        id: '8',
        image: 'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
        coffeeName: 'milktea',
        description: 's',
        available: false,
        price: 12,
    },
    
    
];

const CoffeeCard = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {CoffeeItem.map((i) => (
                <Card
                    className="w-64 shadow-none hover:border-black relative overflow-hidden p-0"
                    key={i.id}
                >
                    {/* Image - Full Width, Fit Height */}
                    <img
                        src={i.image}
                        alt={i.coffeeName}
                        className="w-full h-40 object-cover block"
                    />

                    {/* Content */}
                    <div className="p-4 pb-12">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {i.coffeeName}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                            {i.description}
                        </p>
                        <p className="text-base font-medium text-gray-900">
                            ₱ {i.price}
                        </p>
                    </div>

                    {/* Plus Button - Bottom Right */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="absolute bottom-4 right-4 cursor-pointer hover:text-gray-600 transition-colors">
                                <PlusCircleIcon className="h-8 w-8" />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="flex max-h-11/12 flex-col gap-0 border-none p-0">
                            <ScrollArea className="flex max-h-full flex-col overflow-hidden rounded-md">
                                <DialogHeader className="contents space-y-0 text-left">
                                    <div>
                                        <img
                                            src={i.image}
                                            alt={i.coffeeName}
                                            className="max-h-96 w-full rounded-t-md object-cover"
                                        />
                                    </div>
                                    <ul className="mt-5 flex flex-col justify-between gap-5 px-4 py-2 text-xl">
                                        <li className="font-bold capitalize sticky">
                                            {i.coffeeName}
                                        </li>
                                        <li className="font-bold">
                                            ₱ {i.price}
                                        </li>
                                        <li className="text-sm text-gray-700">
                                            {i.description}
                                        </li>
                                    </ul>
                                </DialogHeader>
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
                    </Dialog>
                </Card>
            ))}
        </div>
    );
};

export default CoffeeCard;