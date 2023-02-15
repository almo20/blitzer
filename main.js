
function main(){
    var inputSpeed = document.getElementById("speed");
    var inputDir = document.getElementById("dir");
    var inputMaxSpeed = document.getElementById("maxSpeed")
    
    var speed = parseInt(inputSpeed.value);
    var isFacing = inputDir.checked;
    
    var maxSpeed = parseInt(inputMaxSpeed.value);
    var paySpeed = maxSpeed + ((maxSpeed/100)*10);

    console.log(paySpeed)

    if(speed > paySpeed && isFacing == true){
        alert("Du wurdest geblitzt");
    }

    
}