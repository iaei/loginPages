var signUpbutton = document.getElementById('changeToSignup');
var signUp = document.getElementById("signup");
var signInbutton = document.getElementById("changeToSignin");
var signIn= document.getElementById("signin");
var line = document.getElementById("chooseLine");

console.log(signUpbutton);
console.log(changeToSignin);
signInbutton.onclick = function () {
	signUpbutton.setAttribute("class","null");
	this.setAttribute("class","active");
	signUp.style.cssText ="display:none";
	signIn.style.cssText = "display:block";
	line.style.transform = "translateX(72px)";


}

signUpbutton.onclick = function () {
	signInbutton.setAttribute("class","null");
	this.setAttribute("class","active");
	signIn.style.cssText ="display:none";
	signUp.style.cssText = "display:block";
	line.style.transform = "translateX(0px)"
}