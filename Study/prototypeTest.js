var A = function() {   
}   
A.prototype = {   
 sayHello: function() {   
  alert("sayHello A and local");   
 }   
}   
  
var B = function() {   
}   
B.prototype = A.prototype;   
  
var b = new B();   
b.sayHello();  