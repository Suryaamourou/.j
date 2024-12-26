const _0x1aeaba = document.querySelectorAll(".animate-on-scroll");
const _0x232e35 = {
  'threshold': 0.25
};
const _0x3a2a86 = new IntersectionObserver(function (_0x1a35e8, _0x2e97db) {
  _0x1a35e8.forEach(_0x33a7a6 => {
    if (_0x33a7a6.isIntersecting) {
      _0x33a7a6.target.classList.add("is-visible");
      _0x2e97db.unobserve(_0x33a7a6.target);
    }
  });
}, _0x232e35);
_0x1aeaba.forEach(_0xdaa737 => {
  _0x3a2a86.observe(_0xdaa737);
});

window.addEventListener('scroll', function () {
if (window.innerWidth > 0x300) {
  var _0x22dcf5 = document.getElementById("navbar");
  if (window.scrollY > 0x19) {
    _0x22dcf5.classList.add("scrolled");
  } else {
    _0x22dcf5.classList.remove("scrolled");
  }
}
});