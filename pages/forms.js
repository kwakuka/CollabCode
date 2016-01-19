//form functions
	var Counter = 1;
	var Limit = 3;
	function newCollabs('newcollaborators') {
		if Counter == Limit){
	alert("You have reached the limit of adding " + counter + " collaborators.");
}
	    else{
	    var newfield = document.createElement("newfield");
	    newfield.innerHTML = "<input data-placement= 'top' type='text' class='form-control'>";
	    document.getElementById("collaborators").appendChild(newfield);
	    Collaborator++;
	}

