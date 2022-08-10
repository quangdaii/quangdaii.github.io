var CLICK = {
    fixedMenu: function () {

        var header = Tech.$(".header");
        var headerHeight = header.outerHeight();
        var headerTop = Tech.$('.header-top').outerHeight();
        Tech.$("body").css("padding-top", headerHeight + `px`);
        header.addClass("fixed");

        var lastScrollTop = 0;
        window.addEventListener("scroll", function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                if (lastScrollTop > headerHeight) {
                    header.css("top", `-` + headerTop + `px`);
                }
            } else {
                header.css("top", "0px");
            }
            lastScrollTop = st <= 0 ? 0 : st;
        });
    },
    showMenu: function () {
        var buttonShowMenu = Tech.$('.show-menu-mobile ')
        var closeMenu = Tech.$('.over-lay');
        if (typeof buttonShowMenu != 'undefined') {
            buttonShowMenu.onClick(function () {
                Tech.$('.menu').addClass('active');
                Tech.$('.over-lay').addClass('show');
                Tech.$('body,html').addClass('show-menu');
            })
        }
        if (typeof closeMenu != 'undefined') {
            closeMenu.onClick(function () {
                Tech.$('.menu').removeClass('active');
                Tech.$('.over-lay').removeClass('show');
                Tech.$('body,html').removeClass('show-menu');
            })
        }

        var width_ = window.innerWidth;

        if (width_ < 1024) {
            var listIitemLi = Tech.$('.menu').find('li');
            listIitemLi.forEach(function (element, index) {
                if (element.find(':scope > ul').length() > 0) {
                    element.append(`<span class="btn-dropdown-menu"><i class="fa fa-angle-down" aria-hidden="true"></i></span>`);
                }
            });
            var listBtnDropdownMenu = Tech.$('.menu').find('.btn-dropdown-menu');
            var timeSlide = 300;
            listBtnDropdownMenu.onClick(function (event) {
                var _this = Tech.$(this);
                _this.css('pointer-events', 'none');
                setTimeout(function () {
                    _this.css('pointer-events', 'all');
                }, timeSlide);
                // var parentLi = Tech.$(this.closest('li'));
                var listUlChild = Tech.$(this).prev('ul');
                _this.toggleClass('open');
                listUlChild.toggleSlide(timeSlide);
            });
        }

    },
    initAnimation: function () {
        var width_ = window.innerWidth;
        if (width_ > 1023) {
            var wow = new WOW();
            wow.init();
        }

    },
    moduleSearch: function () {

        var btnShowSearch = Tech.$('.show-form-search');
        var btnCloseSearch = Tech.$('.close-form-search');
        if (typeof btnShowSearch !== 'undefined') {
            btnShowSearch._element.onclick = function () {

                Tech.$('.form-search-mobile').addClass('active');
                setTimeout(function () {
                    document.getElementById("input-search-header").focus();
                }, 500);
            }
        }
        if (typeof btnCloseSearch !== 'undefined') {
            btnCloseSearch._element.onclick = function () {
                Tech.$('.form-search-mobile').removeClass('active');
            }
        }

    },
    showModal: function () {
        var ebModal = document.getElementById('mySizeChartModal');

        var ebBtn = Tech.$('span[data-modal]');

        var ebSpan = document.getElementsByClassName("ebcf_close")[0];
        var div = Tech.$('#map-contact')

        if (typeof ebBtn !== 'undefined' && ebBtn !== null) {
            if (ebBtn._element.length > 0) {
                ebBtn._element.forEach(function (elm) {
                    elm._element.onclick = function () {
                        var link = Tech.$(this).attr('data-map');

                        ebModal.style.display = "block";
                        var frame = '<iframe src="' + link + '"></iframe>';
                        div.html(frame);
                    }
                })
            }else{
                ebBtn._element.onclick=function(){
                    var link = Tech.$(this).attr('data-map');
                    var frame = '<iframe src="' + link + '"></iframe>';
                    div.html(frame);
                }
            }



        }
        if (typeof ebSpan !== 'undefined' && ebSpan !== null) {
            ebSpan.onclick = function () {
                ebModal.style.display = "none";
            }

        }

        window.onclick = function (event) {
            if (event.target == ebModal) {
                ebModal.style.display = "none";
            }
        }
    },

    init: function () {

        CLICK.showMenu();
        CLICK.initAnimation();
        CLICK.fixedMenu();
        CLICK.moduleSearch();
        CLICK.showModal();
    },
}
Tech.Query.ready(function () {
    setTimeout(function () {
        CLICK.init();
    }, 100);
    BackToTop.create('.back-to-top', {
        threshold: 300,
    })


});