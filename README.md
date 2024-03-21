**Synesthesia Lens**

Synesthesia Lens is a code-generated visualization of how Alexander Scriabin, a famous composer and pianist, perceived his synesthesia. As you enter the Synesthesia Lens, the audio from your microphone is translated into lines of color depending on each instance's frequency, sporadically appearing on the page.

**How does it work?**

This project uses P5.js and ML5.js libraries to create the synesthetic visualization and HTML, CSS, and JS to create the website.

Live audio data is taken in from the microphone and their frequencies are identified in real time via ML5.js. This frequency is categorized into one of the 12 distinct notes found in Western music, then mapped to the color Scriabin saw for that note. I used P5.js to display each instance of the audio as a colorful line that appears for an instant than fades slowly.

Below is the mapping of notes to colors Scriabin had that I used:

| Note | Color |
|------|-------|
|   C  |  Red  |
|   C# | Purple|
|   D  | Yellow|
|   D# | Magenta|
| E    |Pale Sea Foam|
|F   |Dark Red|
|F#  |Blue|
|G  | Orange|
|G# | Fuchsia|
|A  | Light Green|
|A#|  Burgundy|
|B  | Light Blue|
