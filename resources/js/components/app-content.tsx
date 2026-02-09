import * as React from 'react';
import { SidebarInset } from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';
import NavBar from './nav-bar';

type Props = React.ComponentProps<'main'> & {
    variant?: 'header' | 'sidebar';
};

type User = {
    auth: {
        user: string;
    };
};

export function AppContent({ variant = 'header', children, ...props }: Props) {
    const { auth } = usePage<User>().props;

    if (variant === 'sidebar') {
        return <SidebarInset {...props}>{children}</SidebarInset>;
    }

    return (
        <>
            {!auth.user && (
                <main
                    className="mx-auto flex h-full w-full flex-1 flex-col gap-4 rounded-xl"
                    {...props}
                >
                    <div className="flex justify-center bg-white py-4 shadow-lg shadow-slate-200">
                        <div className="w-7xl">
                            <NavBar />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-7xl">{children}</div>
                    </div>
                </main>
            )}
            {auth.user && (
                <main
                    className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
                    {...props}
                >
                    {children}
                </main>
            )}
        </>
    );
}
