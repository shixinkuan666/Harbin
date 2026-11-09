/* 深浅主题切换 */
(function () {
    var KEY = 'harbin-mode';
    var root = document.documentElement;
    var btn = document.getElementById('theme');

    function label(mode) {
        if (btn) btn.textContent = mode === 'light' ? '暗' : '亮';
    }

    var saved = 'dark';
    try { saved = localStorage.getItem(KEY) || 'dark'; } catch (e) {}
    root.setAttribute('data-theme', saved);
    label(saved);

    if (!btn) return;

    btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        label(next);
        try { localStorage.setItem(KEY, next); } catch (e) {}
    });
})();
