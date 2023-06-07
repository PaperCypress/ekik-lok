var userlist=[];
	  var passlist=[];
	  var userIDlist=[];
      function getusers(){
        jQuery.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1OBU38M_mZylTzT3GjWrJsnOSySeQEgMcZhE7ujj-Vic/values/accounts/?key=AIzaSyCSGFd1PdXyieRtd8FXsgFZVyMnI3Q8Xkk", function (data) {
            var sheetData = data.values;
            for (i = 1; i < sheetData.length; i++) {
            userlist[i-1]=sheetData[i][0]; 		
            passlist[i-1]=sheetData[i][1]; 
            userIDlist[i-1]=sheetData[i][2]; 
            }
            

        });
    }
$( document ).ready(function() {
    getusers();
    if(Cookies.get("signedin")!=undefined){
        document.getElementById("signin_btn").style.display = 'none';
        document.getElementById("logout_btn").style.display = 'block';
        document.getElementById("userlink").style.display = 'block';
    }
    else{
        document.getElementById("signin_btn").style.display = 'block';
        document.getElementById("logout_btn").style.display = 'none';
        document.getElementById("userlink").style.display = 'none';
    }
    });
function logout(){
	Cookies.remove('signedin');
    window.location.href="index.html";

}