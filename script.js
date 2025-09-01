document.addEventListener("DOMContentLoaded", () => {
    const cartCountSpan = document.getElementById("cartCount");
    const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
    let cartCount = Number(sessionStorage.getItem("cartCount")) || 0;
    if (cartCountSpan) cartCountSpan.textContent = cartCount;

    addToCartBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            cartCount++;
            sessionStorage.setItem("cartCount", cartCount);
            if (cartCountSpan) cartCountSpan.textContent = cartCount;
        });
    });

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Your message has been sent successfully! We will contact you soon.");
            contactForm.reset();
        });
    }
});
