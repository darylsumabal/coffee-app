import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { Addon } from '@/const/drink';
import { usePage } from '@inertiajs/react';

type SelectedAddon = {
    id: string;
    extra_price: number;
};

type Props = {
    selectedAddons: SelectedAddon | null;
    setSelectedAddons: React.Dispatch<
        React.SetStateAction<SelectedAddon | null>
    >;
    temperature: string;
    setTemperature: React.Dispatch<React.SetStateAction<string>>;
};

const CheckboxVerticalGroup = ({
    selectedAddons,
    setSelectedAddons,
    temperature,
    setTemperature,
}: Props) => {
    const { addons } = usePage<{ addons: Addon[] }>().props;
    const temperatures = ['Cold', 'Hot'];
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
                    <RadioGroup
                        value={selectedAddons?.id ?? ''}
                        onValueChange={(value) => {
                            const selected = addons.find(
                                (a) => String(a.id) === value,
                            );

                            if (selected) {
                                setSelectedAddons({
                                    id: String(selected.id),
                                    extra_price: Number(selected.extra_price),
                                });
                            } else {
                                setSelectedAddons(null);
                            }
                        }}
                        className="flex flex-col gap-2"
                    >
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

                                        <RadioGroupItem
                                            value={String(addon.id)}
                                            id={addon.id}
                                            className="h-5 w-5"
                                        />
                                    </div>
                                </div>
                            ))}
                    </RadioGroup>
                </div>
            </div>
        </div>
    );
};

export default CheckboxVerticalGroup;
