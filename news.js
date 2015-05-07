"use strict";
var obj=[];

$(document).ready(function () {
		$.ajax({	
        	url: 'https://freegeoip.net/json/',
        	dataType: 'jsonp',
        	success: function (location){
        		ajaxCall(location.city);   
        		ajaxCall(location.region_name);
        			ajaxCall(location.country_name);	     	
	 		}
    	});
	
    	var ajaxCall=function(country){
    		$.ajax({	
        		url: 'https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q='+country,
        		dataType: 'jsonp',
        		success: function (data){
        			data.responseData.results.filter(function(x){
						obj.push(x);
						console.log(country+"yes");
	 				});
	 			}
    		});
		};

});


var clearMainDiv = function(){
	var divs=document.getElementById("maindiv");
	var children = divs.childNodes;
    var len = children.length;
    //reg = /(?:\s|^)fooClass(?:\s|$)/;
	while(len--) {
         divs.removeChild(children[len]);    
	}
};
var print=function(y){
	var divs=document.getElementById("maindiv");
	for(var i=0; i < y.length;i++)
	{
		var newdiv = document.createElement('section');
		var sectionIdName = 'my'+i+'Section';
		newdiv.setAttribute('id',sectionIdName);
		newdiv.setAttribute('class','innerDiv');
		//newdiv.innerHTML += y[i];
		
		var newimg = document.createElement('img');
		if(y[i].image != undefined)
		{
			var img_index = y[i].image.url.indexOf("http");
    		var img_src=y[i].image.url.slice(img_index);
			newimg.setAttribute('src',img_src);
		}
		else
		{
			newimg.setAttribute('src','images/img_not_found.png');	
		}
		newimg.setAttribute('class','image');
		
		var newspan = document.createElement('span');
		newspan.setAttribute('class','title');
		
		
		var newhref = document.createElement('a');
		// var url_index = y[i].signedRedirectUrl.indexOf("http");
		// 
  //   	var title_url=y[i].url.slice(url_index);
		newhref.setAttribute('href',y[i].signedRedirectUrl);
		newhref.innerHTML += y[i].title;
		newspan.appendChild(newhref);
		
		var newsection_div = document.createElement('div');
		newsection_div.setAttribute('class','description');
		newsection_div.innerHTML += y[i].content;
		
		newdiv.appendChild(newimg);
		newdiv.appendChild(newspan);
		newdiv.appendChild(newsection_div);
		
		divs.appendChild(newdiv);
	}
};

var default1=function(){
	
	var y=[];
	clearMainDiv();
	obj.filter(function(x){
	y.push(x);
			
	})
	print(y);
};
var national=function(){

	var y=[];
	clearMainDiv();
	obj.reverse();
	obj.filter(function(x){
		if(true)
		{
			y.push(x);			
		}	
	})
	print(y);
};
var international=function(){
	
	var y=[];
	clearMainDiv();
	obj.reverse();
	obj.filter(function(x){
		if(true)
		{
			y.push(x);
			
		}	
	})
	print(y);
};

var movies=function(){

	var y=[];
	clearMainDiv();
	obj.reverse();
	obj.filter(function(x){
		if(true)
		{
			y.push(x);
			
		}	
	})
	print(y);
};


//window.onload= default1();


