const button = document.getElementById("search-button")
const cityname = document.getElementById("cityname")


async function getdata(city)
{
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=eb33fdeb1e1a446eba585813242301&q=${city}&aqi=no`);
    return await promise.json();   
}

button.addEventListener("click",async()=>{

    const city = cityname.value;
    const result = await getdata(city);
    console.log (result);
})  