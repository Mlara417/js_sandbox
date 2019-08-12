/**
 * EasyHTTP Fetch Library
 * 
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Moses Lara
 * @License woahthere
 * 
 **/

 class easyHTTP {


    // Make HTTP GET requet 
    async get(url) {
        const response = await fetch(url)
        const resData = await response.json();
        return resData;
    }



    // Make HTTP POST requet 
    async post(url, data) {
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

        const resData = await response.json();
        return resData;

    }

    // Make HTTP PUT requet 
    async put(url, data) {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const resData = await response.json();
            return resData;
    }

    // Make HTTP Delete requet 
    async delete(url) {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });

            const resData = await response.json();
            return resData;
    }
 }