var fullName = "MuhamMAD AL FARIS";
var role = "Junior Programmer";
var bio = {
	"name" : "Muhammad Al Faris",
	"role" : role,
	"contact" : {
		"twitter" : "@MuhAl_Faris",
		"facebook": "Muhammad Al Faris",
		"WhatsApp" : 081910373275
	},
	"picture_url" : "images/me.jpg",
	"welcome_message" : "I just newbie !",
	"skill" : ["C#, Javascript, Java, some Basic HTML & CSS, XML"]
};

bio.experience = "IT Support - 2 Years";

//SplitName
var splitName = fullName.split(" ");
for (var i = 0; i < splitName.length; i++) {
	splitName[i] = splitName[i].slice(0,1).toUpperCase() + splitName[i].slice(1).toLowerCase();
}
fullName = splitName.join(" ");

//Replace Data
var formattedName = HTMLheaderName.replace("%data%", bio.experience);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var array = [formattedName, formattedRole];

$("#header").append(array);