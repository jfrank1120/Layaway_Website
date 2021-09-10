// Function for seeing if the user entered in the correct password and redirect them to the hidden list
function check_password() {
  // Get the value of the enterd password
  var entered_pwd = document.getElementById("pwd").value;
  if (entered_pwd === "gag") {
    // If it matches send the user to the next page
    document.location.replace("gag_list.html");
  } else {
    // Alert the user that the password was not correct
    alert("Password is incorrect :|");
  }
}

// Try to addEventListener if it is on the page that the JS is loading on
try {
  const pwd_button = document.getElementById("password_submit_btn");
  pwd_button.addEventListener("click", check_password);
} catch (e) {}

// Function to show or hide the founders images
function show_founders() {
  var founders_div = document.getElementById("founders_area");
  // Check if it is currently displaying or not
  if (founders_div.style.display == "none") {
    // Currently not displaying so display
    founders_div.style.display = "block";
  } else {
    // Currently not displaying so display
    founders_div.style.display = "none";
  }
}

// Try to addEventListener if it is the on the page that the JS is loading on
try {
  const founders_btn = document.getElementById("founders_title_btn");
  founders_btn.addEventListener("click", show_founders);
} catch (e) {}
// Function to show or hide the members images
function show_members() {
  var members_div = document.getElementById("members_table");
  // Check if it is currently displaying or not
  if (members_div.style.display == "none") {
    // Currently not displaying so display
    members_div.style.display = "block";
  } else {
    // Currently not displaying so display
    members_div.style.display = "none";
  }
}

// Try to addEventListener if it is the on the page that the JS is loading on
try {
  const members_btn = document.getElementById("members_title_btn");
  members_btn.addEventListener("click", show_members);
} catch (e) {}
