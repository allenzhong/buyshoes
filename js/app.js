window.onload = function() {
    makeCartScrollNicely();
    var $toggle = document.querySelector(".site__right-sidebar-toggle");

    $toggle.addEventListener("click",function() {
        document.body.classList.toggle("js-show-right-sidebar");
        var rightSiderbar = document.querySelector(".site__right-sidebar");
        rightSiderbar.classList.toggle("js-show-right-sidebar");

    });
}

function makeCartScrollNicely() {
  var cart = document.querySelector(".cart__content");
  // Ps.initialize(cart);
}

