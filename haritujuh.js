async function fetchAPI(url){
    const response = await fetch(url)
    const resultJson = await response.json()
    // console.log(resultJson);

    return resultJson

}

async function getUsers(){

    response = await fetchAPI('https://jsonplaceholder.typicode.com/users')
    console.log(response);

    document.getElementById('user-list').innerHTML = ''

    response.map((item) => {
        // console.log(item);
        document.getElementById('user-list').innerHTML += 
        `
            <div id="user-list">
                <p>Name: ${item.name}</p>
                <p>Email: ${item.email}</p>
                <p>Perushaan: ${item.company.name}</p>
                <p>Kota: ${item.address.city}</p>
            </div>
            <hr>
        `
    })
}

getUsers()


async function getAllUser(){

    response = await fetchAPI('http://localhost:8000/user')
    console.log(response);

}

getAllUser()



// Reva
// get api Equran
// Ray
// get movie
