var bio = {
	"fullname" : {
		"firstName" : "Muhammad",
		"lastname" : "Al Faris"
	} ,
	"role" : "Junior Programmer",
	"contact" : {
		"twitter" : "@MuhAl_Faris",
		"facebook": "Muhammad Al Faris",
		"WhatsApp" : "081910373275"
	},
	"picture_url" : "images/me.jpg",
	"welcome_message" : "I just newbie !",
	"skill" : ["C#, Javascript, Java, some Basic HTML & CSS, XML"]
	};

var work = {
	"jobs" : 
	[ 
	{
		"employer" : "PT LUCAS DJAJA",
		"position" : "Operator Produksi",
		"cityEmployer" : "Bandung",
		"yearsWorked" : "2month"
	},
	{
		"employer" : "CV Nagatech System Integrator",
		"position" : "Junior Programmer",
		"cityEmployer" : "Bandung",
		"yearsWorked" : "2month"
	}
 	]
};

var education = {};
education["nameLastSchool"] = "SMK Medikacom Bandung";
education["yearsKeluar"] = "2009";
education["Schoolcity"] = "Bandung";

var cv = {
	"dataDiri" : {
		bio
	},
	"experience" : {
		work
	},
	"education" : {
		education
	}
};



//Replace Data
var formattedName = HTMLheaderName.replace("%data%", bio.fullname.firstName + bio.fullname.lastname);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var array = [formattedName, formattedRole];

$("#header").append(array);

if (bio.skill.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill;
	for (var i = 0; i < bio.skill.length; i++) {
		formattedSkill = HTMLskills.replace("%data%", bio.skill[i])
		$("#skills").append(formattedSkill);
	}
};

if (work.jobs.length > 0) {
	$("#header").append(HTMLworkStart);

	
	for (jobs in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedJobs = HTMLworkEmployer.replace("%data%",work.jobs[jobs].employer);
		var formattedPosition = HTMLworkTitle.replace("%data%",work.jobs[jobs].position);
		var formattedEmployerTitle = formattedJobs + formattedPosition;

		$(".work-entry:last").append(formattedEmployerTitle);
	}
};