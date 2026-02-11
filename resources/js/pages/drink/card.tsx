import DialogAction from '@/components/dialog-action';
import { drinkInput } from '@/const/drink';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import type { Drink } from './Index';

const DialogEdit = ({ id, drink_name, is_available, price }: Drink) => {
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
    const { data, setData, put, processing, errors, reset } = useForm<Drink>({
        drink_image: null,
        drink_name: drink_name,
        price: price,
        is_available: is_available,
    });

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        put(`/admin/drink/${id}`, {
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

export default DialogEdit;
