

var collabDoc = new Firebase('https://collabdoc2.firebaseio.com/');
var usersCode = collabDoc.child("code");
	var editor = CodeMirror.fromTextArea(document.getElementById("codeTextArea"), 
	{
	    mode: "javascript",
	    lineNumbers: true,
	    gutter: true,
	    theme : "3024-night",

	    
	});

	collabDoc.orderByChild("code").once("value", function(snapshot)
	{
		start = editor.getCursor();
		changeCode = snapshot.child('code');
		something = changeCode.val();
		change = (something.code1);
		editor.setValue(change);
		editor.setCursor(start);

	
	});	

	var n,current;
	current = 0;
	editor.on("change", function () 
	{
		d = new Date();
		current = d.getTime();
		//editor.setValue() = userCode;
	    userCode = editor.getValue();
	    usersCode.set({code1: userCode});
	    //console.log(userCode);
	    // console.log("editor changed");
	});

	collabDoc.orderByChild("code").on("value", function(snapshot)
	{
		d = new Date();
		console.log(current);
		if(current+200 <= d.getTime())
		{
			console.log(current);
			console.log("inside time test");
			changeCode = snapshot.child('code');
			something = changeCode.val();
			change = (something.code1); 
			start = editor.getCursor();
			editor.setValue(change);
			editor.setCursor(start);
			// console.log(change);
		}
	
	});	