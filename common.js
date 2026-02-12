// ===== 공통 헤더/푸터 로드 =====

// 현재 페이지 경로 확인
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return page;
}

// 헤더 HTML 생성
function createHeader() {
    const currentPage = getCurrentPage();

    return `
    <header class="header" id="header">
        <div class="header-inner">
            <a href="index.html" class="logo">
                <span class="logo-icon">
                    <svg viewBox="0 0 150 30.97" xmlns="http://www.w3.org/2000/svg">
                        <circle fill="#2b388f" cx="6.46" cy="8.54" r="3.86"/>
                        <path fill="#2b388f" d="M13.54,18.64c.51.53,1.35,1.13,2.6,1.41v-3.54c-.07-.05-.15-.1-.21-.16-.52-.53-.63-1.42-.63-1.75V4.68h-3.32v9.87c0,.25-.02,2.47,1.56,4.1Z"/>
                        <path fill="#262261" d="M20.2,14.88h6.83v-3.32h-5.8v-3.32h5.8v-3.32h-9.12v7.66c0,1.26,1.03,2.29,2.29,2.29Z"/>
                        <path fill="#2b388f" d="M19.14,24c-3.62,0-6.4-.98-8.28-2.92-2.5-2.58-2.73-6.19-2.75-7.09v-.27h-1.58l-1.73-.06s0,.17,0,.4v12.9h3.32v-3.96c.11.12.22.25.34.37,2.52,2.62,6.12,3.96,10.69,3.96,4.01,0,11.15-2.08,12.89-9.46h-3.45c-1.92,5.9-8.57,6.14-9.44,6.15Z"/>
                        <path fill="#262261" d="M32.42,12.19h2.35v-3.32h-2.35v-4.19h-3.32v9.64c0,.92-.09,1.75-.25,2.5h3.37c.12-.78.19-1.61.19-2.5v-2.13Z"/>
                        <path fill="#404041" d="M51.77,21.67c-1.58-1.29-2.68-2.85-3.43-4.79-.59,1.93-1.82,3.73-3.53,5.12l-1.23-1.08c2.3-1.76,3.93-4.65,3.93-7.97v-5.82h1.63v5.82c0,3.34,1.56,5.93,3.62,7.51l-.99,1.21ZM54.14,22.75v-8.58h-2.88v-1.41h2.88v-6.13h1.58v16.13h-1.58ZM57.87,23.01V6.63h1.56v16.38h-1.56Z"/>
                        <path fill="#404041" d="M69.49,18.11v5.09h-1.58v-5.09h-7.57v-1.36h16.71v1.36h-7.57ZM61.91,14.62v-7.66h13.59v7.66h-13.59ZM73.9,8.32h-10.41v4.96h10.41v-4.96Z"/>
                        <path fill="#404041" d="M76.97,22.16v-1.36h16.71v1.36h-16.71ZM90.52,18.4v-9.9h-12.27v-1.38h13.87v11.28h-1.6Z"/>
                        <path fill="#404041" d="M102.77,15.96v1.73h-1.65v-1.73h-7.53v-1.3h16.71v1.3h-7.53ZM95.06,22.92v-5.88h1.58v1.54h10.6v-1.54h1.58v5.88h-13.76ZM95.13,13.4v-4h12.01v-1.43h-12.01v-1.29h13.61v3.97h-12.01v1.45h12.27v1.3h-13.87ZM107.24,19.89h-10.6v1.71h10.6v-1.71Z"/>
                        <path fill="#2b388f" d="M124.63,11.75c0,2.28-1.78,4.22-5.16,4.22s-5.2-1.95-5.2-4.22v-1.07c0-2.24,1.78-4.21,5.2-4.21s5.16,1.97,5.16,4.21v1.07ZM128.95,23.3c-2.7-.42-4.87-1.6-6.21-3.16-1.34,1.56-3.51,2.74-6.21,3.16l-1.36-2.02c3.49-.55,6.17-2.24,6.17-3.89v-.83h2.79v.83c0,1.65,2.68,3.34,6.17,3.89l-1.36,2.02ZM121.89,10.87c0-1.19-.77-2.15-2.42-2.15s-2.44.96-2.44,2.15v.7c0,1.23.75,2.17,2.44,2.17s2.42-.94,2.42-2.17v-.7ZM126.63,17.24V6.57h2.74v10.67h-2.74Z"/>
                        <path fill="#2b388f" d="M130.8,21.69V7.18h9.57v2.3h-6.85v9.94h7.86v2.28h-10.58ZM142.35,23.06V6.57h2.75v6.19h2.3v2.35h-2.3v7.95h-2.75Z"/>
                    </svg>
                </span>
            </a>
            <nav class="nav" id="nav">
                <ul class="nav-list">
                    <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">홈</a></li>
                    <li><a href="services.html" class="${currentPage === 'services.html' ? 'active' : ''}">서비스 소개</a></li>
                    <li><a href="team.html" class="${currentPage === 'team.html' ? 'active' : ''}">전문가 소개</a></li>
                    <li><a href="notice.html" class="${currentPage === 'notice.html' ? 'active' : ''}">공지사항</a></li>
                    <li><a href="location.html" class="${currentPage === 'location.html' ? 'active' : ''}">오시는 길</a></li>
                    <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">상담신청</a></li>
                </ul>
            </nav>
            <a href="tel:02-1234-5678" class="header-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>02-1234-5678</span>
            </a>
            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="메뉴 열기">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
    `;
}

// 푸터 HTML 생성
function createFooter() {
    const currentYear = new Date().getFullYear();

    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-main">
                <div class="footer-brand">
                    <a href="index.html" class="footer-logo">
                        <span class="logo-icon">
                            <svg viewBox="0 0 150 30.97" xmlns="http://www.w3.org/2000/svg">
                                <circle fill="#2b388f" cx="6.46" cy="8.54" r="3.86"/>
                                <path fill="#2b388f" d="M13.54,18.64c.51.53,1.35,1.13,2.6,1.41v-3.54c-.07-.05-.15-.1-.21-.16-.52-.53-.63-1.42-.63-1.75V4.68h-3.32v9.87c0,.25-.02,2.47,1.56,4.1Z"/>
                                <path fill="#262261" d="M20.2,14.88h6.83v-3.32h-5.8v-3.32h5.8v-3.32h-9.12v7.66c0,1.26,1.03,2.29,2.29,2.29Z"/>
                                <path fill="#2b388f" d="M19.14,24c-3.62,0-6.4-.98-8.28-2.92-2.5-2.58-2.73-6.19-2.75-7.09v-.27h-1.58l-1.73-.06s0,.17,0,.4v12.9h3.32v-3.96c.11.12.22.25.34.37,2.52,2.62,6.12,3.96,10.69,3.96,4.01,0,11.15-2.08,12.89-9.46h-3.45c-1.92,5.9-8.57,6.14-9.44,6.15Z"/>
                                <path fill="#262261" d="M32.42,12.19h2.35v-3.32h-2.35v-4.19h-3.32v9.64c0,.92-.09,1.75-.25,2.5h3.37c.12-.78.19-1.61.19-2.5v-2.13Z"/>
                                <path fill="#404041" d="M51.77,21.67c-1.58-1.29-2.68-2.85-3.43-4.79-.59,1.93-1.82,3.73-3.53,5.12l-1.23-1.08c2.3-1.76,3.93-4.65,3.93-7.97v-5.82h1.63v5.82c0,3.34,1.56,5.93,3.62,7.51l-.99,1.21ZM54.14,22.75v-8.58h-2.88v-1.41h2.88v-6.13h1.58v16.13h-1.58ZM57.87,23.01V6.63h1.56v16.38h-1.56Z"/>
                                <path fill="#404041" d="M69.49,18.11v5.09h-1.58v-5.09h-7.57v-1.36h16.71v1.36h-7.57ZM61.91,14.62v-7.66h13.59v7.66h-13.59ZM73.9,8.32h-10.41v4.96h10.41v-4.96Z"/>
                                <path fill="#404041" d="M76.97,22.16v-1.36h16.71v1.36h-16.71ZM90.52,18.4v-9.9h-12.27v-1.38h13.87v11.28h-1.6Z"/>
                                <path fill="#404041" d="M102.77,15.96v1.73h-1.65v-1.73h-7.53v-1.3h16.71v1.3h-7.53ZM95.06,22.92v-5.88h1.58v1.54h10.6v-1.54h1.58v5.88h-13.76ZM95.13,13.4v-4h12.01v-1.43h-12.01v-1.29h13.61v3.97h-12.01v1.45h12.27v1.3h-13.87ZM107.24,19.89h-10.6v1.71h10.6v-1.71Z"/>
                                <path fill="#2b388f" d="M124.63,11.75c0,2.28-1.78,4.22-5.16,4.22s-5.2-1.95-5.2-4.22v-1.07c0-2.24,1.78-4.21,5.2-4.21s5.16,1.97,5.16,4.21v1.07ZM128.95,23.3c-2.7-.42-4.87-1.6-6.21-3.16-1.34,1.56-3.51,2.74-6.21,3.16l-1.36-2.02c3.49-.55,6.17-2.24,6.17-3.89v-.83h2.79v.83c0,1.65,2.68,3.34,6.17,3.89l-1.36,2.02ZM121.89,10.87c0-1.19-.77-2.15-2.42-2.15s-2.44.96-2.44,2.15v.7c0,1.23.75,2.17,2.44,2.17s2.42-.94,2.42-2.17v-.7ZM126.63,17.24V6.57h2.74v10.67h-2.74Z"/>
                                <path fill="#2b388f" d="M130.8,21.69V7.18h9.57v2.3h-6.85v9.94h7.86v2.28h-10.58ZM142.35,23.06V6.57h2.75v6.19h2.3v2.35h-2.3v7.95h-2.75Z"/>
                            </svg>
                        </span>
                    </a>
                    <p class="footer-desc">
                        당신의 세무, 함께 잇다.<br>
                        6명의 세무사가 만드는 최적의 세무 솔루션.
                    </p>
                </div>
                <div class="footer-links">
                    <div class="footer-section">
                        <h4>서비스</h4>
                        <ul>
                            <li><a href="services.html#bookkeeping">기장대리</a></li>
                            <li><a href="services.html#tax-filing">세무신고</a></li>
                            <li><a href="services.html#consulting">세무자문</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>바로가기</h4>
                        <ul>
                            <li><a href="team.html">전문가 소개</a></li>
                            <li><a href="notice.html">공지사항</a></li>
                            <li><a href="location.html">오시는 길</a></li>
                            <li><a href="contact.html">상담신청</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>연락처</h4>
                        <ul class="contact-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                02-1234-5678
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                contact@sinroe-tax.co.kr
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                서울시 강남구 테헤란로 123
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-info">
                    <p>세무그룹 잇다 | 사업자등록번호: 123-45-67890</p>
                    <p>&copy; ${currentYear} 세무그룹 잇다. All rights reserved.</p>
                </div>
                <div class="footer-legal">
                    <a href="privacy.html">개인정보처리방침</a>
                    <span class="footer-legal-divider">|</span>
                    <a href="terms.html">이용약관</a>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// 헤더/푸터 삽입
function loadCommonElements() {
    // 헤더 삽입
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = createHeader();
    }

    // 푸터 삽입
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = createFooter();
    }

    // 이벤트 리스너 초기화
    initializeEvents();
}

// 이벤트 리스너 초기화
function initializeEvents() {
    const header = document.getElementById('header');
    const nav = document.getElementById('nav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    // 스크롤 이벤트 - 헤더 스타일 변경
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 확인

    // 모바일 메뉴 토글
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // 네비게이션 링크 클릭 시 모바일 메뉴 닫기
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
            }
            if (nav) {
                nav.classList.remove('active');
            }
        });
    });

    // 부드러운 스크롤 (같은 페이지 내 앵커)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 스크롤 애니메이션
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 애니메이션 적용할 요소들
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        observer.observe(el);
    });
}

// DOM 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', () => {
    loadCommonElements();
    initScrollAnimations();
});
