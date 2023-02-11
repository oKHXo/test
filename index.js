window.addEventListener('load',function(){
    var arrowr=document.querySelector('.arrow-r');
    var arrowl=document.querySelector('.arrow-l');
    var focus =document.querySelector('.scroll');
    var num = 0;
    var circle=0;
    var width=focus.offsetWidth;
    focus.addEventListener('mouseenter',function() {
        arrowl.style.display='block';
        arrowr.style.display='block';
    })
    focus.addEventListener('mouseleave',function() {
        arrowl.style.display='none';
        arrowr.style.display='none';
    })
    var ul =focus.querySelector('ul');
    var ol =focus.querySelector('ol');
    for (var i=0;i<ul.children.length-1;i++)
    {
        var li =document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li); 
        li.addEventListener('click',function(){
            for( var i=0;i<ol.children.length;i++)
            {
                ol.children[i].className='';
            }
            this.className='current';
            var index = this.getAttribute('index');
            num=index;
            circle=index;
            animate(ul,-index*width);
        })
    }
    ol.children[0].className='current';
    arrowr.addEventListener('click',function(){
        if(num==ul.children.length-1)
        {
            ul.style.left=0;
            num=0;
        }
        num++;
        animate(ul,-num*width-11);
        circle++;
        if(circle==ol.children.length)circle=0;
        for( var i=0;i<ol.children.length;i++)
            {
                ol.children[i].className='';
            }
            ol.children[circle].className='current';
    })
    arrowl.addEventListener('click',function(){
        if(num==0)
        {
            ul.style.left=-(ul.children.length-1)*width;
            num=(ul.children.length-1);
        }
        num--;
        animate(ul,-num*width-11);
        circle--;
        if(circle<0)circle=ol.children.length-1;
        for( var i=0;i<ol.children.length;i++)
            {
                ol.children[i].className='';
            }
            ol.children[circle].className='current';
    })

        var timer=setInterval(function(){
            arrowr.click();
        },2000);
    var pl=document.getElementsByClassName('projectlist')[0];
    var pli=pl.children[0].children;
  

    
})



