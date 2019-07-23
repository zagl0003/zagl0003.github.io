James Zagler
MTM 6230 010
July 14, 2019

My interactive gallery was made by using event listeners, "for" loops, and push statements similar to the Deck of Cards assignment, reusing some of the features from it. 

The design choices were with something of a "Ye Olde Timey" concept in mind, put onto stained parchment with the tones to match. I tried to reflect this in the script fonts used.

The challenges I faced included connecting the initial "for" loop that spawned the images with the following overlay event listener that dynamically creates the full-sized view and overlay, along with getting keyboard events to work as intended. The solution to the first problem was to make the array entirely out of integers so they could be put in as the created image's IDs, and then called on through:     
const imageId = event.target.closest('img').id;
Using this, I was able to call on the appropriate string in the thumbWords array. Lastly, the desired result was to have a focused image act as if it were being hovered over, and hitting Enter to result in a "click". The solution was using "activeElement" instead of "focus" (which may or may not exist).

One thing I failed to implement was treating the div with the .thumbnail class as being hovered when its child (img) was focused with the tab key, making the effect between hovering and tab-selecting slightly different.