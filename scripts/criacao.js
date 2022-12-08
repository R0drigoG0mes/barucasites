const divman = document.getElementById("man");

divman.addEventListener("touchmove", function(e){
    var toque = e.changedTouches;
    console.log(toque[0].pageX);
})

