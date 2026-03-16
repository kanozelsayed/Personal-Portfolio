const skillsData = [
    { name: "HTML5", icon: "fa-html5", desc: "Expert in building semantic and accessible web structures." },
    { name: "CSS3", icon: "fa-css3-alt", desc: "Advanced styling using Flexbox, Grid, and Animations." },
    { name: "JavaScript", icon: "fa-js", desc: "Building interactive logic and dynamic content." },
    { name: "React", icon: "fa-react", desc: "Modern UI components development." },
    { name: "Git & GitHub", icon: "fa-github", desc: "Version control and collaborative coding." },
    { name: "Responsive Design", icon: "fa-mobile-alt", desc: "Creating websites that work on all screen sizes." }
];

const projectsData = [
    { title: "Ramadan Planner", desc: "A 30-day spiritual and daily task organizer for the holy month.", icon: "fa-moon" }, //عارفه ان ال icon دي مش ف التاسك يارب ماخدش ماينص بس شكلها عاجبني بليز عدوها
    { title: "Recipe App", desc: "Search and save your favorite food recipes with detailed ingredients.", icon: "fa-utensils" },
    { title: "Todo List", desc: "A productivity tool to manage your daily tasks and goals efficiently.", icon: "fa-list-check" },
    { title: "Memory Game", desc: "A fun interactive card-matching game to test your memory skills.", icon: "fa-brain" }
];


const skillsContainer = document.getElementById("skills-container");
skillsData.forEach((skill) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<i class="fab ${skill.icon}"></i><h3>${skill.name}</h3>`;
    div.onclick = () => {
        document.getElementById("modal-content").innerHTML = `<h2>${skill.name}</h2><p style="margin-top:15px; color:#9ca3af">${skill.desc}</p>`;
        document.getElementById("modal").style.display = "block";
    };
    skillsContainer.appendChild(div);
});


const projectsContainer = document.getElementById('projects-container');
projectsData.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card project-card';
    div.innerHTML = `
        <i class="fas ${p.icon}" style="font-size:35px; color:#00d4ff; margin-bottom:15px;"></i>
        <h3>${p.title}</h3>
        <p style="color:#9ca3af; font-size:14px; margin-top:10px">${p.desc}</p>
    `;
    projectsContainer.appendChild(div);
});


const modal = document.getElementById("modal");
window.onclick = (e) => {
    if (e.target === modal || e.target.classList.contains("close-modal")) {
        modal.style.display = "none";
    }
};


document.getElementById("contact-form").onsubmit = function (e) {
    const msg = document.getElementById("message").value;
    const err = document.getElementById("error-msg");

    if (msg.trim().length < 10) {
        e.preventDefault();
        err.textContent = "Please enter at least 10 characters.";
        err.style.display = "block";
    } else {
        alert("Thank you , Your message has been sent successfully.");
    }
};


document.getElementById("hamburger").onclick = () => {
    document.getElementById("nav-links").classList.toggle("active");
};