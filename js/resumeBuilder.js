/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("Godfrey");

 // var awesomeThoughts = "I am Godfrey and I am an awesome developer!";
 // console.log(awesomeThoughts);

 // var funThoughts = awesomeThoughts.replace("awesome", "fun");
 // console.log(funThoughts);

// var name = "Godfrey Chiu";
// var role = "Web Developer";

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
	"name" : "Godfrey Chiu",
	"role" : "Full Stack Web Developer",
	"contacts" : {
		"email" : "gotwai@gmail.com",
		"mobile" : 0000,
		"twitter" : "gotwai",
		"github" : "ggwc82",
		"location" : "London"
	},
	"biopic" : "images/me.png",
	"welcomeMessage" : "Hi, this is my profile.",
	"skills" : ["JavaScript", "PHP", "MongoDB"]
};

// $("#main").append(bio.welcome);
// $("#main").append(bio.contact.email);
// $("#main").append(bio["picture"]);

var work = {
	"jobs" : [
	{
	"title" : "engineer",
	"employer" : "HSSMI",
	"location" : "London",
	"dates" : "2016-2017",
	"description" : "Development of DRM and commercial research work"
	},
	{
	"title" : "technical service manager",
	"employer" : "CSC",
	"location" : "London",
	"dates" : "2004-2008",
	"description" : "Managed Datacentre, Unix and Networks support services for JP Morgan Chase"
	}
	]	
};

var education = {
	"schools" : [
	{
	"name" : "Makers Academy",
	"degree dates" : "2016",
	"location" : "London",
	"url" : "http://makersacademy.com",
	"majors" : ["Graduated"]
	},
	{
	"name" : "Imperial College",
	"degree dates" : "2000-2004",
	"location" : "London",
	"url" : "http://ic.ac.uk",
	"majors" : ["Physics, 2:1"]
	}
	],
	"onlineCourses" : [
	{
	"title" : "MongoDB for Developers",
	"school" : "MongoDB University",
	"dates" : "2016",
	"url" : "https://university.mongodb.com/"
	}
	]	
};

var projects = {
	"projects" : [
	{
		"title" : "Project A",
		"dates" : "2017",
		"description" : "A new project to focus on, tbd...",
		"images": ["http://oneguyrambling.com/wp-content/uploads/2010/03/project_a_dvd1.jpg"]
	}
	]
}
// $("#main").append(work["position"]);
// $("#main").append(education.name);
var name = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(name);
if (bio.skills.length !== 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);	
}
