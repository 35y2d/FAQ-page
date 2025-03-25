document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "black";

    const faqs = {
        overview: [{ question: "How does it work?", 
            answer: "idk LOL"},
        { question: "Which platform do you support?", 
            answer: "In a situational interview, the interviewer may ask how you overcame a difficult situation and what you learned from it. You can use your response to demonstrate your flexibility and share an example of how you transformed a negative experience into a positive outcome "},
        { question: "How do I invite my teammates?", 
            answer: "Collect the contact information of your teammates, including their email addresses or usernames on the platform you will use."},
        { question: "Do you have annual plan?", 
            answer: "idk LOL"},
        { question: "How to create new workspace", 
            answer: "idk LOL"},
        { question: "How do I set roles & permissions?", 
            answer: "idk LOL"}],

        system: [{ question: "Does it work again?", 
            answer: "idk LOL"},
        { question: "Which platform do you support?", 
            answer: "In a situational interview, the interviewer may ask how you overcame a difficult situation and what you learned from it. You can use your response to demonstrate your flexibility and share an example of how you transformed a negative experience into a positive outcome "},
        { question: "How do I invite my teammates?", 
            answer: "Collect the contact information of your teammates, including their email addresses or usernames on the platform you will use."},
        { question: "Do you have annual plan?", 
            answer: "idk LOL"},
        { question: "How to create new workspace", 
            answer: "idk LOL"},
        { question: "How do I set roles & permissions?", 
            answer: "idk LOL"}],

        brand: [{ question: "You mean it actually works?", 
            answer: "idk LOL"},
        { question: "Which platform do you support?", 
            answer: "In a situational interview, the interviewer may ask how you overcame a difficult situation and what you learned from it. You can use your response to demonstrate your flexibility and share an example of how you transformed a negative experience into a positive outcome "},
        { question: "How do I invite my teammates?", 
            answer: "Collect the contact information of your teammates, including their email addresses or usernames on the platform you will use."},
        { question: "Do you have annual plan?", 
            answer: "idk LOL"},
        { question: "How to create new workspace", 
            answer: "idk LOL"},
        { question: "How do I set roles & permissions?", 
            answer: "idk LOL"}],

        website: [{ question: "Does it work again and agian?", 
            answer: "idk LOL"},
        { question: "Which platform do you support?", 
            answer: "In a situational interview, the interviewer may ask how you overcame a difficult situation and what you learned from it. You can use your response to demonstrate your flexibility and share an example of how you transformed a negative experience into a positive outcome "},
        { question: "How do I invite my teammates?", 
            answer: "Collect the contact information of your teammates, including their email addresses or usernames on the platform you will use."},
        { question: "Do you have annual plan?", 
            answer: "idk LOL"},
        { question: "How to create new workspace", 
            answer: "idk LOL"},
        { question: "How do I set roles & permissions?", 
            answer: "idk LOL"}]
        };
        
    function renderFaqList(category) {
        const container = document.getElementById('faq-list');
        container.innerHTML = '';

        const oneFaq = faqs[category];

        oneFaq.forEach((item, index) => {
            const box = document.createElement('div');
            box.classList.add('question-box');
        
            const defaultOpen = index === 1 || index === 2 ? 'block' : 'none';
    
            box.innerHTML = `
            <button class="toggle-btn"> ${item.question}</button>
            <div class="answer" style="display: ${defaultOpen}">${item.answer}</div>
            `;
        
            container.appendChild(box);
        });
        
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        
        toggleButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const answer = btn.nextElementSibling;
                const isOpen = answer.style.display === 'block';
                answer.style.display = isOpen ? 'none' : 'block';
            });
        });
    };

    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const activeOne = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));

            tab.classList.add('active');

            renderFaqList(activeOne);

        });
    });

    renderFaqList('overview');
});
