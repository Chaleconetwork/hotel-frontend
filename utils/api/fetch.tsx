export const Fetch = {
    async getApi() {

    },

    async postApi(url: string, dto: any) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(dto),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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