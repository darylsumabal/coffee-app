import DialogAction from '@/components/dialog-action';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { addonsInput, type Addon } from '@/const/drink';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';

const CardAddon = ({ id, addon_name, extra_price }: Addon) => {
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    const { data, setData, put, processing, errors, reset } = useForm<Addon>({
        addon_name: addon_name,
        extra_price: extra_price,
    });

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        put(`/admin/addon/${id}`, {
            onSuccess: (page) => {
                reset();
                setDialogOpen(false);
                // alert('drink created');
                console.log(page.props.flash);
                toast.success('Drink updated!');
            },
            onError: (errors) => {
                // alert('An error occurred');
                console.log(errors);
            },
        });
    };

    return (
        <div className="w-96">
            <Card>
                <CardHeader>
                    <CardTitle>{addon_name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium uppercase">
                            Price
                        </span>
                        <span className="text-xl font-semibold">
                            ₱{extra_price}
                        </span>
                    </div>
                </CardContent>
                <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
                    <DialogAction
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
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardAddon;
