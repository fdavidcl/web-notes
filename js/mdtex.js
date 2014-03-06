var BASE_URL = "https://raw.github.com/NCordon/Algoritmia" //...

var ajax_get = function(url, callback) {
	if (window.XMLHttpRequest) {
		var xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			callback(xmlhttp.responseText);
			//console.log(xmlhttp.responseText);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

var markdown = function(text) {
	var N = /\*\*(.*?)\*\*/g,
		I = /\*([^\*]+)\*/g,
		A = /\[([^\]]*)\]\(([^\)]*)\)/g;

	return text.replace(N, "<strong>$1</strong>").replace(I, "<em>$1</em>").replace(A, "<a href='$2'>$1</a>");
}

var process = function(text) {
	var wrapper = document.createElement("div");
	wrapper.id = "wrapper";
	wrapper.textContent = text;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, wrapper]);
    MathJax.Hub.Queue(function() {
    	wrapper.textContent = markdown(wrapper.textContent);
    });

    document.querySelector("article").innerHTML = wrapper.innerHTML;
}

var get_chapter = function(url) {
	ajax_get(BASE_URL+url, process);
}

var gen_nav = function(list) {
	for (i in list) {
		var a = document.createElement("a");
		a.href = "javascript:process(" + list[l] + ")";
		i.textContent = l;


		document.querySelector("nav").appendChild(a);
	}
}

var files = {
	"Capítulo 1: Eficiencia": "chapter1.md"
};