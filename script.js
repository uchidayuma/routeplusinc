document.addEventListener('DOMContentLoaded', () => {
    // モバイルメニューのトグル
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // メニューリンククリック時に閉じる
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ロゴ画像が読み込めない場合のフォールバック
    const logoImg = document.getElementById('logo-img');
    const logoText = document.getElementById('logo-text');
    if (logoImg && logoText) {
        logoImg.addEventListener('error', () => {
            logoImg.style.display = 'none';
            logoText.style.display = 'block';
        });
    }
});