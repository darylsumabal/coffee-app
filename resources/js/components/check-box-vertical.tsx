import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { Addon } from '@/const/drink';
import { usePage } from '@inertiajs/react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type Props = {
    selectedAddons: Addon[];
    setSelectedAddons: React.Dispatch<React.SetStateAction<Addon[]>>;
    temperature: string | null;
    setTemperature: React.Dispatch<React.SetStateAction<string>>;
};

const CheckboxVerticalGroup = ({
    selectedAddons,
    setSelectedAddons,
    temperature,
    setTemperature
}: Props) => {
    const { addons } = usePage<{ addons: Addon[] }>().props;
    const temperatures = ['Cold', 'Hot'];
    const toggleAddon = (addon: Addon) => {
        setSelectedAddons((prev) =>
            prev.some((a) => a.id === addon.id)
                ? prev.filter((a) => a.id !== addon.id)
                : [...prev, addon],
        );
    };

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <Label className="text-xl font-semibold">
                    Choice of Temperature
                </Label>

                <RadioGroup
                    value={temperature ?? ''}
                    onValueChange={setTemperature}
                    className="flex flex-col gap-2"
                >
                    {temperatures.map((temp) => (
                        <div
                            key={temp}
                            className="flex items-center justify-between"
                        >
                            <Label htmlFor={temp}>{temp}</Label>
                            <RadioGroupItem
                                value={temp}
                                id={temp}
                                className="h-5 w-5"
                            />
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <div className="space-y-4">
                <Label className="text-xl font-semibold">Add-ons</Label>

                <div className="flex flex-col gap-4">
                    {addons
                        .filter((a) => a.availability === 'available')
                        .map((addon) => (
                            <div
                                key={addon.id}
                                className="flex items-center justify-between"
                            >
                                <Label>{addon.addon_name}</Label>

                                <div className="flex items-center gap-2">
                                    <p className="text-sm">
                                        + ₱ {addon.extra_price}
                                    </p>
                                    <Checkbox
                                        checked={selectedAddons.some(
                                            (a) => a.id === addon.id,
                                        )}
                                        onCheckedChange={() =>
                                            toggleAddon(addon)
                                        }
                                        className="size-5"
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
