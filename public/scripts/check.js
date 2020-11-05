const URL = 'http://213.189.216.91:4000/';

function check() {
    fetch(URL + 'check', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                null: null,
            })
        })
        .then(response => response.text())
        .then((response) => { 
            console.log(1)
        })
        .catch(err => console.log(err))

}
