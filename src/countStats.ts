export const fetchStats = async () => {
    const response = await fetch("https://apiexplorer.support.rocket.chat/api/v1/statistics.list", {
    method: 'GET',
    headers: {
        'X-Auth-Token':"ReFnX4E6DWjzKv1PFqrTD3IAHxYKQ5hqAL9PrgRJ4yx",
        'X-User-Id': "4M9iA94fqvpo3Ekm8",
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
