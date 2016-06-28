$(document).ready(function() { 

  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours(); 
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridien = "AM";
    var helsinkiMeridien="AM";
    var tokyoMeridien="AM";
    var wellingtonMeridien="AM";

    
    var nycDay = currentTime.getDay();
    var nycMonth = currentTime.getMonth();
    var nycDate = nycMonth + "" + nycDay;
   //nyc time 
    console.log(nycMonth);
    console.log(nycDay);
     var nycHour = currentTime.getHours();
      
    if (nycHour === 0) {
      nycHour = 12;
    }
  
    //adding helsinki
   
    var helsinkiHour = currentTime.getHours() + 7;
    
    if (helsinkiHour > 23) {
      helsinkiHour = helsinkiHour - 24;
    }
      if (helsinkiHour === 0) {
        helsinkiHour = 12;
      }
  //adding tokyo
    var tokyoHour = currentTime.getHours() + 13;
    
    if (tokyoHour > 23) {
      tokyoHour = tokyoHour - 24;
    }
    
    if (tokyoHour === 0) {
      tokyoHour = 12;
    }
    
  //adding wellington
    var wellingtonHour = currentTime.getHours() + 16;
    
    if (wellingtonHour > 23) {
      wellingtonHour = wellingtonHour - 24;
    }
    
    if (wellingtonHour === 0) {
      wellingtonHour = 12;
    }
    //fixing numbers and format - nyc
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
    if (nycHour < 10) {
      nycHour = "0" + nycHour;
    }
    
    if (nycHour > 12) {
      nycHour = nycHour - 12;
      meridien = "PM";
    }
    
    //helsinki format 
    
     if (helsinkiHour < 10) {
      helsinkiHour = "0" + helsinkiHour;
    }
    
    if (helsinkiHour > 12) {
      helsinkiHour = helsinkiHour - 12;
      helsinkiMeridien = "PM";
    }
    
    //tokyo format
    if (tokyoHour > 12) {
      tokyoHour = tokyoHour - 12;
      tokyoMeridien = "PM";
    }
    
     if (tokyoHour < 10) {
      tokyoHour = "0" + tokyoHour;
    }
    
    //wellington format
     if (wellingtonHour > 12) {
      wellingtonHour = wellingtonHour - 12;
      wellingtonMeridien = "PM";
    }
    
     if (wellingtonHour < 10) {
      wellingtonHour = "0" + wellingtonHour;
    }
    
    
    
    var clockDiv = document.getElementById('nycClock');
    clockDiv.innerText = nycHour + ":" + minutes + ":" + seconds+" "+meridien;
       
    
    var addHelsinki = document.getElementById('helsinkiClock');
      addHelsinki.innerText = helsinkiHour + ":" + minutes + ":" + seconds + " " + helsinkiMeridien; 
    
    var addTokyo = document.getElementById('tokyoClock');
    addTokyo.innerText = tokyoHour + ":" + minutes + ":" + seconds + " " + tokyoMeridien;
    
  var addWellington = document.getElementById('wellingtonClock');
    addWellington.innerText = wellingtonHour + ":" + minutes + ":" + seconds + " " + wellingtonMeridien; 
  
    

  }  
 
   
displayTime();  
setInterval(displayTime, 1000);
});
