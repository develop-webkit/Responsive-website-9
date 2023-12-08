setInterval(function () {
	if ($(window).width() < 992) {
		$('.side-nav').addClass('side-nav-m');
		$('.ui-ux-project').addClass('ui-ux-project-m');

		$('.ui-ux-project-m').click(function () {
			$('.invoice-sec1x, .under-invoice-btns').css('display', 'none');
			$('.update-sec1x, .new-reply-col, .expand-lleft-d').css('display', 'block')
		});

		$('.expand-lleft-d').click(function(){
			$('.invoice-sec1x, .under-invoice-btns').css('display', 'block');
			$('.update-sec1x, .new-reply-col, .expand-lleft-d').css('display', 'none')
		});
	} else {
		$('.side-nav').removeClass('side-nav-m');
		$('.ui-ux-project').removeClass('ui-ux-project-m');
	}
}, 100);






$(document).click(function () {
	$('[dt-drop], .side-nav-m, .d-date-col .inp-calen-up').css('display', 'none');
});

$('[dt-toggle], [dt-drop], .side-nav-m .side-nav-ul, .mobile-nav-btn, .d-date-col .inp-calen-up').click(function (e) {
	e.stopPropagation();
});

$('[dt-toggle]').click(function (e) {
	var target = $(this).attr('dt-toggle');
	var height = $(this).height() + 10;
	$('[dt-toggle], [dt-drop]').attr('count', 0);
	$(this).attr('count', 1);
	/*$(target).attr('count',1);*/
	$('[dt-drop][count="0"]').css('display', 'none');
	if ($(this).attr('count', 1)) {
		/*$(target).css('top', height);*/
		$(this).next().toggle();
	}
});



$('[toggle-dropdown]').click(function (e) {
	$(this).parent().parent().next().toggle();
});


$('[toggle-dropdown-other]').click(function (e) {
	$(this).next().toggle();
});



$('.mobile-nav-btn').click(function () {
	$('.side-nav-m').toggle();
});



$('#date1-drop li').click(function(){
	var text = $(this).text();
	$('#date1-drop li').removeClass('active');
	$(this).addClass('active');
	$('#date1-drop').prev().val(text);

	if(text == "Custom date"){
		$('.d-date-col .inp-calen-up').css('display','block');
	} else {
		$('.d-date-col .inp-calen-up').css('display','none');
	}
});

$('.calendar-invoice-date.note-date').hover(function(){
	$(this).find('.note-date-inner-drop').css('display','block');
}, function(){
	$(this).find('.note-date-inner-drop').css('display','none');
});





$('.invoice-detail-add').click(function(){
	var count = $('.invoice-detail-remove .col-drag').length;
	var element = '<div class="under-detail-invoice under-detail-invoice1x1x col-drag" draggable="true" style="order: '+(count++)+';"><div class="under-detail-invoice-inner1x"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 5C6.26522 5 6.51957 4.89464 6.70711 4.70711C6.89464 4.51957 7 4.26522 7 4C7 3.73478 6.89464 3.48043 6.70711 3.29289C6.51957 3.10536 6.26522 3 6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4C5 4.26522 5.10536 4.51957 5.29289 4.70711C5.48043 4.89464 5.73478 5 6 5ZM6 9C6.26522 9 6.51957 8.89464 6.70711 8.70711C6.89464 8.51957 7 8.26522 7 8C7 7.73478 6.89464 7.48043 6.70711 7.29289C6.51957 7.10536 6.26522 7 6 7C5.73478 7 5.48043 7.10536 5.29289 7.29289C5.10536 7.48043 5 7.73478 5 8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89464 5.73478 9 6 9ZM7 12C7 12.2652 6.89464 12.5196 6.70711 12.7071C6.51957 12.8946 6.26522 13 6 13C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11C6.26522 11 6.51957 11.1054 6.70711 11.2929C6.89464 11.4804 7 11.7348 7 12ZM10 5C10.2652 5 10.5196 4.89464 10.7071 4.70711C10.8946 4.51957 11 4.26522 11 4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4C9 4.26522 9.10536 4.51957 9.29289 4.70711C9.48043 4.89464 9.73478 5 10 5ZM11 8C11 8.26522 10.8946 8.51957 10.7071 8.70711C10.5196 8.89464 10.2652 9 10 9C9.73478 9 9.48043 8.89464 9.29289 8.70711C9.10536 8.51957 9 8.26522 9 8C9 7.73478 9.10536 7.48043 9.29289 7.29289C9.48043 7.10536 9.73478 7 10 7C10.2652 7 10.5196 7.10536 10.7071 7.29289C10.8946 7.48043 11 7.73478 11 8ZM10 13C10.2652 13 10.5196 12.8946 10.7071 12.7071C10.8946 12.5196 11 12.2652 11 12C11 11.7348 10.8946 11.4804 10.7071 11.2929C10.5196 11.1054 10.2652 11 10 11C9.73478 11 9.48043 11.1054 9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071C9.48043 12.8946 9.73478 13 10 13Z" fill="#B5B3B9"/></svg></div><div class="under-detail-invoice-inner2x"><input placeholder="Item 1" type="text"></div><div class="under-detail-invoice-inner2x under-detail-invoice-inner3x"><input type="number"></div><div class="under-detail-invoice-inner2x under-detail-invoice-inner3x"><input type="number"></div><div class="under-detail-invoice-inner5x"><p>450.00</p></div><div class="under-detail-invoice-inner6x"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15L10 12" stroke="#E01414" stroke-width="2" stroke-linecap="round"/><path d="M14 15L14 12" stroke="#E01414" stroke-width="2" stroke-linecap="round"/><path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="#E01414" stroke-width="2" stroke-linecap="round"/><path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="#E01414" stroke-width="2" stroke-linecap="round"/></svg></div></div>';
	$(element).appendTo('.invoice-detail-remove');
	setUpEventListeners();
	deleteinvoicedetail();
});
$('.invoice-detail-remove .col-drag .under-detail-invoice-inner6x').click(function(){
		$(this).parent().remove();
	});
function deleteinvoicedetail() {
	$('.invoice-detail-remove .col-drag .under-detail-invoice-inner6x').click(function(){
		$(this).parent().remove();
	});
};

$('.invoice-detail-add').click(function(){
	var count1 = $('.mbl-item-drag .col-drag').length;
	var element1 = $('<div class="mbl-item-detail-main w-100 col-drag" draggable="true" style="order: '+(count1++)+';"><div class="mbl-item-detail"><p>Item Details</p><div class="mbl-item-detail-inner"><input placeholder="Item 1" type="text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 5C6.26522 5 6.51957 4.89464 6.70711 4.70711C6.89464 4.51957 7 4.26522 7 4C7 3.73478 6.89464 3.48043 6.70711 3.29289C6.51957 3.10536 6.26522 3 6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4C5 4.26522 5.10536 4.51957 5.29289 4.70711C5.48043 4.89464 5.73478 5 6 5ZM6 9C6.26522 9 6.51957 8.89464 6.70711 8.70711C6.89464 8.51957 7 8.26522 7 8C7 7.73478 6.89464 7.48043 6.70711 7.29289C6.51957 7.10536 6.26522 7 6 7C5.73478 7 5.48043 7.10536 5.29289 7.29289C5.10536 7.48043 5 7.73478 5 8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89464 5.73478 9 6 9ZM7 12C7 12.2652 6.89464 12.5196 6.70711 12.7071C6.51957 12.8946 6.26522 13 6 13C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11C6.26522 11 6.51957 11.1054 6.70711 11.2929C6.89464 11.4804 7 11.7348 7 12ZM10 5C10.2652 5 10.5196 4.89464 10.7071 4.70711C10.8946 4.51957 11 4.26522 11 4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4C9 4.26522 9.10536 4.51957 9.29289 4.70711C9.48043 4.89464 9.73478 5 10 5ZM11 8C11 8.26522 10.8946 8.51957 10.7071 8.70711C10.5196 8.89464 10.2652 9 10 9C9.73478 9 9.48043 8.89464 9.29289 8.70711C9.10536 8.51957 9 8.26522 9 8C9 7.73478 9.10536 7.48043 9.29289 7.29289C9.48043 7.10536 9.73478 7 10 7C10.2652 7 10.5196 7.10536 10.7071 7.29289C10.8946 7.48043 11 7.73478 11 8ZM10 13C10.2652 13 10.5196 12.8946 10.7071 12.7071C10.8946 12.5196 11 12.2652 11 12C11 11.7348 10.8946 11.4804 10.7071 11.2929C10.5196 11.1054 10.2652 11 10 11C9.73478 11 9.48043 11.1054 9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071C9.48043 12.8946 9.73478 13 10 13Z" fill="#B5B3B9"></path></svg></div></div><div class="mbl-qty"><div class="mbl-qty-inner"><div class="mbl-qty-col"><p>QTY</p><input type="number"></div><div class="mbl-qty-col"><p>Rate</p><input type="number"></div><div class="mbl-qty-col mbl-qty-col1x"><p>Total</p><h6>450.00</h6></div></div><div class="mbl-qty-inner1x"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10 15L10 12" stroke="#E01414" stroke-width="2" stroke-linecap="round"></path><path d="M14 15L14 12" stroke="#E01414" stroke-width="2" stroke-linecap="round"></path><path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="#E01414" stroke-width="2" stroke-linecap="round"></path><path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="#E01414" stroke-width="2" stroke-linecap="round"></path></svg></div></div></div>') ;
	$(element1).appendTo('.mbl-item-drag');
	deleteinvoicedetail1();
	totalkeyup()
});
$('.mbl-item-drag .col-drag .mbl-qty-inner1x').click(function(){
		$(this).parent().parent().remove();
	});
function deleteinvoicedetail1() {
	$('.mbl-item-drag .col-drag .mbl-qty-inner1x').click(function(){
		$(this).parent().parent().remove();
	});
};

totalkeyup();
function totalkeyup(){
$('.mbl-qty-inner .mbl-qty-col input[type="number"]').keyup(function(){

        var qnt = $(this).parent().parent().find('.mbl-qty-col:nth-child(1) input[type="number"]').val();

        var rate = $(this).parent().parent().find('.mbl-qty-col:nth-child(2) input[type="number"]').val();

		var total = qnt * rate;

		$(this).parent().parent().find('.mbl-qty-col1x h6').html(total)
});
$('.under-detail-invoice input[type="number"]').keyup(function(){

        var qnt = $(this).parent().parent().find('.under-detail-invoice-inner3x:nth-child(3) input[type="number"]').val();

        var rate = $(this).parent().parent().find('.under-detail-invoice-inner3x:nth-child(4) input[type="number"]').val();

		var total = qnt * rate;

		$(this).parent().parent().find('.under-detail-invoice-inner5x p').html(total)
});
};


$('.schedule-send-d').click(function(){
	$('.shedu-btn-inner .send-shedu-pick').css('display','block')
});
$('.shedu-btn-inner .send-shedu-pick .note-btns button:first-child').click(function(){
	$('.shedu-btn-inner .send-shedu-pick').css('display','none')
});



setInterval(function(){
	var totalPrice = 0;
	var totalPrice1 = 0;
	$('.invoice-detail-remove .col-drag .under-detail-invoice-inner5x p').each(function(){
		var price = $(this).text();
		var priceOther = Number(price);
		totalPrice += priceOther;
		$('.total-detail-end p:last-child .span1').html(totalPrice);
	});

	$('.mbl-item-drag .col-drag .mbl-qty-col1x h6').each(function(){
		var price1 = $(this).text();
		var priceOther1 = Number(price1);
		totalPrice1 += priceOther1;
		$('.total-detail-end p:last-child .span2').html(totalPrice1);
	});
}, 100);




$('.invoice-clr-items1x img').click(function(){
	var link = $(this).attr('src');
	$('.invoice-clr-items1x img, .invoice-clr-items1x .check-invoice').removeClass('active');
	$(this).addClass('active');
	$(this).parent().addClass('active');
	$('.invoice-ss img').attr('src', link)
});



$('.customer-targt-d').click(function(){
	$('#customer-d, .new-create-d').toggle();
});

$('#customer-d .note-btns .r-btn, .customer-data .note-btns .cross-btn1x').click(function(){
	$('.customer-data, #customer-d').toggle();
});


$('.all-customer-inputs1x .mr-input label input').click(function(){
	if ($(this).prop('checked')) {
	$('.customer-table, .customer-data').toggle();
}
});





// drag source element
var dragSrcEl = null;

window.onload = function() {
    setUpEventListeners();
};

/* setUpEventListeners */
function setUpEventListeners() {
    cols = document.querySelectorAll('.col-drag');
    var i=0;
    cols.forEach(function(col) {
        col.style.order = i++; // programatically set order value
        col.addEventListener('dragstart', colDragStart, false);
        col.addEventListener('dragenter', colDragEnter, false);
        col.addEventListener('dragleave', colDragLeave, false);
        col.addEventListener('dragover', colDragOver, false);
        col.addEventListener('drop', colDrop, false);
        col.addEventListener('dragend', colDragEnd, false);

    });
}
/*colDragStart*/
function colDragStart(e) {
    this.style.opacity = '0.4'; // this / e.target is the source node.
    // Set drag source
    dragSrcEl = this;
}

/*colDragEnter*/
function colDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');

    var tempOrder = this.style.order;
    this.style.order = dragSrcEl.style.order;
    dragSrcEl.style.order = tempOrder;
}

/* colDragLeave */
function colDragLeave(e) {
    this.classList.remove('over'); // this / e.target is previous target element.
}

/* colDragOver */
function colDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.
    return false;
}

/* colDrop */
function colDrop(e) {
    // this / e.target is current target element.
    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }
    return false;
}

/*colDragEnd*/
function colDragEnd(e) {
    this.style.opacity = '1'; // this / e.target is the source node.
    cols = document.querySelectorAll('.col-drag');
    cols.forEach(function(col) {
        col.classList.remove('over');
    });
}
