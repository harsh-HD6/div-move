var left1 = document.querySelector("#l");
var right1 = document.querySelector("#r");
var top1 = document.querySelector("#t");
var bottom1 = document.querySelector("#b");
var horizontal=50;
var vertical=50;
left1.addEventListener("click",function(){
    console.log("left");
    
//     if(horizontal>0){
//         horizontal-=5;
//     }
//     document.querySelector("#mai")
//     x:horizontal;
    if(horizontal>0){
    horizontal-=5;
    }
    document.querySelector("#mai").style.left=horizontal+"%";

})
right1.addEventListener("click",function(){
    console.log("right");
    
    // if(horizontal<100){
    //     horizontal+=5;
    // }
    // document.querySelector("#mai")
    // x:horizontal="%";
    if(horizontal<100){
        horizontal+=5;
    }
    document.querySelector("#mai").style.left=horizontal+"%";

})
top1.addEventListener("click",function(){
    console.log("top");
    
    if(vertical>0){
        vertical-=5;
    }
    document.querySelector("#mai").style.top=vertical+"%";
})
bottom1.addEventListener("click",function(){
    console.log("bottom");

    if(vertical<100){
        vertical+=5;
    }
    document.querySelector("#mai").style.top=vertical+"%";
})