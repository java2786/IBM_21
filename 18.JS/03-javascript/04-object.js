var ram1 = new Object();
typeof ram1

var ram2 = {};
typeof ram2


var ram = {
    name: "Ram Kapoor", 
    age: 21, 
    details: function(){
        console.log("Name is "+this.name);
    }
};

ram.address = "pune";
delete ram.age






var a = 12;
var a = function(){}
a()






var ram = {
    name: "ram kapoor",
    age: 33,
    show: function(){},
    contact: {
        email: "ram@gmail.com",
        address: "Pune",
        mobile: 986596585
    }
}

ram.contact.email



var showDetails = function(){}

var contact= {
    email: "shyam@gmail.com",
    address: "Mumbai",
    mobile: 9696969696
}

var shyam = {
    name: "shyam kapoor",
    age: 23,
    contact: contact,
    show: showDetails
}




var mahesh = {
    name: "mahesh"
}

mahesh.contact = {email: "mahesh@gmail.com"}
mahesh.contact.email
mahesh.contactDetails = contact

mahesh.name
mahesh["name"]


mahesh.key



var emp = {
    name: "mahesh",
    experience: 12,
    contactDetails: {}
}

for(var key in emp){
    if(typeof(emp[key])=="object"){
        console.log(key +":"+ JSON.stringify(emp[key]));
    } else {
        console.log(key +":"+emp[key]);
    }
}












