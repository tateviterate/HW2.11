function load() {
	var reg = /Antoine/g;
	var text = document.getElementById('text').innerHTML;
	var name = ('Tatev').fontcolor('#972B2B');
	var newText = text.replace(reg, name);
	document.getElementById('text').innerHTML = newText;
};
