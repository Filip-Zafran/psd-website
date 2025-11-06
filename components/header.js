class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--poly-white, #fff);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .logo {
          height: 40px;
          display: block;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .nav-link {
          position: relative;
          color: var(--text, #222);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
          padding-bottom: 4px;
        }
        .nav-link:hover {
          color: var(--poly-magenta, #E50051);
        }

        /* Red underline for active link */
        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 3px;
          background-color: #E50051; /* Red underline */
          border-radius: 2px;
        }

        @media (max-width: 640px) {
          .container {
            padding: 1rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .nav-links {
            gap: 1rem;
            width: 100%;
          }
        }
      </style>

      <div class="container">
        <a href="index.html" class="logo">
          <img src="images/logo.png" alt="PSD Logo" height="60">
        </a>
        <nav class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="apply.html" class="nav-link">Apply</a>
          <a href="merch.html" class="nav-link">Poly Merch</a>
          <a href="polyfest.html" class="nav-link">Poly Fest</a>
          <a href="qna.html" class="nav-link">Q&A</a>
          <a href="contact.html" class="nav-link">Contact</a>
        </nav>
      </div>
    `;

    // highlight current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = this.shadowRoot.querySelectorAll('.nav-link');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
        link.classList.add('active');
      }
    });
  }
}

customElements.define('custom-header', CustomHeader);
