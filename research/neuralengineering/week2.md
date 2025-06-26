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