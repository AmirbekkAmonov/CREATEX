document.addEventListener('DOMContentLoaded', () => {
    const getConsultationBtn = document.getElementById('getConsultationBtn');
    const loginRegisterBtn = document.getElementById('loginRegisterBtn');
    const mobileGetConsultationBtn = document.getElementById('mobileGetConsultationBtn');
    const mobileLoginRegisterBtn = document.getElementById('mobileLoginRegisterBtn');
    const consultationModal = document.getElementById('consultationModal');
    const loginRegisterModal = document.getElementById('loginRegisterModal');
    const closeModalBtns = document.querySelectorAll('#closeModal');
    const body = document.body; 
    getConsultationBtn.addEventListener('click', () => {
        consultationModal.classList.remove('hidden');
        loginRegisterModal.classList.add('hidden');
        body.classList.add('overflow-hidden'); 
    });
    loginRegisterBtn.addEventListener('click', () => {
        loginRegisterModal.classList.remove('hidden');
        consultationModal.classList.add('hidden');
        body.classList.add('overflow-hidden'); 
    });
    mobileGetConsultationBtn.addEventListener('click', () => {
        consultationModal.classList.remove('hidden');
        loginRegisterModal.classList.add('hidden');
        body.classList.add('overflow-hidden'); 
    });
    mobileLoginRegisterBtn.addEventListener('click', () => {
        loginRegisterModal.classList.remove('hidden');
        consultationModal.classList.add('hidden');
        body.classList.add('overflow-hidden'); 
    });
    closeModalBtns.forEach(button => {
        button.addEventListener('click', () => {
            consultationModal.classList.add('hidden');
            loginRegisterModal.classList.add('hidden');
            body.classList.remove('overflow-hidden'); 
        });
    });

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        body.classList.add('overflow-hidden');
    });
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            body.classList.remove('overflow-hidden'); 
        }, 500);
    });
});


function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.textContent = '-';
      icon.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      icon.textContent = '+';
      icon.classList.remove('rotate-180');
    }
  }



  document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carousel > div');
    const slides = document.querySelectorAll('#carousel > div > div');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('#indicators > button');
  
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const offset = -currentIndex * 100; 
      carousel.style.transform = `translateX(${offset}%)`;
  
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('bg-[#424551]', index === currentIndex);
        indicator.classList.toggle('bg-[#B3B7BC]', index !== currentIndex);
      });
    };
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
      updateCarousel();
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length; 
      updateCarousel();
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index; 
        updateCarousel();
      });
    });
  
    updateCarousel(); 
  });
  

  
  document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn2");
    const nextBtn = document.getElementById("nextBtn2");
    const gridContainer = document.querySelector(".grid");
    const gridItems = Array.from(gridContainer.children);
    const itemWidth = gridItems[0].getBoundingClientRect().width + 24; // Karta eni + bo'shliq (gap)

    let currentScrollPosition = 0;

    const scrollGrid = (direction) => {
        if (direction === "next") {
            currentScrollPosition += itemWidth;
            if (currentScrollPosition >= gridContainer.scrollWidth) {
                currentScrollPosition = 0; // Cheksiz aylanish uchun boshlanishiga qaytish
            }
        } else if (direction === "prev") {
            currentScrollPosition -= itemWidth;
            if (currentScrollPosition < 0) {
                currentScrollPosition = gridContainer.scrollWidth - gridContainer.offsetWidth; // Oxirgi qismga o'tish
            }
        }
        gridContainer.scrollTo({
            left: currentScrollPosition,
            behavior: "smooth",
        });
    };

    // Tugmalar uchun hodisalarni ulash
    prevBtn.addEventListener("click", () => scrollGrid("prev"));
    nextBtn.addEventListener("click", () => scrollGrid("next"));
});




  