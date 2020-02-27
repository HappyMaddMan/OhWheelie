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
}
