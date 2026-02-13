import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useForm } from '@inertiajs/react';

const SwitchToggleLabelDemo = ({
    status,
    id,
}: {
    status: boolean;
    id: string;
}) => {
    const { data, setData, put } = useForm({
        status: !status,
    });

    const handleToggle = () => {
        setData('status', !data.status);

        put(`/admin/orders/${id}`, {
            preserveScroll: true,
            onSuccess: () => console.log('Updated successfully'),
            onError: (e) => console.log(e),
        });
    };

    return (
        // <div className="inline-flex items-center gap-2">
        //     <Switch
        //         size="default"
        //         onCheckedChange={handleToggle}
        //         id="toggle-label"
        //         checked={!data.status}
        //         aria-label="Toggle switch label"
        //     />
        // </div>
        <div className="inline-flex items-center gap-2">
            <Switch
                id="toggle-label"
                checked={!data.status}
                onCheckedChange={handleToggle}
                aria-label="Toggle switch label"
            />
            <Label htmlFor="toggle-label" className="text-sm font-medium">
                {!data.status ? 'Yes' : 'No'}
            </Label>
        </div>
    );
};

export default SwitchToggleLabelDemo;
