var fullName = "MuhamMAD AL FARIS";

var splitName = fullName.split(" ");
splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
splitName[1] = splitName[1].slice(0,1).toUpperCase() + splitName[1].slice(1).toLowerCase();
splitName[2] = splitName[2].slice(0,1).toUpperCase() + splitName[2].slice(1).toLowerCase();
fullName = splitName.join(" ");
var formattedName = HTMLheaderName.replace("%data%", fullName);
 
var role = "Junior Programmer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
var array = [formattedName, formattedRole];

$("#header").prepend(array);