function sayHello(N) {
    if (N == 0) return;

    console.log('hello');
    sayHello(N-1);
}

sayHello(4);
// fetch('https://restcountries.com/v3.1/all')
// .then((response) => {
//     return response.json();
// })
// .then((countries) => {
//     console.log(countries.map(country => country.flag).join(' '));
// })
// .catch((error) => {
//     console.log('error fetching countries',error);
// })

// fetch('https://dog.ceo/api/breeds/image/random')
// .then((response) => {
//     return response.json();
// })
// .then((dog) => {
//     console.log(dog.map( => country.message).join(' '));
// })
// .catch((error) => {
//     console.log('error fetching countries',error);
// })
// Make a GET request using fetch
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(response => {
//     // Check if the response is successful (status code 200-299)
//     if (response.ok) {
//       // Parse the response JSON
//       return response.json();
//     } else {
//       // If the response is not successful, throw an error
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//   })
//   .then(data => {
//     // Print the message and status
//     console.log("Message:", data.message);
//     console.log("Status:", data.status);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error("Fetch error:", error);
//   });
  //https://api.dictionaryapi.dev/api/v2/entries/en/%3Chi%3E
  const encodedWord = encodeURIComponent("<hi>");

// Make a GET request using fetch
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodedWord}`)
  .then(response => {
    // Check if the response is successful (status code 200-299)
    if (response.ok) {
      // Parse the response JSON
      return response.json();
    } else {
      // If the response is not successful, throw an error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  })
  .then(data => {
    // Update the HTML element with the dictionary entry
    const resultElement = document.getElementById("result");
    
    if (data.length > 0) {
      const entry = data[0];
      resultElement.innerHTML = `
        <p>Word: ${entry.word}</p>
        <p>Definition: ${entry.meanings[0].definitions[0].definition}</p>
        <p>Part of Speech: ${entry.meanings[0].partOfSpeech}</p>
      `;
    } else {
      resultElement.innerHTML = "<p>No information found for the given word.</p>";
    }
  })
  .catch(error => {
    // Handle errors
    console.error("Fetch error:", error);
  });   