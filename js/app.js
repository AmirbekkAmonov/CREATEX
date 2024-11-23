document.addEventListener('DOMContentLoaded', () => {
    const getConsultationBtn = document.getElementById('getConsultationBtn');
    const loginRegisterBtn = document.getElementById('loginRegisterBtn');
    const mobileGetConsultationBtn = document.getElementById('mobileGetConsultationBtn');
    const mobileLoginRegisterBtn = document.getElementById('mobileLoginRegisterBtn');
    const consultationModal = document.getElementById('consultationModal');
    const loginRegisterModal = document.getElementById('loginRegisterModal');
    const closeModalBtns = document.querySelectorAll('#closeModal');
    const body = document.body; // Body element for scroll control

    // Open Consultation Modal
    getConsultationBtn.addEventListener('click', () => {
        consultationModal.classList.remove('hidden');
        loginRegisterModal.classList.add('hidden');
        body.classList.add('overflow-hidden'); // Disable scroll
    });

    // Open Login/Register Modal
    loginRegisterBtn.addEventListener('click', () => {
        loginRegisterModal.classList.remove('hidden');
        consultationModal.classList.add('hidden');
        body.classList.add('overflow-hidden'); // Disable scroll
    });

    // Open Consultation Modal (Mobile)
    mobileGetConsultationBtn.addEventListener('click', () => {
        consultationModal.classList.remove('hidden');
        loginRegisterModal.classList.add('hidden');
        body.classList.add('overflow-hidden'); // Disable scroll
    });

    // Open Login/Register Modal (Mobile)
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