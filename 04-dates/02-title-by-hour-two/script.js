
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    
    if( (new Date().getHours()>= 17 && new Date().getMinutes() >= 30) || new Date().getHours <= 4 ){
        document.getElementById("target").innerHTML = "Good evening";
    }else{
        document.getElementById("target").innerHTML = "Hello";
    }

})();
