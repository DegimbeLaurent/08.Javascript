
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
      
    if(new Date().getHours()>= 18 || new Date().getHours()<= 3 ){
        document.getElementById("target").innerHTML = "Good evening";
    }else{
        document.getElementById("target").innerHTML = "Hello";
    }
  

})();
