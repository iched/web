/* ============================================================
   scripts.js
   - 移动端汉堡菜单展开/关闭
   - 简单的页面淡出跳转
   - 视差滚动效果
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const hamb = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // 汉堡开关
  hamb.addEventListener('click', () => {
    const open = hamb.classList.toggle('open');
    if(open){
      mobileMenu.classList.add('show');
      mobileMenu.setAttribute('aria-hidden','false');
    }else{
      mobileMenu.classList.remove('show');
      mobileMenu.setAttribute('aria-hidden','true');
    }
  });

  // 点击移动菜单的链接关闭菜单
  document.querySelectorAll('.mobile-nav a').forEach(a=>{
    a.addEventListener('click',()=>{
      hamb.classList.remove('open');
      mobileMenu.classList.remove('show');
      mobileMenu.setAttribute('aria-hidden','true');
    });
  });

  // 页面淡出过渡
  document.querySelectorAll('a[href]').forEach(link=>{
    const href = link.getAttribute('href');
    if(href && href.endsWith('.html') && !href.startsWith('http')){
      link.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector('.page-wrap').style.opacity='0';
        setTimeout(()=>{ window.location.href=href; },300);
      });
    }
  });

  // 简单视差：对带 data-parallax 的元素
  const parallaxEls = document.querySelectorAll('[data-parallax-speed]');
  function parallaxScroll(){
    const scrollY = window.scrollY;
    parallaxEls.forEach(el=>{
      const speed = parseFloat(el.dataset.parallaxSpeed)||0.3;
      el.style.transform = `translateY(${scrollY*speed}px)`;
    });
  }
  window.addEventListener('scroll', parallaxScroll, {passive:true});
});
