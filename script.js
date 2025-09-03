const cartCountSpan = document.getElementById("cartCount");
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
let cartCount = Number(sessionStorage.getItem("cartCount"));
cartCountSpan.innerHTML = cartCount;

addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        cartCount++;
        sessionStorage.setItem("cartCount", cartCount);
        cartCountSpan.innerHTML = cartCount;
    });
});
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        alert(
            "Your message has been sent successfully! We will contact you soon."
        );
    });
}
