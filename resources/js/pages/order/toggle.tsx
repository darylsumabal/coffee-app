import { useState } from 'react';

import { Switch } from '@/components/ui/switch';
import { useForm } from '@inertiajs/react';

const SwitchToggleLabelDemo = ({
    status,
    id,
}: {
    status: boolean;
    id: string;
}) => {
    const [isChecked, setIsChecked] = useState(status);
    const { put } = useForm({
        status: status,
    });

    const handleToggle = () => {
        setIsChecked(!isChecked);
        put(`/admin/orders/${id}`, {
            data: { status: !isChecked },
            onSuccess: () => {
                console.log('Updated successfully');
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <div className="inline-flex items-center gap-2">
            <Switch
                onCheckedChange={handleToggle}
                id="toggle-label"
                checked={isChecked}
                aria-label="Toggle switch label"
            />
        </div>
    );
};

export default SwitchToggleLabelDemo;
