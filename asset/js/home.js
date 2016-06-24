(function(){

var menu = $('#menu');
var search = $('#search');
var nav = $('#nav')
var inputSearch = $('#form-inputSearch');
var form = $('#form');
var formSearch = $('#form-search');
var trailer = $('#trailer');
var embed = "https://www.youtube.com/embed/";
var uri;
var close = $('#close');
var videoSource = $('#videoSource');
var contentSource = $('#contentSource');
var video = $('#videocontent');
var main = $('#content');


var showMenu = function(){
   nav.toggle(300);
};

var showInputSearch = function(){
   form.show(300);
   search.hide();
}

var putFocus = function(){
	formSearch.addClass('u-putFocus');
}

var losingFocus = function (){
    formSearch.removeClass('u-putFocus');
}


var showTrailer = function(e){
   e.preventDefault();
   var url = $(this).attr('href');
   var valor = "embed";
   var patron = /watch/g;
   var newUrl = url.replace(patron,valor);
   var pos = newUrl.lastIndexOf('embed');
   var subUrl = newUrl.substring(pos,newUrl.length);
   uri = embed + replacee(subUrl);
   // console.log(uri);
   videoSource.attr('src',uri);
   contentSource.show(300);
}

var replacee = function(url){
   var arreglo = url.split('?');
   arreglo.shift();
   var patron = /v=/g;
   var result = arreglo.toString().replace(patron,"");
   return result;
}


var closeSource = function(e){
  e.preventDefault();
  contentSource.hide();
  videoSource.attr('src','');
}


menu.click(showMenu);
search.click(showInputSearch);
inputSearch.focus(putFocus);
inputSearch.blur(losingFocus);
trailer.click(showTrailer);
close.click(closeSource);


/*Queries*/
var query = window.matchMedia("(max-width: 480px)");
var query2 = window.matchMedia("(min-width: 901px)");


function siseWindow(query){
  if (query.matches) {
      main.hide();
      video.show();
   }
   else{
     main.show();
     video.hide();
   }
}

function viewMenu(query2){
  if(query2.matches){
      nav.show();
  }
  else{
    nav.hide();
  }
}



query.addListener(siseWindow);
query2.addListener(viewMenu);
})()


