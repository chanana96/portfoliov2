import { useState, useEffect } from "react";
import { getHowManyHoursCodedThisWeek } from "@api/wakatime";

interface TimeStats {
    hours: number;
    minutes: number;
}

export const useWakaTime = () => {
    const [timeStats, setTimeStats] = useState<TimeStats | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHours = async () => {
            try {
                const data = await getHowManyHoursCodedThisWeek();
                let totalSeconds = 0;
                data.data.forEach((item) => {
                    totalSeconds += item.grand_total.total_seconds;
                });

                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);

                setTimeStats({ hours, minutes });
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchHours();
    }, []);

    return { timeStats, loading, error };
};
