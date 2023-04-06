let btn = document.getElementsByClassName("btn");
let res = document.getElementById("result");
let clr = document.getElementById("clr");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    
    if(res.value==0){
        res.value=btn[i].value;
    }
    
    else if(btn[i].value=="+"){
        let a = res.value;
        res.value+=btn[i].value;
    }
    else if(btn[i].value=="="){
        res.value=eval(res.value);
    }
    else{
        res.value+=btn[i].value;
    }
    // if (res.value > 0) {
    //   res.value += btn[i].value;
    // }
    // else if (res.value=="+") {
        
    // } 
    // else{
    //     res.value=btn[i].value;
    // }
  });
}
clr.addEventListener("click", () => {
  res.value = 0;
});
