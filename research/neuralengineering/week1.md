---
layout: neuralpage
title: Week 1
week: 1
permalink: /research/neuralengineering/week1/
nav_exclude: true
---

---
## Day 1 ∙ Jun 16 {#day-1}
---
### Introduction Into Microchannels

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week1/1.jpg' | relative_url }}" 
    alt="test sketch" 
    width="590" 
    style="border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

In my first conversation with Dr. In Hong Yang, he posed a query to me: if there was a wire suspended in a rectangular prism of water (or any aqueous solution as he clarified upon my further query) and we wanted to isolate dyes on either side so that they do not mix, how would I go about doing that? My response involved something like turning the prism onto its smallest face so that it stands vertically, securing the wire, and using different densities of solution to dye either side.

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week1/2.png' | relative_url }}" 
    alt="image" 
    width="200" 
    style="float: left; margin: 0rem 1rem 0.5rem 0rem; border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

He instead showed me this paper by Robert Campenot of the Department of Neurobiology at Harvard Medical School. In 1977, he pioneered the Campenot Chamber method. His device used Teflon‑separated compartments on a glass coverslip, with fine scratches to guide neurite growth across fluid‑impermeable barriers. Neurons in one compartment could receive treatments (e.g., nerve growth factor on distal axons) while the cell bodies remained protected in the other, famously demonstrated in the PNAS paper [*Local control of neurite development by nerve growth factor*](https://www.pnas.org/doi/epdf/10.1073/pnas.74.10.4516).

Dr. Yang further emphasized that this method was used for a lengthy 30 years. That is, until the early 2000s, when microfabrication offered a higher-precision upgrade. This new device uses SU‑8 photolithography and PDMS soft lithography. I don’t quite remember the exact example he showed me. Still, I am fairly certain it was this one: [*Dual-compartment neurofluidic system for electrophysiological measurements in physically segregated and functionally connected neuronal cell culture*](https://www.frontiersin.org/journals/neuroengineering/articles/10.3389/fneng.2011.00013/) by Kanagasabapathi et al., 2011. They used the method that we use in our lab, with the same geometry and cell‑seeding protocol.

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week1/3.png' | relative_url }}" 
    alt="image" 
    width="590" 
    style="border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

This schematic was from a paper by Dr. Yang's lab on [Mitochondrial trafficking as a protective mechanism against chemotherapy drug-induced peripheral neuropathy: Identifying the key site of action](https://www.sciencedirect.com/science/article/pii/S0024320523008548?fr=RR-2&ref=pdf_download&rr=95106b6a9e7ac01f#page=4.26).

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week1/4.png' | relative_url }}" 
    alt="image" 
    width="590" 
    style="border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

The complete process involves photolithography, soft lithography, and oxygen plasma bonding, as detailed in the "Materials and methods" section of their paper:

<p style="font-size: 0.9rem; font-style: italic; line-height: 1.6;">
  “The master mold used to create the microchannels for the compartmentalized device was produced using a photolithographic method. Standard silicon wafers were coated with SU-8 2002 and spun and soft baked according to the manufacturer's specifications, to result in a thickness of 2.5–3 micrometers of the resist. The microchannels with the following dimensions: width of 10 micrometers, length of 500 micrometers, and depth of 3 micrometers, were cured by UV light exposure using high resolution DPI transparency. The same process was repeated using SU-8 3050 to help outline the chambers with a width of 3 mm, and length of 13 mm. Sylgard 184 polydimethylsiloxane (PDMS) (Dow Chemical Company USA) was used to conduct standard soft lithography, where it was poured onto the master micro-mold developed in house followed by the removal of bubbles by a desiccator (SP Scienceware, USA) and was allowed to cure overnight at 80 °C. PDMS was removed from the master mold where two adjacent holes were punched using a 6 mm diameter biopsy punch (Robbins Instruments). The dual compartmentalized chambers were then bonded to a thin glass slide (Fisher Scientific) using the Plasma Etch PE-75 Plasma Asher oxygen plasma device. After oxygen plasma bonding, the chamber devices were sterilized by autoclave before cell seating. Once sterilized, microchannels were cleaned using 98% ethanol (Carolina Biological) and further diluted out using distilled water. Chambers were coated with Poly-D-Lysine (PDL) (Sigma-Aldrich) and Laminin (Corning) and left overnight at 4 °C. Chambers were then washed thoroughly using media to prepare for cell seating. Chambers were then placed into a sterilized primary cell incubator, Binder C-150 UL Incubator.”
</p>

---
## Day 2 ∙ Jun 17 {#day-2}
---
### Microfluidic Compartmentalized Culture Device Fabrication

On this day, I began my training on how to make this device. We started by making polydimethylsiloxane (PDMS), a silicone-based organic polymer with the important quality of being non-toxic and biocompatible. I found it very similar to my [molding and casting](https://fabacademy.org/2025/labs/charlotte/students/kathryn-wu/assignments/week15/) week for Fab Academy, and the knowledge I learned then was pretty applicable. [Khayzaran](https://www.linkedin.com/in/kqubbaj) led us through this process. For that, we required a silicone elastomer and a curing agent, Sylgard 184. We poured the two materials in a 10:1 ratio, respectively; specifically, 50g to 5g. When stirring, we were told to start gently, then become more aggressive, to the point where bubbles are created and visible. The technique to do it best involves lifting with the silicone mixing spatula to trap air with each stir. 

<div style="float: left; margin: 0rem 1rem 0.5rem 0rem;">
  <img 
    src="{{ '/assets/images/neuroengineering/week1/6.jpg' | relative_url }}" 
    alt="image 6" 
    width="100" 
    style="display: block; border: 1px solid #292d51; object-fit: cover; margin-bottom: 0.5rem;" 
  />
  <img 
    src="{{ '/assets/images/neuroengineering/week1/7.jpg' | relative_url }}" 
    alt="image 7" 
    width="100" 
    style="display: block; border: 1px solid #292d51; object-fit: cover; margin-bottom: 0.5rem;" 
  />
  <img 
    src="{{ '/assets/images/neuroengineering/week1/5.jpg' | relative_url }}" 
    alt="image 5" 
    width="100" 
    style="display: block; border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

<p>
  After around 5 minutes of stirring, we moved the tray into a desiccator. We alternated between decompressing and vacuuming to effectively eliminate all bubbles until it was a smooth, clear liquid. When the liquid stopped overfilling while decompressing, we just left it on vacuum until it was pretty much transparent.
</p>

<p>
  At that point, we poured it all onto the master, micropatterned mold containing the negative relief of the pattern we wanted to replicate. When pouring, we wanted to ensure minimal air bubbles were transferred. So, we moved it back into the vacuum chamber and repeated the process, for a shorter period this time, as there were fewer bubbles. The very small bubbles could just be blown out.
</p>

<p>
  Below is a diagram on how the valve of the vacuum chamber should be controlled. When the valve is parallel to the side of the chamber, it is decompressing (should seem like the mixture is very slowly rising and eventually overfilling) and when it is perpendicular, it is vacuuming (the one that gets rid of bubbles).
</p>

<p>
  Baking is necessary for cross-linking, which creates the elastomer, so this was placed in an oven at 75°C for 5-ish hours. After 4 hours, we checked on it. Khayzaran could still smell a glue-y smell (I couldn’t), which means it was not ready yet.
</p>

In the afternoon, we had a discussion on one of the papers we were supposed to read. My notes, comments, and questions are in this document: [Mitochondrial Trafficking as a Protective Mechanism against Chemotherapy Drug-Induced Peripheral Neuropathy.](https://docs.google.com/document/d/1sYdFhHPQYJex4_aRhPhdCMdCwfI4s8BPpJpVCyb21xg/edit?tab=t.0)

But I'll also embed them here for fun:

Abstract:
- Investigating the site-specific actions of chemotherapy drugs and the neuroprotective effect of Fluocinolone Acetonide (FA) against CIPN (chemo induced peripheral neuropathy)
- Methodology of mitochondrial trafficking analysis
- Axons as the primary site of action for PTX, Monomethyl auristatin E (MMAE), and Vincristine (VCR)
- Cell body is the primary site of action for Cisplatin (CDDP)
- FA found to be neuroprotective against all tested chemo drugs

Introduction:
- CIPN has negative effects for patients undergoing chemo, affecting the peripheral nervous system and causing pain 
- Current pain management drugs for CIPN are limited and have side effects
    - Cisplatin (CDDP), Monomethyl auristatin E (MMAE), Vincristine (VCR), Paclitaxel (PTX)
- Hypothesis is that distal axons are more susceptible to degradation for microtubule-targeting drugs (PTX, MMAE, VCR) while cell bodies are more susceptible to DNA-targeting drugs (CDDP)
- Goal of the study is to understand the site-specific action of each drug, the neuroprotective potential of FA, and its role in mitochondrial enhancement

Materials and Methods:
- Fabrication process of the compartmentalized microfluidic chamber system
    - Photolithography, soft lithography, and oxygen plasma bonding
- Isolation and culture of dorsal root ganglion (DRG) neurons from E-15 Sprague Dawley rats
- Evaluation of FA interference on chemotherapeutic activity using human SKOV-3 ovarian cancer cells and Hoechst 33342 staining for cell viability assessment
- Preparation of stock solutions for each anticancer drug, solvents and storage specifics

Results:
- Dosage response of sensory DRG neurons to each chemo drug, axon length reduction as an indicator of peripheral neuropathy
- Optimal concentrations used for subsequent analysis: CDDP 10μM, MMAE 1μM, VCR 5μM, and 5μM PTX 
- FA is neuroprotective, showing a significant increase in axon length for all drugs when FA is co-administered
- FA does not significantly inhibit the anticancer activity of the drugs, using SKOV-3 human ovarian cancer cell viability as a measure
- Shows the site-specific actions of each drug using a compartmentalized microfluidic platform, revealing axonal susceptibility for VCR, PTX, and MMAE, while CDDP shows greater cell body susceptibility
- FA’s neuroprotective mechanism involves enhanced mitochondrial trafficking
- Increase in mitochondrial number along the axons when FA is co-administered, FA promotes anterograde mitochondrial trafficking as a neuroprotective mechanism, as azonal treated samples of chemo drugs led to a significant decrease in mitochondrial population
    - The mitochondrial population dropped by ~45–93% with drug treatment
    - FA restored mitochondrial numbers, especially in CDDP-treated axons (~83% increase)

Discussion:
- Unexpected axonal degeneration was observed with CDDP despite its primary action on DNA replication in the cell body
- FA may involve enhancing mitochondrial transport and recruitment to the site of injury, potentially by suppressing membrane permeability and protecting mitochondrial DNA from damage
- Limitations of time lapse imaging for characterizing mitochondrial motility and suggests further research is needed to fully understand the effects of chemo drugs and FA on mitochondrial trafficking
- Key findings of the study: axons are more susceptible to microtubule-targeting drugs, while cell bodies are more susceptible to DNA-targeting drugs

Conclusions
- These findings are significant for developing potential therapeutic strategies against CIPN, and there is potential for co-administration of chemo drugs with FA to mitigate the risk of CIPN
- Future research directions include in vivo characterization of mitochondrial trafficking enhancement by FA and investigation of the underlying molecular mechanisms and signaling pathways involved

Q’s
- If FA's neuroprotective effect stems partly from mitochondrial DNA preservation, do you think it could even be paired with agents that also enhance mitochondrial repair to further boost protection?
Could FA also help with other nerve damage disorders that aren’t caused by chemo?
- In the study, it was found that FA did not interfere with the anti-cancer efficacy of the drugs in vitro. Generally, is that something that would be reflected in vivo or is it liable to change?
    - Along these lines, how might FA-enhanced mitochondrial trafficking work in a living organism (in vivo), where many other biological factors are involved?
- Do we yet know why chemotherapy drugs that target microtubules mainly affect axons, while ones like cisplatin that target DNA affect the cell body more? 
    - Something about how CDDP has different targeting mechanism
- Do you think it would be beneficial to not just image at 0h and 24h and cover the hours in between, or would it just result in the same findings?

[Phytic Acid](https://www.scopus.com/record/display.uri?eid=2-s2.0-85187176004&origin=inward&txGid=7291cb8122d3c05d6d8741b61256515b)
- The PA study similarly finds a neuroprotective effect linked to antioxidant properties, reduction of mitochondrial ROS, and restoration of mitochondrial membrane potential (MMP)—all mitochondrial-related mechanisms
aligns with the mitochondrial preservation and trafficking mechanisms proposed for FA, indicating that mitochondrial protection is a key therapeutic target in CIPN
- Since PA also shows synergistic anticancer effects with cisplatin, it might be another candidate for combination therapies with FA or similar agents?
- Or even ESTIM as well?

Khayzaran gave an overview and here are some things she mentioned that I found to be impactful:

- We don't know the correlation between FA and mitochondria, or even if the correlation is direct
- It's like a car crash. We know it happened. One car’s front is damaged, another’s back is. But we don't know what hit what?
- Did FA take different highways for each drug?

---
## Day 3 ∙ Jun 18 {#day-3}
---
### Chamber Punching

We ended up leaving it overnight until the next day. After we took it out, we removed it from the plastic boat with a blade, careful not to damage the wafer. The wafer was stored face down. Using a biopsy punch, one side was flattened using punch shaping pliers, kind of like a stepper motor. We used it, lined up with the squares above the microchannels, to create chambers where the two ends of the neuron would be accessible.

<div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
  <div style="flex-shrink: 0;">
    <img 
      src="{{ '/assets/images/neuroengineering/week1/8.jpg' | relative_url }}" 
      alt="image 8" 
      height="200" 
      style="border: 1px solid #292d51; object-fit: cover;" 
    />
  </div>

  <div style="flex-shrink: 0;">
    <img 
      src="{{ '/assets/images/neuroengineering/week1/9.jpg' | relative_url }}" 
      alt="image 9" 
      height="200"  
      style="border: 1px solid #292d51; object-fit: cover;" 
    />
  </div>

  <div style="flex-shrink: 0;">
    <img 
      src="{{ '/assets/images/neuroengineering/week1/10.jpg' | relative_url }}" 
      alt="image 10" 
      height="200"  
      style="border: 1px solid #292d51; object-fit: cover;" 
    />
  </div>
</div>

At home, I took [notes](https://docs.google.com/document/d/1Sw9Zz--_HRq0oIPvdEJ5EsF6MwVBZsw5PBZdxesqsBw/edit?tab=t.0#heading=h.9xf0w8muzz4n) on the [Electrical stimulation enhances mitochondrial trafficking as a neuroprotective mechanism against chemotherapy-induced peripheral neuropathy](https://www.cell.com/action/showPdf?pii=S2589-0042%2824%2900273-6#page=11.61) paper.

These were my questions:
1. Did you notice any differences in how fast or how long the mitochondrial trafficking response lasted after ESTIM stopped, or was it only measured during the stimulation window?
2. Since 100 Hz showed the strongest mitochondrial trafficking, do you think there could be an even more optimal frequency between 10 and 100 Hz that wasn’t tested?
    - Could it be worth looking into? Or do you think we would just see the same effects?
3. I know last time you mentioned something about branching out to other organelles. And in the paper lysosome trafficking was also studied. Do you think ESTIM might affect other organelles involved in axonal health in a similar way to mitochondria?

---
## Day 4 ∙ Jun 19 {#day-4}
---
### Dyeing and Imaging the Mitochondria

[Prashant](https://www.linkedin.com/in/prashant-adhikari-048a31146) guided us on a process of dying some samples and imaging them. For the dye, we use a fluorescent dye to isolate the mitochondria and study their movement. This was done by using wavelengths to visualize it. We used a green dye. He then posed a question for us on dilution: 

**Q1.** If we start with a 1milimolar solution and want a 5 milliliter 200 nanomolar solution, what is the volume added to the original concentration (in microliters)? 

This is my solution: 

1 millimolar (1 mM = 1000 µM)	200 nanomolar (200 nM = 0.2 µM) 

Use the C1V1 = C2V2 formula. 
- C1​= 1000 µM (stock)
- V1= ? (volume needed)
- C2= 0.02 µM
- V2= 5 mL

(1000 µM)⋅V1=(0.2 µM)⋅(5 mL) ⇒ V1= (0.2⋅5)/1000 = 0.001mL = **1µL**

I’m really glad I took chemistry last year because it wasn’t as challenging a question as I would I have thought it to be had I not. 

To add the dye, he removed around 50% of the contents of the chamber and used a micropipette. We then wrapped the tray in aluminum foil for it to stay dark because it was a fluorescent dye after all. We placed it in the incubator for 45 minutes. We did all this under a biosafety cabinet.

During that waiting period, Prashant gave us some work to do. Namely, the three questions that have been listed before and following. 

**Q2.** The incubator maintains the same temperature and CO2 levels for the samples to culture in. Constant CO2 levels ensure pH maintenance. But importantly, that level mimics the conditions found within the human body. In our case, we have it at 7, which is neutral. We reviewed that the lesser is acidic and the greater is basic. A normal pH of human blood is from 7.35 to 7.45. Temperature maintenance is important for microbial growth. 

**Q3.** Molecular weight/molar mass calculation problems

Carbon Dioxide: CO2

- C=12.011 g/mol
- O=16.00 g/mol x 2
- Sum:  **44.01 g/mol**

Ethanol: C2H5OH
- C=12.011 g/mol x 2 = 24.022 g/mol
- H=1.008 g/mol x 6 = 6.048 g/mol
- O=16.00 g/mol
- Sum: 46.088 g/mol ⇒ **46.09 g/mol** considering sig figs

Glucose: C6H12O6
- C=12.011 g/mol x 6 = 72.066 g/mol
- H=1.008 g/mol x 12 = 12.096 g/mol  (12.10 as 4 sig figs)
- O=16.00 g/mol x 6 = 96.00 g/mol
- Sum: 180.156 g/mol ⇒ **180.16 g/mol** considering significant figures

When the 45 minutes had elapsed, we took the tray out of the incubator. Because the dye is actually harmful to the neurons, we had to remove it using a wash buffer. We replaced 60% of total volume from each well. 

We then took this to a confocal microscope ([Leica Stellaris (probably FALCON](https://dmimedicalusa.com/product/leica-stellaris-confocal/)), which costs UNCC 750k at a discounted price) that uses lasers. Prashant explained that it was the latest technology and so had less noise and imaged better. 

In fluorescence microscopy, a green dye emits green light. But it needs to be excited by a shorter wavelength, which is usually blue light. You shine a blue light onto the sample to excite the green dye. The dye emits green light, allowing you to image the emitted green light. 

We started at 10x magnification. At this level, I could vaguely make out lines that made a pattern kind of like a random, scattered chain link fence. More like leaf venation, but maybe because it was green. Prashant also added a liquid to help focus. He said that in some physics class in the future, we would learn about the refractive index and more optics things. 

On the Leica Stellaris software, he pulled up an image on the screen. We could see some little blue dots, so he reduced gain to decrease those spots. He then took 20 stacks of images from the g-plane that would be compiled for a 3D view. The green dots are the mitochondria inside axons. The long strands we were seeing were the axon.

To analyze movement, he set it to timelapse, taking an image every 30 seconds to create a video. 

---
## Day 5 ∙ Jun 20 {#day-5}
---
### Background Information Research

For our edification, Khayzaran had me and Athul make a background research slideshow on [Myelination, Schwann Cells, and Oligodendrocytes](https://docs.google.com/presentation/d/1n-HjpVQWNAxbBpmQB3J7oJVXPQWMpH9SFkYZr2kWHlo/edit?slide=id.g33d2aa3c12d_1_29#slide=id.g33d2aa3c12d_1_29); what they are, why they're important, and what disease models are used.

Basic overview:

Myelination
- The process by which glial cells form a fatty, insulating layer called the myelin sheath around neuronal axons
- Important for: 
    - increasing the speed of nerve impulse conduction (via saltatory conduction) 
    - conserving energy by localizing action potentials to the nodes of Ranvier
    - supporting neural development and function
- Disease models:
    - Experimental Autoimmune Encephalomyelitis (EAE) models inject myelin proteins, triggering an autoimmune attack to mimic demyelination
    - Cuprizone-Induced Demyelination involves feeding mice a copper chelator called cuprizone, which causes the death of oligodendrocytes
    - The Shiverer mouse involves a deletion in the myelin basic protein gene, leading to a lack of myelin in the CNS
    - Human Brain Organoids grown in vitro and organize into structures that mimic the developing human brain
    - Zebrafish (Danio rerio) vertebrates with rapidly developing nervous system similar to to mammals in early neural development

Oligodendrocytes
- A type of glial cell responsible for producing myelin in the central nervous system (CNS, brain and spine)
- Important for:
    - supporting axons by releasing substances that promote neuronal health

Schwann Cells
- A type of glial cell responsible for myelination in the peripheral nervous system (PNS, extremeties and elsewhere)
- Important for:
    - supporting and insulating nerve cells, particularly the axons 
    - nerve development, maintenance, function and regeneration

---
## Extra Material

Some interesting figures from [Compartmentalized Microfluidic Platforms: The Unrivaled Breakthrough of In Vitro Tools for Neurobiological Research.](https://pmc.ncbi.nlm.nih.gov/articles/PMC6705634/)

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week1/11.png' | relative_url }}" 
    alt="test sketch" 
    width="590" 
    style="border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week1/12.png' | relative_url }}" 
    alt="test sketch" 
    width="590" 
    style="border: 1px solid #292d51; object-fit: cover;" 
  />
</div>
