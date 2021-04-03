class BlueBtn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          color: hsl(226, 100%, 87%);
          background-color: hsl(227, 35%, 25%);
          font-family: var(--main-font, "sans-serif");
          border:none;
          border-radius: 1rem;
          padding: 0.6rem 3rem;
          cursor: pointer;
          transition: all 0.3s ease-out;
        }
        button:hover {
          color: hsl(230, 100%, 99%);
        }
      </style>
      <button>
        <slot>Click me</slot>
      </button>
    `;
  }
}

customElements.define("ap-bluebtn", BlueBtn);
