import { AppleIcon, CherryIcon, GrapeIcon } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const fruits = [
    { label: 'Apple', extraPrice: 10, icon: AppleIcon },
    { label: 'Cherry', extraPrice: 10, icon: CherryIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Apple', extraPrice: 10, icon: AppleIcon },
    { label: 'Cherry', extraPrice: 10, icon: CherryIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Apple', extraPrice: 10, icon: AppleIcon },
    { label: 'Cherry', extraPrice: 10, icon: CherryIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
    { label: 'Grape', extraPrice: 10, icon: GrapeIcon },
];

const temperature = [{ label: 'Cold' }, { label: 'Hold' }];

const CheckboxVerticalGroup = () => {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <Label className="text-xl font-semibold">
                    Choice of Temperature
                </Label>
                <div className="mt-2 flex flex-col gap-4">
                    {temperature.map(({ label }) => (
                        <div
                            key={label}
                            className="flex items-center justify-between gap-2"
                        >
                            <Label htmlFor={label}>{label}</Label>
                            {/* <Checkbox id={label} /> */}
                            <Checkbox
                                className="size-5"
                                id={label}
                                aria-label="Size small"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-4">
                <Label className="text-xl font-semibold">Add-ons</Label>
                <div className="mt-2 flex flex-col gap-4">
                    {fruits.map(({ label, extraPrice }) => (
                        <div
                            key={label}
                            className="flex items-center justify-between gap-2"
                        >
                            <Label htmlFor={label}>{label}</Label>
                            <div className="flex items-center gap-2">
                                <p className="text-sm">+ ₱ {extraPrice}</p>
                                <Checkbox
                                    id={label}
                                    className="size-5"
                                    aria-label="Size small"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CheckboxVerticalGroup;
