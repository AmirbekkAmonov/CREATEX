document.addEventListener('DOMContentLoaded', () => {
     const getConsultationBtn = document.getElementById('getConsultationBtn');
     const loginRegisterBtn = document.getElementById('loginRegisterBtn');
     const mobileGetConsultationBtn = document.getElementById('mobileGetConsultationBtn');
     const mobileLoginRegisterBtn = document.getElementById('mobileLoginRegisterBtn');
     const consultationModal = document.getElementById('consultationModal');
     const loginRegisterModal = document.getElementById('loginRegisterModal');
     const closeModalBtns = document.querySelectorAll('#closeModal');
     getConsultationBtn.addEventListener('click', () => {
         consultationModal.classList.remove('hidden');
         loginRegisterModal.classList.add('hidden');
     });

     loginRegisterBtn.addEventListener('click', () => {
         loginRegisterModal.classList.remove('hidden');
         consultationModal.classList.add('hidden');
     });
     mobileGetConsultationBtn.addEventListener('click', () => {
         consultationModal.classList.remove('hidden');
         loginRegisterModal.classList.add('hidden');
     });

     mobileLoginRegisterBtn.addEventListener('click', () => {
         loginRegisterModal.classList.remove('hidden');
         consultationModal.classList.add('hidden');
     });
     closeModalBtns.forEach(button => {
         button.addEventListener('click', () => {
             consultationModal.classList.add('hidden');
             loginRegisterModal.classList.add('hidden');
         });
     });
     const menuToggle = document.getElementById('menuToggle');
     const mobileMenu = document.getElementById('mobileMenu');
     const closeMenu = document.getElementById('closeMenu');

     menuToggle.addEventListener('click', () => {
         mobileMenu.classList.remove('hidden');
         mobileMenu.classList.remove('translate-x-full');
         mobileMenu.classList.add('translate-x-0');
     });

     closeMenu.addEventListener('click', () => {
         mobileMenu.classList.remove('translate-x-0');
         mobileMenu.classList.add('translate-x-full');
         setTimeout(() => {
             mobileMenu.classList.add('hidden');
         }, 500);
     });
});
