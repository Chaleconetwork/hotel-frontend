export const Fetch = {
    async getApi(url: string) {
        const token = localStorage.getItem('token') ?? '';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(token)
        const data = await response.json();
        console.log(data.status)
        if (data.status) {
            return null;
        }

        console.log(data);
        
        return data;
    },

    async postApi(url: string, dto: any) {
        try {
            const token = localStorage.getItem('token') ?? '';
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(dto),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data);
            
            return data;
        } catch {
            alert("No se ha podido establecer una comunicación con el servidor...");
            return false;
        } 
    },

    async putApi() {

    },

    async deleteApi() {

    }
}