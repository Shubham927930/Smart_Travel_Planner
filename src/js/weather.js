const params = new URLSearchParams(window.location.search);
const city = params.get("city");

const cityName = document.querySelector("#cityName");
const loading = document.querySelector("#loading");
const error = document.querySelector("#error");

let API_KEY = "dfad442bbdf67ea99a2952317ae4e1d0";


if(!city){
    loading.classList,add("hidden")
    errorBox.classList.remove("hidden")
}else{
    cityName.textContent = city;

    async function fetchWeather(cityName){
        try{
            
        }catch(error){
            console.log(error, "Error in Fetching Weather Details");
            loading.classList.add("hidden");
            errorBox.classList.remove("hidden");
        }
    }
}