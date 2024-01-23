const button1 = document.getElementById("search-button")
const input = document.getElementById("cityname")

const cityname = document.getElementById("city-name")
const time = document.getElementById("time")
const temp = document.getElementById("temp")


async function getdata(city)
{
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=eb33fdeb1e1a446eba585813242301&q=${city}&aqi=no`);
    return await promise.json();   
}

button1.addEventListener("click",async()=>{

    const city = input.value;
    const result = await getdata(city);
    console.log (result);
    // cityname.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
})  