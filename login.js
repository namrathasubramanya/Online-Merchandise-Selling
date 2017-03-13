/*Name:Shahane,Shweta Kisan
 Acc_No:jadrn058*/

$(document).ready(function() {
$.get("/perl/jadrn058/checkCookies.cgi",on_login);
$("#logout").on('click',function(e) {
$.get("/perl/jadrn058/logout.cgi",on_logout);
	});

$("#reset").on('click',function(e) {
document.getElementById("status1").innerHTML = "";
	});

$("#login").on('click',function(e) {
//alert("login");
	var user = $("#user").val();
	var password = $("#password").val();
	if(!user && !password){
		document.getElementById("status1").innerHTML = "Enter Username and Password!";
		$("#user").focus();}
		else if(!user){
			document.getElementById("status1").innerHTML = "Enter Username!";
			$("#user").focus();
}
else if(!password){
document.getElementById("status1").innerHTML = "Enter Password!";
$("#password").focus();
}
else{
var url = "/perl/jadrn058/login.cgi";
url += "?user="+user+"&password=" + password;
$.get(url,check_Cookies);
}
	        });
});

	function check_Cookies(response)
	{
		if(response.startsWith("Content-type: text/html"))
		{
			$("#tabs_page").show();
			$("#login_page").hide();
		 }
		else if(response.startsWith("Fail"))
		 {
						$("#login_page").show();
						$("#tabs_page").hide();
						document.getElementById("status1").innerHTML = "Enter valid Username and Password!";
						
		}
	}


	function on_login(response) {
    if(response.startsWith("Success"))
	{
		//alert("in tabs");
			$("#tabs_page").show();
			$("#login_page").hide();
			//location.reload(true);
     }
    else if(response.startsWith("Fail"))
		{
			document.getElementById("status1").innerHTML = " ";
			$("#user").focus();
			$("#login_page").show();
			$("#tabs_page").hide();
    }
	}


	function on_logout(response)
	{
	//alert("logout");
	
    	//if(response.startsWith("Success"))
	//{
			$("#tabs_page").hide();
			$("#login_page").show();
			document.getElementById("status1").innerHTML = "You are now Logged out!";
			//$("#user").val()="";
			
			//document.getElementById("status1").innerHTML = "";
   //  }
   /* else if(response.startsWith("Fail"))
		{
			$("#login_page").hide();
			$("#tabs_page").show();
    }*/
   // location.reload(true);
	}
