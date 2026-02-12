import { useState } from 'react';

import { Switch } from '@/components/ui/switch';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const SwitchToggleLabelDemo = ({
    status,
    id,
}: {
    status: boolean;
    id: string;
}) => {
    // const [isChecked, setIsChecked] = useState(status);

    // const { put } = useForm();

    // const handleToggle = () => {
    //     const newStatus = !isChecked;
    //     setIsChecked(newStatus);
    //     put(`/admin/orders/${id}`, {
    //         data: { status: newStatus ? 1 : 0 },
    //         onSuccess: () => {
    //             alert('asd');
    //         },
    //         onError: (errors) => {
    //             console.log(errors);
    //         },
    //     });
    // };
    const { data, setData, put } = useForm({
        status: status ? 1 : 0,
    });

    const handleToggle = () => {
        const newStatus = data.status === 1 ? 0 : 1;
        setData('status', newStatus);

        put(`/admin/orders/${id}`, {
            onSuccess: () => console.log('Updated successfully'),
            onError: () => setData('status', data.status), // revert if failed
        });
        console.log('pk');
    };

    return (
        <div className="inline-flex items-center gap-2">
            {/* <Button onClick={handleToggle}>TEst</Button> */}
            <Switch
                onClick={handleToggle}
                onCheckedChange={handleToggle}
                id="toggle-label"
                checked={data.status === 1}
                aria-label="Toggle switch label"
            />
        </div>
    );
};

export default SwitchToggleLabelDemo;
