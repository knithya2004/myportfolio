// Typing Effect
const text = "Creative Developer & Problem Solver";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();

// Scroll Reveal
window.addEventListener("scroll", function(){
    document.querySelectorAll(".reveal").forEach(function(el){
        let position = el.getBoundingClientRect().top;
        let screen = window.innerHeight;
        if(position < screen - 100){
            el.classList.add("active");
        }
    });
});

// Skill Bar Animation
window.addEventListener("scroll", function(){
    document.querySelectorAll(".progress").forEach(function(bar){
        let position = bar.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit",function(e){
    e.preventDefault();
    document.getElementById("successMsg").innerText =
    "Message Sent Successfully!";
});

// ===== FIX NAV SCROLL (JS ONLY) =====
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            const id = link.getAttribute("href");

            if (!id || !id.startsWith("#")) return;

            e.preventDefault();

            const target = document.querySelector(id);
            if (!target) return;

            const navbarHeight =
                document.querySelector(".header")?.offsetHeight || 0;

            const y =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight -
                5;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });

            // update URL hash without jump
            history.pushState(null, "", id);
        });
    });
});
