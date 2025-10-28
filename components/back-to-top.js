class BackToTop extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: #38bdf8;
          color: white;
          border: none;
          border-radius: 50%;
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          z-index: 999;
        }
        
        button.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        button:hover {
          background: #0ea5e9;
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          button {
            bottom: 1rem;
            right: 1rem;
            width: 3rem;
            height: 3rem;
        }
      </style>
      <button aria-label="Back to top">
        <i data-feather="chevron-up" width="20" height="20"></i>
      </button>
    `;
    
    const button = this.shadowRoot.querySelector('button');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

customElements.define('back-to-top', BackToTop);