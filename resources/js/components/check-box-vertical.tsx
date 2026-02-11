import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { Addon } from '@/const/drink';
import { usePage } from '@inertiajs/react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
const temperature = [{ label: 'Cold' }, { label: 'Hold' }];

const CheckboxVerticalGroup = () => {
    const { addons } = usePage<{ addons: Addon[] }>().props;
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <Label className="text-xl font-semibold">
                    Choice of Temperature
                </Label>
                <div className="mt-2">
                    <RadioGroup className="flex flex-col gap-2">
                        {temperature.map(({ label }) => (
                            <div
                                key={label}
                                className="flex items-center justify-between"
                            >
                                <Label htmlFor={label}>{label}</Label>
                                <RadioGroupItem
                                    value={label}
                                    id={label}
                                    className="h-5 w-5"
                                />
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            </div>
            <div className="space-y-4">
                <Label className="text-xl font-semibold">Add-ons</Label>
                <div className="mt-2 flex flex-col gap-4">
                    {addons.map(({ addon_name, extra_price }) => (
                        <div
                            key={addon_name}
                            className="flex items-center justify-between gap-2"
                        >
                            <Label htmlFor={addon_name}>{addon_name}</Label>
                            <div className="flex items-center gap-2">
                                <p className="text-sm">+ ₱ {extra_price}</p>
                                <Checkbox
                                    id={addon_name}
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
