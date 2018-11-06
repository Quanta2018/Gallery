function getSlideshow(idx){
	var eventSlide = document.createElement("div");
	var id = "event-slide-" + idx.toString();

	eventSlide.id = id;
	eventSlide.className = "carousel slide Event-Slideshow";
	eventSlide.setAttribute("data-ride", "carousel");

	// Elemen indikator slide
	var indicators = document.createElement("ol");
	indicators.className = "carousel-indicators";
	for (var i = 0; i < 5; i++) {
		var indicator = document.createElement("li");
		indicator.setAttribute("data-target", "#" + id);
		indicator.setAttribute("data-slide-to", i.toString());

		indicators.appendChild(indicator);
	}
	eventSlide.appendChild(indicators);

	// Elemen gambar-gambar di slide
	var pictures = document.createElement("div");
	pictures.className = "carousel-inner Photo-Frame";
	for (var i = 1; i <= 5; i++) {
		var picture = document.createElement("div");
		if(i == 1){
			picture.className = "carousel-item active";
		}else{
			picture.className = "carousel-item";
		}

		var image = document.createElement("img");
		image.className = "d-block w-100 Photo";
		image.setAttribute("src",
			"test-img/img-"
			+ i.toString() 
			+ ".jpeg");
		image.setAttribute("object-fit", "cover");
		image.setAttribute("alt", "Slide " + i.toString());

		picture.appendChild(image);
		pictures.appendChild(picture);
	}
	eventSlide.appendChild(pictures);

	// Elemen tombol previous
	var prevBtn = document.createElement("a");
	prevBtn.className = "carousel-control-prev";
	prevBtn.setAttribute("href", "#" + id);
	prevBtn.setAttribute("role", "button");
	prevBtn.setAttribute("data-slide", "prev");

	var icon = document.createElement("span");
	icon.className = "carousel-control-prev-icon";
	icon.setAttribute("aria-hidden", "true");
	prevBtn.appendChild(icon);

	var altIcon = document.createElement("span");
	altIcon.className = "sr-only";
	altIcon.innerHTML = "Previous";
	prevBtn.appendChild(altIcon);

	eventSlide.appendChild(prevBtn);

	// Elemen tombol next
	var nextBtn = document.createElement("a");
	nextBtn.className = "carousel-control-next";
	nextBtn.setAttribute("href", "#" + id);
	nextBtn.setAttribute("role", "button");
	nextBtn.setAttribute("data-slide", "next");

	var icon = document.createElement("span");
	icon.className = "carousel-control-next-icon";
	icon.setAttribute("aria-hidden", "true");
	nextBtn.appendChild(icon);

	var altIcon = document.createElement("span");
	altIcon.className = "sr-only";
	altIcon.innerHTML = "Next";
	nextBtn.appendChild(altIcon);

	eventSlide.appendChild(nextBtn);

	return eventSlide;
}

function getEvent(idx, name){
	var event = document.createElement("div");
	event.className = "Event";

	var title = document.createElement("div");
	title.className = "Event-Title";
	title.innerHTML = name;

	event.appendChild(title);
	event.appendChild(getSlideshow(idx));

	return event;
}

function loadFunction(){
	var eventNames = ["Gathering", "PSAF", "Sabtu Pelangi",
						"Newbie Cup"];
	eventTable = document.createElement("table");
	eventTable.setAttribute("style", "table-layout: auto;")
	for (var i = 0; i < eventNames.length; i++) {
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		td.width = "1000px";
		td.height = "580px";
		td.appendChild(
			getEvent(i, eventNames[i])
			);
		tr.appendChild(td);
		eventTable.appendChild(tr);
	}
	document.getElementById("main").appendChild(eventTable);
}