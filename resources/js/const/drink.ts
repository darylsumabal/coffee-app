import type { Drink } from '@/pages/drink/Index';

export type InputForm<T> = {
    label: string;
    data: keyof T;
    inputType: 'file' | 'number' | 'text';
};

export const drinkInput: InputForm<Drink>[] = [
    {
        label: 'Drink Name',
        data: 'drink_name',
        inputType: 'text',
    },
    {
        label: 'Drink Price',
        data: 'price',
        inputType: 'number',
    },
    {
        label: 'Drink Image',
        data: 'drink_image',
        inputType: 'file',
    },
];
