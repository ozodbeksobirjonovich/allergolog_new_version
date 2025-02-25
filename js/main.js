if (jQuery(function (e) {
    "use strict";
    e(window).on("load", function () {
        e(".loader-blob").fadeOut(), e("#preloader").delay(300).fadeOut("slow", function () {
            e(this).remove()
        })
    }), jQuery(".header_search a").addClass("sclose"), jQuery(".header_search a").on("click", function () {
        jQuery(".field.searchform-s").focus(), jQuery(".header_search a").hasClass("sclose") ? (jQuery(".header_search a i").removeClass("icon-search-1").addClass("icon-search-1"), jQuery(this).removeClass("sclose").addClass("open"), jQuery(".header_search_content").addClass("on")) : (jQuery(this).removeClass("open").addClass("sclose"), jQuery(".header_search_content").removeClass("on"))
    }), jQuery(".header_search_content .close_btn").on("click", function () {
        jQuery(".header_search a").removeClass("open").addClass("sclose"), jQuery(".header_search_content").removeClass("on")
    }), jQuery(".header_menu a").addClass("sclose"), jQuery(".header_menu a").on("click", function () {
        jQuery(".field.searchform-s").focus(), jQuery(".header_menu a").hasClass("sclose") ? (jQuery(".header_menu a i").removeClass("icon-search-1").addClass("icon-search-1"), jQuery(this).removeClass("sclose").addClass("open"), jQuery(".header_menu_content").addClass("on")) : (jQuery(this).removeClass("open").addClass("sclose"), jQuery(".header_menu_content").removeClass("on"))
    }), jQuery(".header_menu_content .close_btn").on("click", function () {
        jQuery(".header_menu a").removeClass("open").addClass("sclose"), jQuery(".header_menu_content").removeClass("on")
    }), e(window).on("scroll", function () {
        matchMedia("only screen and (min-width: 1200px)").matches && (e(window).scrollTop() >= 50 ? e(".prt-stickable-header").addClass("fixed-header") : e(".prt-stickable-header").removeClass("fixed-header"))
    });
    // var t = {
    //     initialize: function() {
    //         this.Menuhover()
    //     },
    //     Menuhover: function() {
    //         var t = e("nav.main-menu");
    //         e(window).width(), e(window).height(), t.find("ul.menu").data("in"), t.find("ul.menu").data("out"), matchMedia("only screen and (max-width: 1200px)").matches && e("nav.main-menu ul.menu").each(function() {
    //             e("a.mega-menu-link", this).on("click", function(t) {
    //                 t.preventDefault(), e(this).toggleClass("active").next("ul").toggleClass("active")
    //             }), e(".megamenu-fw", this).each(function() {
    //                 e(".col-menu", this).each(function() {
    //                     e(".title", this).off("click"), e(".title", this).on("click", function() {
    //                         return e(this).closest(".col-menu").find(".content").stop().toggleClass("active"), e(this).closest(".col-menu").toggleClass("active"), !1
    //                     })
    //                 })
    //             })
    //         })
    //     }
    // };
    // e(".btn-show-menu-mobile").on("click", function(t) {
    //     return e(this).toggleClass("is-active"), e(".menu-mobile").toggleClass("show"), !1
    // }), e(document).ready(function() {
    //     t.initialize()
    // });
    var o = jQuery(".banner_slider"),
        s = e("div.slide:first-child");

    function a(t) {
        t.each(function () {
            var t = e(this),
                o = t.data("delay"),
                s = "animated " + t.data("animation");
            t.css({
                "animation-delay": o,
                "-webkit-animation-delay": o
            }), t.addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                t.removeClass(s)
            })
        })
    }

    function i() {
        jQuery(".prt-expandcontent-yes").each(function () {
            var e = "",
                t = jQuery(window).width(),
                o = jQuery(this).parent().width(),
                s = (t - o) / 3;
            jQuery(this).hasClass("prt-right-span") ? jQuery(".prt-expandcontent_column > div" + (e = ", .prt-expandcontent_column > .prt-expandcontent_wrapper "), jQuery(this)).css("margin-right", "-" + s + "px") : jQuery(this).hasClass("prt-left-span") && jQuery(".prt-expandcontent_column > div" + (e = ", .prt-expandcontent_column > .prt-expandcontent_wrapper "), jQuery(this)).css("margin-left", "-" + s + "px")
        })
    }
    o.on("init", function (e, t) {
        a(s.find("[data-animation]"))
    }), o.on("beforeChange", function (t, o, s, i) {
        a(e('div.slick-slide[data-slick-index="' + i + '"]').find("[data-animation]"))
    }), o.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !0,
        dots: !1,
        swipe: !0,
        adaptiveHeight: !0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: !1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                autoplay: !1,
                autoplaySpeed: 4e3,
                swipe: !0
            }
        }]
    }), e(".side-menu-container").each(function () {
        e(".side-menu > a", this).on("click", function (t) {
            t.preventDefault(), e(".side-overlay").toggleClass("on"), e("body").toggleClass("on-side")
        })
    }), e(".side .close-side").on("click", function (t) {
        t.preventDefault(), e(".side-overlay").removeClass("on"), e("body").removeClass("on-side")
    }), e("[data-appear-animation]").each(function () {
        var t = e(this),
            o = t.data("appear-animation");
        t.data("appear-animation-delay") && t.data("appear-animation-delay"), e(window).width() > 959 ? (t.html("0"), t.waypoint(function (e) {
            if (!t.hasClass("completed")) {
                var o = t.data("from"),
                    s = t.data("to"),
                    a = t.data("interval");
                t.numinate({
                    format: "%counter%",
                    from: o,
                    to: s,
                    runningInterval: 2e3,
                    stepUnit: a,
                    onComplete: function (e) {
                        t.addClass("completed")
                    }
                })
            }
        }, {
            offset: "85%"
        })) : "animateWidth" == o && t.css("width", t.data("width"))
    }), e(".prt-progress-bar").each(function () {
        e(this).find(".progress-bar").width(0)
    }), e(".prt-progress-bar").each(function () {
        e(this).find(".progress-bar").animate({
            width: e(this).attr("data-percent")
        }, 2e3)
    }), e(".progress-bar-percent[data-percentage]").each(function () {
        var t = e(this),
            o = Math.ceil(e(this).attr("data-percentage"));
        e({
            countNum: 0
        }).animate({
            countNum: o
        }, {
            duration: 2e3,
            easing: "linear",
            step: function () {
                var e = "";
                e = "0" === o ? Math.floor(this.countNum) + "%" : Math.floor(this.countNum + 1) + "%", t.text(e)
            }
        })
    }), jQuery(".prt-circle-box").each(function () {
        var e = jQuery(this),
            t = e.data("fill"),
            o = e.data("emptyfill"),
            s = e.data("thickness"),
            a = e.data("linecap"),
            i = e.data("gradient");
        if ("" != i && (t = {
            gradient: [(i = i.split("|"))[0], i[1]]
        }), "function" == typeof jQuery.fn.circleProgress) {
            var n = e.data("digit"),
                r = e.data("before"),
                l = e.data("after"),
                n = Number(n),
                d = n / 100,
                c = e.data("size");
            jQuery(".prt-circle", e).circleProgress({
                value: 0,
                duration: 8e3,
                size: c,
                startAngle: -Math.PI / 4 * 1.5,
                thickness: s,
                linecap: a,
                emptyFill: o,
                fill: t
            }).on("circle-animation-progress", function (t, o, s) {
                e.find(".prt-fid-number").html(r + Math.round(100 * s) + l)
            })
        }
        e.waypoint(function (t) {
            e.hasClass("completed") || ("function" == typeof jQuery.fn.circleProgress && jQuery(".prt-circle", e).circleProgress({
                value: d
            }), e.addClass("completed"))
        }, {
            offset: "90%"
        })
    }), jQuery(document).ready(function (e) {
        i()
    }), jQuery(window).resize(function () {
        i()
    }), e(".prt-tabs").each(function () {
        e(this).children(".content-tab").children().hide(), e(this).children(".content-tab").children().first().show(), e(this).find(".tabs").children("li").on("click", function (t) {
            var o = e(this).index(),
                s = e(this).siblings().removeClass("active").parents(".prt-tabs").children(".content-tab").children().eq(o);
            s.addClass("active").fadeIn("slow"), s.siblings().removeClass("active"), e(this).addClass("active").parents(".prt-tabs").children(".content-tab").children().eq(o).siblings().hide(), t.preventDefault()
        })
    }), e(".accordion > .toggle").children(".toggle-content").hide(), e(".toggle-title").on("click", function (t) {
        t.preventDefault();
        var o = e(this);
        o.parent().parent().find(".toggle .toggle-title a").removeClass("active"), o.next().hasClass("show") ? (o.next().removeClass("show"), o.next().slideUp("easeInExpo")) : (o.parent().parent().find(".toggle .toggle-content").removeClass("show"), o.parent().parent().find(".toggle .toggle-content").slideUp("easeInExpo"), o.next().toggleClass("show"), o.next().removeClass("show"), o.next().slideToggle("easeInExpo"), o.next().parent().children().children().addClass("active"))
    }), e(function () {
        if (e().isotope) {
            var t = e(".isotope-project");
            t.imagesLoaded(function () {
                t.isotope({
                    itemSelector: "",
                    transitionDuration: "1s"
                })
            }), e(".portfolio-filter li").on("click", function () {
                var o = e(this).find("a").attr("data-filter");
                return e(".portfolio-filter li").removeClass("active"), e(this).addClass("active"), t.isotope({
                    filter: o
                }), !1
            })
        }
    }), e(function () {
        jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function () {
            if ("_blank" != jQuery(this).attr("target") && !jQuery(this).hasClass("prettyphoto")) {
                var t = e(this).attr("rel");
                void 0 !== t && !1 !== t && "prettyPhoto" != t && jQuery(this).attr("data-rel", "prettyPhoto")
            }
        }), jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto(), jQuery("a.prt_prettyphoto").prettyPhoto(), jQuery('a[rel^="prettyPhoto"]').prettyPhoto()
    }), e(window).on("load", function () {
        var t;
        (t = e(".masonry-grid")).length && t.isotope({
            itemSelector: ".masonry-grid-item",
            percentPosition: !0,
            layoutMode: "masonry",
            masonry: {
                columnWidth: ".grid-sizer"
            }
        })
    }), e(".slick_slider").slick({
        speed: 1e3,
        infinite: !0,
        arrows: !1,
        dots: !1,
        autoplay: !1,
        centerMode: !1,
        responsive: [{
            breakpoint: 1360,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), jQuery(".testimonials-nav", this), jQuery(".testimonials-info", this), jQuery(".testimonials-name", this), jQuery(".testimonials-info", this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !1,
        arrows: !0,
        asNavFor: ".testimonials-nav,.testimonials-name",
        adaptiveHeight: !0,
        speed: 1500,
        autoplay: !1,
        loop: !0,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: !1,
                centerMode: !0,
                autoplay: !0,
                centerPadding: "0",
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                centerMode: !0,
                autoplay: !0,
                centerPadding: "0",
                slidesToShow: 1
            }
        }]
    }), jQuery(".testimonials-nav", this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".testimonials-info,.testimonials-name",
        centerMode: !0,
        centerPadding: "0",
        focusOnSelect: !0,
        autoplay: !1,
        speed: 1500,
        arrows: !1,
        dots: !1,
        variableWidth: !0,
        loop: !0,
        responsive: [{
            breakpoint: 1199,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "0",
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "0",
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), jQuery(".testimonials-name", this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !1,
        arrows: !1,
        asNavFor: ".testimonials-info,.testimonials-nav",
        adaptiveHeight: !0,
        speed: 1500,
        autoplay: !1,
        loop: !0
    }), e(".slick_slider_rtl").slick({
        speed: 1e3,
        infinite: !0,
        arrows: !1,
        dots: !1,
        autoplay: !0,
        centerMode: !1,
        slidesToShow: 6,
        slidesToScroll: 1,
        rtl: !0,
        responsive: [{
            breakpoint: 1871,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), e(".vertical_slider.share").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        vertical: !0,
        verticalSwiping: !0
    }), jQuery("#totop").hide(), e(window).on("scroll", function () {
        jQuery(this).scrollTop() >= 500 ? (jQuery("#totop").fadeIn(200), jQuery("#totop").addClass("top-visible")) : (jQuery("#totop").fadeOut(200), jQuery("#totop").removeClass("top-visible"))
    }), jQuery("#totop").on("click", function () {
        return jQuery("body,html").animate({
            scrollTop: 0
        }, 500), !1
    })
}), $(document).ready(function () {
    $("a[rel^='prettyPhoto']").prettyPhoto(), $(".owl-slider").owlCarousel({
        loop: !0,
        autoPlay: !0,
        items: 4,
        nav: !0,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [500, 1]
    })
}), screen.width > 575) {
    e(".Fristss", ".big-title");

    function e(e, t) {
        var o = jQuery(e + " " + t);
        jQuery(window).height(), jQuery(window).on("scroll", function () {
            if (jQuery(e).length) {
                var t = jQuery(document).scrollTop() + jQuery(window).height(),
                    s = jQuery(e).offset().top;
                if (s <= t) {
                    var a = jQuery(document).scrollTop() - s + jQuery(window).height() - 150;
                    o.css({
                        transform: "translateX(" + 10 * (a + a / 30 / 100) / 100 + "px)"
                    })
                }
            }
        })
    }
}

function tm_tmbox_animation() {
    let e = gsap.utils.toArray(".prt-tmbox-view-style1");

    function t() {
        this.tm_hover.reversed(!this.tm_hover.reversed())
    }
    e.forEach(e => {
        let o = e.querySelector(".tm-animation-hover-img"),
            s = gsap.timeline();
        s.to(o, {
            opacity: 1,
            duration: .4,
            scale: 1,
            ease: "Power2.easeOut"
        }), e.tm_hover = s.play().reversed(!0), e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", t), e.addEventListener("mousemove", e => {
            let t = e.offsetX,
                s = e.offsetY,
                a = gsap.timeline();
            a.to(o, {
                x: t,
                y: s
            })
        })
    })
}
$(".featured-imagebox-post-border").hover(function () {
    $(".featured-imagebox-post-border.active").addClass("inactive").removeClass("active")
}, function () {
    $(".featured-imagebox-post-border.inactive").addClass("active").removeClass("inactive")
}), jQuery(window).on("load", function () {
    tm_tmbox_animation(), gsap.delayedCall(1, () => ScrollTrigger.getAll().forEach(e => {
        e.refresh()
    }))
});
$(document).ready(function () {
    // Fixed tugmalar uchun HTML
    var fixedButtonsHTML = '<div id="fixed-buttons" style="position: fixed; right: 20px; top: 50%; transform: translateY(-50%); z-index: 9999; display: flex; flex-direction: column; gap: 10px;">' +
        '<a href="https://t.me/allergolog_muxtorov" target="_blank" style="display: flex; justify-content: center; align-items: center; width: 50px; height: 50px; font-size: 24px; border-radius: 50%; transition: all 0.3s ease-in-out; background-color: #007bff; color: #fff; text-decoration: none;">' +
        '<i class="bi bi-telegram"></i>' +
        '</a>' +
        '<a href="https://www.youtube.com/@Allergolog_Muxtorov" target="_blank" style="display: flex; justify-content: center; align-items: center; width: 50px; height: 50px; font-size: 24px; border-radius: 50%; transition: all 0.3s ease-in-out; background-color: #007bff; color: #fff; text-decoration: none;">' +
        '<i class="bi bi-youtube"></i>' +
        '</a>' +
        '<a href="https://www.instagram.com/allergolog_uz?igsh=bzY1YzYxMGg1bm82&utm_source=qr" target="_blank" style="display: flex; justify-content: center; align-items: center; width: 50px; height: 50px; font-size: 24px; border-radius: 50%; transition: all 0.3s ease-in-out; background-color: #007bff; color: #fff; text-decoration: none;">' +
        '<i class="bi bi-instagram"></i>' +
        '</a>' +
        '<a href="tel:+998901317775" style="display: flex; justify-content: center; align-items: center; width: 50px; height: 50px; font-size: 24px; border-radius: 50%; transition: all 0.3s ease-in-out; background-color: #007bff; color: #fff; text-decoration: none;">' +
        '<i class="bi bi-telephone"></i>' +
        '</a>' +
        '<a href="https://yandex.uz/maps/-/CDXGV04G" target="_blank" style="display: flex; justify-content: center; align-items: center; width: 50px; height: 50px; font-size: 24px; border-radius: 50%; transition: all 0.3s ease-in-out; background-color: #007bff; color: #fff; text-decoration: none;">' +
        '<i class="bi bi-geo-alt"></i>' +
        '</a>' +
        // Ariza qoldirish tugmasi
        '<a href="javascript:void(0)" id="openModal" style="display: flex; justify-content: center; align-items: center; width: 50px; height: 50px; font-size: 24px; border-radius: 50%; transition: all 0.3s ease-in-out; background-color: #007bff; color: #fff; text-decoration: none;">' +
        '<i class="bi bi-pencil-square"></i>' +
        '</a>' +
        '</div>';

    $('body').append(fixedButtonsHTML);

    // Yangilangan Modal oyna (rasmdagi dizaynga moslashtirilgan)
    var modalHTML = '<div id="modalFormContainer" style="display:none; position: fixed; top: 0; left: 0; width:100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10000; overflow-y: auto;">' +
        '<div style="position: relative; margin: 5% auto; padding: 0; background: linear-gradient(to bottom, #8b3cb6, #5a2e8a); width: 90%; max-width: 400px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); color: white;">' +
        '<div style="padding: 20px; position: relative;">' +
        '<span id="closeModal" style="position: absolute; top: 10px; right: 15px; cursor: pointer; font-size: 24px; color: white;">&times;</span>' +

        '<div style="margin: 25px 0 15px; text-align: center;">' +
        '<h3 style="margin-bottom: 10px; font-size: 16px;">Allergologik va Immunologik shikoyatlar bormi? <span style="font-size: 20px;">🤔</span><span style="font-size: 20px;">🥲</span></h3>' +
        '<p style="margin-bottom: 20px; font-size: 16px;">Bizga hoziroq xabar qoldirishingiz mumkin! <span style="font-size: 20px;">😊</span></p>' +
        '</div>' +

        '<form action="https://formspree.io/f/mnnjydrr" method="POST" id="modalForm">' +
        '<div style="margin-bottom: 15px;">' +
        '<label style="display: block; margin-bottom: 8px; font-size: 14px;">Ism <span style="color: red;">*</span></label>' +
        '<input type="text" name="name" required style="width: 100%; padding: 12px; border-radius: 8px; border: none; background-color: rgba(255, 255, 255, 0.15); color: white; font-size: 16px;">' +
        '</div>' +

        '<div style="margin-bottom: 15px;">' +
        '<label style="display: block; margin-bottom: 8px; font-size: 14px;">Telegram Raqamingiz <span style="color: red;">*</span></label>' +
        '<input type="text" name="telegram" required style="width: 100%; padding: 12px; border-radius: 8px; border: none; background-color: rgba(255, 255, 255, 0.15); color: white; font-size: 16px;">' +
        '</div>' +

        '<div style="margin-bottom: 15px;">' +
        '<label style="display: block; margin-bottom: 8px; font-size: 14px;">Shikoyatlaringiz <span style="color: red;">*</span></label>' +
        '<textarea name="complaints" required style="width: 100%; padding: 12px; border-radius: 8px; border: none; background-color: rgba(255, 255, 255, 0.15); color: white; font-size: 16px; min-height: 100px;"></textarea>' +
        '</div>' +

        '<div style="margin-bottom: 20px;">' +
        '<label style="display: block; margin-bottom: 10px; font-size: 14px;">Siz oldin tashrif buyurganmisiz? <span style="color: red;">*</span></label>' +
        '<div style="display: flex; align-items: center; background-color: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px;">' +
        '<div style="width: 50%; display: flex; align-items: center;">' +
        '<input type="radio" id="visited_yes" name="visited" value="ha" style="margin-right: 10px; transform: scale(1.5);">' +
        '<label for="visited_yes" style="font-size: 16px;">Xa</label>' +
        '</div>' +
        '<div style="width: 50%; display: flex; align-items: center;">' +
        '<input type="radio" id="visited_no" name="visited" value="yoq" style="margin-right: 10px; transform: scale(1.5);">' +
        '<label for="visited_no" style="font-size: 16px;">Yoq</label>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<button type="submit" style="width: 100%; padding: 15px; background-color: #9c27b0; color: #fff; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; margin-bottom: 15px;">Yuborish</button>' +
        '</form>' +

        '<div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">' +
        '<a href="https://yandex.uz/maps/-/CHubuNke" style="display: flex; justify-content: center; align-items: center; padding: 12px; background-color: #5a2e8a; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">' +
        '<i class="bi bi-geo-alt" style="margin-right: 10px;"></i> Manzil' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    $('body').append(modalHTML);

    // Modal oynani ochish va yopish funksiyalari
    $('#openModal').click(function () {
        $('#modalFormContainer').fadeIn();
    });

    $('#closeModal').click(function () {
        $('#modalFormContainer').fadeOut();
    });

    // Agar foydalanuvchi modal tashqarisiga bosadigan bo'lsa, modalni yopish
    $(window).click(function (event) {
        if ($(event.target).is('#modalFormContainer')) {
            $('#modalFormContainer').fadeOut();
        }
    });

    // Form submit handling
    $('#modalForm').submit(function (e) {
        var isValid = true;
        var requiredFields = $(this).find('[required]');

        requiredFields.each(function () {
            if (!$(this).val()) {
                isValid = false;
                $(this).css('border', '1px solid red');
            } else {
                $(this).css('border', 'none');
            }
        });

        if (!$('input[name="visited"]:checked').length) {
            isValid = false;
            $('input[name="visited"]').closest('div.display-flex').css('border', '1px solid red');
        }

        if (!isValid) {
            e.preventDefault();
            alert('Iltimos, barcha majburiy maydonlarni to\'ldiring');
        }
    });

    // Mobil ekran uchun o'zgarishlar
    function adjustForMobile() {
        if (window.innerWidth <= 768) {
            $('#fixed-buttons').css({
                "right": "0",
                "left": "0",
                "bottom": "0",
                "top": "auto",
                "transform": "translateY(0)",
                "flex-direction": "row",
                "justify-content": "space-evenly",
                "padding": "10px 0",
                "background-color": "rgba(255, 255, 255, 0.9)"
            });

            $('#fixed-buttons a').css({
                "width": "60px",
                "height": "60px",
                "font-size": "30px"
            });
        } else {
            $('#fixed-buttons').css({
                "position": "fixed",
                "right": "20px",
                "top": "50%",
                "transform": "translateY(-50%)",
                "z-index": "9999",
                "display": "flex",
                "flex-direction": "column",
                "gap": "10px",
                "background-color": "transparent"
            });

            $('#fixed-buttons a').css({
                "width": "50px",
                "height": "50px",
                "font-size": "24px"
            });
        }
    }

    // Dastlabki chaqirish va oyna o'lchami o'zgarganda qayta ishlash
    adjustForMobile();
    $(window).resize(adjustForMobile);
});