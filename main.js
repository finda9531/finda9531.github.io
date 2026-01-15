/* =========================================
   リリースの生成 (releases.js のデータを使用)
   ========================================= */
function renderReleases() {
    const container = document.getElementById('release-container');
    if (!container || typeof releasesData === 'undefined') return;

    let html = '';

    releasesData.forEach(item => {
        // 区切り線が必要な場合
        if (item.separator) {
            html += '<hr>';
        }

        // カテゴリテキストがある場合
        if (item.category) {
            html += `<p style="font-size:0.9rem; margin-bottom:1rem;">${item.category}</p>`;
        }

        // リンクカードの生成
        html += `
            <a href="${item.url}" target="_blank" class="github-card">
                <div class="repo-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div class="repo-info">
                    <h3>${item.title}</h3>
                    <p>${item.date}</p>
                    <p style="font-size:0.75rem; color:var(--text-sub);">${item.note}</p>
                </div>
            </a>
        `;
    });

    container.innerHTML = html;
}

/* =========================================
   スクロールアニメーション (IntersectionObserver)
   ========================================= */
function initObserver() {
    const targets = document.querySelectorAll('.reveal-target');
    const observerOptions = {
        root: document.querySelector('.snap-container'),
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-reveal');
            } else {
                entry.target.classList.remove('active-reveal');
            }
        });
    }, observerOptions);

    targets.forEach(target => {
        observer.observe(target);
    });
}

/* =========================================
   画像切り替え（高画質版の読み込み制御）
   ========================================= */
function initAvatarLoader() {
    const avatar = document.getElementById('avatar');
    if (!avatar) return;

    const highResSrc = "IMG_0029.png"; 
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    let shouldUseHighRes = true;

    if (connection) {
        if (connection.saveData || 
           (connection.effectiveType && ['slow-2g', '2g', '3g'].includes(connection.effectiveType))) {
            shouldUseHighRes = false;
        }
    }
    
    if (shouldUseHighRes) {
        avatar.src = highResSrc;
    }
}

/* =========================================
   初期化実行
   ========================================= */
window.addEventListener('load', () => {
    renderReleases();   // リリース情報の生成
    initObserver();     // アニメーション開始
    initAvatarLoader(); // 画像読み込み
});
