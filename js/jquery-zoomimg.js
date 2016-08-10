;(function  ($) {
	$.fn.extend({
		zoomImg:function(opts){
			//用实际参数合并默认值
			opts=$.extend({
				container:{
					width:300,
					height:300
				}
			},opts);
			this.append('<div class="zoom-container">'+
							'<div class="small-img">'+
								'<img src="img/1.jpg" width="320" height="215">'+
								'<div class="float"></div>'+
							'</div>'+
							'<div class="big-img"></div>'+
						'</div>');
			//设置容器大小
			$('.zoom-container',this).css({
				width:opts.container.width,
				height:opts.container.height
			});//去top下找zoom-container这个元素
			var $img=$('.samll-img img',this);
			var $smallImg=$('.samll-img',this);
			//设置图片居中
			$img.css({
				marginLeft:-$img.width()/2+'px',
				marginTop:-$img.height()/2+'px'
			});
			//图片宽度大于容器宽度，缩到百分之百
			if($img.width()>=opts.container.width){
				$img.width('100%');

			}

				
		}
	});
})(jQuery);

$('#ccc').zoomImg();