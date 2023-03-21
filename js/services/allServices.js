async function getUsers(){
    try {
        let res = await fetch("http://localhost:3000/users/");
        let users = await res.json();
      
        return users;

    } catch (error) {
        console.log(error)
    }
}

async function getWebs(){
    try {
        let res = await fetch("http://localhost:3000/tools/");
        
        return res.json();

    } catch (error) {
        console.log(error)
    }
}

async function deleteWeb(id){
    try {
        let res = await fetch(`http://localhost:3000/tools/${id}`, {
            method: "DELETE"
        });
        
        return res.json();

    } catch (error) {
        console.log(error)
    }
}

async function updateWeb(id, name, description, link){
    try {
        let res = await fetch(`http://localhost:3000/tools/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name, description, link})

        });
        
        return res.json();

    } catch (error) {
        console.log(error)
    }
}
async function addWeb(name, description, link){
    try {
        let res = await fetch(`http://localhost:3000/tools/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name, description, link})

        });
        
        return res.json();

    } catch (error) {
        console.log(error)
    }
}

async function getWeb(id){
    try {
        let res = await fetch(`http://localhost:3000/tools/${id}`);
        
        return res.json();

    } catch (error) {
        console.log(error)
    }
}




async function addCorreo(email){
    try {
        let res  = await fetch(`http://localhost:3000/correos`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email})
        });
        
        return res.json();

    } catch (error) {
        console.log(error)
    }
}


export const allServices ={
    getUsers,
    getWebs,
    deleteWeb,
    addWeb,
    getWeb,
    updateWeb,
    addCorreo

}




