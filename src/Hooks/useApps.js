import axios from "axios";
import { useEffect, useState } from "react"

const useApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const startTime = Date.now();
        
        axios('/appsData.json')
            .then(data => setApps(data.data))
            .catch(err => setError(err))
            .finally(() => {
                const elapsedTime = Date.now() - startTime;
                const remainingTime = Math.max(1000 - elapsedTime, 0);
                
                setTimeout(() => {
                    setLoading(false);
                }, remainingTime);
            })
    }, [])
    return {apps,loading,error}
}

export default useApps;