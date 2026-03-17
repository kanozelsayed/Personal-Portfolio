const skillsData = [
    { name: "HTML5", icon: "fa-html5", desc: "Expert in building semantic and accessible web structures." },
    { name: "CSS3", icon: "fa-css3-alt", desc: "Advanced styling using Flexbox, Grid, and Animations." },
    { name: "JavaScript", icon: "fa-js", desc: "Building interactive logic and dynamic content." },
    { name: "React", icon: "fa-react", desc: "Modern UI components development." },
    { name: "Git & GitHub", icon: "fa-github", desc: "Version control and collaborative coding." },
    { name: "Responsive Design", icon: "fa-mobile-alt", desc: "Creating websites that work on all screen sizes." }
];

const projectsData = [
    { title: "Ramadan Planner", desc: "A 30-day spiritual and daily task organizer for the holy month.", icon: "fa-moon" },
    { title: "Recipe App", desc: "Search and save your favorite food recipes with detailed ingredients.", icon: "fa-utensils" },
    { title: "Todo List", desc: "A productivity tool to manage your daily tasks and goals efficiently.", icon: "fa-list-check" },
    { title: "Memory Game", desc: "A fun interactive card-matching game to test your memory skills.", icon: "fa-brain" }
];

document.addEventListener("DOMContentLoaded", () => {

    // 1. Rendering Skills
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsData.forEach((skill) => {
            const div = document.createElement("div");
            div.className = "card";
            
            // --- التكة الجديدة هنا (الأنميشن للكروت) ---
            div.setAttribute('data-aos', 'fade-up');
            
            div.innerHTML = `
                <i class="fab ${skill.icon}"></i>
                <h3>${skill.name}</h3>
            `;
            div.onclick = () => {
                const modalContent = document.getElementById("modal-content");
                if (modalContent) {
                    modalContent.innerHTML = `
                        <h2>${skill.name}</h2>
                        <p style="margin-top:15px; color:#9ca3af">${skill.desc}</p>
                    `;
                    document.getElementById("modal").style.display = "block";
                }
            };
            skillsContainer.appendChild(div);
        });
    }

    // 2. Rendering Projects
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        projectsData.forEach((p) => {
            const div = document.createElement("div");
            div.className = "card project-card";
            
            // --- التكة الجديدة هنا (الأنميشن للمشاريع) ---
            div.setAttribute('data-aos', 'zoom-in');
            
            div.innerHTML = `
                <i class="fas ${p.icon}" style="font-size:35px; color:#00d4ff; margin-bottom:15px;"></i>
                <h3>${p.title}</h3>
                <p style="color:#9ca3af; font-size:14px; margin-top:10px">${p.desc}</p>
            `;
            projectsContainer.appendChild(div);
        });
    }

    // 3. Modal logic
    const modal = document.getElementById("modal");
    window.onclick = (e) => {
        if (e.target === modal || e.target.classList.contains("close-modal")) {
            modal.style.display = "none";
        }
    };

    // 4. Form Logic
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.onsubmit = function (e) {
            const msg = document.getElementById("message").value;
            const err = document.getElementById("error-msg");
            if (msg.trim().length < 10) {
                e.preventDefault();
                err.textContent = "Please enter at least 10 characters.";
                err.style.display = "block";
            } else {
                alert("Thank you, Kenzy! Your message has been sent successfully.");
            }
        };
    }

    // 5. Menu Logic
    const hamburger = document.getElementById("hamburger");
    if (hamburger) {
        hamburger.onclick = () => {
            document.getElementById("nav-links").classList.toggle("active");
        };
    }

    const navLinks = document.querySelectorAll("#nav-links a");
    navLinks.forEach(link => {
        link.onclick = () => {
            document.getElementById("nav-links").classList.remove("active");
        };
    });
});
