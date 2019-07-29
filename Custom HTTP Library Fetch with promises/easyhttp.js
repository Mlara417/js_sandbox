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
    get(url) {
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }



    // Make HTTP POST requet 
    post(url, data) {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Make HTTP POST requet 
    put(url, data) {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Make HTTP Delete requet 
    delete(url) {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => resolve('Resource deleted..'))
            .catch(err => reject(err));
        });
    }
 }