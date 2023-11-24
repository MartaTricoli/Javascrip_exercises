/*
1. Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
2. La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
3. La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
4. Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.*/

const user = { id: 1, name: 'John' };
const posts = ['Post 1', 'Post 2', 'Post 3'];

function userData (obj) {
    return new Promise ((resolve, reject) => {
        if (typeof obj === "object" && !Array.isArray(obj)) {
            let userData = {};
            resolve (userData = obj);
        } else {
            reject ("obj is not a valid object");
        }
    });
}

function userPost (array) {
    return new Promise ((resolve, reject) => {
        if (Array.isArray(array)) {
            let userPost = [];
            resolve (userPost = array);
        } else {
            reject ("array must be a valid array");
        }
    });
}

userData(user).then(() => {
    console.log(`user name: ${user.name}`);
}).catch((error) => {
    console.log(error);
});

userPost(posts).then(() => {
    posts.forEach(post => console.log(post));
}).catch((error) => {
    console.log(error);
});


