// following cursor Animation "Drone"
let drone = document.querySelector(".drones")

document.body.addEventListener("mousemove", function(e){
    let x = e.offsetX;
    let y = e.offsetY;

    drone.style.left = x + "px";
    drone.style.top = y + "px";
},)

// onclick To change image 
let image = document.querySelector(".main-car")

function changeCar (e){
    image.src = e

}
// LogIn Form
let logIn = document.querySelector(".log-in")

function BavleyHomePage (e) {
    
    let UserName = document.getElementById("username")
    let Email = document.getElementById("email")
    let password = document.getElementById("password")

    if(UserName.value !== "Bavley" || Email.value !== "Bavley@yahoo.com"  || password.value !== "123456789"){
        logIn.href = "#"
    } else {
        logIn.href = "home-page.html"
    }
    
}





















