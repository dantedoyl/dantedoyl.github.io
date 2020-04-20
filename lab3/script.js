

function ChangeWeatherBack(str){
    switch(str.slice(0,2)){
        
        case "01":
            document.getElementById("WeatherToday").style.backgroundImage = "url('imge/sun.jpg')";
            break;
        case "02":
            document.getElementById("WeatherToday").style.backgroundImage = "url('imge/few-clouds-sky.jpg')";
            break;
        case "03":
            document.getElementById("WeatherToday").style.backgroundImage = "url('imge/clod.jpg')";
            break;
        case "04":
            document.getElementById("WeatherToday").style.backgroundImage = "url('imge/more_cloud.jpg')";
            break;
        case "09":
            document.getElementById("WeatherToday").style.backgroundImage = "url('imge/more_rain.jpg')";
            break;
        case "10":
            document.getElementById("WeatherToday").style.backgroundImage = "url('imge/rain.jpg')";
            break;
        case "11":
            document.getElementById("WeatherToday").style.backgroundImage = "url('imge/thunder.jpg')";
            break;
        case "13":
            document.getElementById("WeatherToday").style.backgroundImage = "url('imge/snow.jpg')";
            break;      
        case "50":
            document.getElementById("WeatherToday").style.backgroundImage = "url('imge/mist.jpg')";
            break;
    }
}

function WeatherForCastThree(blank){
    if(document.getElementById("blok"))
    document.getElementById("blok").remove();
    let new_block = document.createElement("div");
    new_block.id= "blok";
    document.getElementById("WeatherTime").appendChild(new_block);

    for(i=0;i<3;i++){
        let new_blk = document.createElement("div");
        new_blk.className = "cast";
        new_blk.id = "cast_" + i;
        new_blk.innerHTML = "<div class=\"weatherDate\"><span>" + blank.list[i].dt_txt; + "</span></div>";
        new_blk.innerHTML += "<div class=\"HI\"><span class=\"weatherTemp\">" + (Math.round(blank.list[i].main.temp)>=0 ? "+" + Math.round(blank.list[i].main.temp) : Math.round(blank.list[i].main.temp)) + "</span><img class = \"wIcon_hour\" src=http://openweathermap.org/img/wn/"+blank.list[i].weather[0].icon + "@2x.png alt=\"\"></div>";
        new_blk.innerHTML += "<div class=\"weatherCondition\"><span>" + blank.list[i].weather[0].description[0].toUpperCase() + blank.list[i].weather[0].description.slice(1); + "</span></div>";
        document.getElementById("blok").appendChild(new_blk);
}
}

function WeatherForCastNow(blank){
    document.getElementById("city_name").innerHTML="Погода в городе "+blank.name;
    document.getElementById("temperature").innerHTML=(Math.round(blank.main.temp)>=0 ? "+" + Math.round(blank.main.temp) : Math.round(blank.main.temp));
    document.getElementById("condition").innerHTML=blank.weather[0].description[0].toUpperCase() + blank.weather[0].description.slice(1);
    document.getElementById("wIcon").src="http://openweathermap.org/img/wn/"+blank.weather[0].icon + "@2x.png";
    ChangeWeatherBack(blank.weather[0].icon);
    document.getElementById("wind").innerHTML = Math.round(blank.wind.speed) + "м/с";
    document.getElementById("humidity").innerHTML = blank.main.humidity + "%";
    document.getElementById("pressure").innerHTML = Math.round(blank.main.pressure*0.75) + "мм рт. ст.";
}



function main()
{
let city = city_search.value === "" ? "Москва" : encodeURIComponent(city_search.value);
let api_key = "32273e1edabe3f7e12571409dbace3cf";
let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=ru&units=metric&appid=" + api_key;

let Today = fetch(url).then(response=>response.json());

Today.then(
    result=>{
        if (result.cod==="404")
            alert("Город не найден")
        else{
            WeatherForCastNow(result);}
    },
    error => alert(error)

);

url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&lang=ru&units=metric&appid=" + api_key;
let Hour = fetch(url).then(response=>response.json());

Hour.then(
    result=>{
        if (result.cod==="404")
            alert("Город не найден")
        else{
            WeatherForCastThree(result);}
    },
    error => alert(error)
);
}