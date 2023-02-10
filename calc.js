function display(val){
    document.getElementById("result").value+=val;
    return val;
}
function clearscreen(){
    document.getElementById("result").value="";
}
function answer(){
  let x=document.getElementById("result").value;
  let y=eval(x);
  
  document.getElementById("result").value=y;
  return y;
}