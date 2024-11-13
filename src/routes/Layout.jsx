import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="flex min-w-dvw min-h-dvh">
            <Outlet />
        </div>
    )
}
