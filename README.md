# spark-joy

easy ways to add design flair, user delight, and whimsy to your product.

## Spacing

More. Spacing. Please.

## Resets

- https://github.com/tiaanduplessis/nanoreset
- https://nicolas-cusan.github.io/destyle.css/
- https://hankchizljaw.com/wrote/a-modern-css-reset/
- http://necolas.github.io/normalize.css/

## CSS frameworks

- Bootstrap
- https://purecss.io/
- https://screencss.com/
- https://terminalcss.xyz/
- https://nostalgic-css.github.io/NES.css/

## Layout

- https://gedd.ski/post/article-grid-layout/
- https://every-layout.dev/
- https://csslayout.io/ ([github](https://github.com/phuoc-ng/csslayout))

## Typography

<details>
  <summary>For speed, use System Font Stacks (incl. Segoe and Roboto)</summary>
  
  ([what are these?](https://css-tricks.com/snippets/css/system-font-stack/))
  - GitHub: `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`
  - [VS Code Autocomplete](https://twitter.com/kudapara/status/1093553125661773825?s=20): `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`
  - [`font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;`](https://twitter.com/_etiennemartin/status/1221114860479696896?s=20)
  - [`font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;`](https://twitter.com/laurosilvacom/status/1221138641923141632)
  - [`font-family: ‘system-ui’, sans-serif;`](https://twitter.com/esojrafael/status/1221107296127729664?s=20)
    - the ['system-ui' generic font family is new, standardizing name across Safari, Firefox and Blink](https://www.chromestatus.com/feature/5640395337760768)
  - [Sanitize.css](https://github.com/csstools/sanitize.css#typography-uses-the-default-system-font): 
  
```css
  html {
    font-family:
      system-ui,
      /* macOS 10.11-10.12 */ -apple-system,
      /* Windows 6+ */ Segoe UI,
      /* Android 4+ */ Roboto,
      /* Ubuntu 10.10+ */ Ubuntu,
      /* Gnome 3+ */ Cantarell,
      /* KDE Plasma 5+ */ Noto Sans,
      /* fallback */ sans-serif,
      /* macOS emoji */ "Apple Color Emoji",
      /* Windows emoji */ "Segoe UI Emoji",
      /* Windows emoji */ "Segoe UI Symbol",
      /* Linux emoji */ "Noto Color Emoji";
  }
  code, kbd, pre, samp {
    font-family:
      /* macOS 10.10+ */ Menlo,
      /* Windows 6+ */ Consolas,
      /* Android 4+ */ Roboto Mono,
      /* Ubuntu 10.10+ */ Ubuntu Monospace,
      /* KDE Plasma 5+ */ Noto Mono,
      /* KDE Plasma 4+ */ Oxygen Mono,
      /* Linux/OpenOffice fallback */ Liberation Mono,
      /* fallback */ monospace;
  }
```

  - [Some systems come with good premium fonts](https://twitter.com/MatiasEduardoPR/status/1093508700378144768?s=20) - Apple OSes have `“avenir next”, “avenir”, “proxima-nova”`
  
</details>

- Consider your site personality
  - Elegant/Classic: serif like [`Freight Text`](https://fonts.adobe.com/fonts/freight-text)
  - Playful: rounded sans serif like [`Proxima Soft`](https://fonts.adobe.com/fonts/proxima-soft)
  - Plain/Safe: neutral sans serif like [`Freight Sans`](https://fonts.adobe.com/fonts/freight-sans)
- Free fonts that are great with examples (thanks [@edadams](https://github.com/sw-yx/spark-joy/issues/22))
  - Google Fonts
    - [Noto Sans](https://www.google.com/get/noto/)
    - [Fira Sans](https://fonts.google.com/specimen/Fira+Sans) - related to [Fira Code](https://github.com/tonsky/FiraCode) for devvy stuff
    - [Raleway](https://fonts.google.com/specimen/Raleway)
    - [Open Sans](https://fonts.google.com/specimen/Open+Sans)
    - Cavivanar https://twitter.com/atav1k/status/1178096244490723328?s=19
  - Chivo https://www.latinxswhodesign.com/
  - [Lato](http://www.latofonts.com/) Well known, very readable, pretty, client favorite
  - [Libre Franklin](https://beautifulwebtype.com/libre-franklin/) Elegant and thin
  - [IBM Plex Sans](https://www.ibm.com/plex/) Loads of weights, beautifully done
  - [Clear Sans](https://01.org/clear-sans)
  - [Inter](https://rsms.me/inter/) [Rasmus'](https://rsms.me/) typeface carefully crafted & designed for computer screens.
  - [Jetbrains Mono](https://www.jetbrains.com/lp/mono/) - Monospace font for devvy stuff
  - Handwritten Fonts - great for presentations, annotated illustrations
    - https://www.urbanfonts.com/fonts/handwritten-fonts.htm
    - Caveat and Reenie Beanie on google fonts  https://twitter.com/round/status/1178090890004455424?s=19
- Font Pairing
  - Canva has a great tool: https://www.canva.com/font-combinations/
- steve schoger blessed typekit fonts **for UI's**
  - proxima nova
  - aktiv grotesk
  - acumin pro
  - museo sans
- eye catching fun fonts
  - https://www.haleyfiege.fun/fonts
- more opinions places
  - https://muffingroup.com/blog/best-free-fonts/
<details>
  <summary> Premium fonts and some examples </summary>
  
  - Proxima Nova https://a16z.com/ (on Typekit)
  - Graphik https://type.today/en/Graphik
  - https://www.typewolf.com/
  - [Dank Mono](https://dank.sh/)
  - Tekton https://twitter.com/round/status/1178090204562968576?s=19
  
</details>

Font-size things you might try:

- [`font-size: calc(1rem + 2px + ((100vw - 550px) / 250))`](https://twitter.com/Kikobeats/status/1093620157912616966?s=20) - you can [fit text to screen width] (https://twitter.com/shshaw/status/1240647643388395521?s=20) 
- [FlowType.js](https://simplefocus.com/flowtype/)
- [FitText](https://css-tricks.com/viewport-sized-typography/)
- [Inter/Tailwind font-size combo](https://twitter.com/samselikoff/status/1204412222593568769?s=20)
- [BAD, SLOW fontsize calc](https://twitter.com/drewml/status/1115339490179072000?s=20)
- [Complete font-size notes](https://manishearth.github.io/blog/2017/08/10/font-size-an-unexpectedly-complex-css-property/)
- Don't rely on varying fontsize to control hierarchy - also use font weight (normal = 400/500, heavy = 600/700) and color
  - Don't go under font weight 400, use a lighter color or smaller fontsize instead

Note: `vw` has known a11y issues: Preserve Zooming. [Sara Soueidan](https://twitter.com/SaraSoueidan/status/1121645149983891457?s=20) recommends wrapping with `calc`, e.g. `font-size: calc(16px + .3vw);`

You may wish to use `max-width: 60ch` on content. [Note on the `ch` unit not being EXACTLY 60 chars](https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/)

## Color Picking

Pick a primary color to match your personality:

- Blue: safe, familiar
- Gold: expensive, sophisticated
- Pink: fun, not so serious

You can also have a grey for secondary content, and lighter grey for tertiary content.

Don't use system defaults, too brutal. Example palette:

- Black: #1d1d1d.
- purple: #b066ff;
- blue: #203447;
- lightblue: #1f4662;
- blue2: #1C2F40;
- yellow: #ffc600;
- pink: #EB4471;
- white: #d7d7d7;

But here are tools to help generate palettes:

- https://color.adobe.com/create
- https://coolors.co/
- https://dribbble.com/colors/4030e8
- https://palettte.app/ (advanced tool; try importing the default palettes)
- http://colours.neilorangepeel.com/category/red/
- https://www.colorbox.io (by Lyft Design https://design.lyft.com/)
- Consider [darker/lighter color variations](https://learnui.design/blog/color-in-ui-design-a-practical-framework.html)
- https://croncolor.com/color-tool
- https://leonardocolor.io/?colorKeys=%236fa7ff&base=ffffff&ratios=3%2C4.5&mode=CAM02
- https://happyhues.co/
- https://www.colourlovers.com/ *recommended by Tracy Osborn*
- https://flatuicolors.com/
- https://colorsupplyyy.com/
- [chroma.js color palette helper](https://gka.github.io/palettes/#/9|s|00429d,96ffea,ffffe0|ffffe0,ff005e,93003a|1|1)
- https://palx.jxnblk.com/
- https://hotpot.ai/assistant/color_assistant Get suggestions for palettes, gradients, and text colors. Hit the space bar for ML-powered ideas.
- https://yeun.github.io/open-color/
- http://khroma.co/ neural network generated color palettes

<details>
  <summary>

### Color knowledge (not tools but still important so here they are)

  </summary>

- [Sarah Drasner on Color](https://css-tricks.com/nerds-guide-color-web/)
- [Louisa Barret on Color](https://www.youtube.com/watch?v=NdKAUXAvt8E)
- [Erik Kennedy on Color/HSB](https://learnui.design/blog/the-hsb-color-system-practicioners-primer.html)
- [JustinMezzell on Color](https://medium.com/@JustinMezzell/how-i-work-with-color-8439c98ae5ed) - advanced stuff on picking color tone/temperature
- [Justin Baker on Color Theory](https://medium.muz.li/the-ultimate-ux-guide-to-color-design-4d0a18a706ed)
- [How to do Dark Mode right](https://darkmodedesign.xyz/)
- [Inventorying and naming a Color Palette at UXPin](https://medium.com/@marcintreder/design-system-sprint-2-one-color-palette-to-rule-them-all-d0114ed1f659)
</details>

## Pure CSS

MAKE SURE TO CHECK OUT https://components.ai

### Pure CSS Tricks

- https://twitter.com/JoshWComeau/status/1170358024319492097?s=20
- Sarah Drasner picks https://codepen.io/collection/nMgKxJ?cursor=ZD0xJm89MCZwPTEmdj0yNjc5NTQ1
- Lea Verou CSS Secrets https://twitter.com/swyx/status/982786353216843776?s=20
  - CSS3 Patterns https://leaverou.github.io/css3patterns/
- Shadows
  - Box shadows https://brumm.af/shadows
    - drop shadows - eg -1px left -1px top - makes buttons look stamped
    - text shadows
    - experiment with multiple shadows on one element
  - Card border Generator https://card.surge.sh/
  - Components.ai box shadows https://components.ai/box-shadows
  - Neuomorphism Generator https://neumorphism.io/#f3d2c3

```css
border-radius: 50px;
background: #f3d2c3;
box-shadow:  20px 20px 22px #cfb3a6, 
             -20px -20px 22px #fff2e0;
```

- Blend Modes
  - [`background-blend-mode` color-burn, lighten, multiply are cool](https://codemenatalie.com/blog/background-blend-mode-property/)
- CSS clip path
  - https://labs.jensimmons.com/#shapes 
  - https://bennettfeely.com/clippy/ 
  - https://youtu.be/u9bDe3Bw0sA
  - CSS tricks clip path animation tutorial https://css-tricks.com/animating-with-clip-path/
  - slanted image gallery with clip path https://24ways.org/2019/flexible-captioned-slanted-images/


### SVG/Canvas Masking

- Transparent fill SVG and color in on Hover - [Codepen](https://codepen.io/m4r1vs/pen/qVReQz)
- https://speckyboy.com/css-svg-canvas-masks/
- https://www.blobmaker.app/
- https://getwaves.io/
- https://inkscape.org/
- text effects https://css-tricks.com/animate-blob-text-with-svg-text-clipping/
- animate an existing svg https://svgartista.net/
- `mix-blend-mode: screen` is [really good for SVG icons, with hover](https://ishadeed.com/article/blending-modes-css/)
- SVG animations
  - https://www.svgator.com/
  - scroll based svg text path animation https://www.youtube.com/watch?v=Tae96ze3xwY
  - stroke path animation https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/

### Background Gradients and Patterns

Not just for background backgrounds - applying gradients and background images to text is super underrated. Examples:

- [https://philcoffman.com/](https://user-images.githubusercontent.com/6764957/64589989-7985f500-d374-11e9-9d8a-2a8888df6981.png)
- [https://css-tricks.com/](https://user-images.githubusercontent.com/6764957/64590103-beaa2700-d374-11e9-8a84-95ab4826a577.png)

#### Gradients


```css
background-image: linear-gradient(
  120deg,
  hsl(200 50% 90%) 0%,
  hsl(200 100% 90%) 100%
);
```

- https://mycolor.space/gradient Generate a CSS Color Gradient
- https://webgradients.com/ free collection of 180 linear gradients 
- https://uigradients.com/#Petrichor
- https://www.grabient.com/
- ANIMATED GRADIENTS https://www.gradient-animator.com/
- Subtle gradients by bumping only saturation on HSL (thanks [argyleink](https://twitter.com/argyleink/status/1197205254623780864)) - You can [really take this to the extreme](https://twitter.com/argyleink/status/1216815958917992450?s=20)!


#### Patterns

- https://leaverou.github.io/css3patterns/
- https://www.toptal.com/designers/subtlepatterns/ (exports png though :( )
- https://pattern.flaticon.com/ (create a bg pattern of icons)
- https://coolbackgrounds.io/
- https://www.gradientmagic.com/
- http://thepatternlibrary.com/

#### Misc Backgroundy Stuff

- CSS Doodle https://css-doodle.com/
- CSS backgroundy patterns https://leaverou.github.io/css3patterns/
- this guy https://twitter.com/yuanchuan23
- Generative Gradients http://generative-placeholders.glitch.me/
- [True Grit Texture Supply](https://www.truegrittexturesupply.com/) PNG textures (paid)

### Spinners

- web components https://wc-spinners.cjennings.dev/
- Spinners https://tobiasahlin.com/spinkit/
- Buttons, hover, inputs, and loaders https://cssfx.netlify.com/
- Conic gradient loader in CSS - [Codepen](https://codepen.io/keithclark/pen/aEbEoo)
- React, Vue and Angular Spinners https://github.com/JoshK2/react-spinners-css
- https://andrew.wang-hoyer.com/experiments/svg-animations/

### Animations & Transitions

- Buttons, hover, inputs, and loaders https://cssfx.netlify.com/
- general http://animista.net
  - animate an existing svg https://svgartista.net/ (by the same people as animista)
- general https://daneden.github.io/animate.css/
- general https://ianlunn.github.io/Hover/
- Burgers https://march08.github.io/animated-burgers/
- Burgers http://negomi.github.io/react-burger-menu/
- Layout https://github.com/aholachek/react-flip-toolkit
- Hover and loaders: https://www.csswand.dev/
- Graphic animations: https://lottiefiles.com/

### Icons

- [Favicon generator](https://realfavicongenerator.net/) - pop in an image, get back a favicon!
- https://thenounproject.com/ Every icon you can think of, in PNG or SVG formats. They offer over 20 million icons, with built-in customization colors like size and color.
- https://hotpot.ai/free_icons 5,000+ free icons. Customize colors, size, and other properties.
- https://iconmonstr.com/ Discover 4486+ free icons in 310 collections
- https://icomoon.io/
- https://orioniconlibrary.com/ has customizable colors and packs eg for ecommerce
- https://material.io/resources/icons/?style=baseline
- http://www.entypo.com/
- https://css.gg/ 500+ Customizable & Retina-Ready icons — entirely built in CSS 
- https://www.heroicons.com/
- http://simpleicons.org/ icons for every brand like graphql, adobe xd, youtube, etc
- https://feathericons.com/
- https://www.zondicons.com/
- animated icons http://www.transformicons.com/builder.html
- https://game-icons.net/

premium/paid icons

- https://symbolicons.com/
- https://streamlineicons.com/ (used in [Glide Apps](https://twitter.com/glideapps/status/1199396690182230016))
- https://www.flaticon.com/
- https://gumroad.com/l/primaries

### Graphics and SVG Illustrations

Diagramming - when describing something prefer pictures over words. Make pictures.

- https://excalidraw.com/ (free, open source)
- https://www.draw.io/ (free)
- https://inkscape.org/ (free)
- https://whimsical.com/ ($10/mo)
- more tools - lucidcharts, miro, plectica - [see hn thread](https://news.ycombinator.com/item?id=21513337)

Illustrations

- https://undraw.co/ An open-source illustrations website, where you can change the colors of the illustrations online before downloading.
- https://www.humaaans.com/ diverse, customizable human svgs
  - https://fresh-folk.com/ is similar
- http://ouch.pics/
- https://www.freepik.com/ Graphic resources for everyone: Find Free Vectors, Stock Photos, PSD and Icons
- https://gallery.manypixels.co/ ManyPixels offer free svg illustrations with the possibility to customize the color as well.
- https://generator.opendoodles.com/ illustrations with color generator for svgs
- https://opengameart.org/
- https://illlustrations.co/ 100 beautiful illustrations, designed by Vijay Verma during a 100 days of illustrations challenge.
- https://isometric.online/ This website offers a searchable list of nice and free isometric illustrations.
- https://www.glazestock.com/ 
- https://lukaszadam.com/illustrations
- https://woobro.design/
- https://pimpmydrawing.com/
- https://www.drawkit.io/ Hand-drawn vector illustration resources for your next project
- https://www.isometriclove.com/ Cute Isometric Objects For Your Design
- https://www.karthiksrinivas.in/charco  A set of 16 handcrafted illustrations for your web & app projects. This set includes categories like 404 error, no internet connection, no service, fatal error, page not found, something went wrong, under construction and many more.
- https://www.veila.me/freebies/scandinavian-houses-free-vector-images
- https://absurd.design/
- https://github.com/MariaLetta/mega-doodles-pack
- https://iradesign.io/
- https://autodraw.com Google AI assisted drawing
- https://hotpot.ai Free or paid. Create icons, app screenshots, MacBook/browser mockups, social media posts, and other graphics for mobile apps and browser extensions.

Stock Photos and Videos

- https://photos.icons8.com/creator/ Create custom stock photos
- https://pexels.com
- https://generated.photos/ AI-generated stock photos
- unsplash of course
- https://github.com/neutraltone/awesome-stock-resources
- https://allthefreestock.com/

### Avatars

- https://www.avatars.io/
- https://en.gravatar.com/
- https://unavatar.now.sh/ grab social images from username/email
- http://avatars.adorable.io/#demo
- https://personas.draftbit.com/ A playful avatar generator for the modern age.
- https://getavataaars.com/
- https://joeschmoe.io/ An illustrated avatar collection for
developers and designers

### Animating Individual Elements

- links https://cssanimation.rocks/animating-links/
- tooltips on hover https://kazzkiq.github.io/balloon.css/
- Link and Button hover effects https://www.youtube.com/watch?v=ceNMP-aQkQ4

### Styling Forms

- Accessible Styled Forms https://github.com/scottaohara/a11y_styled_form_controls
- WTF Forms: Nicer Forms eg Radio Buttons with pure CSS https://github.com/mdo/wtf-forms
- Output-inspired form: https://twitter.com/steveschoger/status/1171429842442522625
- show button when placeholder-shown:  https://codepen.io/liamj/pen/vYYLGZj

### Sound

- https://www.zapsplat.com/
- https://www.myinstants.com/index/se/
- https://www.youtube.com/audiolibrary/music?nv=1
- https://freesound.org/
- https://www.audacityteam.org/
- https://joshwcomeau.com/react/announcing-use-sound-react-hook/

### Misc Weird fun stuff

- Perspective stairstep text effects https://codepen.io/jamc92/details/KaMLvY (in action: http://tennentbrown.co.nz)
- Duotone blend modes: https://jmperezperez.com/duotone-using-css-blend-modes/
- Decovar Font with Text shadows: https://codepen.io/mandymichael/details/dJZQaz (and other [Variable Fonts by Mandy](https://variablefonts.dev/))
- Drop shadows: `box-shadow: 10px 12px 0.5rem rgba(0,0,0,0.5);`
- Expanding Search buton and text from Ana Tudor [mentioned here](https://dev.to/chriscoyier/learn-about-css-custom-properties-through-clever-uses-of-them-2fjo)
- XKCD chart https://timqian.com/chart.xkcd/
- Image editing/Export to SVG/Object Removal/Photoshop - [Photopea](https://www.photopea.com/)
- GIMP alternative - https://glimpse-editor.org/
- Netflix slide-in menu - [Codepen](https://codepen.io/FlorinPop17/pen/KKPBgeQ)
- Peek Href on Links - [2min video](https://www.youtube.com/watch?v=zMZckWl_B4c&feature=youtu.be)
- [Gooey Effect with SVG and Filters](https://css-tricks.com/gooey-effect/)
- [CSS only hover effect with Headers](https://codepen.io/oliviale/pen/YgzNzK)
- [SVG iPhone mock and animated notification transition](https://codepen.io/sdras/pen/LYELqPX)

## Canvas

- Trianglify http://qrohlf.com/trianglify/
- generative artistry https://generativeartistry.com/
- Canvas Cards https://canvas-cards.glitch.me/
- Open Processing https://www.openprocessing.org/

## Page Transitions

- swup https://github.com/swup/swup ([css tricks](https://css-tricks.com/page-transitions-for-everyone/))

## WebGL

- [Curtains.js](https://www.curtainsjs.com/) ([example](https://codepen.io/martinlaxenaire/post/webgl-enhanced-drag-slider-tutorial-with-curtains-js-part-3))

## React

### Simple Animation

- https://react-simple-animate.now.sh/
- https://yubabajs.com
- https://github.com/brunnolou/react-morph
- https://github.com/kitze/react-genie

### Page transitions

- https://github.com/joerez/react-transitions/

### Nice React Components

- https://react-smooth-range-input.now.sh/
- React Physics Dragger https://react-physics-dragger-demo.netlify.com/
- [React-Designer](http://react-designer.github.io/react-designer/): Easy to configure, lightweight, editable vector graphics in your react components.
- `<Foldable>` from [Folding the DOM](https://www.joshwcomeau.com/posts/folding-the-dom/)
- React Hamburger Icons https://hamburger-react.netlify.com/
- React Curved Arrow https://react-curved-arrow.nickjanssen.com/
- Spinners
  - https://github.com/tienpham94/react-awesome-spinners
  - https://github.com/davidhu2000/react-spinners
  - https://github.com/JoshK2/react-spinners-css
  - https://github.com/jameygleason/aperitif
  - https://github.com/JoshK2/react-spinners-css
  - https://www.npmjs.com/package/react-loaders-kit
- PDF viewer https://react-pdf-viewer.dev/

### Toasting

- https://cogoport.github.io/cogo-toast
- https://fkhadra.github.io/react-toastify/

### Gamification

- https://github.com/thedevelobear/react-rewards
- React Confetti https://alampros.github.io/react-confetti/
- React DOM Confetti https://daniel-lundin.github.io/react-dom-confetti/

### Icons

- https://github.com/miukimiu/react-kawaii
- https://react-icons.netlify.com/#/icons/fa (typically fontawesome)
- https://github.com/useAnimations/react-useanimations

## Video

- https://animoto.com/ - drag and drop video maker
- https://biteable.com/ - video maker with templates
- https://powtoon.com - videos and presentations for engaging and explaining

## Helpful podcasts and talks

- [How do I learn design?](https://www.codenewbie.org/podcast/how-do-i-learn-design) (CodeNewbie)
- [Design foundations for developers](https://syntax.fm/show/196/design-foundations-for-developers) (Syntax)
- [Design tips for developers](https://syntax.fm/show/068/design-tips-for-developers) (Syntax)
- [Tactical design advice for developers](https://changelog.com/podcasts/333) (The Changelog)
- [Simple Layout checklist](https://docs.google.com/file/d/0B0gPtgNVonXPT1NsWGpKZWZKV1U/edit)
  - [ ] Clear idea of purpose, target audience, where/how long it will be seen
  - [ ] Information hierarchy (vary size, contrast, position)
  - [ ] Clear visual structure - pick the most suitable way to group elements
  - [ ] Space - leave enough whitespace. Too much > too little
  - [ ] Alignment - use as few lines as possible
- Steve Schoger - [little details of visual ui design](https://twitter.com/swyx/status/1206234577821286406?s=20)
  - [ ] add a bit of color to your greys
  - [ ] saturate greys when using a colored background
  - [ ] consider temp when saturating greys
  - [ ] use a consistent corner radius
  - [ ] use consistent icon set
  - [ ] use font size to emphasize impt info
  - [ ] use color to create a hierarchy
  - [ ] use consistent spacing scale
  - [ ] use color to draw attention
  - [ ] offset box-shadows
  - [ ] easy on the link styles
  - [ ] use contrast to create balance
  - [ ] pick an appropriate line height
  - [ ] use alignment to clean up your design
  - [ ] give actions hierarchy
  - [ ] consider spacing instead of borders
  - [ ] use color to create depth and hierarchy
  - [ ] use good fonts
- [Buffer Design tips](https://buffer.com/library/social-media-design-tips)
  - [ ] Color: emotion, personality
  - [ ] Balance: symmetry, asymmetry
  - [ ] Lines: straight lines for harmony, curved for movement. guide the eyes
  - [ ] Typography: 3 max, san-serif for web, kerning for headlines
  - [ ] Add Contrast with shapes, color, element sizes
  - [ ] Scale: size elemnts differently to draw attention or demonstrate concept
  - [ ] Proximity: group related items together. connect colors, fonts, shapes
  - [ ] Hierarchy: most impt elements first
  - [ ] Repetition: consistency of fonts, colors, logos
  - [ ] Direction: F, E, Z pattern. Put key info in left
  - [ ] Space: use space to amplify other objects
- [Refactoring UI](https://refactoringui.com/)
  - Starting from Scratch
    - Choose a personality
    - Don't design too much
    - Detail comes later
  - Hierarchy
    - Size isn't everything
    - Emphasize by de-emphasizing
  - Layout and Spacing
    - Establish a spacing/sizing system
  - Designing Text
    - Keep your line length in check
  - Working with Color
    - Ditch hex for HSL
  - Creating Depth
    - (to be continued)
  - Emulate a light source
    - (to be continued)
  - Working with Images
    - (to be continued)
  - Finishing Touches
    - (to be continued)
- [Tracy Osborn Checklist](https://www.youtube.com/watch?v=uKpfO331DY4&list=WL&index=4)
  - Reduce Clutter
    - use ColourLovers for color palettes
    - Fonts - max 2. Use fancy fonts sparingly
    - more whitespace
    - break up walls of text with bullet points
    - big clear CTA buttons
  - Headlines: talk benefits not details. short.

## More Free Stuff

- [Canva Design School](https://designschool.canva.com/)
- [Degreeless.design](https://www.degreeless.design/#basics)
- Free tier software https://free-for.dev/#/
- https://github.com/Vincenius/link-list
- Public API's for demos https://github.com/public-api-lists/public-api-lists

## Interaction/Design Inspo

- Dribbble ofc
- https://pageflows.com/
- https://uimovement.com/
- https://uidesigndaily.com/
- https://www.siteinspire.com/
- http://www.cssmania.com/
- https://www.uisources.com/
- [Codrops](https://tympanus.net/codrops/2019/06/04/inspirational-websites-roundup-5/)
- https://collectui.com/
