document.title = "Signup Form"
let body = document.body;
body.style.minHeight =  "100vh";
body.style.background =  "linear-gradient(135deg, #eafbff, #e8f0f5, #e0e6eb)";
body.style.display =  "flex";
body.style.alignItems =  "center";
body.style.justifyContent =  "center";

let container = document.createElement("div")
container.classList.add("div-class");
container.style.backgroundColor = "#ffffff";
container.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.25)";
container.style.maxWidth = "700px";
container.style.width = "90%";
container.style.borderRadius = "20px";
container.style.padding = "5px 15px";
document.body.append(container);

let divbtn = document.createElement("div")
 Object.assign (divbtn.style, {
    backgroundColor: "transparent",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: "10px 15px",
    boxSizing: "border-box"
})
container.appendChild(divbtn);

let themebtn = document.createElement("button")
themebtn.innerHTML = "🌙 Dark Mode";
themebtn.style.width = "auto";
themebtn.style.display = "flex";
themebtn.style.alignItems = "center";
themebtn.style.justifyContent = "center";
themebtn.style.margin = "0";
themebtn.style.padding = "10px";
themebtn.style.borderRadius = "15px";
themebtn.style.background = "linear-gradient(90deg, #007bff, #00c6ff)";
themebtn.style.border = "2px solid black";
themebtn.style.border = "0 0 15px rgba(0, 0, 0, 0.25)";
themebtn.style.height = "auto";
themebtn.style.color = "white";
themebtn.style.fontWeight = "700";
themebtn.style.transition = "all 0.3s";
themebtn.style.transform = "all 0.3s";
themebtn.style.cursor = "pointer";
themebtn.addEventListener("mouseover", function(){
    this.style.opacity = "0.8";
    this.style.transform = "scale(1.02)";
}) 
themebtn.addEventListener("mouseout", function(){
    this.style.opacity = "1";
    this.style.transform = "none";
}) 
divbtn.appendChild(themebtn)

let heading = document.createElement("h1")
heading.classList.add("heading-des")
heading.innerHTML = "Create Your Account"
heading.style.textAlign = "center";
heading.style.color = "black";
heading.style.margin = "10px 0 20px 0"
heading.style.fontFamily = "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, 'Times New Roman', Times, serif"
container.appendChild(heading)

let div = document.createElement("div")
div.style.width = "100%"
div.style.height = "auto"
div.style.borderRadius = "15px"
div.style.color = "black"
container.appendChild(div)

let form = document.createElement("form")
form.classList.add("form-class");
form.innerHTML = 
'<div class = "input-container"><label class = "label-design">First Name :</label>                                   <input class = "input-design" type="text" id="firstname" name="firstname" placeholder = "First Name"></div><div class =  "input-container"><label class = "label-design">Last Name :</label><input class = "input-design" type="text" id="lastname" name="lastname" placeholder = "Last Name"></div><div class = "input-container"><label class = "label-design">Email :</label><input class = "input-design" type="email" id="email" name="email" placeholder = "Email"> </div><div class = "input-container"><label class = "label-design">Phone Number :</label><input class = "input-design" type="text" id="phonenumber" name="phonenumber" placeholder = "Phone Number" maxlength="11"></div><div class = "input-container"><label class = "label-design">Courses :</label><select class = "input-design" name="courses" id = "courses"><option value="" disabled selected></option><option value="web & app develpment">Web & App Develpment</option><option value="genrative ai">Genrative AI</option><option value="graphics design">Graphics Designs</option><option value="video editing">Video Editing</option><option value="digital marketing">Digital Marketing</option><option value="agentic ai">Agentic AI</option><option value=ecommerce">E-Commerce</option><option value="trading">Trading</option><option value="cyber security">Cyber Security</option><option value="flutter">Flutter</option><option value= "cloud">Cloud Engineer</option></select></div><div class = "input-container"><label class = "label-design">Date of Birth :</label><input class = "input-design" type="date" id="date" name="date" placeholder = "Date of Birth"></div><div class = "input-container"><label class = "label-design">Country :</label><select class = "input-design" name="country" id = "country"><option value="" disabled selected></option>  <option value="pak">Pakistan</option><option value="india">India</option><option value="iraq">Iraq</option><option value="japan">Japan</option><option value="iran">Iran</option><option value="london">London</option><option value="srilanka">Srilanka</option><option value="bangladesh">Bangladesh</option><option value="australia">Australia</option><option value="saudia">Dubai</option><option value= "england">England</option></select></div><div class = "input-container"><label class = "label-design">City :</label><input class = "input-design" type="text" id="city" name="city" placeholder = "City"></div><div class = "input-container"><label class = "label-design">Password :</label><input class = "input-design" type="password" id="password" name="password" placeholder = "Password" minlength="6" maxlength="12"></div><div class = "input-container"><label class = "label-design">Confirm Password :</label><input class = "input-design" type  ="password" id="confirmpassword" name="confirmpassword" placeholder = "Confirm Password" minlength="6" maxlength="12"></div><div class = "input-container2"><input type="checkbox"> I have read and agree to the <a class = "privacy-link" href = "">Privacy Policy</a></div><button class = "button-design" type = "submit">Register</button>'
form.method = "get";
form.style.width = "100%"
form.style.display = "grid"
form.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr));"
form.style.boxSizing = "border-box"
form.style.gap = "15px"
form.style.padding = "10px 15px"
form.style.backgroundColor = "transparent"
div.append(form)
let div_input = document.getElementsByClassName("input-container")
for(i = 0; i < div_input.length; i++){
    div_input[i].style.width = "100%"
    div_input[i].style.fontSize = "15px"
}
let label = document.getElementsByClassName("label-design")
for(i = 0; i < label.length; i++){
    label[i].style.width = "100%"
    label[i].style.display = "block"
    label[i].style.fontSize = "15px"
    label[i].style.fontFamily = "'Poppins', sans-serif"
    label[i].style.padding = "0px"
    label[i].style.borderRadius = "8px"
    label[i].style.marginBottom = "5px"
}
let input = document.getElementsByClassName("input-design")
for(i = 0; i < input.length; i++){
    input[i].style.width = "100%"
    input[i].style.boxSizing = "border-box"
    input[i].style.backgroundColor = "white"
    input[i].style.color = "black "
    input[i].style.fontSize = "16px"
    input[i].style.fontFamily = "'Inter', sans-serif"
    input[i].style.padding = "10px 15px"
    input[i].style.outline = "none"
    input[i].style.border = "2px solid #ccc"
    input[i].style.transition = "0.3s;"
    input[i].style.borderRadius = "8px"
    input[i].style.verticalAlign = "middle";
    input[i].style.cursor = "pointer";
}

for (i = 0; i < div_input.length; i++) {
    div_input[i].style.minWidth = "0"; 
}
let div_input2 = document.getElementsByClassName("input-container2")
for(i = 0; i < div_input2.length; i++){
    div_input2[i].style.gridColumn = "span 2 / span 2";
    div_input2[i].style.width = "100%"
    div_input2[i].style.padding = "10px"
    div_input2[i].style.color = "black"
    div_input2[i].style.display = "flex"
    div_input2[i].style.alignItems = "center"
    div_input2[i].style.fontSize = "14px"
    div_input2[i].style.fontFamily = "Arial, Helvetica, sans-serif"
    div_input2[i].style.gap = "5px"
    div_input2[i].style.cursor = "pointer"
    div_input2[i].style.transform = "scale(1.025)"
}

let privacy = document.getElementsByTagName("a")
for(i = 0; i < privacy.length; i++){
    privacy[i].style.textDecoration = "none";
    privacy[i].style.marginLeft = "3px";
    privacy[i].addEventListener("mouseover", function(){
        this.style.transform = "scale(1.04)";
    })
    privacy[i].addEventListener("mouseout", function(){
        this.style.transform = "none";
    })
}

let button_signup = document.getElementsByClassName("button-design");
for(i = 0; i < button_signup.length; i++){
    button_signup[i].style.width = "100%"
    button_signup[i].style.gridColumn = "span 2 / span 2"
    button_signup[i].style.background = "linear-gradient(to left, #00ffff, #aa00ff)"
    button_signup[i].style.color = "white"
    button_signup[i].style.fontSize = "20px"
    button_signup[i].style.fontWeight = "600"
    button_signup[i].style.fontFamily = "'Poppins', sans-serif"
    button_signup[i].style.borderRadius = "20px"
    button_signup[i].style.marginBottom = "5px"
    button_signup[i].style.outline = "none"
    button_signup[i].style.border = "2px solid black"
    button_signup[i].style.padding = "5px"; 
    button_signup[i].style.cursor = "pointer"; 
    button_signup[i].addEventListener("mouseover", function(){
        this.style.opacity = "0.8"
        this.style.transform = "scale(1.02)"
    }) 
    button_signup[i].addEventListener("mouseout", function(){
        this.style.opacity = "1"
        this.style.transform = "none"
    }) 
    button_signup[i].addEventListener('click', function(event){
        event.preventDefault();
        let firstname = document.getElementById('firstname').value
        let lastname = document.getElementById('lastname').value
        let email = document.getElementById('email').value
        let phonenumber = document.getElementById('phonenumber').value
        let courses = document.getElementById('courses').value
        let date = document.getElementById('date').value
        let country = document.getElementById('country').value
        let city = document.getElementById('city').value
        let password = document.getElementById('password').value
        let confirmpassword = document.getElementById('confirmpassword').value
        if(
            !firstname ||
            !lastname || 
            !email ||
            !phonenumber ||
            !courses ||
            !date ||
            !country ||
            !city ||
            !password ||
            !confirmpassword
        )
        {
            alert("Please Fill The Form!")
        }
        else{

            if(password !== confirmpassword) {
                alert("Password and Confirm Password do not match. Please try again!");
            }
            else{alert("Account Created Successfully ✅")
            console.log(
            `First Name :` + firstname.slice(0,1).toUpperCase() + firstname.slice(1).toLowerCase() + `\n`,
            `Last Name :` + lastname.slice(0,1).toUpperCase() + lastname.slice(1).toLowerCase() + `\n`, 
            `Email :` + email + `\n`, 
            `Phone Number :` + phonenumber + `\n`,
            `Courses :` + courses + `\n`,
            `Date Of Birth :` + date + `\n`,
            `Country :` + country.slice(0,1).toUpperCase() + country.slice(1).toLowerCase() + `\n`,
            `City :` + city.slice(0,1).toUpperCase() + city.slice(1).toLowerCase() + `\n`,
            `Password :` + password + `\n`,
            `Confirm Password :` + confirmpassword + `\n`
        )}
        }
        }
    )  
}

let dark = false;
themebtn.addEventListener("click", () => {
  dark = !dark;
  if (dark) {
    document.body.style.background = "linear-gradient(180deg, #0a0a0f, #150a20, #0f0f12)";
    container.style.background = "#1c1c1c";
    container.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.30)";
    heading.style.color = "#fff";
    themebtn.innerText = "☀️ Light Mode";
    div.style.color = "white"
    for(i = 0; i < div_input2.length; i++){
    div_input2[i].style.color = "white"
    }
    for(i = 0; i < input.length; i++){
    input[i].addEventListener("focus", function(){
        this.style.border = "2px solid #00ffff";
    })
    input[i].addEventListener("blur", function(){
        this.style.border = "2px solid #ccc";
    })
    }
    for(i = 0; i < privacy.length; i++){
    privacy[i].style.color = "#7b49f7ff";
    }
  } else {
    document.body.style.background = "linear-gradient(135deg, #eafbff, #e8f0f5, #e0e6eb)";
    container.style.background = "#fff";
    container.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.30)";
    heading.style.color = "#222";
    themebtn.innerText = "🌙 Dark Mode";
    div.style.color = "black"
    for(i = 0; i < div_input2.length; i++){
    div_input2[i].style.color = "black"
    }
    for(i = 0; i < input.length; i++){
    input[i].addEventListener("focus", function(){
        this.style.border = "2px solid #07abff";
    })
    input[i].addEventListener("blur", function(){
        this.style.border = "2px solid #ccc";
    })
    }
  }
});