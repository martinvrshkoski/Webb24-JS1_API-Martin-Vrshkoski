// Styling for the h1 element
let h1 = document.querySelector("h1");
h1.style.boxShadow = "1px 1px 1px 2px";
h1.style.backgroundColor = "white";

// Styling for the body element
let body = document.querySelector("body");
body.style.backgroundImage = "url(../resources/users.jpg)";
body.style.backgroundPosition = "center";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.height = "95vh";

// Styling for the main element
let main = document.querySelector("main");
main.style.backgroundColor = "white";
main.style.height = "300px";
main.style.width = "300px";
main.style.margin = "0 auto 10px auto";
main.style.padding = "10px 0 0 0"
main.style.borderRadius = "20px";
main.style.textAlign = "center";
main.style.border = "3px solid black"

// This function gets data from the API with async and awaits. 
// Here i used try and catch so that if an error occured it catches it with the catch block
async function fetchUserData() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];
  
      displayUserData(user);
    } catch (error) {
      console.error('There was an error when retrieving data:', error);
    }
  }
  
  // The function is used to display the data on the website
  function displayUserData(user) {
    const userContainer = document.getElementById('user-container');
    
    // This code clears away previous data
    userContainer.innerHTML = '';
  
    // Here it creates and element and gives it class attribute 
    const userElement = document.createElement('div');
    userElement.classList.add('user');
    
    // This is how the data is displayed on the website and gets the data from the api 
    // piece by piece by putting this code inside the user-container with the .innerHTML
    userElement.innerHTML = `
      <img src="${user.picture.large}" alt="Profile Picture">
      <p>Full name: ${user.name.first} ${user.name.last}</p>
      <p>Gender: ${user.gender}</p>
      <p>E-mail: ${user.email}</p>
      <p>Phone number: ${user.phone}</p>
    `;
  
    userContainer.appendChild(userElement);
  }
  
  // Creates an event listener and applies styling
  let fetchButton = document.getElementById('fetch-button')
  
  fetchButton.addEventListener('click', fetchUserData);
  fetchButton.style.padding = "10px 20px";
  fetchButton.style.fontSize = "16px";
  fetchButton.style.cursor = "pointer";
  fetchButton.style.marginBottom = "20px";
  fetchButton.style.backgroundColor = "lightblue";
  fetchButton.style.borderRadius = "30px";
  fetchButton.style.fontWeight = "bold";

