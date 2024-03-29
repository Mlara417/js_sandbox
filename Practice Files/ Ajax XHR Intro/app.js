document.getElementById('button').addEventListener('click', loadData());

function loadData() {
    //Create a XHR Object
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET', 'data.txt', true);

    /* console.log('READYSTATE', xhr.readyState); */

    //Optional - Used for spinners/loader
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

/*     
Old code that is not used since above code starts at readyState4

    xhr.onreadystatechange = function() {
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200 && this.readyState ===4){
            console.log(this.responseText);
        }
    } */

xhr.onerror = function (){
    console.log('Request error...');
}

xhr.send();

//readyState Values
//0: request not initialized
//1: server connection established
//2: request received
//3: precessing request
//4: request finished and response is ready



//HTTP Statuses
//200: 'OK'
//403: 'Forbidden'
//404: 'Not Found'


}

