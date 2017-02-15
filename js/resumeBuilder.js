var fullName = "MuhamMAD AL FARIS";
var role = "Junior Programmer";

//SplitName
var splitName = fullName.split(" ");
for (var i = 0; i < splitName.length; i++) {
	splitName[i] = splitName[i].slice(0,1).toUpperCase() + splitName[i].slice(1).toLowerCase();
}
fullName = splitName.join(" ");

//Replace Data
var formattedName = HTMLheaderName.replace("%data%", fullName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var array = [formattedName, formattedRole];

$("#header").prepend(array);