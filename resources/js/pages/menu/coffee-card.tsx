import CheckboxVerticalGroup from '@/components/check-box-vertical';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { ulrSrc } from '@/const/src';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { router, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useId, useRef, useState } from 'react';
import type { Drink } from '../drink/Index';

interface CoffeeCardProps {
    drinks?: Drink[];
}

export function CoffeeCard({ drinks: propDrinks }: CoffeeCardProps = {}) {
    const page = usePage<{ drinks: Drink[] }>();
    const drinks = propDrinks || page.props.drinks || [];

    const [active, setActive] = useState<Drink | null>(null);
    const [note, setNote] = useState<string>('');
    const [addons, setAddons] = useState<{
        id: string;
        addon: string;
        extra_price: number;
    } | null>(null);

    const [temperature, setTemperature] = useState<string>('');

    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') handleClose();
        }

        document.body.style.overflow = active ? 'hidden' : 'auto';
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => handleClose());

    const handleClose = () => {
        setActive(null);
        setNote('');
        setAddons(null);
    };

    const handleCardClick = (drink: Drink) => {
        // Only allow click if drink is available
        if (drink.availability === 'unavailable') return;

        setActive(drink);
    };

    const calculateTotal = () => {
        if (!active) return 0;

        const basePrice = Number(active.price);
        const addonPrice = addons ? Number(addons.extra_price) : 0;
        return basePrice + addonPrice;
    };

    const handleCheckout = () => {
        if (!active) return;

        const orderData = {
            drink: active,
            temperature,
            note,
            addons: {
                extra_price: addons?.extra_price,
                addon: addons?.addon,
            },
            total: calculateTotal(),
        };

        router.visit('/menu/checkout', {
            method: 'get', // or 'post' if you want to send order data
            data: orderData, // optional, send order data to next page,
            preserveState: true,
        });
        handleClose();
    };

    return (
        <>
            {/* BACKDROP */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-10 bg-black/20"
                    />
                )}
            </AnimatePresence>

            {/* MODAL */}
            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 z-[100] grid place-items-center p-4">
                        <motion.button
                            key={`button-${active.drink_name}-${id}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg lg:hidden"
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${active.drink_name}-${id}`}
                            ref={ref}
                            className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white shadow-2xl sm:rounded-3xl md:max-h-[90vh] dark:bg-neutral-900"
                        >
                            {/* IMAGE */}
                            <motion.div
                                layoutId={`image-${active.drink_name}-${id}`}
                            >
                                <img
                                    src={`${ulrSrc}/${active.drink_image}`}
                                    alt={active.drink_name}
                                    className="h-80 w-full object-cover"
                                />
                            </motion.div>

                            {/* HEADER */}
                            <div className="sticky top-0 z-30 bg-white p-4 dark:bg-neutral-900">
                                <motion.h3
                                    layoutId={`title-${active.drink_name}-${id}`}
                                    className="text-3xl font-bold"
                                >
                                    {active.drink_name}
                                </motion.h3>

                                <motion.p
                                    layoutId={`price-${active.price}-${id}`}
                                    className="text-lg font-semibold"
                                >
                                    ₱ {active.price}
                                </motion.p>
                            </div>

                            <Separator />

                            {/* SCROLLABLE CONTENT */}
                            <div className="min-h-0 flex-1">
                                <ScrollArea className="h-full">
                                    <div className="space-y-6 p-4">
                                        {/* OPTIONS */}
                                        <CheckboxVerticalGroup
                                            selectedAddons={addons}
                                            setSelectedAddons={setAddons}
                                            temperature={temperature}
                                            setTemperature={setTemperature}
                                        />

                                        {/* NOTE */}
                                        <div className="space-y-2">
                                            <Label className="text-lg font-bold">
                                                Special Instructions
                                            </Label>

                                            <Textarea
                                                placeholder="Add any special instructions here..."
                                                value={note}
                                                onChange={(e) =>
                                                    setNote(e.target.value)
                                                }
                                                rows={3}
                                            />
                                        </div>
                                    </div>
                                </ScrollArea>
                            </div>

                            {/* FOOTER */}
                            <div className="sticky bottom-0 border-t bg-white px-4 py-4 dark:bg-neutral-900">
                                <div className="flex items-center gap-4">
                                    <Button
                                        size="lg"
                                        className="flex-1"
                                        disabled={temperature === ''}
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </Button>

                                    <div className="text-right">
                                        <p className="text-sm text-neutral-600">
                                            Total
                                        </p>
                                        <p className="text-xl font-bold">
                                            ₱ {calculateTotal().toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* CARD GRID */}
            <ul className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {drinks.map((card) => {
                    const isActive = active?.id === card.id;
                    const isAvailable = card.availability;

                    return (
                        <motion.li
                            key={card.id}
                            layoutId={`card-${card.drink_name}-${id}`}
                            onClick={() => handleCardClick(card)}
                            className={`overflow-hidden rounded-xl border-2 border-neutral-200 ${
                                isAvailable
                                    ? 'cursor-pointer hover:shadow-lg'
                                    : 'cursor-not-allowed opacity-50'
                            }`}
                            animate={{
                                opacity: isActive ? 0 : isAvailable ? 1 : 0.5,
                            }}
                            style={{
                                pointerEvents:
                                    isActive || !isAvailable ? 'none' : 'auto',
                                opacity: isActive
                                    ? 0
                                    : isAvailable === 'available'
                                      ? 1
                                      : 0.5,
                            }}
                        >
                            <div className="relative">
                                <motion.div
                                    layoutId={`image-${card.drink_name}-${id}`}
                                    className="h-48 overflow-hidden"
                                >
                                    <img
                                        src={`${ulrSrc}/${card.drink_image}`}
                                        className="h-full w-full object-cover"
                                    />
                                </motion.div>

                                {isAvailable === 'unavailable' && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                        <span className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white">
                                            Unavailable
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-4">
                                <motion.h3
                                    layoutId={`title-${card.drink_name}-${id}`}
                                    className="text-lg font-semibold"
                                >
                                    {card.drink_name}
                                </motion.h3>

                                <motion.p
                                    layoutId={`price-${card.price}-${id}`}
                                    className="text-xl font-bold"
                                >
                                    ₱ {card.price}
                                </motion.p>
                            </div>
                        </motion.li>
                    );
                })}
            </ul>
        </>
    );
}

export const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
    >
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);
