# Remaining Tasks (In order of Priority)
[a relative link](priority.md)
## Layout
### General Functionality
- Responsive (See below)
  - Speed: Can be rather slow and unpredictable. When finished, remove unnecessary libraries
  - Mobile optimization
    - Get stylings for sizes
### Styling
- Background
  - Parallax finished, need good background
- Card:
  - Parent Card
  - Header
    - Divider Between header and cardbody
      - Only if it doesn't take too much space, and only on desktop and mobile. On tablet, use standard card with just parent card, textview and modelview
  - Text as View? or Card?
  - ModelView
- Transitions
  - Transition for card click to center of page and hide background:
    - Blur or just darken?
## Sections
### Splash Page
- Convert from three.js to r3f
### Homepage
- Add black Youtooz model.
  - Animation:
    - fall, hit ground, stand up dizzy, then repeat wave
    - include camera shake on hitting ground and dizziness
- Camera transition
- Dropdown section filter
## 3D Models
- two stage lights red/blue
### Animations
- Spiderman
## Flask
- change index.py file to __init__.py with manifest file
- Create blueprint for template
- add launch script to run gunicorn and config wsgi.py file to allow testing without external dependencies
## Splash
## Deployment

# Responsive Ideas
- Desktop
 - Turn section to card in card
 - On click, full screen card
 - Compare the first line, 3D Gaussian Splatting to the following rows. Figure out
which spacing works best. 
- Tablet
- Tablet/Mobile
  - Cards turn to stacked cards
- Mobile
  - Turn canvas from perspective mode to orthographic


# Necessary Fixes
- R3F fixes:
  - Card models disappear on interaction (e.g. filter, card expansion)
- Cards aren't showing properly on mobile
- Card bounces at inconsistent timing than canvas 
  - FIX: It's because of improper rendering. Need memoization to improve performance.  
    - Update filtering in ProjectSection.tsx and the handleFilter function.
- Expanded card doesn't transition to right location
- 3D Model disappears on click


# Optimizations


# Post-Deployment
- Frosted glass over canvas, which disappears on hover
- Better background, one that highlights parallax more
- Custom theme
- - Change imports to dynamic imports, so they will be loaded when needed instead of immediately
- PWA
