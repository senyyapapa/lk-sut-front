interface NotificationProps{
    label: string;
    description: string;
}
export default function Notifications({label, description}: NotificationProps) {
    return (
        <div className="notif-window rounded-lg bg-red-200">
            <div>
                {label}
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}
