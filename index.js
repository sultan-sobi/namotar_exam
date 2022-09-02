var num1=Math.ceil(Math.random()*20);
var num2=Math.ceil(Math.random()*20);
var question=document.getElementById("question");
var win=document.getElementById("win")
question.innerHTML=`${num1} কে ${num2} দ্বারা গুণ করলে গুণফল কত হবে? `
 var realAns=num1*num2;

 var formE=document.getElementById("form");
 var inputE=document.getElementById("input");
var count=JSON.parse(localStorage.getItem("count"));
if(!count){
  count=0;
}

win.innerHTML=`তোমার নম্বরঃ ${count}`;

  formE.addEventListener("submit",()=>{
    var userResult=+inputE.value;
    if(userResult==realAns){
      count++;
      localS();
    }else{
      count--
      localS();
    }
    
})
function localS(){
localStorage.setItem("count",JSON.stringify(count))
}








