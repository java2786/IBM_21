function add(){
    // arguments -> [1,2], 4, "5", "six", false

    var sum = 0;

    for(var i =0;i<arguments.length;i++){
        if(isNaN(arguments[i])){
            //
        } else {
            sum += +arguments[i];
        }
    }

    return sum;
}


add([1,2], 4, "5", "six", false)