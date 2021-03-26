// javascript

// ecma script 

// ES2015
// ES6

// ES2013
// ES5


class Calculator{
    add(a, b){
        return a+b;
    }
}

var cal = new Calculator();
var sum = cal.add(5,7);
console.log(sum);



class ScientificCalculator extends Calculator{
    underRoot(a){
        console.log("some logic")
    }
}
var scal = new ScientificCalculator();
console.log(scal.add(4,4))



// ========================
// es5

var Person = function(name, age){
    this.name = name;
    this.age = age;
    
    var showDetails = function(){
        console.log("Name: "+this.name+" and age is "+this.age);
    }

}


var ram = new Person("Ram", 32);