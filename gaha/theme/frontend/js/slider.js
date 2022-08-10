var SLIDER = {

	slideBannerHome: function () {
		if (typeof Tech.$('.slide-banner__index') === 'undefined') return;
		const swiperBanner = new Swiper('.slide-banner__index', {
			slidesPerView: 1,
			speed: 600,
			spaceBetween: 0,
			pagination: {
				el: ".pagination-banner",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			  },
			  navigation: {
				nextEl: ".banner-next",
				prevEl: ".banner-prev",
			  },

		});
	
	},


	slideProduction: function () {
		if (typeof Tech.$('.slide-production') === 'undefined') return;
		const swiperBanner = new Swiper('.slide-production', {
			slidesPerView: 2,
			disableOnInteraction: true,
			speed: 600,
			spaceBetween: 10,
			navigation: {
				nextEl: ".production-next",
				prevEl: ".production-prev",
			  },
			  pagination: {
				el: ".pagination-production",
				clickable: true,
			  },

			breakpoints: {
				
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 15,
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 30,
				},


			}

		});
	},
	slideProduct: function () {
		if (typeof Tech.$('.slide-pro__index') === 'undefined') return;
		const swiperBanner = new Swiper('.slide-pro__index', {

			slidesPerView: 2,

			disableOnInteraction: true,

			speed: 600,

			spaceBetween: 10,
			slidesPerColumn: 2,

			navigation: {

				nextEl: '.product-cate__right' ,

				prevEl: '.product-cate__left'

			},

			pagination: {

				el: ".pagination-product",

				clickable: true,

			},

			breakpoints: {

			

				992: {

					spaceBetween: 24,

					slidesPerView: 3,

					slidesPerColumn: 2,

				},
				1200: {

					spaceBetween: 24,

					slidesPerView: 4,

					slidesPerColumn: 2,

				}

			}

		});
	},
	slideService: function () {
		if (typeof Tech.$('.slide-service') === 'undefined') return;
		const swiperBanner = new Swiper('.slide-service', {
			slidesPerView: 1.5,
			disableOnInteraction: true,
			speed: 600,
			spaceBetween: 10,
			navigation: {
				nextEl: ".service-next",
				prevEl: ".service-prev",
			  },
			

			breakpoints: {
				
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 15,
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 30,
				},


			}

		});
	},
	slideProductPages: function () {
		if (typeof Tech.$('.slide-pro__pages') === 'undefined') return;
		const swiperBanner = new Swiper('.slide-pro__pages', {

			slidesPerView: 1.5,

			disableOnInteraction: true,

			speed: 600,

			spaceBetween: 10,

			navigation: {

				nextEl: '.pro-next' ,

				prevEl: '.pro-prev'

			},

		
			breakpoints: {

				576: {

					slidesPerView: 1.5,

					spaceBetween: 10,

					freeMode: true,

				},

				576: {

					slidesPerView: 2,

					spaceBetween: 20

				},

				768: {

					slidesPerView: 2.5,

					spaceBetween: 15

				},

				992: {

					spaceBetween: 24,

					slidesPerView: 3,

					slidesPerColumn: 2,

				},
				1200: {

					spaceBetween: 24,

					slidesPerView: 3,

					slidesPerColumn: 2,

				}

			}

		});
	},
		slideTeam: function () {
		if (typeof Tech.$('.slide-team') === 'undefined') return;
		const swiperBanner = new Swiper('.slide-team', {
			slidesPerView: 1.5,
			disableOnInteraction: true,
			speed: 600,
			spaceBetween: 10,
			navigation: {
				nextEl: ".team-next",
				prevEl: ".team-prev",
			  },
			  pagination: {
				el: ".pagination-team",
				clickable: true,
			  },

			breakpoints: {
				
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 15,
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 30,
				},


			}

		});
	},
	init: function () {
		SLIDER.slideBannerHome();
		SLIDER.slideProduction();
		SLIDER.slideProduct();
		SLIDER.slideService();
		SLIDER.slideProductPages();
		SLIDER.slideTeam();
	
	},
}
Tech.Query.ready(function () {
	setTimeout(function () {
		SLIDER.init();
	}, 100);
});