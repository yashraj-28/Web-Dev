
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let timezone = document.querySelector('.location-timezone');
    let weatherIcon = document.querySelector('.w-icon');
    let searchName = document.querySelector('.search-bar');
    let weather = {
        apikey: '4463e0acc9301bb7ab10bf6e8f11b738'
    };

    
function searchWeather(){
    let cityname = searchName.value;
    document.querySelector('.location',).classList.remove('content');
    document.querySelector('.temperature').classList.remove('content');
    //document.body.style.backgroundImage =  "url('https://source.unsplash.com/1600x900/?" + cityname + "')";
    
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4463e0acc9301bb7ab10bf6e8f11b738`;
            
     fetch(api).then(response=>{ 
        return response.json();
        })
        .then(data => {
        console.log(data);
        let temperature =   data.main.temp;
        const {icon , description} = data.weather[0];
        const {name} = data;
               
        //set values
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = description;
        timezone.textContent = name;
        weatherIcon.src= "https://openweathermap.org/img/wn/"+icon+"@2x.png";
        });

        document.querySelector('.temperature').addEventListener('click',()=>{
            //console.log("hi");
            if(document.querySelector('.t-deg').textContent === "F"){
                document.querySelector('.t-deg').textContent = "C";
                let ctemp = temperatureDegree.textContent 
                ctemp = ((parseFloat (ctemp) - 32) / 1.8).toFixed(2);
                temperatureDegree.textContent = ctemp;
            }
             else{
                 document.querySelector('.t-deg').textContent = "F";
                 let ftemp =  temperatureDegree.textContent;
                 ftemp = ((parseFloat (ftemp) * 1.8) + 32).toFixed(2);
                 temperatureDegree.textContent = ftemp;
             }    
        });
}         

document.querySelector('.sbtn').addEventListener('click', ()=>{
    searchWeather();
 });

 searchName.addEventListener('keyup',(event)=>{
    if(event.key == "Enter"){
        searchWeather();
    }
 })


   
    
        
            
       
        
    

    
   
