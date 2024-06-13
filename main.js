
let buttLog =document.querySelector(".buttLog")
let buttMath =document.querySelector(".buttMath")
let buttRead =document.querySelector(".buttRead")
let buttPaint =document.querySelector(".buttPaint")
let buttDaily =document.querySelector(".buttDaily")
let startEx =document.querySelector(".regbtn1")


let buttWorld =document.querySelector(".buttWorld")
buttWorld.addEventListener('click',function() {
    document.location.href = "world.html";
    })
    
buttLog.addEventListener('click',function() {
    document.location.href = "logic.html";
    })
buttMath.addEventListener('click',function() {
    document.location.href = "math.html";
    })
buttRead.addEventListener('click',function() {
    document.location.href = "read.html";
    })
buttPaint.addEventListener('click',function() {
    document.location.href = "paint.html";
    })
buttDaily.addEventListener('click',function() {
    document.location.href = "tests/daily/testDaily.html";
    })

