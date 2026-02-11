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
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import ComboboxDemo from './action-combobox';

type DialogProps<T> = {
    buttonText?: string;
    title: string;
    submit: React.SubmitEventHandler<HTMLFormElement>;
    isDialogOpen: boolean;
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
    processing: boolean;
    formInput: InputForm<T>[];
    data: T;
    setData: (key: string, value: string | File) => void;
    errors: Partial<Record<keyof T, string>>;
    isIcon?: boolean;
    icons?: React.ReactNode;
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
    isIcon = false,
    icons,
}: DialogProps<T>) => {
    return (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                {isIcon ? (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                    >
                        {icons}
                    </Button>
                ) : (
                    <Button variant="default">{buttonText}</Button>
                )}
            </DialogTrigger>

            <DialogContent>
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 space-y-3">
                        {formInput?.map((i) => (
                            <div key={i.label} className="flex flex-col gap-1">
                                <Label>{i.label}</Label>
                                {i.inputType === 'combobox' && (
                                    <ComboboxDemo
                                        value={data[i.data] as string} // <-- bind parent value
                                        onChange={(val) => setData(i.data, val)}
                                    />
                                )}
                                {i.inputType === 'file' && (
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
                                )}
                                {i.inputType !== 'combobox' &&
                                    i.inputType !== 'file' && (
                                        <>
                                            <Input
                                                value={
                                                    data[i.data] as
                                                        | string
                                                        | number
                                                }
                                                type={i.inputType}
                                                onChange={(e) =>
                                                    setData(
                                                        i.data,
                                                        e.target.value,
                                                    )
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
