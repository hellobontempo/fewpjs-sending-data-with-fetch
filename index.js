// Add your code here
// let formData = {
//     userName: "Claire",
//     userEmail: "claire@me.com"
//   };



function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(resp => resp.json())    
            .then(data => appendsToDom(data))
                .catch(error => errorAlert(error))
    }

function appendsToDom(data){
    let body = document.querySelector("body")
    body.innerHTML = data.id
}

function errorAlert(error){
    let body = document.querySelector("body")
    body.innerHTML = error.message
}
submitData()