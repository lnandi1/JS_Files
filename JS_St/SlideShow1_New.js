var i, imgs, pic, obj, w, goRight;

function setSail()
{
  var pos = parseInt( obj.style.left, 10 );

  ( goRight ) ? pos++ : pos-- ;
  obj.style.left = pos + "px";

  if( pos > (w + 40) ) 
  {
    obj.style.background="url(Animate.png)";
    goRight = false;
  }

  if( pos < -140 ) 
  {
   obj.style.background="url(Animate.png)";
   goRight = true;
  }
 
  setTimeout( setSail , 10 );
}


function rotate()
{
  pic.src = imgs[i] ;
  (i === (imgs.length -1) ) ? i=0 : i++ ;
  setTimeout( rotate, 1000 ); 
}

function init()
{
  pic = document.getElementById("pic");
 
  imgs = [ "SlideshowPicture1.png", "SlideshowPicture2.png", "SlideshowPicture3.png", "SlideshowPicture4.png" ] ;

  var preload= new Array();
  for( i=0; i< imgs.length; i++ )
  {
    preload[ i ] = new Image();
    preload[ i ].src = imgs[ i ];
  }

  i=0;

  rotate();
  var preload=new Image();
  preload.src="Animate.png";

  obj = document.getElementById("boat"); 
  w = document.body.clientWidth;
  goRight = true;

  obj.style.position="absolute";
  obj.style.left="-120px";

  setSail();
}
onload=init;

