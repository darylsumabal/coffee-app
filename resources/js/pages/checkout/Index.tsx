import { AppContent } from '@/components/app-content';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ulrSrc } from '@/const/src';
import { usePage } from '@inertiajs/react';
import React from 'react';

const Checkout = () => {
    const { orderData } = usePage().props;

    return (
        <AppContent>
            <div className="flex justify-evenly py-20">
                <div>
                    <div className="space-y-7">
                        <div>
                            <p>Checkout</p>
                        </div>
                        <form action="" className="flex flex-col w-96">
                            <div>
                                <Label>Employee ID</Label>
                                <Input />
                            </div>
                            <div>
                                <Label>Name</Label>
                                <Input />
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input />
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Review your item</p>
                        <div>
                            <img
                                src={`${ulrSrc}/${orderData.drink.drink_image}`}
                            />
                        </div>
                        <div>{orderData.temperature}</div>
                        <div>{orderData.total}</div>
                    </div>
                </div>
            </div>
        </AppContent>
    );
};

export default Checkout;
