import { useState } from 'react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type ComboboxDemoProps = {
    value: string;
    onChange: (value: string) => void;
};

const frameworks = [
    {
        value: 'available',
        label: 'Available',
    },
    {
        value: 'unavailable',
        label: 'Unavailable',
    },
];

const ComboboxDemo = ({ value, onChange }: ComboboxDemoProps) => {
    const [open, setOpen] = useState(false);


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                    aria-label="Framework combobox"
                >
                    {value
                        ? frameworks.find(
                              (framework) => framework.value === value,
                          )?.label
                        : 'Select...'}
                    <ChevronsUpDownIcon className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        onChange(currentValue); // <-- lift value up
                                        setOpen(false);
                                    }}
                                >
                                    {framework.label}
                                    <CheckIcon
                                        className={cn(
                                            'ml-auto',
                                            value === framework.value
                                                ? 'opacity-100'
                                                : 'opacity-0',
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default ComboboxDemo;
