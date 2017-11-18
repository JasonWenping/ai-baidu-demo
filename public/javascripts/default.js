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


function imgGallery(){
	if(!document.getElementById) return false;

	var ul = document.getElementById('gallery');
	var btn = document.getElementById('galButton');
	var line = ul.getElementsByTagName('li');
	var icon = btn.children;
	for (var i = 0; i<line.length;i++)
	{
		//alert(icon[0].tagName);
		line[i].style.zIndex = -i;
		line[i].style.animationName = 'fadeInOut';
		icon[i].onclick = function(i){		    
			return function(){
				var iindex = this.dataset.index;
				for(var j=0;j<line.length;j++){
					var lindex = line[j].dataset.index;
					if(iindex == lindex)
					{
						line[lindex].style.zIndex = 1;
					}else{
						line[j].style.zIndex = -j;
					}
					console.log(lindex);
				}
		console.log(iindex);
			//line[i].style.zIndex = -i;
		}
	}(i);
		//line[0].style.animationDelay = i * 5 + 's';
		//console.log(iindex);
	}
}

addLoadEvent(navList);
addLoadEvent(imgGallery);