/*拖拽的jq插件*/
;(function($){
	$.fn.extend({
		draggable:function(){
			//opts=$.extend({
			//	parent:document
			//},opts);
			var $drag=this;
			//元素一定要绝对定位
			$drag.css('position','absolute')；
			$drag.on('mousedown',function(e){
				var disX=disY=0;
				disX=e.pageX-$drag.offset().left;
				disY=e.pageY-$drag.offset().top;
				$(document).on('mousemove',function(e){
					var iLeft=e.pageX-disX,
						iTop=e.pageY-disY
					$drag.css({
						left:e.pageX-disX,
						top:e.pageY-disY

					});
				});
				$(document).on('mouseup',function(){
					$(document).off('mousemove');
				});
			});

		}
	});
})(jQuery);