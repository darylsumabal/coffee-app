// import CheckboxVerticalGroup from '@/components/check-box-vertical';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import {
//     Dialog,
//     DialogContent,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from '@/components/ui/dialog';
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
// import { Separator } from '@/components/ui/separator';
// import { usePage } from '@inertiajs/react';
// import { PlusCircleIcon } from 'lucide-react';
// import { Drink } from '../drink/Index';
// import { ulrSrc } from '@/const/src';

// type Coffee = {
//     id: string;
//     image: string;
//     coffeeName: string;
//     description: string;
//     available: boolean;
//     price: number;
// };

// const CoffeeItem: Coffee[] = [
//     {
//         id: '1',
//         image: 'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
//         coffeeName: 'milktea',
//         description: 's',
//         available: false,
//         price: 12,
//     },
//     {
//         id: '2',
//         image: 'https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=w_3000,h_3074,x_0,y_0,c_fill',
//         coffeeName: 'milktea',
//         description: 's',
//         available: false,
//         price: 12,
//     },
//     {
//         id: '3',
//         image: 'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
//         coffeeName: 'milktea',
//         description: 's',
//         available: false,
//         price: 12,
//     },
// ];
// const CoffeeCard = () => {
//     const { drinks } = usePage<{ drinks: Drink[] }>().props;
//     return (
//         <>
//             {drinks.map((i) => (
//                 <Card
//                     className="w-96 shadow-none hover:border-black"
//                     key={i.id}
//                 >
//                     <CardContent>
//                         <div className="flex flex-col gap-2">
//                             <div className="flex items-end justify-between gap-4">
//                                 <div className="flex gap-2">
//                                     <div>
//                                         <img
//                                             src={`${ulrSrc}/${i.drink_image}`}
//                                             alt=""
//                                             className="h-32 w-32 rounded-md"
//                                         />
//                                     </div>
//                                     <ul className="flex flex-col justify-between">
//                                         <li className="text-2xl">
//                                             {i.drink_name}
//                                         </li>
//                                         <li>₱ {i.price}</li>
//                                         <li>{i.is_available}</li>
//                                     </ul>
//                                 </div>
//                                 <Dialog>
//                                     <form>
//                                         <DialogTrigger asChild>
//                                             <div className="cursor-pointer">
//                                                 <PlusCircleIcon className="h-8 w-8" />
//                                             </div>
//                                         </DialogTrigger>
//                                         <DialogContent className="flex max-h-11/12 flex-col gap-0 border-none p-0">
//                                             <ScrollArea className="flex max-h-full flex-col overflow-hidden rounded-md">
//                                                 <div>
//                                                     <img
//                                                         src={`${ulrSrc}/${i.drink_image}`}
//                                                         alt=""
//                                                         className="max-h-96 w-full rounded-t-md object-cover"
//                                                     />
//                                                 </div>
//                                                 <div className="sticky top-0 bg-white p-4 font-bold capitalize shadow-sm">
//                                                     <p>{i.drink_name}</p>
//                                                 </div>
//                                                 <div>
//                                                     <ul className="mt-5 flex flex-col justify-between gap-5 px-4 py-2 text-xl">
//                                                         <li className="font-bold">
//                                                             ₱ {i.price}
//                                                         </li>
//                                                         <li className="text-sm text-gray-700">
//                                                             {i.is_available}
//                                                         </li>
//                                                     </ul>
//                                                 </div>

//                                                 <Separator />
//                                                 <div className="p-4">
//                                                     <CheckboxVerticalGroup />
//                                                 </div>

//                                                 <DialogFooter className="sticky bottom-0 z-10 rounded-b-md border-t bg-white px-4 py-4">
//                                                     <div className="flex w-full justify-between">
//                                                         <Button variant="default">
//                                                             Check Out
//                                                         </Button>
//                                                         <div>
//                                                             <p>Total: 100</p>
//                                                         </div>
//                                                     </div>
//                                                 </DialogFooter>
//                                             </ScrollArea>
//                                         </DialogContent>
//                                     </form>
//                                 </Dialog>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>
//             ))}
//         </>
//     );
// };

// export default CoffeeCard;

import { useOutsideClick } from '@/hooks/use-outside-click';
import { usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useId, useRef, useState } from 'react';
import type { Drink } from '../drink/Index';
import { ulrSrc } from '@/const/src';
import CheckboxVerticalGroup from '@/components/check-box-vertical';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function CoffeeCard() {
    const { drinks } = usePage<{ drinks: Drink[] }>().props;
    const [active, setActive] = useState<
        (typeof drinks)[number] | boolean | null
    >(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false);
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));


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
=======
    return (
        <>
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-10 h-full w-full bg-black/20"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className="fixed inset-0 z-[100] grid place-items-center">
                        <motion.button
                            key={`button-${active.drink_name}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.drink_name}-${id}`}
                            ref={ref}
                            className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white sm:rounded-3xl md:h-fit dark:bg-neutral-900"
                        >
                            {/* md:max-h-[90%] */}
                            <motion.div
                                layoutId={`image-${active.drink_name}-${id}`}
                            >
                                <img
                                    width={200}
                                    height={200}
                                    src={`${ulrSrc}/${active.drink_image}`}
                                    alt={active.drink_name}
                                    className="h-80 w-full sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                                />
                            </motion.div>
                            <div className="sticky top-0 z-30 space-y-2 bg-white p-4">
                                <p className="text-3xl font-bold">
                                    {active.drink_name}
                                </p>
                                <p className="text-lg">₱ {active.price}</p>
                            </div>
                            <Separator />
                            <ScrollArea className="h-96">
                                <div className="space-y-2 p-4">
                                    <div className="space-y-2">
                                        <CheckboxVerticalGroup />
                                    </div>
                                </div>

                                <div className="max-w-[500px] p-4">
                                    <Label className="text-xl font-bold">
                                        Note
                                    </Label>
                                    <Textarea />
                                </div>
                            </ScrollArea>

                            <div className="rounded-b-md border-t bg-white px-4 py-4">
                                <div className="flex w-full justify-between">
                                    <Button variant="default">Check Out</Button>
                                    <div>
                                        <p>Total: 100</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            {/* max-w-2xl  */}
            <ul className="mx-auto grid w-full grid-cols-1 items-start gap-4 md:grid-cols-4">
                {drinks.map((card) => (
                    <motion.div
                        layoutId={`card-${card.drink_name}-${id}`}
                        key={card.id}
                        onClick={() => setActive(card)}
                        className="flex w-72 cursor-pointer flex-col rounded-xl border-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    >
                        <div className="flex w-full justify-between p-4">
                            <motion.div
                                layoutId={`image-${card.drink_name}-${id}`}
                            >
                                <img
                                    src={`${ulrSrc}/${card.drink_image}`}
                                    alt={card.drink_name}
                                    className="h-36 w-36 rounded-lg"
                                />
                            </motion.div>
                            <div className="flex flex-col items-center justify-center">
                                <motion.h3
                                    layoutId={`title-${card.drink_name}-${id}`}
                                    className="text-center text-base font-medium text-neutral-800 md:text-left dark:text-neutral-200"
                                >
                                    {card.drink_name}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.price}-${id}`}
                                    className="text-center text-base text-neutral-600 md:text-left dark:text-neutral-400"
                                >
                                    {card.price}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export default CoffeeCard;

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

