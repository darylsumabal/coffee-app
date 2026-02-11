import { AppContent } from '@/components/app-content';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ulrSrc } from '@/const/src';
import { usePage } from '@inertiajs/react';
import React from 'react';

const Checkout = () => {
    const { orderData } = usePage().props;
    console.log(orderData);
    return (
        <AppContent>
            <div className="flex w-full justify-evenly py-20">
                <div className="flex w-full flex-1 flex-col">
                    <div>
                        <p>Checkout</p>
                    </div>
                    <form action="" className="flex w-full flex-col">
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

                <div className="flex-1">
                    <p>Review your item</p>
                    <div>
                        <img src={`${ulrSrc}/${orderData.drink.drink_image}`} />
                    </div>
                    <div>{orderData.temperature}</div>
                    <div>{orderData.total}</div>
                </div>
            </div>
        </AppContent>
    );
};

export default Checkout;
