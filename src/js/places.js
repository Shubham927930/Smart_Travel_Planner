const params = new URLSearchParams(window.location.search);
const city = params.get("city");

const cityName = document.querySelector("#cityName");
const loading = document.querySelector("#loading");
const placesBox = document.querySelector("#placesBox");
const error = document.querySelector("#error");

let openweathermap_apikey = "dfad442bbdf67ea99a2952317ae4e1d0";
let unsplash_apikey = "eOz-55_efPndPY4knktKiO0pIZ9fDCvz6nYr_VB1Dy0";
let geoapify_apikey = "21beeaccf64941959a81e1ee86a2e4bc";

if (!city) {
  loading.classList.add("hidden");
  error.textContent = "City Not Provided";
  error.classList.remove("hidden");
} else {
  cityName.textContent = `Best places in ${city}`;

  async function fetchPlaces(cityName) {
    try {
      // Getting Lat & Lon from openweathermap api
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${openweathermap_apikey}`
      );

      const geoData = await geoRes.json();

      if (!geoData.length) throw new Error("City Not Found");

      let { lat, lon } = geoData[0];

      // Get Places from GeoAPIfy
      const placesRes = await fetch(
        `https://api.geoapify.com/v2/places?categories=tourism.sights&filter=circle:${lon},${lat},12000&limit=12&apiKey=${geoapify_apikey}`
      );

      if (!placesRes.ok) throw new Error("Places API Failed");

      const data = await placesRes.json();
      loading.classList.add("hidden");


    } catch (err) {
      console.log("Places Error:", err.message);
      loading.classList.add("hidden");
      error.textContent = err.message;
      error.classList.remove("hidden");
    }
  }
  fetchPlaces(city);
}
