import DialogAction from '@/components/dialog-action';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { drinkInput } from '@/const/drink';
import { ulrSrc } from '@/const/src';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import type { Drink } from './Index';
import { toast } from 'sonner';

const CardDrink = ({
    id,
    drink_name,
    drink_image,
    is_available,
    price,
}: Drink) => {
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
            <div className="flex h-60 items-center justify-center">
                <img
                    src={`${ulrSrc}/${String(drink_image)}`}
                    alt="Shoes"
                    className="h-60 w-full rounded-t-xl"
                />
            </div>
            <Card className="rounded-t-none border-none">
                <CardHeader>
                    <CardTitle>{drink_name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Crossing hardwood comfort with off-court flair.
                        &apos;80s-Inspired construction, bold details and
                        nothin&apos;-but-net style.
                    </p>
                </CardContent>
                <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium uppercase">
                            Price
                        </span>
                        <span className="text-xl font-semibold">₱{price}</span>
                    </div>
                    {/* <Button size="lg">Edit Drink</Button> */}
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
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardDrink;
