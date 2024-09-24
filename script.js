var con = document.querySelector("#container")
var love = document.querySelector("i")





con.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.8
    love.style.color = '#FE4075';
    

    setTimeout(function () {
        love.style.opacity = 0;
      
    },1000 )

setTimeout(function () {
    love.style.transform = "translate(-50%,-50%) scale(0)";
}, 2000)

});

















// setTimeout(function(){ // set timeout is do program ko delay kar deta hai print hone pr time laga deta hai.
//     console.log("Hello 1") //print second
//  }, 5000)
//     setTimeout(function(){
//     console.log("Hello 2") //print first
//     }, 2000)
