const link = "https://spreadsheets.google.com/feeds/list/1c_aP8TUuOLRLSGDlnVhXoUHLZuwBGa3XFl3akgGpi7c/1/public/values?alt=json"
window.addEventListener("DOMContentLoaded", getData);

function getData(){
	fetch(link)
		.then(res => res.json())
		.then(handleData);
}
function handleData(data){
	const myData = data.feed.entry;
	console.log("myData - console");
	console.log(myData);
	myData.forEach(showData);
}
function showData(singleRowData){
	// console.log("singleRowData - console")
	// console.log(singleRowData.gsx$id.$t);
	

	// if (singleRowData.gsx$wheelsizeinches.$t == 26) {
	// 	console.log(singleRowData.gsx$brand);
	// }

	const template = document.querySelector("template").content;
	const clone = template.cloneNode(true);
	const brand = clone.querySelector(".brand");
	const name = clone.querySelector(".name");
	const bike_img = clone.querySelector(".bike_img");
	brand.textContent = singleRowData.gsx$brand.$t;
	name.textContent = singleRowData.gsx$name.$t;

	bike_img.alt = singleRowData.gsx$image.$t;

	singleRowData.gsx$image.$t = "img/" + singleRowData.gsx$image.$t + ".png";

	console.log(singleRowData.gsx$image.$t)

	if (singleRowData.gsx$image.$t == "img/.png") {
		bike_img.src = "https://via.placeholder.com/300x100";
	}
	else{
		bike_img.src = singleRowData.gsx$image.$t;
	}


	document.querySelector(".container").appendChild(clone);
}
