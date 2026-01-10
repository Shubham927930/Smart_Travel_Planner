const params = new URLSearchParams(window.location.search)
const city = params.get("city");

const cityName = document.querySelector("#cityName");
const loading = document.querySelector("#loading");
const placesBox = document.querySelector("#placesBox");
const error = document.querySelector("#error");

if(!city){
    loading.classList.add("hidden");
    error.textContent = "City Not Provided";
    error.classList.remove("hidden");
}else{
    
}