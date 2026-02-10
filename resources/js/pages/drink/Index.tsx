import DialogAction from '@/components/dialog-action';
import { drinkInput } from '@/const/drink';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import CardDrink from './card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Product',
        href: '/admin/product',
    },
];

export type Drink = {
    id?: string;
    drink_image: File | null;
    drink_name: string;
    price: number | string;
    is_available: boolean;
};

const Index = () => {
    const { drinks } = usePage<{ drinks: Drink[] }>().props;

    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    const { data, setData, post, processing, errors, reset } = useForm<Drink>({
        drink_image: null,
        drink_name: '',
        price: '',
        is_available: true,
    });

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        post('/admin/drink', {
            onSuccess: () => {
                reset();
                setDialogOpen(false);
                alert('drink created');
            },
            onError: () => {
                alert('An error occurred');
            },
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className='space-x-2'>
                    <DialogAction
                        buttonText="Create Drink"
                        title="Create a Drinks"
                        submit={handleSubmit}
                        processing={processing}
                        isDialogOpen={isDialogOpen}
                        setDialogOpen={setDialogOpen}
                        formInput={drinkInput}
                        errors={errors}
                        data={data}
                        setData={setData}
                    />
                    <DialogAction
                        buttonText="Create Addons"
                        title="Create a Drinks"
                        submit={handleSubmit}
                        processing={processing}
                        isDialogOpen={isDialogOpen}
                        setDialogOpen={setDialogOpen}
                        formInput={drinkInput}
                        errors={errors}
                        data={data}
                        setData={setData}
                    />
                </div>
                <div className="flex gap-2">
                    {drinks.map((i) => (
                        <div key={i.id}>
                            <CardDrink
                                id={i.id}
                                drink_name={i.drink_name}
                                drink_image={i.drink_image}
                                is_available={i.is_available}
                                price={i.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Index;
