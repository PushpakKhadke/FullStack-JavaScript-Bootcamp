// console.log(this);  // this refers to global objects

function sayHello(){
    var name="Bibek";
    // console.log(this);
}
sayHello();

//for all regular funtion calls, this points to windows objects
var u={
    firstName:"unknown",
    courseCount:5,
    getCourseCount:function(){
        console.log(this.courseCount); //it refers to the u obejct
        function sayHi(){
            console.log(this.bibek); //this refers to global obejcts
            console.log("HI");
        }
        sayHi();
    }
}

u.getCourseCount();

