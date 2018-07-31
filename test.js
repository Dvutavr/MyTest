

$( document ).ready(function() {
	
	$('#datepicker_from, #datepicker_to').datepicker({
		'autoclose':true,
		'format':'d M yyyy'
	});

	$('.tab-block').each(function(){
		var i = 0
		var gg = $(this).attr('data-tab');		
		$(this).find('.dropdown-toggle').each(function(){			
			i ++;			
			$(this).attr( "id", "dropBtn-"+ i +"" );
		})	 
		var i = ''
	})
	

	
	
	let dataTab = '';	
	
	wrapper = new Array();
	
	$('.tab-nav .nav-link').click(function(){
			
		$('.tab-nav').removeClass('active');
		$(this).parent().addClass('active');
		dataTab = $(this).attr('data-tab');		
		$('.tab-block').removeClass('active');
		setTimeout(function(){
			$(".tab-block[data-tab='"+dataTab+"']").addClass('active');	
		}, 100);	
		$(".tab-block[data-tab='"+dataTab+"'] .page-item .page-link[data-page='page-1']").trigger('click');		
	})	

	var str = "";
 
	$('.refund').removeClass('d-flex').hide();
	$('.fullRefund').removeClass('d-flex').hide();
	$( ".trans-pages .drop-cnt .select-type .dropdown-item" ).click(function() {
		console.log(dataTab)
		/* e.preventDefault(); */
		var parentData = $(this).parent().prev().attr('id');		
		str = $( this ).attr('data-opt');
			if(str == 'partial'){
				$(".tab-block[data-tab='"+dataTab+"'] .dropdown-toggle[id='"+parentData+"']").parent().parent().parent().parent().addClass('refunded');
				$(".tab-block[data-tab='"+dataTab+"'] .refunded").find('.refund').addClass('d-flex').show(); 
			}else if(str == 'full'){
				$(".tab-block[data-tab='"+dataTab+"'] .dropdown-toggle[id='"+parentData+"']").parent().parent().parent().parent().addClass('fullRefunded');
				$(".tab-block[data-tab='"+dataTab+"'] .fullRefunded").find('.fullRefund').addClass('d-flex').show(); 
				$(".tab-block[data-tab='"+dataTab+"'] .fullRefunded .drop-cnt").text('Refunded');
			}	  
	});		
	
	$('.page-item.page-item-number .page-link').click(function(){
		
		$('.page-item').removeClass('active');
		wrapper.push($(".tab-block[data-tab='"+dataTab+"'] .trans-list"));
		console.log(wrapper);	
		$(".tab-block[data-tab='"+dataTab+"'] .trans-list").detach(); 		
		$(this).parent().not( ".page-arrow" ).addClass('active');
		var page = $(this).attr('data-page');		
		var results = $.map( wrapper[0], function(e,i){
			if( e.id === page ) return e; 			
		});			
		$('.tab-block.active .trans-pages').addClass('blurry');
		setTimeout(function(){
			$('.tab-block.active .trans-pages').removeClass('blurry');
		}, 500);			
		$('.tab-block.active .trans-pages').empty();
		$(".tab-block[data-tab='"+dataTab+"'] .trans-pages").append(results); 		
		$(results).addClass('active');
		var pageID = $('.trans-list.active').attr('id')
		if(pageID !== 'page-1'){			
			$('.page-item .page-link.p-l-prev').removeClass('d-none');
		}else{
			$('.page-item .page-link.p-l-prev').addClass('d-none');
		}
		if(pageID == 'page-4'){			
			$('.page-item .page-link.p-l-next').addClass('d-none');
		}else{
			$('.page-item .page-link.p-l-next').removeClass('d-none');
		}			
	})	
	

	
	$(".tab-nav .nav-link[data-tab='tab-2']").trigger('click');
		
	$('.page-item.page-arrow .page-link.p-l-next').click(function(){		
		$('.page-item.active').next().find('.page-link').trigger('click')
	})
	$('.page-item.page-arrow .page-link.p-l-prev').click(function(){		
		$('.page-item.active').prev().find('.page-link').trigger('click')
	})	
	$('.tab-block.active .trans-pages').removeClass('blurry');
});
