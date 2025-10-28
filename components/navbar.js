class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        nav {
          background: rgba(11, 15, 26, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(56, 255, 248, 0.4);
          box-shadow: 0 4px 20px rgba(56, 255, 248, 0.2);
          transition: all 0.3s ease;
        }
        
        .scrolled {
          background: rgba(11, 15, 26, 0.95);
          padding: 0.75rem 2rem;
          box-shadow: 0 4px 30px rgba(15, 255, 224, 0.3);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(135deg, #38FFF8 0%, #0FFFE0 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(56, 255, 248, 0.3));
        }
.nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links a {
          color: #E0E6F0;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: #0FFFE0;
          filter: drop-shadow(0 0 8px rgba(15, 255, 224, 0.5));
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #38FFF8, #0FFFE0, #00B3FF);
          box-shadow: 0 0 10px rgba(56, 255, 248, 0.5);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #38FFF8;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          
          .scrolled {
            padding: 0.5rem 1rem;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(11, 15, 26, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            background: rgba(11, 15, 26, 0.98);
            border-bottom: 1px solid rgba(56, 255, 248, 0.5);
            box-shadow: 0 10px 40px rgba(56, 255, 248, 0.4);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
          }
          
          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
      </style>
      <nav>
        <div class="logo">Rishi Raj Gautam</div>
<button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul class="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `;
    
    // Add scroll effect
    const nav = this.shadowRoot.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
    
    // Mobile menu functionality
    const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    const links = this.shadowRoot.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);