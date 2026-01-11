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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
                    </svg>
                </span>
                <span class="logo-text">세무법인 <strong>신뢰</strong></span>
            </a>
            <nav class="nav" id="nav">
                <ul class="nav-list">
                    <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">홈</a></li>
                    <li><a href="services.html" class="${currentPage === 'services.html' ? 'active' : ''}">서비스 소개</a></li>
                    <li><a href="team.html" class="${currentPage === 'team.html' ? 'active' : ''}">전문가 소개</a></li>
                    <li><a href="notice.html" class="${currentPage === 'notice.html' ? 'active' : ''}">공지사항</a></li>
                    <li><a href="location.html" class="${currentPage === 'location.html' ? 'active' : ''}">오시는 길</a></li>
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
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
                            </svg>
                        </span>
                        <span>세무법인 <strong>신뢰</strong></span>
                    </a>
                    <p class="footer-desc">
                        고객의 성공적인 사업을 위한<br>
                        최적의 세무 솔루션을 제공합니다.
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
                            <li><a href="index.html#contact">상담신청</a></li>
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
                    <p>세무법인 신뢰 | 대표: 김세무 | 사업자등록번호: 123-45-67890</p>
                    <p>&copy; ${currentYear} 세무법인 신뢰. All rights reserved.</p>
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
