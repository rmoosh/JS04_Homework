 
 
window.addEventListener('load', () => {

    
    
    let temperatureDescription =document.querySelector( ".temperature-description");
    let temperatureDegree=document.querySelector(".temperature-Degree");
    let locationTimezone=document.querySelector(".location-Timezone");
    let temperatureSection=document.querySelector(".temperature-Section");
    const temperatureSpan=document.querySelector(".temperature-section Span");

    if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition(position => {

           let long=position.coords.latitude;
             let lat=position.coords.latitude;

            const x ="https://cors-anywhere.herokuapp.com/";
            const api =`${x} 
            https://api.darksky.net/forecast/b806335a13370c0da6e97f39285f54c7/37.8267,-122.4233`;
            
            
            fetch(api)
                 .then(response => {
                    return response.json();
                })
            .then(data => {
               
                const {temperature,summary,icon } = data.currently;
                temperatureDegree.textContent= temperature;
                temperatureDescription.textContent= summary;
                locationTimezone.textContent= data.timezone;
    
                // forumula for celsius
                let celsius=(temperature - 32)*(5/9);
                setIcons(icon,document.querySelector('.icon'));
    

                // change temperature to celsius/farenheit

                temperatureSection.addEventListener("click",() => {
                   if( temperatureSpan.textContent==="F"){
                       temperatureSpan.textContent="C";
                       temperatureDegree.textContent= Math.floor(celsius);
                   }
                   else{
                       temperatureSpan.textContent="F";
                       temperatureDegree.textContent=temperature;
                   
                   }
                });
            });
                
            
        });
    
    function setIcons(icon,iconID){
        const skycons=new Skycons({color:"white"});
        const currentIcon=icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,skycons[currentIcon]);}
    
    }});