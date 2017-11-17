function navList(){
	
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

addLoadEvent(navList);