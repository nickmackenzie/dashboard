let apiKey = "4d76752d9e9ad60f9852c2b9fcdd3a6d";
async function getCurrentPosition() {
    let cords = {
    };
    navigator.geolocation.getCurrentPosition(async function(position) {
        console.log(position);
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        cords = {
            lat: lat,
            long: long
        };
    });
}
getCurrentPosition().then((cords)=>{
    console.log(cords);
});
function getCurrentWeather(long, lat) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    fetch("api.openweathermap.org/data/2.5/weather?lat=44.0041472&lon=-77.1588096&appid=4d76752d9e9ad60f9852c2b9fcdd3a6d", requestOptions).then((response)=>response.text()
    ).then((result)=>console.log(result)
    ).catch((error)=>console.log("error", error)
    );
}

//# sourceMappingURL=index.fe9369f2.js.map
