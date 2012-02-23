var A = function() {   
}   
A.prototype = {   
 sayHello: function() {   
  alert("sayHello A and local and line");   
 }   
}   
  
var B = function() {   
}   
B.prototype = A.prototype;   
  
var b = new B();   
b.sayHello();  