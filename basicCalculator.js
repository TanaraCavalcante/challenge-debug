
// Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5


const calculate = function calculate(a, o, b) {
  
    if(o == "+"){
      return a + b;
    }else if(o == "-"){
      return a - b;
    }else if(o == "*"){
      return a * b;
    }else if(o == "/"){
      if (b === 0) {
         return null;  
       }
       return a / b;
    }else{
      return null;
    }
    
   }