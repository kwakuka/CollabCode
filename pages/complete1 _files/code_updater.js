var collabDoc = new Firebase('https://collabdoc2.firebaseio.com/');
var usersCode = collabDoc.child("code");
	 window.editor = CodeMirror.fromTextArea(codeTextArea, {
	    mode: "javascript",
        lineNumbers: true,
        lineWrapping: true,
        theme : '3024-night',
        change: function (editor, event)
        	{
           	var userCode = $(".cm-variable").innerHTML;
           	console.log(userCode); 
			usersCode.set({code1: userCode});
			console.log("Usercode is equal to" + userCode);
        }
	  });


	//var collabDoc = new Firebase('https://collabdoc2.firebaseio.com/');
	//var usersCode = collabDoc.child("code");
	/*$("#codeTextArea").on("c" = function myfunc(){
		debugger;
		var userCode = $(".cm-variable").innerHTML;
		if(userCode != undefined){ 
		usersCode.set({code1: userCode});
		console.log("Usercode is equal to" + userCode);
		}
	});*/
	/*if($('#codeTextArea') != undefined){
	  	$("#codeTextarea").keyup(function()
	  	{
	  		change = $("#codeTextArea").val();
	  		console.log(change);
	  		collabDoc.set({uCode: {change}});
	  	});
    }*/

