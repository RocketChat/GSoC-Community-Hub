import { PUBLIC_URL, PUBLIC_TOKEN, PUBLIC_USERID } from '$env/static/public';

export const fetchStats = async () => {
    const response = await fetch(PUBLIC_URL, {
    method: 'GET',
    headers: {
        'X-Auth-Token':PUBLIC_TOKEN,
        'X-User-Id': PUBLIC_USERID,
        'accept': 'application/json'
        }
    });
  
    if(response.ok){
        const data = await response.json();
        const stats = data.statistics;
        const totalUsers = stats[0]["onlineUsers"];
        const totalMessages = stats[0]["totalMessages"];
        const onlineUsers = stats[0]["onlineUsers"];
        return [totalUsers, totalMessages, onlineUsers];  
    }else{
        return Promise.reject(console.error);
    }

}

