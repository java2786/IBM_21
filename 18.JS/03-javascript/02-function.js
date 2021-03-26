function add(a, b) {
    return a + b;
}

add(2, 5);
add(2, 5, 9);





function add() {
    // console.log(arguments);
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
add(5, 15, 85, 9, 6, -95, 9)
add(5, 15)
add(5, 12, true)

add(5, 12, true, "15")







function add() {
    // console.log(arguments);--> [5, 12, true, "15", "two"]
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
            // i=3, arguments[i]="15"
            // i=4, arguments[i]="two"
        if(!isNaN(arguments[i])){
            sum = sum + +arguments[i];
        } 
    }
    return sum;
}


add(5, 12, true, "15", "two")