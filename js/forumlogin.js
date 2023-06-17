    var usersloaded=false;
    var userlist=[];
	  var passlist=[];
	  var userIDlist=[];
      var messageCount=[];
      var userform=document.getElementById("user");
      var passform=document.getElementById("pass");
      function getusers(){
        jQuery.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1OBU38M_mZylTzT3GjWrJsnOSySeQEgMcZhE7ujj-Vic/values/accounts/?key=AIzaSyCSGFd1PdXyieRtd8FXsgFZVyMnI3Q8Xkk", function (data) {
            var sheetData = data.values;
            for (i = 1; i < sheetData.length; i++) {
            userlist[i-1]=sheetData[i][0]; 	
            
            passlist[i-1]=sheetData[i][1]; 
            userIDlist[i-1]=sheetData[i][2]; 
            messageCount[i-1]=sheetData[i][4];
            }
            
            whenusersloaded();
            usersloaded=true;
        });
        //
    }
$( document ).ready(function() {
    getusers();
    //wait until 
    
    });
function whenusersloaded(){
    
    //console.log(userIDlist[0]);
    if(Cookies.get("signedin")!=undefined){
        var index=userIDlist.findIndex(checkID);
        document.getElementById("loginform").style.display = 'none';
        document.getElementById("um").style.display = 'block';
        document.getElementById("username").innerHTML = userlist[index];
    }
    else{
        document.getElementById("loginform").style.display = 'block';
        document.getElementById("um").style.display = 'none';
    }
}
function logout(){
	Cookies.remove('signedin');
    window.location.href="forum.html";
}
function login(){
    if(userlist!=undefined){
			
        if(userlist.findIndex(checkName)!=-1){
            var index=userlist.findIndex(checkName);
            if(passform.value==passlist[index]){
                Cookies.set('signedin', userIDlist[index], { expires: 7 })
                window.location.href="forum.html";
            }
            else{
                window.location.href="error.html?wrongpw";
            }
            
        }
        else{
            window.location.href="error.html?nouser";
        }
    }
}
function checkName(name) {
    return name==userform.value;
  }
function checkID(id) {
    return id==Cookies.get("signedin");
  }