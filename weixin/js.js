	window.onload=function(){
		//获取rem
		document.querySelector("html").style.fontSize=document.documentElement.clientWidth/10+"px"
		
		//底部选项卡切换
		var footers=document.querySelectorAll(".footer_div1");
		//console.log(footers);
	    var contents=document.querySelectorAll(".ul>li");
	    var icons1=document.querySelectorAll(".footer_div1 .ic1");
	    var icons2=document.querySelectorAll(".footer_div1 .ic2");
	    var ps=document.querySelectorAll(".footer_div1 p");
	    
		//console.log(contents);
		for(var i=0; i<footers.length;i++){
				footers[i].index=i;
			footers[i].onclick=function(){
				for(var j=0; j<footers.length;j++){
				footers[j].style.color=""
				contents[j].className=""
				icons1[j].style.display="block"
				icons2[j].style.display="none"
				icons1[j].style.color=""
				ps[j].style.color=""
				}
				this.style.color="#46C01B"
				icons1[this.index].style.display="none"
				icons2[this.index].style.display="block"
				icons2[this.index].style.color="#46C01B"
				ps[this.index].style.color="#46C01B"
				contents[this.index].className="active"
			}
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}