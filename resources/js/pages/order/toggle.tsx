import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useForm } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const SwitchToggleLabelDemo = ({
    status,
    id,
}: {
    status: boolean;
    id: string;
}) => {
    const {
        data,
        setData,
        put,
        delete: deleteOrder,
    } = useForm({
        status: !status,
    });

    const handleToggle = () => {
        setData('status', !data.status);

        put(`/admin/orders/${id}`, {
            preserveScroll: true,
            onSuccess: () => {},
            onError: (e) => {
                console.log(e);
            },
        });
    };

    const handleDelete = () => {
        deleteOrder(`/admin/orders/${id}`, {
            onSuccess: () => {
                toast.success('Order deleted!');
            },
            onError: (errors) => {
                // alert('An error occurred');
                console.log(errors);
            },
        });
    };

    return (
        <div className="flex items-center gap-2">
            <div>
                <Switch
                    id="toggle-label"
                    checked={!data.status}
                    onCheckedChange={handleToggle}
                    aria-label="Toggle switch label"
                />
            </div>
            <div>
                <Button variant="ghost" onClick={handleDelete}>
                    <Trash2 />
                </Button>
            </div>
        </div>
    );
};

export default SwitchToggleLabelDemo;
