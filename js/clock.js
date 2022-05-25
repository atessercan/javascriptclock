document.getElementById("myName").innerText=prompt("Adınız : ");

function showTime(){
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day=""; d = date.getDay();
  switch(d){
    case 0 : {
      day="Pazar";
      break;
    }
    case 1 : {
      day="Pazartesi";
      break;
    }
    case 2 : {
      day="Salı";""
      break;
    }
    case 3 : {
      day="Çarşamba";
      break;
    }
    case 4 : {
      day="Perşembe";
      break;
    }
    case 5 : {
      day="Cuma";
      break;
    }
    case 6 : {
      day="Cumartesi";
      break;
    }
  }
  let myDiv = document.getElementById("myClock");
  myDiv.innerText= hours + ":" + minutes + ":" + seconds + " " + day;
  setTimeout(showTime, 1000);
};
