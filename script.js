$(function(){
  const number='971547607763';
  const message=encodeURIComponent('Hi Roomzy, I am interested in the partition room in Al Danah near WTC Mall. Please tell me availability. My check-in date is: ___ | Number of people: ___ | Stay: ___ days/months.');
  $('.wa').attr('href',`https://wa.me/${number}?text=${message}`).attr('target','_blank').attr('rel','noopener');
  $('#year').text(new Date().getFullYear());

  const $header=$('.nav');
  const $toggle=$('.menu-toggle');
  const $menuLinks=$('.nav nav a[href^="#"]');
  $toggle.on('click',function(){
    $header.toggleClass('open');
    $(this).attr('aria-expanded',$header.hasClass('open'));
  });
  function setActive(id){
    $menuLinks.removeClass('active');
    $menuLinks.filter(`[href="${id}"]`).addClass('active');
  }
  $menuLinks.on('click',function(e){
    const id=$(this).attr('href');
    if(id.length>1&&$(id).length){
      e.preventDefault();
      setActive(id);
      $header.removeClass('open'); $toggle.attr('aria-expanded','false');
      $('html,body').animate({scrollTop:$(id).offset().top-72},420);
    }
  });
  const sections=['#room','#price','#location'];
  function updateActive(){
    const y=$(window).scrollTop()+150; let current='';
    sections.forEach(id=>{if($(id).length&&y>=$(id).offset().top) current=id;});
    if(current) setActive(current); else $menuLinks.removeClass('active');
  }
  $(window).on('scroll',updateActive); updateActive();
  $(document).on('click',function(e){
    if($header.hasClass('open') && !$(e.target).closest('.nav').length){$header.removeClass('open');$toggle.attr('aria-expanded','false');}
  });
});
