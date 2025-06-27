---
layout: page
title: Writing
permalink: /writing/
body_class: center-text
nav_main: true
---

<style>

.section-divider {
  border: none;
  border-top: 1.2px solid #ccc; /* adjust thickness and color */
  margin: 1rem auto;
  width: 100%; /* or 100% if preferred */
}
.collapsible-block {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.collapsible-header {
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #3e4261;
  font-family: serif;
  transition: color 0.2s ease;
}

.collapsible-header:hover {
  color: #0d0f1c;
}

.collapsible-arrow {
  display: inline-block;
  transition: transform 0.2s ease;
  font-family: serif;
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
  margin-left: 0.4rem;
  color: #292d51;
}

.collapsible-content {
  display: none;
  margin-top: 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
}

.collapsible-content a {
  color: #5e67ba;
  text-decoration: none;
  font-weight: 500;
  font-family: serif;
}

.collapsible-content a:hover {
  color: #1d203f;
}

/* Add this to your existing <style> section in writing.md */

/* Mobile responsive styles for writing page */
@media screen and (max-width: 767px) {
  
  /* Make collapsible headers more mobile-friendly */
  
.collapsible-block {
  margin-top: 0.5rem !important;
  margin-bottom: 1rem !important;
  text-align: center;
}
.collapsible-header {
    font-size: 1rem;
    padding: 0.75rem 0.5rem; /* Add touch-friendly padding */
    line-height: 1.3;
    text-align: center;
    flex-direction: row; /* Stack arrow and title vertically if needed */
    gap: 0.25rem;
  }

  /* Handle long titles better on mobile */
  .collapsible-title {
    word-wrap: break-word;
    hyphens: auto;
    max-width: 100%;
    line-height: 1.4;
    margin-top: 0rem;
  }

  /* Make subtitles more readable on mobile */
  .collapsible-subtitle {
    font-size: 0.9rem;
    margin-left: 0;
    margin-top: 0.25rem;
    display: block; /* Put subtitle on new line */
    max-width: 100%;
    word-wrap: break-word;
  }

  /* Improve content spacing on mobile */
  .collapsible-content {
    padding: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: center; /* Left-align content for better readability */
    margin-top: -0.75rem;
  }

  /* Make links more touch-friendly */
  .collapsible-content a {
    display: inline-block;
    padding: 0.25rem 0;
    line-height: 1.4;
    word-wrap: break-word;
  }

  /* Ensure blocks don't overlap */
  .collapsible-block {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }

  /* Make the arrow more touch-friendly */
  .collapsible-arrow {
    font-size: 1.1rem;
    padding: 0.25rem;
  }

  /* Improve paragraph spacing on mobile */
  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    padding: 0 0rem;
  }

  /* Handle the horizontal rule better on mobile */
  hr {
    margin: 2rem 0;
    border: none;
    border-top: 1px solid #e0e0e0;
  }

}
</style>

<p>Essays, poems, and whatever else is on my mind</p>

<hr class="section-divider" />

<div class="collapsible-block">
  <div class="collapsible-header" onclick="toggleContent(this)">
    <span class="collapsible-arrow">›</span>
    <span class="collapsible-title">A Little Saltwater Disquiet •<span class="collapsible-subtitle">a collection of poems on saltwater forms, childhood musings, and filial disquiet</span></span>
  </div>
  <div class="collapsible-content">
    <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/greatest-hits/greatest-hits-poetry?authuser=0" target="_blank">View collection</a>
  </div>
</div>

<div class="collapsible-block">
  <div class="collapsible-header" onclick="toggleContent(this)">
    <span class="collapsible-arrow">›</span>
    <span class="collapsible-title">Sophomore Year Final Writing Portfolio •<span class="collapsible-subtitle">essays, advice, and reflections from a year of writing in English 10</span></span>
  </div>
  <div class="collapsible-content">
    essay • <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/2025-works/much-ado-about-nothing" target="_blank">Draped in Desire: Branagh's Visual Battle of the Sexes in <em>Much Ado About Nothing</em></a><br />
    essay • <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/2025-works/fahrenheit-451-essay" target="_blank">Duality, Reality, Morality: The Use of Dual Natures to Provide Meaning</a><br />
    essay • <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/2025-works/argumentative-research-essay" target="_blank">The Futility of Hedonism: Two Thousand Years of Pleasure Seeking</a><br />
    <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/home" target="_blank">View full collection</a>
  </div>
</div>

<div class="collapsible-block">
  <div class="collapsible-header" onclick="toggleContent(this)">
    <span class="collapsible-arrow">›</span>
    <span class="collapsible-title">2025 Scholastic Writing •<span class="collapsible-subtitle">two critical essays, one short story, one poem recognized in the '25 competition cycle</span></span>
  </div>
  <div class="collapsible-content">
    critical essay • <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/2025-works/short-story" target="_blank">The Tragic Mother: Cathartic Symbols in "The American Embassy"</a><br />
    critical essay • <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/greatest-hits/scholastics#h.yy4226dnkpbd" target="_blank"><em>To Poiein or To Pathein</em>: Passivity In-Action in <em>The Kite Runner</em></a><br />
    short story • excerpts • <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/greatest-hits/scholastics#h.reuo9zz4uhze" target="_blank">Dead Air in the Last Dark Age</a><br />
    poem • <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/greatest-hits/scholastics#h.uw4ezqgtua2p" target="_blank">Santa Maria Sopra Minerva</a><br />
    <a href="https://sites.google.com/charlottelatin.org/kathrynwufinalportfolio/greatest-hits/scholastics" target="_blank">View full collection</a>
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
