import DialogAction from '@/components/dialog-action';
import {
    Tabs,
    TabsContent,
    TabsContents,
    TabsList,
    TabsTrigger,
} from '@/components/ui/motion-tabs';
import { Addon, addonsInput, drinkInput } from '@/const/drink';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import CardAddon from './card-addon';
import TableDrink from './table';

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

type Addon = {
    id?: string;
    addon_name: string;
    extra_price: string;
};

const Index = () => {
    const { drinks, addons } = usePage<{ drinks: Drink[]; addons: Addon[] }>()
        .props;

    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    const [isDialogOpenAddon, setDialogOpenAddon] = useState<boolean>(false);

    const { data, setData, post, processing, errors, reset } = useForm<Drink>({
        drink_image: null,
        drink_name: '',
        price: '',
        is_available: true,
    });

    const {
        data: dataAddon,
        setData: setAddon,
        post: postAddon,
        processing: processingAddon,
        errors: errorAddon,
        reset: resetAddon,
    } = useForm<Addon>({
        addon_name: '',
        extra_price: '',
    });

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        post('/admin/drink', {
            onSuccess: () => {
                resetAddon();
                setDialogOpen(false);
                alert('drink created');
            },
            onError: () => {
                alert('An error occurred');
            },
        });
    };
    const handleSubmitAddon = (e: React.SubmitEvent) => {
        e.preventDefault();

        postAddon('/admin/addon', {
            onSuccess: () => {
                reset();
                setDialogOpenAddon(false);
                alert('addon created');
            },
            onError: (e) => {
                console.log(e);
                alert('An error occurred');
            },
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="h-full">
                    <Tabs
                        defaultValue="drink"
                        className="flex h-full flex-col gap-4"
                    >
                        <TabsList>
                            <TabsTrigger key="drink" value="drink">
                                Drink
                            </TabsTrigger>
                            <TabsTrigger key="addon" value="addon">
                                Addon
                            </TabsTrigger>
                        </TabsList>

                        <TabsContents className="h-full">
                            <TabsContent
                                key="drink"
                                value="drink"
                                className="flex h-full flex-col gap-2"
                            >
                                <div>
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
                                </div>
                                <div className="flex h-full flex-wrap gap-4">
                                    {/* {drinks?.map((i) => (
                                        <div key={i.id}>
                                            <CardDrink
                                                id={i.id}
                                                drink_name={i.drink_name}
                                                drink_image={i.drink_image}
                                                is_available={i.is_available}
                                                price={i.price}
                                            />
                                        </div>
                                    ))} */}
                                    <TableDrink drinks={drinks} />
                                </div>
                            </TabsContent>
                            <TabsContent
                                key="addon"
                                value="addon"
                                className="flex h-full flex-col gap-2"
                            >
                                <div>
                                    <DialogAction
                                        buttonText="Create Addons"
                                        title="Create a Addons"
                                        submit={handleSubmitAddon}
                                        processing={processingAddon}
                                        isDialogOpen={isDialogOpenAddon}
                                        setDialogOpen={setDialogOpenAddon}
                                        formInput={addonsInput}
                                        errors={errorAddon}
                                        data={dataAddon}
                                        setData={setAddon}
                                    />
                                </div>
                                <div className="flex h-full flex-wrap gap-4">
                                    {addons?.map((i) => (
                                        <div key={i.id}>
                                            <CardAddon
                                                addon_name={i.addon_name}
                                                extra_price={i.extra_price}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </TabsContents>
                    </Tabs>
                </div>
                <div className="flex gap-2"></div>
            </div>
        </AppLayout>
    );
};

export default Index;
