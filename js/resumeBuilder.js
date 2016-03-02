// Custome jscript for resume
// variables
var bio = {
  "name": "Jay Lowack",
  "role": "Software Engineer",
  "contacts": {
    "mobile": "817-223-8300",
    "email": "lowacks@swbell.net",
    "github": "lowjack98",
    "twitter": "@jaylowack",
    "location": "Fort Worth, TX US",
    },
  "welcomeMessage": "What's up fellow Udacians?",
  "skills": [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
  ],
  "biopic": "images/me.jpg",
  display: function (){
    $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%",inName(bio.name)));
    var contactList = HTMLcontactGeneric.replace("%contact%","mobile").replace("%data%",bio.contacts.mobile);
    contactList = contactList + HTMLcontactGeneric.replace("%contact%","email").replace("%data%",bio.contacts.email);
    contactList = contactList + HTMLcontactGeneric.replace("%contact%","github").replace("%data%",bio.contacts.github);
    contactList = contactList + HTMLcontactGeneric.replace("%contact%","twitter").replace("%data%",bio.contacts.twitter);
    contactList = contactList + HTMLcontactGeneric.replace("%contact%","location").replace("%data%",bio.contacts.location);
    $("#topContacts").prepend(contactList);
    $("#footerContacts").prepend(contactList);
    contactList = null;
    $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    if(bio.skills.length > 0){
      $("#header").append(HTMLskillsStart.replace("flex-box",""));
      bio.skills.forEach( function (skill){
        $("#skills").append(HTMLskills.replace("%data%",skill));
      });
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Texas A&M University",
      "location": "College Station, TX, US",
      "degree": "BS",
      "majors": ["Mechanical Engineering"],
      "dates": "1999",
      "url": "http://example.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Developer",
      "school": "Udacity",
      "date": "2016",
      "url": "http://udacity.com"
    }
  ],
  display: function(){
    $.each(education.schools, function(sk,sv){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%",sv.name) + HTMLschoolDegree.replace("%data%",sv.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%",sv.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",sv.location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",sv.majors));
    });
    $("#education").append(HTMLonlineClasses);
    $.each(education.onlineCourses, function(ok,ov){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",ov.title) + HTMLonlineSchool.replace("%data%",ov.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%",ov.date));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%",ov.url));
    });
  }
};

var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Senior Network Support",
      "location": "Dallas, TX, US",
      "dates": "1999 - Present",
      "description": "Network Operations Tooling"
    },
    {
      "employer": "US Navy",
      "title": "R6 1NCR, LCDR",
      "location": "Port Hueneme, CA, US",
      "dates": "2001 - Present",
      "description": "Civil Engineering"
    }
  ],
  display: function(){
    $.each(work.jobs, function(pk,pv){
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",pv.employer) + HTMLworkTitle.replace("%data%",pv.title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%",pv.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%",pv.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%",pv.description));
    });
  }
};

var projects = {
  projects: [
    {
      title: "Portfolio",
      dates: "Jan 2016",
      description: "Portfolio Project# 1: Front-End Developer, Udacity",
      images: [
        "images/fry.jpg"
      ]
    },
    {
      title: "Resume",
      dates: "Feb 2016",
      description: "Resume Project# 2: Front-End Developer, Udacity",
      images: [
        "images/fry.jpg", "images/197x148.gif"
      ]
    }
  ],
  display: function(){
    $.each(projects.projects, function(pk,pv){
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",pv.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%",pv.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",pv.description));
      $.each(pv.images, function(ik,iv){
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%",iv));
      });
    });
  }
};

// functions
function locationizer(oWork){
  var arrLocations = [];
  $.each(oWork.jobs, function(k,v){
    arrLocations.push(v.location);
  });
  return arrLocations;
}

function inName(){
  var names = bio.name.split(" ");
  names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  return names.join(" ");
}
// main
$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});

// Display Bio stuff
bio.display();

// Display Work Experience
work.display();

// Display Projects
projects.display();

// Education Projects
education.display();

$("#mapDiv").append(googleMap);
