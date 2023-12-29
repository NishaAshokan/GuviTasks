const loadCountryAPI = ()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    //console.log(ountries);
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(" ");

}
const getCountry = (country) => {
    console.log(country);
    return ` 
    
    <div class="country-div", "row", 'col-lg-4', 'col-sm-12'>
    
    <h2> ${country.name.common}</h2>
     <img  src="${country.flags.png}" > 
     <h4>Population :${country.population}</h4>

     <h4>Region : ${country.region}</h4>
     <h4>capital : ${country.apital} </h4>
     <button onclick="window.location.href='https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=fe4278696409fc94e5e9dbebdbcc3e38'">
     check weather</button>
     
   
     </div>`
    

}
loadCountryAPI()