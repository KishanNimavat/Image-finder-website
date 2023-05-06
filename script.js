dayNightTheme = () => {
  let date = new Date();
  let hour = date.getHours();

  if(hour >= 7 && hour < 19){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
  else{
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
}

window.addEventListener('load', dayNightTheme);

document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter")
    apiRequest();
});

document.querySelector("#search").addEventListener("click", () => {
    apiRequest();
});

apiRequest = () => {

  document.querySelector("#grid").textContent = "";

  const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

  fetch(url)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      loadImages(data);
   })

   .catch(error => console.log(error));   
}

loadImages = (data) => {
  for(let i = 0;i < data.results.length;i++){
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    image.addEventListener("dblclick", function(){
      window.open(data.results[i].links.download, '_blank');
    })
    document.querySelector("#grid").appendChild(image);
  }
}



// window.addEventListener('load', dayNightTheme);

// This code defines three event listeners that are used to execute certain functions when
//  certain actions are performed on a webpage.

// The first event listener is used to execute a function called dayNightTheme when the 
// webpage is loaded. This function likely changes the color scheme of the webpage based 
// on whether it is daytime or nighttime.

// The second event listener is used to execute the apiRequest() function when the user
//  presses the "Enter" key in an HTML input field with an ID of "input". This 
//  function likely retrieves and displays images from the Unsplash API based on the user's 
//  input.

// The third event listener is used to execute the apiRequest() function when the user 
// clicks an HTML button with an ID of "search". This function likely retrieves and displays
//  images from the Unsplash API based on the user's input, just like the second event listener.

// So, in summary, this code sets up event listeners that trigger certain functions when 
// certain actions are performed on a webpage, such as loading the webpage, pressing the 
// "Enter" key in an input field, or clicking a button.




// apiRequest = () => {

//   This code defines a function called apiRequest that is used to fetch images from the 
//   Unsplash API based on a user input.

// The first line of the function selects the HTML element with an ID of "grid" and sets its 
// text content to an empty string. This is done to clear any previously displayed images 
// from the webpage.

// The next line of the function creates a const called url that contains the URL of the 
// Unsplash API endpoint to be queried. This URL includes several parameters, such as the 
// user's search query, the number of images to be returned per page, and a client ID to 
// authenticate the API request.

// The fetch() function is then called with the url as its argument. This function 
// retrieves data from the specified URL, and returns a Promise object that can be used to
//  process the API response.

// The next block of code is a Promise chain that checks whether the API response was 
// successful or not.

// The first .then() method in the chain takes the response object from the fetch() 
// function as an input. This block of code checks whether the response object is considered 
// "ok" or not, which is determined by whether the ok property of the response object is 
// set to true. If the response object is not considered "ok", an error is thrown with a 
// message containing the response status text.

// If the response object is considered "ok", the second block of code in the Promise 
// chain is executed. The second .then() method takes the data returned by the previous .
// then() method as its input. This block of code calls the loadImages() function and 
// passes the data as an argument.

// The loadImages() function is assumed to take the data argument and create and display 
// a series of images on a webpage, as explained in a previous code explanation.

// Finally, if any error is caught in the Promise chain, the .catch() method logs the error
//  to the console.

// So, in summary, this code is used to fetch images from the Unsplash API based on a 
// user input, and display them on a webpage. It includes error handling to catch any
//  errors that may occur during the API request or image loading process.






// loadImages = (data) => {

// This code defines a function called loadImages that takes in one parameter called data. 
// The function is used to load a series of images onto a webpage, based on the data 
// provided to it.

// The function first uses a for loop to iterate through each image in the data object. 
// The data object is assumed to have a property called results which is an array of 
// image objects.

// For each image in the data object, the function creates a new div element using the document.
// createElement() method. This new div element is given a class name of "img" using the 
// className property.

// The function then sets the backgroundImage property of the newly created div element to
//  be the raw URL of the image, along with some additional parameters for the image size. 
//  Specifically, the &w=1366&h=768 parameter is added to ensure that the image has a width 
//  of 1366 pixels and a height of 768 pixels.

// The function then adds an event listener to the newly created div element. Specifically, 
// it listens for a dblclick event, and when triggered, it opens a new window with the 
// download URL of the image.

// Finally, the newly created div element is appended to an existing HTML element with 
// the ID of "grid", which is assumed to be a container for the images to be displayed in.

// Overall, this code is used to dynamically create and display a series of images on a webpage, 
// with the ability to open a download link for each image when it is double-clicked.



