document.querySelector(".nine").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=9;
});
document.querySelector(".eight").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=8;
});
document.querySelector(".seven").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=7;
});
document.querySelector(".modulus").addEventListener("click",()=>{
    document.querySelector("#textbox").value+="%";
});
document.querySelector(".six").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=6;
});
document.querySelector(".five").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=5;
});
document.querySelector(".four").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=4;
});
document.querySelector(".div").addEventListener("click",()=>{
    document.querySelector("#textbox").value+="/";
});
document.querySelector(".three").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=3;
});
document.querySelector(".two").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=2;
});
document.querySelector(".one").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=1;
});
document.querySelector(".mul").addEventListener("click",()=>{
    document.querySelector("#textbox").value+="*";
});
document.querySelector(".zero").addEventListener("click",()=>{
    document.querySelector("#textbox").value+=0;
});
document.querySelector(".sub").addEventListener("click",()=>{
    document.querySelector("#textbox").value+="-";
});
document.querySelector(".add").addEventListener("click",()=>{
    document.querySelector("#textbox").value+="+";
});
document.querySelector(".equal").addEventListener("click",()=>{
    let x=document.querySelector("#textbox").value;
    let y=eval(x);
    document.querySelector("#textbox").value=y;
});
document.querySelector(".del").addEventListener("click",()=>{
    document.querySelector("#textbox").value= "";
});
document.querySelector(".clear").addEventListener("click",()=>{
    document.querySelector("#textbox").value=document.querySelector("#textbox").value.slice(0,-1);
});
document.querySelector(".pow").addEventListener("click",()=>{
    document.querySelector("#textbox").value+="**";
});
document.querySelector(".root").addEventListener("click",()=>{
    document.querySelector("#textbox").value+="**0.5";
});