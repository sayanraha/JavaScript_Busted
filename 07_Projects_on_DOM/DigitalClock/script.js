const clock = document.getElementById('clock')


/* The `setInterval` function is used to repeatedly execute a specified function at a given time
interval. In this case, the function is defined as an anonymous function that updates the `clock`
element's innerHTML with the current time every second (1000 milliseconds). This creates a live
clock that updates every second. */
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},1000)

