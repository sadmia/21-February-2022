"use strict";

let manth_txt = document.getElementById("manth");
let day_txt = document.getElementById("day");
let hour_txt = document.getElementById("hour");
let minite_txt = document.getElementById("minite");
let secend_txt = document.getElementById("secend");


let audio = document.getElementById("audio");

let btn = document.querySelector("#music");
let icon_1 = document.querySelector("#icon_1");
let icon_2 = document.querySelector("#icon_2");

icon_1.addEventListener("click", function() {
	icon_1.style.display = "none";
	audio.play();
})

icon_2.addEventListener("click", function() {
	icon_1.style.display = "block";
	audio.pause();
})



function counte() {
	let liveTime = new Date().getTime();
	let setTime = new Date("21 Feb 2022 0:00:00").getTime();

	let compare = setTime - liveTime;

	let secend = Math.floor(compare / 1000);
	let minite = Math.floor(secend / 60);
	let hour = Math.floor(minite / 60);
	let day = Math.floor(hour / 24);
	let manth = Math.floor(day / 30);

	let secend_v = secend % 60;
	let minite_v = minite % 60;
	let hour_v = hour % 60;
	let day_v = day % 24;
	let manth_v = manth % 30;

	manth_txt.innerHTML = manth_v;
	day_txt.innerHTML = day_v;
	hour_txt.innerHTML = hour_v;
	minite_txt.innerHTML = minite_v;
	secend_txt.innerHTML = secend_v;

	if (secend <= 0) {
		manth_txt.innerHTML = "00";
		day_txt.innerHTML = "00";
		hour_txt.innerHTML = "00";
		minite_txt.innerHTML = "00";
		secend_txt.innerHTML = "00";
		let time_count = document.querySelector(".time-count");
		time_count.style.display = "none";
		let rti = document.getElementById("rti");
		rti.style.width = "500px";
		rti.style.marginTop = "100px";
	}

}
counte();
setInterval(counte, 1000);


