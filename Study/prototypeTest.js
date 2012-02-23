var A = function() {   
}   
A.prototype = {   
 sayHello: function() {   
  alert("edit on line.");   
 }   
}   
  
var B = function() {   
}   
B.prototype = A.prototype;   
  
var b = new B();   
b.sayHello();  