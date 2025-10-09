// 视频开场控制
document.addEventListener('DOMContentLoaded', function() {
    const videoIntro = document.getElementById('video-intro');
    const mainContent = document.getElementById('main-content');
    const introVideo = document.getElementById('intro-video');
    const skipButton = document.getElementById('skip-intro');
    
    // 淡出视频并显示主内容的函数
    function fadeOutVideoAndShowContent() {
        // 添加淡出类
        videoIntro.classList.add('fade-out');
        
        // 等待淡出动画完成
        setTimeout(() => {
            videoIntro.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 1500); // 与CSS过渡时间匹配
    }
    
    // 跳过视频
    skipButton.addEventListener('click', function() {
        fadeOutVideoAndShowContent();
    });
    
    // 视频结束后自动显示主内容
    introVideo.addEventListener('ended', function() {
        fadeOutVideoAndShowContent();
    });
    
    // 如果视频无法加载，显示主内容（不淡出，直接显示）
    introVideo.addEventListener('error', function() {
        videoIntro.style.display = 'none';
        mainContent.classList.remove('hidden');
    });
    
    // 汉堡菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 关闭移动端菜单当点击链接时
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // 滚动动画
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // 简单的视差滚动效果
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // 轮播图功能
    const imageFrames = document.querySelectorAll('.image-frame');
    let currentIndex = 0;
    const totalImages = imageFrames.length;
    
    // 初始化显示第一张图片
    if (totalImages > 0) {
        imageFrames[0].classList.add('active');
    }
    
    // 自动播放函数
    function startAutoPlay() {
        setInterval(() => {
            // 隐藏当前图片
            imageFrames[currentIndex].classList.remove('active');
            
            // 移动到下一张图片
            currentIndex = (currentIndex + 1) % totalImages;
            
            // 显示新图片
            imageFrames[currentIndex].classList.add('active');
        }, 3000); // 每3秒切换一次图片
    }
    
    // 开始自动播放
    if (totalImages > 0) {
        startAutoPlay();
    }
});