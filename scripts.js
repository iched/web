// ===== JavaScript区域 =====

document.addEventListener('DOMContentLoaded', () => {
    // 汉堡菜单切换
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // 关闭汉堡菜单当点击链接时
    document.querySelectorAll('.mobile-nav a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }));

    // 滚动动画
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.topbar');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(58, 42, 31, 0.95)';
        } else {
            header.style.backgroundColor = '#3a2a1f';
        }
    });

    // 页面淡出过渡
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('.html') && !href.startsWith('http')) {
            link.addEventListener('click', e => {
                e.preventDefault();
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        }
    });

    // 简单视差：对带 data-parallax 的元素
    const parallaxEls = document.querySelectorAll('[data-parallax-speed]');
    function parallaxScroll() {
        const scrollY = window.scrollY;
        parallaxEls.forEach(el => {
            const speed = parseFloat(el.dataset.parallaxSpeed) || 0.3;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }
    window.addEventListener('scroll', parallaxScroll, { passive: true });
});