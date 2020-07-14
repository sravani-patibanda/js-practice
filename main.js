fetch('data.json').then(response=>{
	return response.json();
}).then(data=>{
	// console.log(data.profile.details);
	profile(data.profile.basics);
	details(data.profile.details);
})

var child_one=document.querySelector(".child_one");
var child_two=document.querySelector(".child_two");

var profile=(basic_info)=>{
	// console.log(basic_info.name);
	var name=document.createElement("h2");
	name.textContent=basic_info.name;
	child_one.append(name);

	var role=document.createElement("h4");
	role.textContent=basic_info.role;
	role.classList.add("role");
	child_one.append(role);

	var hr=document.createElement("hr");
	child_one.append(hr);

	var email=document.createElement("a");
	email.href="mailto:"+basic_info.email;
	email.classList.add("link");
	email.textContent=basic_info.email;
	child_one.append(email);

	var mobile=document.createElement("a");
	mobile.href="tel:"+basic_info.mobile;
	mobile.classList.add("link");
	mobile.textContent=basic_info.mobile;
	child_one.append(mobile);

	var address=document.createElement("p");
	address.textContent=basic_info.address;
	child_one.append(address);
}

var details=(details_info)=>{
	// console.log(details_info);
	var summaryHeading=document.createElement("h3");
	summaryHeading.textContent="Summary";	
	child_two.append(summaryHeading);
	

	var list=document.createElement("ul");
	details_info.summary.map(i=>{
		var listitem=document.createElement("li");
		listitem.textContent=i;
		list.append(listitem);
	})

	child_two.append(list);
	var hr1=document.createElement("hr");
	child_two.append(hr1);

	var careerHeading=document.createElement("h3");
	careerHeading.textContent="Career Objective";
	child_two.append(careerHeading);

	var list=document.createElement("ul");
	details_info.careerobjective.map(i1=>{
		var listitem=document.createElement("li");
		listitem.textContent=i1;
		list.append(listitem);
	})

	child_two.append(list);
	var hr1=document.createElement("hr");
	child_two.append(hr1);

	var personalprofileHeading=document.createElement("h3");
	personalprofileHeading.textContent="Personal Profile";	
	child_two.append(personalprofileHeading);
	

	var list=document.createElement("ul");
	details_info.personalprofile.map(i7=>{
		var listitem=document.createElement("li");
		listitem.textContent=i7;
		list.append(listitem);
	})

	child_two.append(list);
	var hr1=document.createElement("hr");
	child_two.append(hr1);

	var educationHeading=document.createElement("h3");
	educationHeading.textContent="Acadamic Qualifications";	
	child_two.append(educationHeading);
	

	var list=document.createElement("ul");
	details_info.education.map(i9=>{
		var listitem=document.createElement("li");
		listitem.textContent=i9;
		list.append(listitem);
	})

	child_two.append(list);
	var hr1=document.createElement("hr");
	child_two.append(hr1);


	var skillHeading=document.createElement("h3");
	skillHeading.textContent="Technical Skills";
	child_two.append(skillHeading);

	details_info.skills.map(j=>{
		var skillType=document.createElement("h3");
		skillType.textContent=j.type;
		child_two.append(skillType);

		j.values.map(j_value=>{
			var skillValue=document.createElement("span");
			skillValue.textContent=j_value;
			skillValue.classList.add("skill");
			child_two.append(skillValue);
		})
	})
	var skill_hr1=document.createElement("hr");
	child_two.append(skill_hr1);

	var skillHeading=document.createElement("h3");
	skillHeading.textContent="Personal Skills";
	child_two.append(skillHeading);

	var list=document.createElement("ul");
	details_info.personalskills.map(i3=>{
		var listitem=document.createElement("li");
		listitem.textContent=i3;
		list.append(listitem);
	})

	child_two.append(list);
	var skill_hr1=document.createElement("hr");
	child_two.append(skill_hr1);

	var achievementHeading=document.createElement("h3");
	achievementHeading.textContent="Achievements";
	child_two.append(achievementHeading);

	var list=document.createElement("ul");
	details_info.achievements.map(i5=>{
		var listitem=document.createElement("li");
		listitem.textContent=i5;
		list.append(listitem);
	})

	child_two.append(list);
	var achievement_hr1=document.createElement("hr");
	child_two.append(achievement_hr1);


	var hobbiesHeading=document.createElement("h3");
	hobbiesHeading.textContent="Hobbies";
	child_two.append(hobbiesHeading);

	var list=document.createElement("ul");
	details_info.hobbies.map(i4=>{
		var listitem=document.createElement("li");
		listitem.textContent=i4;
		list.append(listitem);
	})

	child_two.append(list);
	var hr1=document.createElement("hr");
	child_two.append(hr1);

	var decHeading=document.createElement("h3");
	decHeading.textContent="Declaration";
	child_two.append(decHeading);
	

	var list=document.createElement("ul");
	details_info.declaration.map(i6=>{
		var listitem=document.createElement("li");
		listitem.textContent=i6;
		list.append(listitem);
	})

	child_two.append(list);





}