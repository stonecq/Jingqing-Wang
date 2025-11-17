const content_dir = 'contents/';
const config_file = 'config.yml';
const section_names = ['home', 'awards', 'experience', 'publications', 'updates'];

// 默认语言：'en' 或 'zh'
let currentLang = localStorage.getItem('lang') || 'en';

// 工具函数：获取当前语言的目录路径
function getContentPath(file) {
    return `${content_dir}${currentLang}/${file}`;
}

// 加载 YAML 配置（标题、版权等）
function loadConfig() {
    fetch(getContentPath(config_file))
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            const fieldsToUpdate = [
                'title',
                'page-top-title',
                'top-section-bg-text',
                'home-subtitle',
                'awards-subtitle',
                'experience-subtitle',
                'publications-subtitle',
                'updates-subtitle',
                'nav-home',
                'nav-awards',
                'nav-experience',
                'nav-publications',
                'nav-updates',
                'copyright-text'
            ];

            fieldsToUpdate.forEach(key => {
                const el = document.getElementById(key);
                if (el && yml[key] !== undefined) {
                    // 特殊处理：奖项/经历等标题包含图标，不要覆盖整个 innerHTML
                    if (key.endsWith('-subtitle') && key !== 'home-subtitle') {
                        // 只更新文字部分，保留图标
                        const textNode = el.childNodes[1]; // 假设结构是 <i></i> + text
                        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
                            textNode.textContent = ' ' + yml[key];
                        } else {
                            el.innerHTML = el.innerHTML.replace(/(>[^<]*$)/, '> ' + yml[key]);
                        }
                    } else {
                        el.innerHTML = yml[key];
                    }
                }
            });
        })
        .catch(error => console.error('Failed to load config:', error));
}

// 加载所有 Markdown 内容
function loadSections() {
    marked.use({ mangle: false, headerIds: false });
    const promises = section_names.map(name => {
        return fetch(getContentPath(name + '.md'))
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${name}.md`);
                return response.text();
            })
            .then(markdown => {
                const html = marked.parse(markdown);
                const el = document.getElementById(name + '-md');
                if (el) el.innerHTML = html;
            });
    });

    // 等所有 Markdown 加载完后再触发 MathJax 渲染
    Promise.all(promises).then(() => {
        if (typeof MathJax !== 'undefined' && MathJax.typeset) {
            MathJax.typeset();
        }
    }).catch(error => console.error('Error loading sections:', error));
}

// 切换语言
function switchLanguage(lang) {
    if (['en', 'zh'].includes(lang)) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        loadConfig();
        loadSections();

        // 可选：更新导航栏文字（比如把“中文”变成“English”）
        const langLink = document.querySelector('#language-link');
        if (langLink) {
            langLink.textContent = lang === 'en' ? '中文' : 'English';
        }
    }
}

// 初始化页面
window.addEventListener('DOMContentLoaded', event => {

    // Bootstrap ScrollSpy
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Navbar collapse on mobile
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // 绑定语言切换事件（假设你给“中文”链接加了 id="language-link"）
    const langLink = document.querySelector('#language-link');
    if (langLink) {
        langLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage(currentLang === 'en' ? 'zh' : 'en');
        });
    }

    // 首次加载内容
    loadConfig();
    loadSections();
});