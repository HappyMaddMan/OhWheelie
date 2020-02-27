<<<<<<< Updated upstream
=======
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

	// console.log(singleRowData.gsx$image.$t)

	if (singleRowData.gsx$image.$t == "img/.png") {
		bike_img.src = "https://via.placeholder.com/300x100";
	}
	else{
		bike_img.src = singleRowData.gsx$image.$t;
		bike_img.src = "https://via.placeholder.com/300x100";
	}


	document.querySelector(".container").appendChild(clone);
}

function toggleMenu(e) {
    let menu = document.querySelector(".burger-menu");
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
    e.preventDefault();
}

window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".burger-menu__toolbar a").addEventListener("click", toggleMenu);
    document.querySelector(".burger-menu-icon a").addEventListener("click", toggleMenu);
});

















// function filterBy(data, filters = {}) {
//   ** Set up the specific defaults that will show everything:
//   const defaults = {
//     category: null,
//     yearFrom: 1895,
//     yearTo: 2100,
//     gender: null
//   }

//   ** Merge any filters with the defaults
//   filters = Object.assign({}, defaults, filters);

//   ** Filter based on that filters object:
//   return data.filter(laur => {
//     return (laur.yearFrom >= filters.yearFrom) &&
//            (laur.yearTo <= filters.yearTo) &&
//            **and so on
//   });
// }
>>>>>>> Stashed changes
