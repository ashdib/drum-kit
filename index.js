// var allButton = document.querySelectorAll(".drum");

//SOLUTION BY ME

// for (var btn of allButton) {
//   btn.addEventListener("click", function () {
//     alert("I got click");
//   });
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I got click");
    })
}