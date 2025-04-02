import { PUBLIC_URL, PUBLIC_TOKEN, PUBLIC_USERID } from '$env/static/public';

interface StatsResponse{
    totalUsers?: number,
    totalMessages?: number, 
    onlineUsers?: number 
}

export const fetchStats = async () => {
    try{
        const res = await fetch(PUBLIC_URL, {
        method: 'GET',
        headers: {
            'X-Auth-Token':PUBLIC_TOKEN,
            'X-User-Id': PUBLIC_USERID,
            'accept': 'application/json'
            },
        });
            const data = await res.json();
            const stats = data?.statistics;
            const response : StatsResponse = {
                totalUsers : stats[0]["onlineUsers"],
                totalMessages : stats[0]["totalMessages"], 
                onlineUsers : stats[0]["onlineUsers"]
            }
            return response;  
    }catch(e){
        if(e instanceof Error){
            console.error(e.message);
        }
    }

}

