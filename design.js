var a=Math.ceil(Math.random()*100);
var count=0;
func=()=>{
  const input=parseInt(document.getElementById("n1").value);
  if(input==a){
    document.getElementById("result").textContent="Congratulations! You have guessed the number by "+count+" tries";
  }
  else if(input>a)
  {
    document.getElementById("result").textContent="Try with Smaller Number";
    count++;
  }
  else
  {
    document.getElementById("result").textContent="Try with Greater Number";
    count++;
  }
}