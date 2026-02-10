import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';
import type { InputForm } from '@/const/drink';
import { Loader2 } from 'lucide-react';
import React from 'react';
import type { Dispatch, SetStateAction } from 'react';

type DialogProps<T> = {
    buttonText: string;
    title: string;
    submit: React.SubmitEventHandler<HTMLFormElement>;
    isDialogOpen: boolean;
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
    processing: boolean;
    formInput: InputForm<T>[];
    data: T;
    setData: (key: string, value: string | File) => void;
    errors: Partial<Record<keyof T, string>>;
};
const DialogAction = <T,>({
    buttonText,
    title,
    submit,
    isDialogOpen,
    setDialogOpen,
    processing,
    formInput,
    data,
    setData,
    errors,
}: DialogProps<T>) => {
    return (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">{buttonText}</Button>
            </DialogTrigger>

            <DialogContent>
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3">
                        {formInput?.map((i) => (
                            <div key={i.label}>
                                <Label>{i.label}</Label>
                                {i.inputType === 'file' ? (
                                    <>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                if (
                                                    e.target.files &&
                                                    e.target.files.length > 0
                                                ) {
                                                    setData(
                                                        'drink_image',
                                                        e.target.files[0],
                                                    );
                                                }
                                            }}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Input
                                            value={data[i.data]}
                                            type={i.inputType}
                                            onChange={(e) =>
                                                setData(i.data, e.target.value)
                                            }
                                        />
                                        {errors[i.data] && (
                                            <p>{errors[i.data]}</p>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <DialogFooter className="mt-2">
                        <Button type="submit">
                            {processing && (
                                <div className="animate-spin">
                                    <Loader2 />
                                </div>
                            )}
                            {buttonText}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default DialogAction;
