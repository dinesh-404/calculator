let btn = document.getElementsByClassName("btn");
let ans = document.getElementById("result");
let clrbtn = document.getElementById("clr");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (ans.value == 0) {
      if(btn[i].value=="DEL"){
        ans.value=0;
      }
      else{
        ans.value=btn[i].value;
      }
    } 
    else if (btn[i].value == "+") {
      ans.value += btn[i].value;
    } 
    else if (btn[i].value == "=") {
      ans.value = eval(ans.value);
    } 
    else if (btn[i].value == "DEL") {
      if (ans.value.length > 1) {
        ans.value = ans.value.slice(0, -1);
      } else {
        ans.value = 0;
      }
    } 
    else {
      ans.value += btn[i].value;
    }
  });
}
clrbtn.addEventListener("click", () => {
  ans.value = 0;
});