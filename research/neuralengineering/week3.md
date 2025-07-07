---
layout: neuralpage
title: Week 3
week_order: 3
permalink: /research/neuralengineering/week3/
nav_exclude: true
---
## Imaging
---
## Day 1: Jun 30 {#day-1} 
---
### Meeting 

Today was another monday meeting. Most of it was Prashant in discussion with Dr. Yang about one of the imaging challenges he has been facing. He showed us a diagram outlining the experimental setup, where he needs to compare mitochondrial trafficking between control and drug-treated samples. For the data to be reliable, both samples must undergo comparable axonal passage through the microchannels, ideally with similar path lengths and distributions. This ensures that differences in trafficking are due to the treatment rather than variability in axon growth patterns.

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week3/0.jpg' | relative_url }}" 
    alt="image" 
    width="600" 
    style="border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

He drew us a diagram at Dr. Yang's request because I guess it was a good learning opportunity for us. And probably because the knowledge would be otherwise too esoteric for us to follow. To describe secondarily, the diagram shows the cultured cells with neurons going through the microchannels. He drew a square that shows the part of the channels visible in the microscope frame, where the key issue is.

Axons do not always grow uniformly: sometimes they extend through all three microchannels, sometimes only a few, and occasionally multiple axons concentrate in a single channel. This inconsistency complicates quantitative comparisons. To address this, Prashant is exploring the use of AI-assisted image analysis to automatically identify and focus on regions of interest with consistent axonal growth (of course, that's going to take a lot of training and ML work).

He also mentioned a researcher at MIT who is working on mitochondrial dynamics, but in a standard monoculture setup (without the use of dual-chamber microfluidic devices). In contrast, traditional high-throughput culture platforms like 96-well plates lack physical compartmentalization and are not designed for spatially segregated axonal analysis.

Finally, Dr. Yang brought up a neuroscience study involving a mouse model. In this experiment, the right eye was occluded during development, which led to increased myelination in the left optic pathway. The conclusion was that sensory deprivation in one eye enhanced compensatory activity and myelination in the contralateral visual cortex, likely due to the altered pattern of light-driven neural stimulation. This kind of reminded me of the conversation from last Friday during the dissection about keeping active to keep your neurons alive. 

Then at the end, Dr. Yang told us about a situation involving Shinya Yamanaka, who was awarded the Nobel Prize in 2012 for his discovery that skin cells could become stem cells (which is so cool). Apparently, prior, he sent his paper to be reviewed at some University (Wisconsin or somewhere else in the Midwest). The researchers there spent a few months replicating his work, but when it hit 3 months, Yamanaka removed them from the review list. He then went on to get the prize. He was kind of warning us about the environment regarding science research, how a lot of discourse is stifled because of competition and intellectual property theft. I guess he got a happy ending, though it could have ended kind of badly.

---
## Day 2: July 1 {#day-2}
---
### Strawberry White Chocolate Muffins

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week3/3.jpg' | relative_url }}" 
    alt="image" 
    width="600" 
  />
</div>
---
## Day 3: July 2 {#day-3}
---
### Scanning and Microscopy Training 

Today, we worked on imaging our cultured neurons, which we left to grow over the weekend, Monday, and Tuesday. The goal was to assess whether the cells were growing healthily. Khayzaran mentioned that she had checked on them earlier and confirmed that they were developing normally. Today, we specifically wanted to see whether the axons had extended into or through the microchannels.

Khayzaran emphasized the importance of working efficiently (by preparing the microscope in advance, cleaning surfaces, etc.) because every time you remove the slides from the incubator, the cells are subjected to stress. Since the environment outside is not maintained at 37°C and 5% CO₂, extended periods outside the incubator could be detrimental to cell health.

Previously, we added cotton swabs inside the dish to help maintain a humid environment. Every three days or so, we check to ensure that the culture media is still present. If necessary, we replenish it. This process requires care to avoid disturbing the cells. To do so, we pipette the media at an angle along the wall of the well, allowing it to gently flow down rather than drop directly onto the cells and agitate them.

We used a fluorescence inverted microscope, which employs specific filter cubes to visualize fluorescently labeled regions. Being inverted, the objective lenses are located beneath the sample stage. Focusing involves adjusting the distance between the objective lens and the sample to achieve clarity. We were also introduced to the microscope’s objectives: 5x, 10x, 20x, 40x, 63x, and 100x. The first three are dry objectives, while the last three are immersion (wet) objectives. Higher magnification provides better resolution but requires immersion oil for proper imaging, hence the name “wet.”

Microscopy Workflow and Notes

1. Turn on the computer and two additional power sources: one for the microscope and the other for the imaging system

    Use the joystick handle for x, y, z stage movement and the coarse/fine focus knobs to adjust focal depth

2. Launch the imaging software. Objective magnification can be changed either in the software interface or using the touch panel at the microscope base
3. Place the sample on the microscope stage, which has a cutout designed to snugly fit the glass slide
4. For scanning, we used transmitted light in grayscale rather than fluorescence, as we were not nalyzing labeled structures. We typically use 20x magnification for these scans
5. Clean the stage by spraying with ethanol, but avoid touching or disturbing the objective lenses

    During seeding, a red marker was drawn on one side of the slide to indicate the soma chamber (also referred to as the “global side”). This helps orient the slide for consistent treatment or observation

6. When the viewing panel appeared black, we used the auto-calibration function to bring the cells into view
7. After imaging, we first lower the objective before removing the stage to prevent contact with the lens

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week3/1.jpg' | relative_url }}" 
    alt="image" 
    width="350" 
    style="float: left; margin: 0rem 1rem 0.5rem 0rem; border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

When we were looking at the cells, Khayzaran gave us a lesson on the various elements, situations, and issues we need to look for and recognize while scanning. 

1) Large, roundish structures: neuron soma (cell bodies)

2) If you see long hair-like strands, they are debris. In this case, they are floating

3) Cell clusters with long, thin projections are groups of neurons with projecting axons

4) As you move lower on the slide, you can locate the punched well (soma chamber), and adjacent to that, the microchannels, where we observe axonal extension

5) Glial cells have a distinct morphology (technically stellate-shaped) though I thought they resembled spiky parallelograms or scars

6) One chamber showed particularly robust axon growth. The axons were significantly longer than the ones in 3 (this was from my sample, so I’m pretty proud)

7) In one of the channels, the axon kind of grew outisde of the channel then curved back in. Khayzaran asked why that might be, and I suggested improper plasma bonding, which turned out to be correct. My bonding wasn’t perfect, and the PDMS lifted slightly, allowing the axon to slip under the channel

8) Ideal axon growth appears as a smooth, zig-zag pattern along the channel

9) Tiny unidentifiable dots are likely debris

10) A dense cluster of cells results in an abundance of axons. However, this isn’t ideal because if we apply fluorescent dye later, it could become overexposed and too bright in those regions, which obscures the rest of the image. This is often caused by inadequate cell dissociation during titration

In general, discrepancies in axonal growth between wells can stem from several factors. One major cause is variation in media washes, which may sometimes contain trace elements harmful to cells. However, there are many potential contributing variables.

At the end of the lesson, I had a few questions about the microchannels. I understood how improper plasma bonding could affect axonal pathfinding, but I was confused about how axons reach the microchannels in the first place. 

<div style="flex-shrink: 0;">
  <img 
    src="{{ '/assets/images/neuroengineering/week3/2.jpg' | relative_url }}" 
    alt="image" 
    width="350" 
    style="float: left; margin: 0rem 1rem 0.5rem 0rem; border: 1px solid #292d51; object-fit: cover;" 
  />
</div>

I had assumed that the space between the punched chamber and the start of the microchannels was completely flush with the glass. So if there was no gap or depression, how would axons find their way into the channels?

I referenced drawing 4 when I asked, pointing to the transition zone, the flat region between the punched well and the channel entrances.

To explain, Khayzaran drew some diagrams. What finally clicked was the fact that the microchannels are directly connected to the well. This should have been intuitive, but the microscope image had thrown me off (it looked like there was a separation between the chamber and the channels).

---
## Day 4: July 3 {#day-4}
---
---
## Day 5: July 4 {#day-5}
---

Independence Day.