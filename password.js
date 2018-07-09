function passwordCheck(){
	// Note - This isnt secure in the slightest but I'm just testing it out 
    var password = prompt("Please enter the password.");
    if (password === "test123"){
        window.location="member_area.html";
    } else{
        if (password !== "test123") {
				history.go(-1);
		}
        window.location="member_area.html";
    }
}
window.onload=passwordCheck;