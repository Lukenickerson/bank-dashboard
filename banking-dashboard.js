

jQuery(document).ready(function($){

	var $addForm = $('form.add');
	var $activityList = $('.activityList');
	

	
	$activityList.on('click', 'li', function(e){
		//var $li = $(this);
		//var $target = $(e.target);
		//$li.toggleClass('open');
	});
	$activityList.children('li').each(function(i, elt){
		var $li = $(this);
		if ($li.find('ol').length > 0) {
			$li.addClass('openable');
			$li.find('ol').hide();
		}
		if ($li.hasClass('custom')) {
			
		}
	});
	
	$('.openable').click(function(e){
		var $this = $(this);
		var $target = $(e.target);
		$this.toggleClass('open');
		if ($this.hasClass('open')) {
			$this.find('.details, ol').slideDown();
		} else {
			$this.find('.details, ol').slideUp();
		}
	});
	
	$('.closeAddForm').click(function(e){
		$addForm.slideUp(200, function(){
			$('.openAddForm').fadeIn();
		});
	});
	$('.openAddForm').click(function(e){
		$(this).hide();
		$addForm.slideDown(function(){
			$('button.remindMe').show();
			$('div.remindMe').hide();
		});
	});
	
	$('button.remindMe').click(function(e){
		$(this).hide();
		$('div.remindMe').slideDown();
	});
	
	$addForm.submit(function(e){
		var h = '<li class="custom">'
			+ '<div class="desc">' 
				+ '<span class="type">' + $addForm.find('[name="type"]').val() + ':</span>'
				+ $addForm.find('[name="description"]').val() 
			+ '</div>'
			+ '<div class="amount">' + $addForm.find('[name="amount"]').val() + '</div>'
			+ '</li>';
		$(this).closest('.balance').find('.activityList').append(h);
		e.preventDefault();
	});

});