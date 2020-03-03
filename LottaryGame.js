var student = ["name1", "name2", "name3", "name4", "name5", "name6"]; 
var check = Math.random() * (student.length-1);
var checkOut = Math.round(check);
console.log("Winner : ", student[checkOut]);