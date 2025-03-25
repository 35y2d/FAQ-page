document.addEventListener("DOMContentLoaded", () => {
    const faqList = document.getElementById("faq-list");
  
    const faqs = [
      {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase.",
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries around the world.",
      },
      {
        question: "How can I contact customer support?",
        answer: "You can reach us via the contact form or email us directly.",
      },
    ];
  
    faqs.forEach((faq, index) => {
      const box = document.createElement("div");
      box.className = "question-box";
  
      const button = document.createElement("button");
      button.className = "toggle-btn";
      button.textContent = faq.question;
      button.setAttribute("aria-expanded", "false");
  
      const answer = document.createElement("div");
      answer.className = "answer";
      answer.textContent = faq.answer;
  
      button.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";
        answer.style.display = isOpen ? "none" : "block";
        button.setAttribute("aria-expanded", !isOpen);
      });
  
      box.appendChild(button);
      box.appendChild(answer);
      faqList.appendChild(box);
    });
  
    const tabButtons = document.querySelectorAll(".tab-btn");
  
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        // Add your tab switching logic here
      });
    });
  });
  