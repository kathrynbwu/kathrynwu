---
layout: page
title: Art
permalink: /art/
nav_main: true
body_class: center-text
---
<style>
/* Grid layout for image blocks */
.art-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* force 3 per row */
  gap: 24px;
  justify-items: center;
}


/* Container for each art piece */
.art-piece {
  text-align: center;
  max-width: 320px;
}

/* Collapsible styling */
.collapsible-block {
  margin-top: 0.75rem;
}

.collapsible-header {
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: #3e4261;
  font-family: serif;
  transition: color 0.2s ease;
  text-align: center;
}

.collapsible-header:hover {
  color: #0d0f1c;
}

.collapsible-arrow {
  display: inline-block;
  transition: transform 0.2s ease;
  font-family: serif;
  margin-top: 0.1rem;
}

.collapsible-arrow.open {
  transform: rotate(90deg);
}

.collapsible-title {
  display: inline;
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

/* Content that expands */
.collapsible-content {
  display: none;
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 0 1rem;
  text-align: center;
}

/* Responsive tweaks */
@media screen and (max-width: 767px) {
  .collapsible-header {
    font-size: 0.95rem;
    flex-direction: column;
    gap: 0.3rem;
  }

  .collapsible-content {
    font-size: 0.9rem;
  }
}
</style>

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
          <span class="collapsible-subtitle">Acrylic 12x9 2025</span>
        </div>
      </div>
      <div class="collapsible-content">
        Graphite and digital composite. Inspired by sacrificial motifs in religious iconography and themes of quiet endurance.
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
          <span class="collapsible-subtitle">Oil 2024</span>
        </div>
      </div>
      <div class="collapsible-content">
       Acrylic paint about cultural dissenfnfnfnfnfnnfnfnfnnf integration fjhfjf 
      </div>
    </div>
  </div>

  <div class="art-piece">
    <img 
      src="{{ '/assets/images/art/1.png' | relative_url }}" 
      alt="Untitled Work" 
      width="300" 
    />
    <div class="collapsible-block">
      <div class="collapsible-header" onclick="toggleContent(this)">
        <span class="collapsible-arrow">›</span>
        <div>
          <span class="collapsible-title">Untitled Work</span>
          <span class="collapsible-subtitle">experiments in form, negative space, and spontaneous linework</span>
        </div>
      </div>
      <div class="collapsible-content">
        A quick mixed-media experiment with intuitive movement and visual balance.
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
