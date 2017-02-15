var formattedName = HTMLheaderName.replace("%data%", "Muhammad Al Faris");

var role = "Junior Programmer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);