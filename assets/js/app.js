// Asigne nombres legibles y corregi lo que va dentro de los parentesis
const nombre = document.querySelector('.name');
const blog = document.querySelector('.blog');
const newlocation = document.querySelector('.location');


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;


//Agregue el async
async function displayUser(username) {
  nombre.textContent = 'cargando...';
  await fetch(`${usersEndpoint}/${username}`)

    //Cambie la estructura del fetch y agregue las promesas THEN
    .then(response => response.json())

    //Agregue el then  y con un parametro data para poder seguir 
    .then(data => {

      //Corregi , cambie '' por template literals
      nombre.textContent = `${data.name}`;
      blog.textContent = `${data.blog}`;
      newlocation.textContent = `${data.location}`;
    })




}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);