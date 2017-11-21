function navList(){
	if(!document.getElementById('navBox')) return false;
	if(!document.getElementsByTagName('div')) return false;
	
	var tag = document.getElementById('navBox');
	var list = tag.children;
	for(var i=0;i<list.length;i++){
		list[i].onmouseover = function(i){
			return function(){
				var pannel = this.getElementsByTagName('div');
				if(pannel[0]!=undefined){
					pannel[0].style.display = 'block';
				}
				else{
					return false;
				}
			}
		}(i);
		list[i].onmouseout = function(i){
			return function(){
				var pannel = this.getElementsByTagName('div');
				if(pannel[0]!=undefined){
					pannel[0].style.display = 'none';
				}
				else{
					return false;
				}
			}
		}(i);
	}
}


var ul = document.getElementById('gallery');
var btn = document.getElementById('galButton');
var gSwith = document.getElementsByClassName('swich_icon');
var gFrame = document.getElementsByTagName('section');

//整合一下galler的元素。

var Gallery = {
	ul: ul,
	btn: btn,
	line: function(){
		return ul.getElementsByTagName('li');
	},
	hover:function(){
		return btn.getElementsByClassName('hoverButton');
	},
	icon:function(){
		return btn.children;
	},
	getMax:function(arr){
		var num =arr[0] ;
		for(var i = 0 ; i<arr.length;i++){
			if(num>arr[i]){
				num = arr[i];
			}
		}
		return num;
	},
	sLeft:function(){
		return gSwith[0].getElementsByClassName('left')[0];
	},
	sRight:function(){
		return gSwith[0].getElementsByClassName('right')[0];
	}
};

//var List = [17,6,-4,3,4,1,11];
//alert(Picture.getMax(List));
//alert(Picture.ul.tagName);


function imgGallery(){
	//if(!document.getElementById) return false;

	var line = Gallery.line();
	var hover = Gallery.hover();
	var icon = Gallery.icon();
	var sleft = Gallery.sLeft();
	var sright = Gallery.sRight();
	var zindex = new Array();
	for (var i = 0; i<line.length;i++)
	{
		//alert(icon[0].tagName);
		line[i].style.zIndex = -i;
		//zindex[i] = line[i].style.zIndex;
		
		icon[i].onclick = function(i){		    
			return function(){
				var iindex = this.dataset.index;
				for(var j=0;j<line.length;j++){
					var lindex = line[j].dataset.index;
					if(iindex == lindex)
					{
						line[j].style.zIndex = 1;
						
						if(j!=0)
						{
							line[j].style.animationName = 'fadeOutIn';
							line[j-1].style.animationName = 'fadeInOut';
						}else{
							line[j].style.animationName = 'fadeOutIn';
						}					
						//console.log(lindex);
					}else{
						line[j].style.zIndex = -j;
					}
				}
			}
		}(i);
		icon[i].onmouseover = function(i){
			return function(){
				hover[i].style.display = 'block';
			}
		}(i);
		icon[i].onmouseout = function(i){
			return function(){
				hover[i].style.display = 'none';
			}
		}(i);
		/*

		sright.onclick = function(i){
		//if
			return function(){
				if(i!=line.length-1){
					line[i].style.animationName = 'fadeInOut';
					line[i+1].style.animationName = 'fadeOutIn';
					alert(i);
				}else{
					line[0].style.animationName = 'fadeOutIn';
					line[i].style.animationName = 'fadeInOut';
					alert(i);
				}
			}		
		}(i);
		*/

		sleft.onclick = function(){

		}
		
		//console.log(iindex);
	}
	//console.log(Picture.ul.tagName);
	//console.log(sright.tagName);

	
	gFrame[0].onmouseover = function(){
				sleft.style.display = 'block';
				sright.style.display = 'block';
			}
	gFrame[0].onmouseout = function(){
				sleft.style.display = 'none';
				sright.style.display = 'none';
			}
		//line[0].style.animationDelay = i * 5 + 's';
	//console.log(dindex);
}


function videoPlay(){
	var box = document.getElementsByClassName('videoBox');
	var mv = document.getElementsByTagName('video');
	var pannel = document.getElementById('v_presentation');
	var h = pannel.getElementsByTagName('h3');
	var shaddow = document.getElementsByClassName('shaddow');
	var playIcon = document.getElementsByClassName('playIcon');
	for(var i=0;i<box.length;i++){
		box[i].onmouseover = function(i){
			return function(){
				mv[i].autoplay = 'autoplay';
				mv[i].loop = 'loop';
				mv[i].style.display = 'block';
				h[i].style.display = "block";
				shaddow[i].style.display = "block";
				playIcon[i].style.display = 'block';
			}
		}(i);
		box[i].onmouseout = function(i){
			return function(){
				mv[i].removeAttribute('autoplay');
				mv[i].style.display = 'none';
				h[i].style.display = "none";
				shaddow[i].style.display = "none";
				playIcon[i].style.display = 'none';
			}
			//this.pause();
		}(i);
	}
}

function showIntroduction(){
	var line1 = document.getElementById('Introduction');
	var ulBox = line1.getElementsByClassName('list_title');
	var intrBox = line1.getElementsByClassName('list_intro');
	var iconbg = line1.getElementsByClassName('icon_bg');
	var h = line1.getElementsByTagName('h4');
	for(var i in ulBox){
		//alert('hh');

		ulBox[0].style.backgroundColor = '#252525';
		h[0].style.color = '#FFF';
		ulBox[i].onclick = function(i){
			return function(){
				for(var j in intrBox){
					if(i==j){
						intrBox[j].style.display = 'block';
						intrBox[j].style.position = 'relative';
						//iconbg[i].className = 'icon_bg_hover';
						ulBox[j].style.backgroundColor = '#252525';
						h[j].style.color = '#FFF';
					}
					else{
						intrBox[j].style.display = 'none';
						ulBox[j].removeAttribute('style');
						h[j].style.color = '#252525';						
						intrBox[j].style.position = 'absolute';
					}
				}
			}
		}(i);
	}
}


function customSwitch(){
	var area = document.getElementById('Custom');
	var select = area.getElementsByTagName('li');
	var cname = area.getElementsByTagName('h4');
	var detailBox = document.getElementsByClassName('ai_custom_detail');
	for(var i in select){
		detailBox[0].style.display = 'block';
		cname[0].style.fontWeight = 'bold';
		select[i].onclick = function(i){
			return function(){
				for(var j in detailBox){
					if(i==j){
						detailBox[j].style.display = 'block';
						cname[j].style.fontWeight = 'bold';
					}
					else{
						detailBox[j].style.display = 'none';
						cname[j].style.fontWeight = 'normal';
					}
				}
			}
		}(i);
	}
}


addLoadEvent(navList);
addLoadEvent(imgGallery);
addLoadEvent(videoPlay);
addLoadEvent(showIntroduction);
addLoadEvent(customSwitch);