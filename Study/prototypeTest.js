var A = function() {   
}   
A.prototype = {   
 sayHello: function() {   
  alert("sayHello A");   
 }   
}   
  
var B = function() {   
}   
B.prototype = A.prototype;   
  
var b = new B();   
b.sayHello();  