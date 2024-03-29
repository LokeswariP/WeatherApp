const a=document.querySelector("#name");
const d=document.querySelector(".temp");
const e=document.querySelector(".temps");
const f=document.querySelector("#humd");
const g=document.querySelector("#wind");
const p=document.querySelector("#hu");
const l=document.querySelector("#win");
const url = "https://weatherapi-com.p.rapidapi.com/current.json?q="
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '75c84088e1mshf9539f1e2d0626ep1ffc03jsnd78b21ea46b0',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
 async function b()
{
   
    const c=await fetch(url+a.value,options)
    const data=await c.json();
    console.log(data);
d.innerText=data.current.temp_c+"°c";
e.innerText="📍"+data.location.name;
f.innerText="🌥️"+data.current.humidity;
g.innerText="🍃"+data.current.wind_kph;
p.innerText="humidity";
l.innerText="wind"
}
function h(e)
{
    //key endhe erripukahtml file
if(e.key=="Enter")
{
    b();
}
}