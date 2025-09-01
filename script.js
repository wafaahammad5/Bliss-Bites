
document.addEventListener('DOMContentLoaded', function () {
  // cart
  var cartCount = 0;
  var cartCountSpan = document.getElementById('cartCount');
  var addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

  if (cartCountSpan) cartCountSpan.textContent = cartCount;

  addToCartBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      cartCount++;
      if (cartCountSpan) cartCountSpan.textContent = cartCount;
    });
  });

  // form
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Your message has been sent successfully! We will contact you soon.');
      contactForm.reset();
    });
  }
});
