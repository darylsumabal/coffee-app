import { Button } from '@/components/ui/button';
import { addonsInput, drinkInput, type Addon } from '@/const/drink';
import { router, useForm } from '@inertiajs/react';
import type { Row } from '@tanstack/react-table';
import { Pencil, Trash2Icon } from 'lucide-react';
import { toast } from 'sonner';
import type { Drink } from './Index';
import { useEffect, useState } from 'react';
import DialogAction from '@/components/dialog-action';

export const DeleteAddon = ({ row }: { row: Row<Addon> }) => {
    const handleDelete = () => {
        router.delete(`/admin/addon/${row.original.id}`, {
            onSuccess: () => {
                toast.success('Addon deleted!');
            },
            onError: (errors) => {
                // alert('An error occurred');
                console.log(errors);
            },
        });
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label={`product-${row.original.id}-remove`}
            onClick={handleDelete}
        >
            <Trash2Icon />
        </Button>
    );
};

export const DeleteDrink = ({ row }: { row: Row<Drink> }) => {
    const handleDelete = () => {
        router.delete(`/admin/drink/${row.original.id}`, {
            onSuccess: () => {
                toast.success('Addon deleted!');
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label={`product-${row.original.id}-remove`}
            onClick={handleDelete}
        >
            <Trash2Icon />
        </Button>
    );
};

export const EditDrink = ({ row }: { row: Row<Drink> }) => {
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
    const { data, setData, put, processing, errors, reset } = useForm<Drink>({
        drink_image: null,
        drink_name: row.original.drink_name,
        price: row.original.price,
        availability: row.original.availability,
    });
    useEffect(() => {
        if (isDialogOpen) {
            setData({
                drink_name: row.original.drink_name,
                price: row.original.price,
                availability: row.original.availability,
            });
        }
    }, [isDialogOpen, row, setData]);
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        put(`/admin/drink/${row.original.id}`, {
            onSuccess: () => {
                reset();
                setDialogOpen(false);
                toast.success('Drink updated!');
            },
            onError: (errors) => {
                // alert('An error occurred');
                console.log(errors);
            },
        });
    };

    return (
        <>
            <DialogAction
                buttonText="Edit"
                isIcon={true}
                icons={<Pencil />}
                title="Edit Drinks"
                submit={handleSubmit}
                processing={processing}
                isDialogOpen={isDialogOpen}
                setDialogOpen={setDialogOpen}
                formInput={drinkInput}
                errors={errors}
                data={data}
                setData={setData}
            />
        </>
    );
};

export const EditAddon = ({ row }: { row: Row<Addon> }) => {
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
    const { data, setData, put, processing, errors, reset } = useForm<Addon>({
        addon_name: row.original.addon_name,
        extra_price: row.original.extra_price,
        availability: row.original.availability,
    });

    useEffect(() => {
        if (isDialogOpen) {
            setData({
                addon_name: row.original.addon_name,
                extra_price: row.original.extra_price,
                availability: row.original.availability,
            });
        }
    }, [isDialogOpen, row, setData]);
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        put(`/admin/addon/${row.original.id}`, {
            onSuccess: (page) => {
                reset();
                setDialogOpen(false);
                // alert('drink created');
                console.log(page.props.flash);
                toast.success('Addon updated!');
            },
            onError: (errors) => {
                // alert('An error occurred');
                console.log(errors);
            },
        });
    };

    return (
        <>
            <DialogAction
                isIcon={true}
                icons={<Pencil />}
                buttonText="Edit"
                title="Edit Drinks"
                submit={handleSubmit}
                processing={processing}
                isDialogOpen={isDialogOpen}
                setDialogOpen={setDialogOpen}
                formInput={addonsInput}
                errors={errors}
                data={data}
                setData={setData}
            />
        </>
    );
};
