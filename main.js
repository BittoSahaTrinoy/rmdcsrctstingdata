function srk(){
  if(navigator.onLine){
    alert("you are now online");
  }
  if(!navigator.onLine){
    alert("you are currently offline");
    
  }
  
}

setInterval(srk, 5000);