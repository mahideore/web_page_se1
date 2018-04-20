var Users=[];


function closeSignUpModal(){
	$('#singUp').modal('hide');
}
function openLoginModal(){
 $("#login").modal('show');
}
function openSignUpModal(){
 $("#singUp").modal('show');
}
function closeLoginModal(){
	$('#login').modal('hide');
}
function profileviewModal()
{
	var user=document.getElementById('luname').value;
	var email=document.getElementById('email').value;
	alert("hi mahi")
	$('#lg').modal('show');
}
function saveForm(){
	
// localStorage.setItem("Users",JSON.stringify(Users) );
if(localStorage && localStorage.getItem("Users")===null){
localStorage.setItem("Users",JSON.stringify(Users) );
}
saveInStorage();

}
function saveInStorage(){
	var uname=document.getElementById('userName').value;
var email=document.getElementById('email').value;
var password=document.getElementById('psw1').value;
if(uname && email && password){
user={
	uname:uname,
	email:email,
	password:password,
}
var userArr=new Array(); 

 userArr=JSON.parse(localStorage.getItem("Users"));
 for(i=0;i<userArr.length;i++){
	if(userArr[i].uname==uname){
		alert("User Already exist");
		closeLoginModal();
		return 0;
	}
 }	saveNotPresentUser(userArr);

}else{
	alert("please fill the form");
}
}

function saveNotPresentUser(userArr){
 userArr.push(user);
localStorage.setItem("Users", JSON.stringify(userArr));
 console.log(localStorage.getItem("Users"));
 closeSignUpModal();
 alert("Registered successfully..");
}

function login(){
	
var user=document.getElementById('luname').value;
var password=document.getElementById('lpsw').value;
if(user && password){
checkUserIsValid(user,password);
}else{
	alert("please enter user and pass");
}
}

function checkUserIsValid(user,pass)
{
var Users=JSON.parse(localStorage.getItem("Users"));
for(i=0;i<Users.length;i++){
if(Users[i].uname==user && Users[i].password==pass){
	alert("Login Success");
	profileviewModal();
	//closeLoginModal();
	return 0;
}
}
alert("login Faild");
}
