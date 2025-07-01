import { useEffect, useState } from "react";

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsAgo < 60) return "только что";
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} мин назад`;
  if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} ч назад`;
  return `${Math.floor(secondsAgo / 86400)} дн назад`;
}

export default function useTimeAgo (date: Date, interval: number = 60000): string {
    const [timeAgo, setTimeAgo] = useState(() => formatTimeAgo(date))
    useEffect(() => {
        const tick = () => setTimeAgo(formatTimeAgo(date))
        tick()
        const id = setInterval(tick, interval);
        return () => clearInterval(id)
    }, [date, interval])
    return timeAgo
}
