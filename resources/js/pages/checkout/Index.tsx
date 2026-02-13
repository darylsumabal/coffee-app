import { AppContent } from '@/components/app-content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ulrSrc } from '@/const/src';
import { router, useForm, usePage } from '@inertiajs/react';
import { useEchoPublic } from '@laravel/echo-react';
import { Loader2 } from 'lucide-react';
import React from 'react';

type CheckOut = {
    drink_id: string;
    addon_id?: number;
    employee_id: string;
    name: string;
    email: string;
    temperature: string;
    note: string;
    total: string;
};

type OrderData = {
    addons?: {
        id: number;
    };
    drink: {
        id: string;
        drink_image: string;
    };
    note: string | null;
    temperature: string;
    total: string;
};

const Checkout = () => {
    const { orderData } = usePage<{ orderData: OrderData }>().props;
    useEchoPublic('orders', 'OrderEvent', () => {
        router.reload({
            only: ['orderData'],
        });
    });
    const { data, setData, post, processing, errors, reset } =
        useForm<CheckOut>({
            drink_id: orderData.drink?.id,
            addon_id: orderData.addons,
            employee_id: '',
            name: '',
            email: '',
            temperature: orderData.temperature,
            note: orderData.note ?? '',
            total: orderData.total,
        });

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        post('/menu/checkout', {
            onSuccess: () => {
                reset();
            },
            onError: (e) => {
                console.log(e);
            },
        });
    };

    return (
        <AppContent>
            <div>
                <form
                    action=""
                    className="flex h-full justify-evenly py-20"
                    onSubmit={handleSubmit}
                >
                    <div className="flex w-96 flex-col gap-4">
                        <div>
                            <p className="text-xl font-bold">Checkout</p>
                        </div>

                        <div>
                            <Label>Employee ID</Label>
                            <Input
                                value={data.employee_id}
                                onChange={(e) =>
                                    setData('employee_id', e.target.value)
                                }
                            />
                            {errors.employee_id && <p>{errors.employee_id}</p>}
                        </div>
                        <div>
                            <Label>Name</Label>
                            <Input
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                    </div>
                    <div>
                        <Separator orientation="vertical" />
                    </div>
                    <div>
                        <div className="space-y-4">
                            <p className="text-xl font-bold">
                                Review your item
                            </p>
                            <div>
                                <img
                                    src={`${ulrSrc}/${orderData.drink?.drink_image}`}
                                    className="h-64 w-64 rounded-md"
                                />
                            </div>
                            <div>
                                <div>Temperature: {orderData.temperature}</div>

                                <div className="flex gap-0.5">
                                    Addons:
                                    {orderData.addons && orderData.addons ? (
                                        <div>{orderData.addons?.id}</div>
                                    ) : (
                                        <div>No Addons</div>
                                    )}
                                </div>
                                <div>
                                    Note:{' '}
                                    {orderData.note
                                        ? orderData.note
                                        : 'Empty Note'}
                                </div>
                                <div>Total: ₱{orderData.total}</div>
                            </div>
                            <div>
                                <Button>
                                    {processing && (
                                        <Loader2 className="animate-spin" />
                                    )}
                                    Pay Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AppContent>
    );
};

export default Checkout;
