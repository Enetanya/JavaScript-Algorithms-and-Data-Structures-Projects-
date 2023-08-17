function rot13(str) {
    //let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
      let ans = "";
      for (let a of str){
        
      if (a === "A"){ans += "N";} 
      if (a === "B"){ans += "O";} 
      if (a === "C"){ans += "P";} 
      if (a === "D"){ans += "Q";}
      if (a === "E"){ans += "R";}
      if (a === "F"){ans += "S";}
      if (a === "G"){ans += "T";}
      if (a === "H"){ans += "U";}
      if (a === "I"){ans += "V";}
      if (a === "J"){ans += "W";}
      if (a === "K"){ans += "X";}
      if (a === "L"){ans += "Y";}
      if (a === "M"){ans += "Z";}
      if (a === "N"){ans += "A";}
      if (a === "O"){ans += "B";}
      if (a === "P"){ans += "C";}
      if (a === "Q"){ans += "D";}
      if (a === "R"){ans += "E";}
      if (a === "S"){ans += "F";}
      if (a === "T"){ans += "G";}
      if (a === "U"){ans += "H";}
      if (a === "V"){ans += "I";}
      if (a === "W"){ans += "J";}
      if (a === "X"){ans += "K";}
      if (a === "Y"){ans += "L";}
      if (a === "Z"){ans += "M";}
      if (a === " "){ans += " ";}
      if (a === "!"){ans += "!" ;}
      if (a === "?"){ans += "?" ;}
      if (a === "."){ans += "." ;}
     
      }
      return ans;
   }
   
   console.log(rot13("SERR CVMMN!"));