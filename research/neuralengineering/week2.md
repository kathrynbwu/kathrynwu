---
layout: neuralpage
title: Week 2
week_order: 2
permalink: /research/neuralengineering/week2/
nav_exclude: true
---
---
## Day 1 ∙ Jun 23 {#day-1}
---
### Plasma Bonding of PDMS to Glass Slides

Cleaning and Prep Work

To ensure effective plasma bonding, we first cleaned both the PDMS and thin glass substrates using ethanol soaks and tape. Three Petri dishes were prepared: two for ethanol soaking and one for general cleaning. Glass slides were handled with tweezers, gripping only the edges to avoid contaminating the bonding surfaces. Slides were soaked in the first ethanol dish for 5 minutes. Following the first soak, slides were rinsed with deionized water at an angle (∠45°) to minimize mechanical stress. They were then transferred to the second ethanol dish for a 30-minute secondary soak. PDMS slabs were cleaned using adhesive tape to remove surface particles and ensure clean bonding areas.

Plasma Treatment Procedure

1. Chamber Setup
    - The PDMS (microchannel side up) and glass slide were placed in a clean Petri dish and inserted into the plasma cleaner
    - Chamber pressure was adjusted to ~15 psi

2. Machine workflow
    - Press the “return” button 3–4 times until the machine emits an operational sound
    - Create a vacuum by pressing the central valve on the front panel. Release once the pressure reading begins to decrease
    - When the reading drops to 200 mTorr, adjust the control knob until the plasma intensity indicator ("black blob") falls within the 20–30 range
    - Maintain plasma exposure for ~2 minutes and 50 seconds
3. Bonding
    - A 28-second countdown will initiate. At 24 seconds, open the chamber and promptly remove the Petri dish
    - Immediately align and place the activated PDMS (microchannel side down) onto the glass slide
    - Transfer the assembly to a hotplate for thermal bonding, applying gentle pressure to the corners to promote uniform adhesion. Heat for approximately 3 minutes
4. Adhesion Check
    - After bonding, verify adhesion by gently peeling at the PDMS corners. If there is no lifting, bonding is successful

Sterilization Procedure

We place the bonded PDMS-glass device into a sterile plastic bag and seal it. Anything that goes into the fume hood must be ethanol-sprayed, so we sprayed all external surfaces of the bag with a 70% ethanol / 30% distilled water solution. That bag was transfer to a fume hood with UV sterilization. Expose to UV light for 24–48 hours, we left it there for around 24 hours. 

---
## Day 2 ∙ Jun 24 {#day-2}
---
I reviewed my notes on the [ESTIM paper](https://www.cell.com/action/showPdf?pii=S2589-0042%2824%2900273-6#page=11.61).

Summary
- Describes the neuroprotective effects of ESTIM on CIPN
- ESTIM enhances mitochondrial trafficking, potentially contributing to neuroprotection
    - Increased trafficking helps maintain ATP supply and cellular energy homeostasis
    - Enhanced trafficking was observed, especially with low-frequency ESTIM
- Compared effects of ESTIM against CIPN induced by PTX (paclitaxel) and L-OHP (oxaliplatin)
    - Despite differing mechanisms of action, both drugs' induced neurodegeneration was mitigated by ESTIM

Introduction
- History and current applications of ESTIM in treating peripheral nerve damage and pain
    - Used since 1967; now applied in physical therapy, spinal cord injuries, neuropathy, and neuroprosthetics
- Limitations in understanding the mechanisms behind ESTIM-mediated peripheral nerve regeneration
- Importance of mitochondrial trafficking in neuronal health and its potential relevance to CIPN
    - Mitochondria support high-energy-demanding areas like growth cones and synapses
    - Their dynamic movement ensures energy availability at critical sites
- The selection of PTX and L-OHP for the study was based on their different targeting mechanisms and prevalence in CIPN
    - PTX disrupts microtubule function → directly affects axonal transport
    - L-OHP binds DNA → causes mitochondrial dysfunction via oxidative stress and DNA damage

Results
- Experimental setup
    - DRGs isolated from E-15 rat embryos; cultured in compartmentalized chambers
    - Biphasic square pulse (0.2 ms) applied every 2s for 1h/day at various frequencies
- Low-frequency ESTIM enhances axon growth while high-frequency ESTIM inhibits it
    - 10 Hz: 9.71% increase
    - 100 Hz: 12.28% increase (most effective)
    - 1 kHz: 0.07% increase
    - 100 kHz & 1 MHz: ~24–49% decrease
- Effect of ESTIM frequencies on mitochondrial trafficking
    - Measured using MitoView Green dye
    - Low frequencies significantly increased mitochondrial count:
        - 10 Hz: ↑62.79%
        - 100 Hz: ↑62.59%
        - 1 kHz: ↑15.96%
    - High frequencies significantly reduced mitochondrial count:
        - 100 kHz: ↓38.90%
        -  1 MHz: ↓74.28%
    - These trends mirrored axonal growth
- Neuroprotective effect of global ESTIM against CIPN
    - PTX and L-OHP (5 µM) caused ~65–68% axonal degradation
    - ESTIM reduced degradation significantly:
        - PTX: 10 Hz (15.55%), 100 Hz (38.57%), 1 kHz (39.75%)
        - L-OHP: 10 Hz (48.12%), 100 Hz (53.74%), 1 kHz (54.95%)
    - Neuroprotection was consistent across both drugs despite different mechanisms
- Effectiveness of focal ESTIM as a neuroprotective strategy
    - Focal ESTIM targeted axons directly (electrodes in axonal compartment)
    - Comparable results to global stimulation:
        - PTX degradation reduced from 78.69% to:
            - 10 Hz (39.65%), 100 Hz (27.38%), 1 kHz (34.78%)
        - L-OHP degradation reduced from 51.66% to:
            - 10 Hz (42.58%), 100 Hz (33.25%), 1 kHz (30.48%)
    - Focal ESTIM offers more clinically viable targeted therapy
-  Increased displacement in mitochondrial motility during ESTIM
    - Mitochondrial velocity improved:
        - Control: 3.76 µm → 5.96 µm with 100 Hz ESTIM
        - PTX: 2.53 µm → 4.43 µm
        - L-OHP: 2.31 µm → 4.95 µm
    - Indicates improved anterograde movement and energy delivery capacity
- In the chart, it shows neurons increasing and decreasing 

Discussion
- Discusses the findings of the study, emphasizing ESTIM’s neuroprotective potential
- The role of BDNF (brain-derived neurotrophic factor) is speculated
    - ESTIM may upregulate BDNF via increased Ca²⁺ signaling
    - BDNF might regulate mitochondrial trafficking via protein kinase A pathways
- Consistent neuroprotective effect against both PTX and L-OHP
    - Despite PTX targeting axonal transport and L-OHP targeting DNA, ESTIM helped both
- Strong correlation between axon length increase and mitochondrial trafficking
    - Suggests trafficking might be a primary mechanism of regeneration
- Supplementary finding: ESTIM also enhanced lysosomal trafficking
    - Supports broader effect on axonal subcellular transport

Limitations
- Mitochondrial dye diffusion could affect accuracy
- Manual measurement of mitochondrial movement was error-prone
- Difficulty in pinpointing exact signaling pathways for ESTIM-mediated mitochondrial enhancement
- Study limited to in vitro DRG models—clinical translation requires more research

---
## Day 3 ∙ Jun 25 {#day-3}
---
### Coating Day: Cleaning Cycles and Prepping

General Lab Practices and Microfluidic Device Handling

- Sterility: all materials entering the biosafety cabinet must be sprayed with 70% ethanol to maintain sterility
- Always avoid introducing air bubbles into the microchambers
- Retain approximately 10% of the fluid in the chamber to prevent air bubbles from forming at the bottom
- Minimize contact between the pipette tip and surfaces (e.g., chamber walls, petri dish) to avoid contamination or surface damage
- Use aliquots: liquids should be transferred into smaller, secondary containers instead of pipetting directly from stock solutions to prevent cross-contamination
- Label all materials clearly with name and date

Now onto the technical use side for the pipette. For the cleaning protocol, we use a 1 mL (blue cap) micropipette set to 1000 µL. For cell seeding, we will switch to a 200 µL (yellow cap) micropipette for greater precision. To attach a pipette tip, you press the pipette firmly into a sterile tip box until it clicks into place. You aspirate by pressing the plunger to the first stop, submerging the tip in liquid, and slowly releasing the plunger. You dispense by pressing to the second stop to expel all liquid. Use the ejector button, a grey lever in my case, to discard the tip after each different reagent. Never reuse tips between solutions!!

This microchamber cleaning and priming process is designed to remove debris and residual monomers and to condition the chamber surfaces for optimal cell adherence and survival.

Cleaning Reagents (in order and number of use):

1. 70% Ethanol x 1 cycle
2. Sterile deionized water (distilled water or dw on labels) x 3 cycles
3. PBS (Phosphate-buffered saline) x 3 cycles
4. PBL (protein-based loading buffer or surface treatment agent) x 1 cycle

Workflow:

1. Ethanol Wash
    - Attach a sterile 1000 µL tip to the 1 mL pipette
    - Fill one side of the microchamber ~90% full with ethanol
    - Allow ~10 seconds for capillary flow to transport fluid through the microchannels
    - Fill the opposite side ~90% as well
        - Avoid overfilling, as seen by a convex meniscus
    - Remove ethanol using the same tip, leaving ~10% residual volume to prevent introducing air
    - Discard the ethanol in a designated biohazard waste container
    - Eject the tip

2. Water Wash (Repeat x3)
    - For each wash,
        - Use a new sterile pipette tip
        - Repeat the same filling and extraction process
        - Discard used tips after each wash
3. PBS Wash (Repeat x3)
- Follow the same process as above, ensuring sterile conditions and new tips for each PBS cycle
4. PBL Application
- Using a new sterile tip, fill each side of the chamber about halfway with PBL
- This will be stored overnight to allow protein adsorption at the bottom surface
- After adding PBL, seal the petri dish with parafilm or wrap in aluminum foil to protect from light exposure
- Store in the freezer (depending on lab protocol) overnight

---
## Day 4 ∙ Jun 26 {#day-4}
---
### Coating Day 2: With Media

This was the second day of the surface coating process. The protocol for today followed a sequence of one distilled water water wash, one PBS (phosphate-buffered saline) wash, one wash with experimental media, and finally the addition of complete media. The complete media is compositionally similar to the experimental media but includes additional supplements necessary for optimal cell growth and viability. 

Both types of media were pre-warmed in a 37°C water bath to match physiological temperature. To prevent water contamination during incubation, the flasks were sealed using stretch-to-fit plastic film (Saran Wrap) carefully secured around the opening and along the sides of the cap to form a tight seal. 

The pipetting method was consistent with the approach used on day one, ensuring minimal bubble formation and consistent fluid handling. At the conclusion of the protocol, each chamber was filled to approximately 90% capacity with complete media, avoiding overfilling that could lead to surface tension doming. 

Once filled, the devices were transferred to a humidified incubator set to 37°C, where they will remain until cell seeding. After seeding, the media will need to be replenished every 3 to 5 days to compensate for evaporation and maintain a stable culture environment.

---
## Day 5 ∙ Jun 27 {#day-5}
---
### Dissection Day

Today was the day to dissect E-15 (embryonic day 15 or 15 days after fertilization) Sprague-Dawley rats.

Sprague-Dawley rats have a gestation period of approximately 21–23 days and typically carry up to 12 embryos per pregnancy. In our case, the rat was 14 days pregnant and carried 10 embryos. At this stage, organogenesis is just beginning. By embryonic day 16 (E16), organ development becomes much more advanced, making E14.5-E15 an ideal window for isolating developing neural structures before they become too muscular or structurally complex.

Ours ended up a little muscular, which poses challenges during dissection, as excessive musculature increases the presence of surrounding glial cells during extraction. Granted, it provides a more human-like environment that can be advantageous for cell growth, it also introduces complications. During our discussion, Prashant asked us to consider a defining feature of neurons; specifically, what they don’t do that other cells typically do. I initially guessed it might relate to regeneration, and after further prompting, clarified that perhaps neurons do not regenerate in the same way as many other cell types. This was avtually correct, but the more precise term is proliferation. Unlike most somatic cells, neurons do not undergo mitotic division once differentiated.

This led to a brief, tangential discussion on how other tissues, like bone, are capable of regeneration. Fractures can heal because bone cells proliferate. In contrast, neurons require continuous stimulation (exercise, playing an instrument, reading) to maintain their function and viability. We are born with approximately 3 billion neurons, which later integrate and form complex networks. Since then, it's a race to retain as many of them as we can. 

Dissection Workflow:

(reference video: [DRG Dissection from an E15 rat embryo](https://www.youtube.com/watch?v=nIAyczCZBYc&ab_channel=SimonMoore))

1. Begin by making an abdominal incision in the pregnant rat to access the uterine horns. Carefully extract the embryonic sacs (a pregnant rat of this type is valued at approximately $250)
2. Puncture the amniotic sac and remove the embryo. Internal structures may appear reddish and organ-like
<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week2/2.png' | relative_url }}" 
    alt="image" 
    width="590" 
    style="border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

<div style="text-align: center;">
  <a href="https://www.researchgate.net/figure/Representative-images-of-the-dorsal-rot-ganglia-DRG-neurons-dissection-steps-a-E15_fig1_326595614">
    <em>a. E15 rat embryo after extraction from amneotic sac and before dissection</em>
  </a>
</div>
3. Behead the embryo to allow for easier access to the spinal column
4. Perform a longitudinal cut to "butterfly" the embryo and expose the spinal cord
<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week2/3.png' | relative_url }}" 
    alt="image" 
    width="590" 
    style="border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

<div style="text-align: center;">
  <a href="https://www.researchgate.net/figure/Representative-images-of-the-dorsal-rot-ganglia-DRG-neurons-dissection-steps-a-E15_fig1_326595614">
    <em>b. E15 rat embryo butterflied and prepared for spinal cord dissection</em>
  </a>
</div>
5. Dissect around the tissue to remove the spinal cord in a single, continuous segment
6. Carefully remove excess adipose tissue surrounding the spinal cord
7. Dorsal root ganglia (DRGs) are small clusters of sensory neurons located bilaterally along the spinal cord. Khayzaran described them as leaf-like in appearance; to me, they resembled tiny fruits

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week2/1.png' | relative_url }}" 
    alt="image" 
    width="590" 
    style="border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

<div style="text-align: center;">
  <a href="https://www.researchgate.net/figure/Representative-images-of-the-dorsal-rot-ganglia-DRG-neurons-dissection-steps-a-E15_fig1_326595614"> 
    <em>c. DRG attached to the spinal cord; d. arrows highlight isolated DRG</em>
  </a>
</div>

8. Rats have approximately 30–32 pairs of DRGs. We aim to isolate at least 20–25 pairs per dissection
9. Each extracted DRG is placed into L-15 + P/S solution. L15 serves as a nutrient-rich medium for short-term storage, while P15 (containing penicillin) prevents microbial contamination

Purchasing pre-isolated DRGs can cost thousands of dollars, which just emphasized how doing ours in lab was much more cost effective. Ultimately, though, it all depends on funding.

Yesterday, we filled the wells with complete culture media. What it actually contains that the experimental media did not is quite critical: several additives including glucose, additional nutrients, and FUDR (fluorodeoxyuridine). FUDR is critical for inhibiting the proliferation of glial cells. While it does not kill glial cells, it stunts their proliferation, which is particularly beneficial for right now as we are working with more muscular embryos. This inhibition reduces background glial density during imaging and allows for clearer visualization of the neurons of interest.

---

In the afternoon, we started working on culturing neurons. Khayzaran gave a general gist   of the process of culturing neurons. We are processing the cells using enzymes to break down the cellular matrix to get to the neuron. Right now, it is just a bundle of stuff that we need to clarify. Later on, Prashant told us about each of the three chemicals: DNase breaks down DNA, Collagenase breaks down collagen, and trypsin breaks down peptide bonds in proteins. 

- DNase (Deoxyribonuclease): Degrades DNA released from lysed cells, reducing viscosity - and preventing clumping during dissociation.

- Collagenase: Specifically breaks down collagen, a major structural protein in connective tissue, helping to loosen up the matrix.

- Trypsin: A serine protease that cleaves proteins at the carboxyl side of lysine and arginine residues. In cell culture, it’s used to digest proteins in the extracellular matrix and detach cells by breaking down adhesion proteins.

When we went to the centrifuge, he asked me to find out the difference between RPM and RCF.

Collect Items:
- Collagenase (10 mg/mL)
- Trypsin (0.25)
- L-15 + P/S Media
- L-15 + P/S + FBS Media (used to stop reaction)
- Stock DNase solution in PBS (25 mg/mL); 0.5 mg/mL working solution
- DRG explants

Instructions:
- Create a diluted DNase Solution called the Separator

    - Add 200 µL of the 25 mg/mL DNase into a 15 mL conical tube
    - Add 10 mL of L-15 + P/S Media to the DNase-containing conical tube
    - This yields a solution of 0.5 mg/mL DNase (Separator)

- DRG preparation

    - Place DRG-containing solution from dissection into a separate 15 mL tube
    - Add 1 mL of Collagenase for every 2 mL of DRG-containing solution you observe
    - Cover the cell-containing tube with parafilm and place into the 37-degree water bath for 30 minutes to incubate cells, stir every 10 minutes

- Separation of DRG cells

    - After incubation, place the sample into the centrifuge and spin down at 1000 RPM for 2 mins
    - Remove supernatant by slowly extracting the media from the cell-containing tube until there is 1 mL remaining in the tube
    - Add 3 mL of trypsin to the cell-containing tube
    - Add 1 mL of Separator to the cell-containing tube
    - Cover with parafilm and place into the water bath again for 2–3 minutes (DO NOT OVERINCUBATE)

- Dissociation of DRGs

    - Add 5 mL of L-15 + P/S + FBS Media to stop the reaction
    - Place sample into the centrifuge and spin down at 1000 RPM for 2 minutes
    - Remove supernatant again, making sure to leave approx. 1 mL of cell-containing solution to not accidentally suck up cells
    - Add 10 mL of ice-cold L-15 + P/S Media and place into the centrifuge. Spin down at 1000 RPM for 2 min and remove supernatant
    - Repeat steps 4c–d (make sure to remove supernatant at the end)

- Final steps

    - Add 1 mL of Separator solution to the cell-containing tube
    - You should have approx. 2 mL in this tube
    - Titrate gently using a 200 microliter yellow tip 10–12 times (you do this by aspirating and dispensing repeatedly)
    - Add the rest of the DNase solution to the conical tube
    - Add L-15 + P/S Media to make the solution 10 mL total
    - Place into centrifuge tube and spin down at 1000 RPM for 10 min
    - Remove supernatant
    - Add 1 mL of complete DRG media and titrate again using a 200 microliter yellow tip 10–12 times or until the solution looks homogeneous
    - Count cells using a hemocytometer

Dilute solution to place approx. 5000 cells into each chamber

When we got to the centrifuge work, prashant tasked me with figuring out the difference between RPM and RCF. In centrifugation,

> RPM (Revolutions Per Minute) is unit of rotational speed, or how many times the centrifuge spins in one minute. It does not account for the size (radius) of the centrifuge rotor. RPM alone is not enough to compare force across different centrifuges. 
 
> RCF (Relative Centrifugal Force aka g-force) is measured in '× g' (multiples of Earth's gravity). This tells you the actual force being applied to the samples and depends on both RPM and the rotor radius. It is universally comparable between machines.

To convert RPM → RCF, use:

> RCF (x) = 1.118 × 10⁻⁵ × R × (RPM)²

> Where R is the radius in centimeters (from the center of the rotor to the sample)

Prashant also had us watch a [YouTube video](https://www.youtube.com/watch?v=ZukmrTVKCOk&ab_channel=BiologyLectures) on counting cells using a hemocytometer:

1. Centrifuge the cell suspension and discard supernatant
2. Resuspend cell pellet in PBS and add Trypan Blue (100 microliters) to the mix
3. Add sample to hemocytometer and analyze cell viability under a microscope
4. Viable cell is unstained; apoptotic cell is stained
5. You will see a kind of grid where there are squares in the corner. Count all the live cells only in those four corner squares. Then count dead cells

According to the video, the formula goes:
> Number of viable cells/mL = (number of cells counted × 10,000 × dilution factor) / number of large corner squares counted

After 10 minutes of centrifuging, we were called back in. Prashant asked if we learned how the hemocytometer works. I thought he was asking for the concentration formula, so I started to read my notes on it out. After he clarified, I admitted that I did not know. He asked us if we were familiar with capillary action and, thank you 8th grade science, I was.

Capillary action is the movement of a liquid through a narrow space against gravity due to cohesion and adhesion. The same applies for the hemocytometer. When you load a sample onto the hemocytometer, you typically place a small drop of the cell suspension at the edge of the cover slip that has been placed over the counting chamber. Capillary action then draws the liquid evenly into the narrow gap between the cover slip and the chamber surface, filling the space without air bubbles or overflow.

This happens also because of adhesion (causes the liquid to cling to the glass surfaces of the slide and cover slip) and cohesion (helps pull the rest of the liquid along with it, forming a smooth, uniform layer across the grid).

This thin, consistent layer helps with accurate cell counting, because it ensures the volume over each square is known and reproducible (typically 0.1 mm³ per square), which is important for calculating cell concentration.

The way Prashant calculated was mostly in his head though, and I’m still not fully sure about the formula. He said something about averaging. Our hemocytometer was a 4 by 4 grid with 4 cells within each cell of the grid. He approximated that we had around 1 million cells total, which is 500 per microliter. He diluted the cells, then rotated for uniform distribution. 

Then, he seeded them in a 96-well tray, shaking the tube every so often to make sure they were still homogeneous. When we got to the PDMS chambers for seeding, he placed the dish at a tilt so that gravity would allow the axons to be oriented towards the microchannels. He said he tried to seed them as close to the channel as possible and that it’s important to be careful not to overstress the cells.

