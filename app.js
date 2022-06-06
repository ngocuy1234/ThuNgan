const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.open-modal-btn')
const iconCloseModal = document.querySelector('.modal__header .close-modal')
const buttonCloseModal = document.querySelector('.modal__footer button')
const body = document.querySelector('body');

// body.style.backgroundImage = 

function toggleModal() {
	modal.classList.toggle('hide')
	// alert('Uy');
}

openModalBtn.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) toggleModal()
})


$(document).ready(function () {
	$(".row").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		draggable: false,
		prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-angle-left"></i></button>`,
		nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-angle-right"></i></button>`,
		dots: true,
		autoplay: true,
		responsive: [{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				arrows: false,
				infinite: false,
			},
		}, ],
		// autoplay: true,
		// autoplaySpeed: 1000,
	});
});