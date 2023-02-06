
//2
//for (let a = 2; a < 20; a++) 
    //if (a % 2 == 0){
        //console.log(a);
    //}

//1
//let txt=1;
//while(txt<=150){
  //console.log(txt+" Hello World")
  //txt++
//}

//3
//function txt (x){
   // if(x>0)
    //{
      //console.log("Hello")
    //}  else
    //{
      //console.log("olleH")
    //}
  //}
  //txt(-1)

 //4
 const fs = require('fs')
 
function txt(a,b){
  let i =a*b
  let text = fs.readFileSync('txt.txt','utf8') 
  fs.writeFileSync('txt.txt',text+"Answer "+i)
}

txt(1,2) 