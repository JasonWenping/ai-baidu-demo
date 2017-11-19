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

var Picture = {
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
	}
};

//var List = [17,6,-4,3,4,1,11];
//alert(Picture.getMax(List));
//alert(Picture.ul.tagName);


function imgGallery(){
	//if(!document.getElementById) return false;

	var line = Picture.line();
	var hover = Picture.hover();
	var icon = Picture.icon();
	var zindex = new Array();
	for (var i = 0; i<line.length;i++)
	{
		//alert(icon[0].tagName);
		line[i].style.zIndex = -i;
		//zindex[i] = line[i].style.zIndex;
		
		icon[i].onclick = function(i){		    
			return function(){
				var iindex = this.dataset.index;
				line[i-1].style.animationName = 'fadeInOut';
				for(var j=0;j<line.length;j++){
					var lindex = line[j].dataset.index;
					if(iindex == lindex)
					{
						line[lindex].style.zIndex = 1;
						line[lindex].style.animationName = 'fadeOutIn'
						//console.log(lindex);
					}else{
						line[j].style.zIndex = -j;
						line[lindex].style.animationName = 'fadeInOut';
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
		//console.log(iindex);
	}
		//line[0].style.animationDelay = i * 5 + 's';
	//console.log(dindex);
}

addLoadEvent(navList);
addLoadEvent(imgGallery);