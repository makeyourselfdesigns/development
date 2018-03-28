window.onload = function() {
	elements = document.getElementsByClassName('price');

	for (i = 0; i < elements.length; i++)  {
	  element = elements[i];
	  text = element.textContent;
	  element.textContent = Number(text).toLocaleString('en');
	}
}
