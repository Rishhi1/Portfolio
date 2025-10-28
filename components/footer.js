class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #0B0F1A;
          color: #A0A6B0;
          padding: 3rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(56, 255, 248, 0.4);
          box-shadow: 0 -4px 20px rgba(56, 255, 248, 0.2);
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .social-links a {
          color: #38FFF8;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          color: #0FFFE0;
          transform: translateY(-2px);
          filter: drop-shadow(0 0 10px rgba(15, 255, 224, 0.6));
        }
        
        .copyright {
          font-size: 0.875rem;
        }
        
        .heart {
          color: #38FFF8;
          animation: heartbeat 1.5s ease-in-out infinite;
          filter: drop-shadow(0 0 5px rgba(56, 255, 248, 0.6));
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="social-links">
            <a href="#" aria-label="GitHub">
              <i data-feather="github" width="20" height="20"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i data-feather="linkedin" width="20" height="20"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i data-feather="instagram" width="20" height="20"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i data-feather="twitter" width="20" height="20"></i>
            </a>
            <a href="#" aria-label="Mail">
              <i data-feather="mail" width="20" height="20"></i>
            </a>
          </div>
          <p class="copyright">
            &copy; 2025 Rishi Raj Gautam. Made with  lots of ☕
        </p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);