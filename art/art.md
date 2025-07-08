---
layout: page
title: Art
permalink: /art/
nav_main: true
body_class: center-text
---
<style>
/* ───── LAYOUT ───── */
.art-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  justify-items: center;
  align-items: start;
}

.art-piece {
  text-align: center;
  max-width: 320px;
  width: 100%;
  position: relative;
}

.art-piece img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  cursor: pointer;
}

/* ───── COLLAPSIBLE HEADER ───── */
.collapsible-block {
  margin-top: 0.75rem;
}

.collapsible-header {
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: #3e4261;
  font-family: serif;
  transition: color 0.2s ease;
  text-align: center;
  width: 100%;
}

.collapsible-header:hover {
  color: #0d0f1c;
}

.collapsible-arrow {
  font-family: serif;
  font-size: 1rem;
  margin-top: 0.1rem;
  transition: transform 0.2s ease;
}

.collapsible-arrow.open {
  transform: rotate(90deg);
}

.collapsible-title {
  display: inline-block;
  word-break: break-word;
  max-width: 100%;
}

.collapsible-subtitle {
  font-weight: 400;
  font-style: italic;
  font-size: 0.95rem;
  display: block;
  margin-top: 0.25rem;
  color: #292d51;
  line-height: 1.4;
}

/* ───── COLLAPSIBLE CONTENT ───── */
.collapsible-content {
  display: none;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
  padding: 0 0.5rem; 
  margin-top: 0.2rem;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
}

/* Remove previous borders */
.collapsible-content,
.collapsible-content::before {
  border: none;
}

/* Vertical gray line using pseudo-element */
.collapsible-content::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  background-color: #aaa;
  transform: translateX(-1rem);
}

/* ───── MOBILE STYLES ───── */
@media screen and (max-width: 767px) {
  .art-gallery {
    grid-template-columns: 1fr;
  }

  .art-piece {
    max-width: 100%;
  }

  .art-piece img {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    display: block;
    margin: 0 auto;
  }

  .collapsible-header {
    font-size: 0.95rem;
    flex-direction: row;
    gap: 0.3rem;
  }

  .collapsible-content {
    font-size: 0.9rem;
  }

  .collapsible-content::before {
    transform: translateX(-1rem);
  }
}
</style>

<script>
function toggleContent(header) {
  if (!header) return;
  const arrow = header.querySelector('.collapsible-arrow');
  const content = header.nextElementSibling;
  arrow.classList.toggle('open');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.art-piece img').forEach(img => {
    img.addEventListener('click', () => {
      const header = img.nextElementSibling.querySelector('.collapsible-header');
      toggleContent(header);
    });
  });
});
</script>

A collection of some select pieces

---

<div class="art-gallery">

  <div class="art-piece">
    <img 
      src="{{ '/assets/images/art/The_Weight_of_a_Lamb.jpg' | relative_url }}" 
      alt="The Weight of a Lamb" 
      width="300" 
    />
    <div class="collapsible-block">
      <div class="collapsible-header" onclick="toggleContent(this)">
        <span class="collapsible-arrow">›</span>
        <div>
          <span class="collapsible-title">The Weight of a Lamb</span>
          <span class="collapsible-subtitle">Acrylic on wood · 12x9 · 2025</span>
        </div>
      </div>
      <div class="collapsible-content">
        An elderly Tibetan woman protectively cradles a lamb. Her weathered features attest to a lifetime, while the lamb symbolizes the continuity of one. The weight of the lamb, though light, presses upon her the responsibility to nurture.
      </div>
    </div>
  </div>

  <div class="art-piece">
    <img 
      src="{{ '/assets/images/art/Oriental_Occidental.jpg' | relative_url }}" 
      alt="Oriental Occidental" 
      width="321" 
    />
    <div class="collapsible-block">
      <div class="collapsible-header" onclick="toggleContent(this)">
        <span class="collapsible-arrow">›</span>
        <div>
          <span class="collapsible-title">Oriental Occidental</span>
          <span class="collapsible-subtitle">Oil on canvas · 20x16 · 2024</span>
        </div>
      </div>
      <div class="collapsible-content">
        Semi-self portrait reflecting a dichotomy in my identity: my Chinese cultural heritage and my upbringing in the United States. Both influences coexist within me, and this piece is my exploration of cultural fragmentation and fusion.
      </div>
    </div>
  </div>

  <div class="art-piece">
    <img 
      src="{{ '/assets/images/art/Shrouded.jpg' | relative_url }}" 
      alt="Untitled Work" 
      width="300" 
    />
    <div class="collapsible-block">
      <div class="collapsible-header" onclick="toggleContent(this)">
        <span class="collapsible-arrow">›</span>
        <div>
          <span class="collapsible-title">Shrouded</span>
          <span class="collapsible-subtitle">Acrylic on canvas · Size · 2023</span>
        </div>
      </div>
      <div class="collapsible-content">
        A quick mixed-media experiment with intuitive movement and visual balance.
      </div>
    </div>
  </div>
    <div class="art-piece">
    <img 
      src="{{ '/assets/images/art/Daughter_of_Pearl.jpg' | relative_url }}" 
      alt="New Artwork" 
    />
    <div class="collapsible-block">
      <div class="collapsible-header" onclick="toggleContent(this)">
        <span class="collapsible-arrow">›</span>
        <div>
          <span class="collapsible-title">Daughter of Pearl</span>
          <span class="collapsible-subtitle">Ink on cardstock · Size · 2024</span>
        </div>
      </div>
      <div class="collapsible-content">
        Description of your new piece goes here.
      </div>
    </div>
  </div>
 <div class="art-piece">
    <img 
      src="{{ '/assets/images/art/Spoleto.jpg' | relative_url }}" 
      alt="New Artwork" 
    />
    <div class="collapsible-block">
      <div class="collapsible-header" onclick="toggleContent(this)">
        <span class="collapsible-arrow">›</span>
        <div>
          <span class="collapsible-title">Spoleto</span>
          <span class="collapsible-subtitle">Ink on illustration board· Size · 2024</span>
        </div>
      </div>
      <div class="collapsible-content">
        A plein-air illustration from the Italian countryside in Spoleto. 
      </div>
    </div>
  </div>
</div>


<script>
function toggleContent(header) {
  const arrow = header.querySelector('.collapsible-arrow');
  const content = header.nextElementSibling;
  arrow.classList.toggle('open');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
</script>
