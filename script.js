const button1 = document.getElementById("search-button")
const input = document.getElementById("cityname")

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("time")
const cityTemp = document.getElementById("temp")


async function getdata(city)
{
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=eb33fdeb1e1a446eba585813242301&q=${city}&aqi=no`);
    return await promise.json();   
}

button1.addEventListener("click",async()=>{

    const city = input.value;
    const result = await getdata(city);
    console.log (result);
    cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;


})  