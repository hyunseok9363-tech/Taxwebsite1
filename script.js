// ===== DOM 요소 선택 =====
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModal');
const navLinks = document.querySelectorAll('.nav-list a');

// ===== 헤더 스크롤 효과 =====
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// 페이지 로드 시 스크롤 위치 확인
handleScroll();

// ===== 모바일 메뉴 토글 =====
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 모바일 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        nav.classList.remove('active');
    });
});

// ===== 부드러운 스크롤 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== 폼 유효성 검사 및 제출 =====
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // 폼 데이터 수집
    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    // 전화번호 형식 검사
    const phoneRegex = /^[0-9]{2,3}-?[0-9]{3,4}-?[0-9]{4}$/;
    if (!phoneRegex.test(data.phone.replace(/-/g, ''))) {
        alert('올바른 전화번호 형식을 입력해주세요.');
        document.getElementById('phone').focus();
        return;
    }

    // 이메일 형식 검사 (입력된 경우)
    if (data.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('올바른 이메일 형식을 입력해주세요.');
            document.getElementById('email').focus();
            return;
        }
    }

    // 여기서 실제로는 서버로 데이터를 전송합니다
    // 예: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })

    console.log('폼 데이터:', data);

    // 성공 모달 표시
    showModal();

    // 폼 초기화
    this.reset();
});

// ===== 모달 제어 =====
function showModal() {
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', hideModal);

successModal.addEventListener('click', function(e) {
    if (e.target === this) {
        hideModal();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && successModal.classList.contains('active')) {
        hideModal();
    }
});

// ===== 스크롤 애니메이션 =====
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

// 애니메이션 적용할 요소들 선택
document.querySelectorAll('.service-card, .team-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// visible 클래스 스타일 추가
const style = document.createElement('style');
style.textContent = `
    .service-card.visible,
    .team-card.visible,
    .stat-item.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===== 통계 숫자 카운트업 애니메이션 =====
function animateCounter(element) {
    const target = element.textContent;
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    const suffix = target.replace(/[0-9]/g, '');
    const duration = 2000;
    const steps = 60;
    const stepValue = numericValue / steps;
    const stepDuration = duration / steps;

    let current = 0;
    let step = 0;

    element.textContent = '0' + suffix;

    const timer = setInterval(() => {
        step++;
        current = Math.round(stepValue * step);

        if (step >= steps) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = current.toLocaleString() + suffix;
        }
    }, stepDuration);
}

// 통계 섹션이 보일 때 애니메이션 실행
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(num => {
                if (!num.dataset.animated) {
                    num.dataset.animated = 'true';
                    animateCounter(num);
                }
            });
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ===== 전화번호 자동 하이픈 추가 =====
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/[^0-9]/g, '');

    if (value.length > 3 && value.length <= 7) {
        value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 7) {
        value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
    }

    e.target.value = value;
});

// ===== 현재 연도 자동 업데이트 =====
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
}
