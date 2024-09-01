
// ENLARGE IMAGE

// $('img.enlarge').hover(
// 	function(){
// 		$(this).css({
// 			'position':'fixed',
// 			'top':'0',
// 			'height':'100vh',
// 			'width':'auto'
// 		})
// 		console.log('hi')
// 	}, function(){
// 		$(this).css({
// 			'position':'relative',
// 			'height':'auto',
// 			'width':'100%'
// 		})
// 		console.log('bye')
// 	}
// )



// NOT SO SECRET HOVER

$(document).mousemove(function(e){
	$('.secret-hover-content').css({'top': e.clientY + 12, 'left': e.clientX + 12})
})

$('.secret-hover.the-web').hover(
	function(){
		$('.secret-hover-content.the-web').css({
			'display':'inline'
		})
	}, function(){
		$('.secret-hover-content.the-web').css({
			'display':'none'
		})
	}
)

$('.secret-hover.book-binding').hover(
	function(){
		$('.secret-hover-content.book-binding').css({
			'display':'inline'
		})
	}, function(){
		$('.secret-hover-content.book-binding').css({
			'display':'none'
		})
	}
)



// LEFT COLUMN ITALIC CHANGE DEPENDING ON SCROLL POSITION

// var scrollPosition = $(window).scrollTop();
// var extraPosition = $('#extra-summary').scrollTop();

// if (scrollPosition > extraPosition) {
// 	// $('.column.right').css({'background-color':'red'});
// 	console.log('hi')
// }



// CLICK TO ANOTHER PAGE

$('.to-vernacular').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ee').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.ee').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('.to-da-ge').click(function(){
	$('.content').css({'display':'none'});
	$('.content.cc').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.cc').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('.to-seminars').click(function(){
	$('.content').css({'display':'none'});
	$('.content.tt').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.tt').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('.to-rave').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ff').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.ff').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})


// CLICK TO VIEW SECTION

// $('span.a.about').click(function(){
// 	$('.content').css({'display':'none'});
// 	$('.content.about').css({'display':'inline'});
// 	$('span.a').css({'font-style':'normal'})
// 	$('span.b').css({'font-style':'normal'})
// 	$(this).css({'font-style':'italic'});
// 	$('.column.right').scrollTop(0);
// })

// $('span.a.contact').click(function(){
// 	$('.content').css({'display':'none'});
// 	$('.content.contact').css({'display':'inline'});
// 	$('span.a').css({'font-style':'normal'})
// 	$('span.b').css({'font-style':'normal'})
// 	$(this).css({'font-style':'italic'});
// 	$('.column.right').scrollTop(0);
// })

$('span.a.main-works').click(function(){
	$('.content').css({'display':'none'});
	$('.content.main').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
	$('.column.right').scrollTop($('#main-summary').offset().top - 10);
})

$('span.a.extra').click(function(){
	$('.content').css({'display':'none'});
	$('.content.main').css({'display':'inline'});
	// $('.content.extra').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
	$('.column.right').scrollTop($('#extra-summary').offset().top - 10);
})

$('span.a.design').click(function(){
	$('.content').css({'display':'none'});
	$('.content.main').css({'display':'inline'});
	// $('.content.design').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
	$('.column.right').scrollTop($('#design-summary').offset().top - 10);
})

		// WORKS (CLICK TEXT)

$('span.b.aa').click(function(){
	$('.content').css({'display':'none'});
	$('.content.aa').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

// $('span.b.aa').click(function(){
//   alert("The paragraph was clicked.");
// });

$('span.b.bb').click(function(){
	$('.content').css({'display':'none'});
	$('.content.bb').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.cc').click(function(){
	$('.content').css({'display':'none'});
	$('.content.cc').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.dd').click(function(){
	$('.content').css({'display':'none'});
	$('.content.dd').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.ee').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ee').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.ff').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ff').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.gg').click(function(){
	$('.content').css({'display':'none'});
	$('.content.gg').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.hh').click(function(){
	$('.content').css({'display':'none'});
	$('.content.hh').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.ii').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ii').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.jj').click(function(){
	$('.content').css({'display':'none'});
	$('.content.jj').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.kk').click(function(){
	$('.content').css({'display':'none'});
	$('.content.kk').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.ll').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ll').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.mm').click(function(){
	$('.content').css({'display':'none'});
	$('.content.mm').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.nn').click(function(){
	$('.content').css({'display':'none'});
	$('.content.nn').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.oo').click(function(){
	$('.content').css({'display':'none'});
	$('.content.oo').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.pp').click(function(){
	$('.content').css({'display':'none'});
	$('.content.pp').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.qq').click(function(){
	$('.content').css({'display':'none'});
	$('.content.qq').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.rr').click(function(){
	$('.content').css({'display':'none'});
	$('.content.rr').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.ss').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ss').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.tt').click(function(){
	$('.content').css({'display':'none'});
	$('.content.tt').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.uu').click(function(){
	$('.content').css({'display':'none'});
	$('.content.uu').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('span.b.vv').click(function(){
	$('.content').css({'display':'none'});
	$('.content.vv').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$(this).css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

		// WORKS (CLICK IMAGE)

$('img.main.aa').click(function(){
	$('.content').css({'display':'none'});
	$('.content.aa').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.aa').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.bb').click(function(){
	$('.content').css({'display':'none'});
	$('.content.bb').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.bb').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.cc').click(function(){
	$('.content').css({'display':'none'});
	$('.content.cc').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.cc').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.dd').click(function(){
	$('.content').css({'display':'none'});
	$('.content.dd').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.dd').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.ee').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ee').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.ee').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.ff').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ff').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.ff').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.gg').click(function(){
	$('.content').css({'display':'none'});
	$('.content.gg').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.gg').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.hh').click(function(){
	$('.content').css({'display':'none'});
	$('.content.hh').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.hh').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.ii').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ii').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.ii').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.jj').click(function(){
	$('.content').css({'display':'none'});
	$('.content.jj').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.jj').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.kk').click(function(){
	$('.content').css({'display':'none'});
	$('.content.kk').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.kk').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.ll').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ll').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.ll').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.mm').click(function(){
	$('.content').css({'display':'none'});
	$('.content.mm').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.mm').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.nn').click(function(){
	$('.content').css({'display':'none'});
	$('.content.nn').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.nn').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.oo').click(function(){
	$('.content').css({'display':'none'});
	$('.content.oo').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.oo').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.pp').click(function(){
	$('.content').css({'display':'none'});
	$('.content.pp').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.pp').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.qq').click(function(){
	$('.content').css({'display':'none'});
	$('.content.qq').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.qq').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.rr').click(function(){
	$('.content').css({'display':'none'});
	$('.content.rr').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.rr').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.ss').click(function(){
	$('.content').css({'display':'none'});
	$('.content.ss').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.ss').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.tt').click(function(){
	$('.content').css({'display':'none'});
	$('.content.tt').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.tt').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.uu').click(function(){
	$('.content').css({'display':'none'});
	$('.content.uu').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.uu').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})

$('img.main.vv').click(function(){
	$('.content').css({'display':'none'});
	$('.content.vv').css({'display':'inline'});
	$('span.a').css({'font-style':'normal'})
	$('span.b').css({'font-style':'normal'})
	$('span.b.vv').css({'font-style':'italic'});
	$('.column.right').scrollTop(0);
})






// HOVER OVER LEFT COLUMN TEXT, FLICKER CORRESPONDING RIGHT COLUMN IMAGE

$('span.b.aa').hover(
	function(){
		$('img.aa').addClass('flicker-img');
		$('span.date.aa').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.aa').removeClass('flicker-img');
		$('span.date.aa').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.bb').hover(
	function(){
		$('img.bb').addClass('flicker-img');
		$('span.date.bb').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.bb').removeClass('flicker-img');
		$('span.date.bb').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.cc').hover(
	function(){
		$('img.cc').addClass('flicker-img');
		$('span.date.cc').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.cc').removeClass('flicker-img');
		$('span.date.cc').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.dd').hover(
	function(){
		$('img.dd').addClass('flicker-img');
		$('span.date.dd').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.dd').removeClass('flicker-img');
		$('span.date.dd').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.ee').hover(
	function(){
		$('img.ee').addClass('flicker-img');
		$('span.date.ee').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.ee').removeClass('flicker-img');
		$('span.date.ee').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.ff').hover(
	function(){
		$('img.ff').addClass('flicker-img');
		$('span.date.ff').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.ff').removeClass('flicker-img');
		$('span.date.ff').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.gg').hover(
	function(){
		$('img.gg').addClass('flicker-img');
		$('span.date.gg').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.gg').removeClass('flicker-img');
		$('span.date.gg').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.hh').hover(
	function(){
		$('img.hh').addClass('flicker-img');
		$('span.date.hh').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.hh').removeClass('flicker-img');
		$('span.date.hh').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.ii').hover(
	function(){
		$('img.ii').addClass('flicker-img');
		$('span.date.ii').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.ii').removeClass('flicker-img');
		$('span.date.ii').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.jj').hover(
	function(){
		$('img.jj').addClass('flicker-img');
		$('span.date.jj').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.jj').removeClass('flicker-img');
		$('span.date.jj').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.kk').hover(
	function(){
		$('img.kk').addClass('flicker-img');
		$('span.date.kk').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.kk').removeClass('flicker-img');
		$('span.date.kk').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.ll').hover(
	function(){
		$('img.ll').addClass('flicker-img');
		$('span.date.ll').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.ll').removeClass('flicker-img');
		$('span.date.ll').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.mm').hover(
	function(){
		$('img.mm').addClass('flicker-img');
		$('span.date.mm').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.mm').removeClass('flicker-img');
		$('span.date.mm').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.nn').hover(
	function(){
		$('img.nn').addClass('flicker-img');
		$('span.date.nn').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.nn').removeClass('flicker-img');
		$('span.date.nn').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.oo').hover(
	function(){
		$('img.oo').addClass('flicker-img');
		$('span.date.oo').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.oo').removeClass('flicker-img');
		$('span.date.oo').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.pp').hover(
	function(){
		$('img.pp').addClass('flicker-img');
		$('span.date.pp').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.pp').removeClass('flicker-img');
		$('span.date.pp').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.qq').hover(
	function(){
		$('img.qq').addClass('flicker-img');
		$('span.date.qq').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.qq').removeClass('flicker-img');
		$('span.date.qq').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.rr').hover(
	function(){
		$('img.rr').addClass('flicker-img');
		$('span.date.rr').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.rr').removeClass('flicker-img');
		$('span.date.rr').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.ss').hover(
	function(){
		$('img.ss').addClass('flicker-img');
		$('span.date.ss').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.ss').removeClass('flicker-img');
		$('span.date.ss').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.tt').hover(
	function(){
		$('img.tt').addClass('flicker-img');
		$('span.date.tt').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.tt').removeClass('flicker-img');
		$('span.date.tt').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.uu').hover(
	function(){
		$('img.uu').addClass('flicker-img');
		$('span.date.uu').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.uu').removeClass('flicker-img');
		$('span.date.uu').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)

$('span.b.vv').hover(
	function(){
		$('img.vv').addClass('flicker-img');
		$('span.date.vv').css({'display':'inline'});
		$('.column.left').css({'margin-bottom':'2rem'});
	}, function(){
		$('img.vv').removeClass('flicker-img');
		$('span.date.vv').css({'display':'none'});
		$('.column.left').css({'margin-bottom':'0rem'});
	}
)




// HOVER OVER RIGHT COLUMN IMAGE, FLICKER LEFT COLUMN TEXT

$('img.aa').hover(
	function(){
		$('span.b.aa').addClass('flicker-txt');
		$('span.date.aa').css({'display':'inline'});
		// $('span.a.main').css({''})
	}, function(){
		$('span.b.aa').removeClass('flicker-txt');
		$('span.date.aa').css({'display':'none'});
	}
)

$('img.bb').hover(
	function(){
		$('span.b.bb').addClass('flicker-txt');
		$('span.date.bb').css({'display':'inline'});
	}, function(){
		$('span.b.bb').removeClass('flicker-txt');
		$('span.date.bb').css({'display':'none'});
	}
)

$('img.cc').hover(
	function(){
		$('span.b.cc').addClass('flicker-txt');
		$('span.date.cc').css({'display':'inline'});
	}, function(){
		$('span.b.cc').removeClass('flicker-txt');
		$('span.date.cc').css({'display':'none'});
	}
)

$('img.dd').hover(
	function(){
		$('span.b.dd').addClass('flicker-txt');
		$('span.date.dd').css({'display':'inline'});
	}, function(){
		$('span.b.dd').removeClass('flicker-txt');
		$('span.date.dd').css({'display':'none'});
	}
)

$('img.ee').hover(
	function(){
		$('span.b.ee').addClass('flicker-txt');
		$('span.date.ee').css({'display':'inline'});
	}, function(){
		$('span.b.ee').removeClass('flicker-txt');
		$('span.date.ee').css({'display':'none'});
	}
)

$('img.ff').hover(
	function(){
		$('span.b.ff').addClass('flicker-txt');
		$('span.date.ff').css({'display':'inline'});
	}, function(){
		$('span.b.ff').removeClass('flicker-txt');
		$('span.date.ff').css({'display':'none'});
	}
)

$('img.gg').hover(
	function(){
		$('span.b.gg').addClass('flicker-txt');
		$('span.date.gg').css({'display':'inline'});
	}, function(){
		$('span.b.gg').removeClass('flicker-txt');
		$('span.date.gg').css({'display':'none'});
	}
)

$('img.hh').hover(
	function(){
		$('span.b.hh').addClass('flicker-txt');
		$('span.date.hh').css({'display':'inline'});
	}, function(){
		$('span.b.hh').removeClass('flicker-txt');
		$('span.date.hh').css({'display':'none'});
	}
)

$('img.ii').hover(
	function(){
		$('span.b.ii').addClass('flicker-txt');
		$('span.date.ii').css({'display':'inline'});
	}, function(){
		$('span.b.ii').removeClass('flicker-txt');
		$('span.date.ii').css({'display':'none'});
	}
)

$('img.jj').hover(
	function(){
		$('span.b.jj').addClass('flicker-txt');
		$('span.date.jj').css({'display':'inline'});
	}, function(){
		$('span.b.jj').removeClass('flicker-txt');
		$('span.date.jj').css({'display':'none'});
	}
)

$('img.kk').hover(
	function(){
		$('span.b.kk').addClass('flicker-txt');
		$('span.date.kk').css({'display':'inline'});
	}, function(){
		$('span.b.kk').removeClass('flicker-txt');
		$('span.date.kk').css({'display':'none'});
	}
)

$('img.ll').hover(
	function(){
		$('span.b.ll').addClass('flicker-txt');
		$('span.date.ll').css({'display':'inline'});
	}, function(){
		$('span.b.ll').removeClass('flicker-txt');
		$('span.date.ll').css({'display':'none'});
	}
)

$('img.mm').hover(
	function(){
		$('span.b.mm').addClass('flicker-txt');
		$('span.date.mm').css({'display':'inline'});
	}, function(){
		$('span.b.mm').removeClass('flicker-txt');
		$('span.date.mm').css({'display':'none'});
	}
)

$('img.nn').hover(
	function(){
		$('span.b.nn').addClass('flicker-txt');
		$('span.date.nn').css({'display':'inline'});
	}, function(){
		$('span.b.nn').removeClass('flicker-txt');
		$('span.date.nn').css({'display':'none'});
	}
)

$('img.oo').hover(
	function(){
		$('span.b.oo').addClass('flicker-txt');
		$('span.date.oo').css({'display':'inline'});
	}, function(){
		$('span.b.oo').removeClass('flicker-txt');
		$('span.date.oo').css({'display':'none'});
	}
)

$('img.pp').hover(
	function(){
		$('span.b.pp').addClass('flicker-txt');
		$('span.date.pp').css({'display':'inline'});
	}, function(){
		$('span.b.pp').removeClass('flicker-txt');
		$('span.date.pp').css({'display':'none'});
	}
)

$('img.qq').hover(
	function(){
		$('span.b.qq').addClass('flicker-txt');
		$('span.date.qq').css({'display':'inline'});
	}, function(){
		$('span.b.qq').removeClass('flicker-txt');
		$('span.date.qq').css({'display':'none'});
	}
)

$('img.rr').hover(
	function(){
		$('span.b.rr').addClass('flicker-txt');
		$('span.date.rr').css({'display':'inline'});
	}, function(){
		$('span.b.rr').removeClass('flicker-txt');
		$('span.date.rr').css({'display':'none'});
	}
)

$('img.ss').hover(
	function(){
		$('span.b.ss').addClass('flicker-txt');
		$('span.date.ss').css({'display':'inline'});
	}, function(){
		$('span.b.ss').removeClass('flicker-txt');
		$('span.date.ss').css({'display':'none'});
	}
)

$('img.tt').hover(
	function(){
		$('span.b.tt').addClass('flicker-txt');
		$('span.date.tt').css({'display':'inline'});
	}, function(){
		$('span.b.tt').removeClass('flicker-txt');
		$('span.date.tt').css({'display':'none'});
	}
)

$('img.uu').hover(
	function(){
		$('span.b.uu').addClass('flicker-txt');
		$('span.date.uu').css({'display':'inline'});
	}, function(){
		$('span.b.uu').removeClass('flicker-txt');
		$('span.date.uu').css({'display':'none'});
	}
)

$('img.vv').hover(
	function(){
		$('span.b.vv').addClass('flicker-txt');
		$('span.date.vv').css({'display':'inline'});
	}, function(){
		$('span.b.vv').removeClass('flicker-txt');
		$('span.date.vv').css({'display':'none'});
	}
)