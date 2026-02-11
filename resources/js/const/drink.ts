import type { Drink } from '@/pages/drink/Index';

export type InputForm<T> = {
    label: string;
    data: keyof T;
    inputType: 'file' | 'number' | 'text' | 'combobox';
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
        label: 'Drink Availability',
        data: 'availability',
        inputType: 'combobox',
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
    availability: string;
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
    {
        label: 'Drink Availability',
        data: 'availability',
        inputType: 'combobox',
    },
];
