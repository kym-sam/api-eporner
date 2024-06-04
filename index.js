const axios = require('axios');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getEpornerData(query) {
    const url = "https://www.eporner.com/api/v2/video/search/";
    const params = {
        query: query
    };

    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return null;
    }
}

rl.question('Enter the name of the video: ', (query) => {
    getEpornerData(query)
        .then(data => {
            if (data) {
                console.log("Dados retornados da API:");
                console.log(data);
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        })
        .finally(() => {
            // close readline
            rl.close();
        });
});
