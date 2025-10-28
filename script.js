// Shared JavaScript across all pages
console.log('Portfolio loaded');
// Download Resume Function
function downloadResume() {
    // Create a download link for the actual resume
    const link = document.createElement('a');
    link.href = 'https://huggingface.co/spaces/Rishhi1/portfolio-prodigy-anonymous-edition/resolve/main/documents/Rishi_Raj_Gautam_Resume.pdf';
    link.download = 'Rishi_Raj_Gautam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download success message
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg z-50';
    toast.textContent = 'Resume downloaded successfully!';
    document.body.appendChild(toast);
    
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3000);
}
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    // Add floating animation to skill cards on hover
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'float 2s ease-in-out infinite';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.animation = 'none';
        });
    });
    
    // Form submission handler
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });
            
            if (isValid) {
                // Show success message
                const toast = document.createElement('div');
                toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg z-50';
                toast.textContent = 'Message sent successfully!';
                document.body.appendChild(toast);
                
                // Reset form
                this.reset();
                
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 3000);
            }
        });
    }
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// end of js 
// Smooth reveal on scroll
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Back to Top Button
const btn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});
btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
