<script>
/* Mobile nav */
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if(toggle){
  toggle.addEventListener('click', () =>
    links.classList.toggle('nav-links-active')
  );
}

/* Scroll reveal */
const reveals = document.querySelectorAll(".section, .card, .achievement-card, .timeline-item");

function revealOnScroll(){
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.classList.add("reveal","active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* Testimonial slider */
let index=0;
const testimonials=document.querySelectorAll(".testimonial");

function showTestimonial(){
  if(testimonials.length===0) return;
  testimonials.forEach(t=>t.classList.remove("active"));
  testimonials[index].classList.add("active");
  index=(index+1)%testimonials.length;
}

setInterval(showTestimonial,3500);
</script>
