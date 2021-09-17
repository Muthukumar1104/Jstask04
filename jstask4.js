function maxbtn(){
	var x = document.getElementById('x').value;
	var y = document.getElementById('y').value;
	var z = Math.max(x,y);
	document.getElementById('r').value = "The Maximum value is : " + z;
}

function minbtn(){
	var x = document.getElementById('x').value;
	var y = document.getElementById('y').value;
	var z = Math.min(x,y);
	document.getElementById('r').value = "The Minimum value is : " + z;
}