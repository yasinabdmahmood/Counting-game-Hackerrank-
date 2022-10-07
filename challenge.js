function counterGame(n) {
let bool=true;
while(n>1){
  let x=Math.log(n)/Math.log(2);
 
  if(Math.floor(x)===x){
    n=n/2;
  }
  else{
    let lower =2**(Math.floor(x))
    n=n-lower;
  }
bool=!bool
}
return !bool? 'Louise' : 'Richard '
}

console.log(counterGame(132))
