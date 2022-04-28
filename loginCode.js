function checkCreds(){
    console.log("checkCred() started...");
    //create the name and badge variablse and fill them in
    var firstName = document.getElementById("fName").value;
    console.log("First Name: " + firstName); 
    var lastName = document.getElementById("lName").value;
    console.log("Last Name: " + lastName);
    var badgeNumb = parseInt(document.getElementById("badgeID").value);
    console.log("Badge Number: " + badgeNumb);

    //name a fullName variable
    var fullName = firstName + " " + lastName;
    console.log("Full Name : " + fullName);

    //check if full name is 20 chars or less
    var fullNameLength = fullName.length;
    console.log(fullNameLength);
    if(fullNameLength > 21 || fullNameLength < 3){
        document.getElementById("loginStatus").innerHTML =
            "Invalid Full Name, please resubmit";
    } else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = 
            "Invalid Badge Number! please resubmit";
    } else {
        //if everything is ok, then grant access to the UATSpace webpage
        alert("Access granted, Welcome " + fullName);
        location.replace("./UATSpacePage.html");
    }

    //check the badge number is less than 1000
    if(badgeNumb > 999){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number! please resubmit";
    }



}