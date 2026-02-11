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

export type Addon = {
    id?: string;
    addon_name: string;
    extra_price: string;
};

export const addonsInput: InputForm<Addon>[] = [
    {
        label: 'Addon Name',
        data: 'addon_name',
        inputType: 'text',
    },
    {
        label: 'Price',
        data: 'extra_price',
        inputType: 'number',
    },
];
