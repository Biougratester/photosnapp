if(screen.width<=800){
    var f="minrisp";
    var l="listholder";
    var clicked=false;

function S(elid){
    return document.getElementById(elid);
}
function shownav(){
    if(clicked==false){
        S(f).style.left = "0px";
        // S(f).style.top = "0px";
        S(l).style.left = "0px";
        clicked = true;
    }else{
        S(f).style.left = "999999999px";
        S(l).style.left = "999999999px";
        clicked=false;
    }
}
}
    
// }
// }

// window.addEventListener('resize',function(){
//     console.log("hello world")
// })
