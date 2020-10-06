function testimonialCarousel() {
  $.ajax({
    type: "GET",
    url: "https://smileschool-api.hbtn.info/quotes",
    dataType: "JSON",
    error: function () {
      console.log("JSON failed to query data");
    },
    success: function (res) {
      for (let id in res) {
        $("#carouselInnerQuotes").append(`<div class="carousel-item active">
								<div class="d-flex align-items-center pt-5">
											<img src="${res[id].pic_url}" alt="Profile 1" class="rounded-circle">
											<div class="text-white testimonial-text">
												<h4>${res[id].text}</h4>
												<p class="font-weight-bold">${res[id].name}</p>
												<p class="font-italic">${res[id].title}</p>
											</div>
										  </div>
										</div>`);

        if (id === 0) $(".carousel-inner").first().addClass("active");
      }
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  testimonialCarousel();
});
