![image](https://user-images.githubusercontent.com/6764957/83363763-7d5c1a80-a3ce-11ea-95fb-2df3dd5aad34.png)

> **Easy ways to add design flair, user delight, and whimsy to your product!**

*The Spark Joy philosophy is explained in further detail [in my book](https://learninpublic.org/), check it out if you'd like to explore how this approach applies to a lot more than design utilities.*

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Web Design in 4 minutes](#web-design-in-4-minutes)
- [CSS/UI Templates](#cssui-templates)
- [Spacing](#spacing)
- [Layout](#layout)
- [Typography](#typography)
- [Colors](#colors)
- [Icons and Favicons](#icons-and-favicons)
- [Diagramming](#diagramming)
- [Wireframing](#wireframing)
- [Graphics and SVG Illustrations](#graphics-and-svg-illustrations)
- [Pure CSS Tricks](#pure-css-tricks)
- [Background Stuff](#background-stuff)
- [Spinners](#spinners)
- [Animations & Transitions](#animations--transitions)
- [Individual Elements](#individual-elements)
- [Design Software](#design-software)
- [Canvas](#canvas)
- [WebGL](#webgl)
- [3D](#3d)
- [Video](#video)
- [Onboarding](#onboarding)
- [Misc Genres (Handwriting, Pixel, ASCII styles)](#misc-genres-handwriting-pixel-ascii-styles)
- [Other Lists like this one](#other-lists-like-this-one)
- [Helpful podcasts and talks](#helpful-podcasts-and-talks)
- [More Free Stuff](#more-free-stuff)
- [Paid Premium Services](#paid-premium-services)
- [Courses](#courses)
- [The value of design](#the-value-of-design)
- [Interaction/Design Inspo](#interactiondesign-inspo)
- [Mock APIs](#mock-apis)
- [Emails](#emails)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Web Design in 4 minutes

Keep it simple: https://jgthms.com/web-design-in-4-minutes/

## CSS/UI Templates

HTML/CSS nice templates

- https://www.free-css.com/
- https://www.creative-tim.com/
- https://wickedtemplates.com using Tailwind v2
- https://themeselection.com/
- https://html5up.net/

### Serious CSS Frameworks 

#### Heavier CSS Frameworks

bigger learning curve, may have js, but more OOTB)

  - Bootstrap
  - [Foundation](https://get.foundation/sites/docs/)
  - [Blaze UI](https://www.blazeui.com/)
  - [PatternFly](https://www.patternfly.org/v4/documentation/core/components/aboutmodalbox)
  - [UIKit](https://getuikit.com/docs/introduction)
  - Utility CSS
    - [Bonsai CSS](https://www.bonsaicss.com/)
    - [Tailwindcss](https://tailwindcss.com/)
  - Web Components
    - [Weightless](https://weightless.dev/elements/checkbox)
    - [Shoelace](https://shoelace.style/)

### Drop-in CSS Frameworks

lighter, no js. preview some of these with https://sites.yax.com/

  - [Spectre.css](https://picturepan2.github.io/spectre/getting-started/installation.html)
  - https://purecss.io/
  - https://ajusa.github.io/lit/
  - https://screencss.com/
  - https://andybrewer.github.io/mvp/
  - https://github.com/xz/new.css
  - https://github.com/oxalorg/sakura
  - https://native-elements.dev/
  - https://watercss.kognise.dev/
  - https://jenil.github.io/chota/ 
  - Collections of even more:
    - https://github.com/dohliam/dropin-minimal-css
    - https://github.com/dbohdan/classless-css
    - https://github.com/ubershmekel/cssbed
    - https://thesephist.github.io/paper.css/ and https://thesephist.github.io/blocks.css/
    
Superlight: [58 bytes of css to look great nearly everywhere](https://jrl.ninja/etc/1/)

```css
main {
  max-width: 38rem;
  padding: 2rem;
  margin: auto;
}
```

### Fun CSS Frameworks

focus is fun

  - https://www.getpapercss.com/ (handrwritingey css similar to roughjs)
  - https://terminalcss.xyz/

focus is brutalism

- https://secretgeek.github.io/html_wysiwyg/html.html This page is a truly naked, brutalist html quine.
- https://mrcoles.com/demo/markdown-css/ CSS to make HTML markup look like plain-text markdown.

focus is fun/nostalgia

- [NES.css](https://github.com/nostalgic-css/NES.css): NES.css is a NES-style(8bit-like) CSS Framework.
- [PSone.css](https://github.com/micah5/PSone.css): PS1 style CSS Framework, inspired by NES.css.
- [LaTeX.css](https://latex.now.sh/)
- [98.css](https://github.com/jdan/98.css): A Windows 98 inspired framework for building faithful recreations of old UIs.
- [XP.css](https://github.com/botoxparty/XP.css): A Windows XP inspired framework for building faithful recreations of operating system GUIs. An extension of 98.css.
- [BOOTSTRA.386](https://github.com/kristopolous/BOOTSTRA.386): A vintage 1980s DOS inspired Twitter Bootstrap theme
- [Text UI CSS](https://github.com/vinibiavatti1/TuiCss): bios like UI's
- [New Dawn](https://github.com/npjg/new-dawn): A mac classic After Dark inspired stylesheet.
- more https://dev.to/iainfreestone/10-resources-for-recreating-old-school-retro-user-interfaces-today-hkj

focus in futurism
  
- Arwes - Futuristic Sci-Fi and Cyberpunk Graphical User Interface Framework for Web Apps https://arwes.dev/
- http://augmented-ui.com/ - Futuristic, Sci-Fi shaping for any element

### CSS Resets

more control in exchange for more work on your part.

  - eric meyer v2 https://meyerweb.com/eric/tools/css/reset/
  - https://github.com/tiaanduplessis/nanoreset
  - https://nicolas-cusan.github.io/destyle.css/
  - https://hankchizljaw.com/wrote/a-modern-css-reset/
  - https://gist.github.com/DavidWells/18e73022e723037a50d6
  - http://necolas.github.io/normalize.css/ (yes, technically does more than a reset)
    - Tailwind's https://tailwindcss.com/docs/preflight/ is built atop normalize
  - https://github.com/kripod/css-homogenizer - a modern take on Eric Meyer's Reset, based upon direct comparison between user agent style sheets.

### CSS A11y Checkers

- https://github.com/jackdomleo7/Checka11y.css
- https://ffoodd.github.io/a11y.css/
- https://github.com/mike-engel/a11y-css-reset
- chrome extension https://chrome.google.com/webstore/detail/a11ycss/iolfinldndiiobhednboghogkiopppid?hl=en


### Tailwind Component Libraries

- https://github.com/thedevdojo/tails
- http://tailwindcomponents.com/
- https://tailwindui.com/components


## Spacing

More. Spacing. Please.

[Double your whitespace](https://learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-1.html#rule-3-double-your-whitespace)

## Layout

- https://gedd.ski/post/article-grid-layout/
- css grid generators 
  - https://grid.layoutit.com/
  - https://cssgrid-generator.netlify.app/
- https://every-layout.dev/
- https://csslayout.io/ ([github](https://github.com/phuoc-ng/csslayout))
- Visual Hierarchy https://youtu.be/qZWDJqY27bw

special topic - responsive media

- https://piccalil.li/tutorial/build-a-responsive-media-browser-with-css/

## Typography

<details>
  <summary>For speed, use System Font Stacks (incl. Segoe and Roboto)</summary>
  
  ([what are these?](https://css-tricks.com/snippets/css/system-font-stack/))
  - GitHub: `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Noto Color Emoji",  "Segoe UI Emoji", "Segoe UI Symbol";`
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
  - Elegant/Classic: serif like [`Freight Text`](https://fonts.adobe.com/fonts/freight-text), [`Adobe Garamond`](https://fonts.adobe.com/fonts/adobe-garamond), [`PT Serif`](https://fonts.google.com/specimen/PT+Serif)
  - Playful: rounded sans serif like [`Proxima Soft`](https://fonts.adobe.com/fonts/proxima-soft)
  - Plain/Safe: neutral sans serif like [`Freight Sans`](https://fonts.adobe.com/fonts/freight-sans), [`Inter`](https://rsms.me/inter/), [`Proxima Nova`](https://fonts.adobe.com/fonts/proxima-nova)
  - Sciency/technical: squared off (geometric) sans like [`DIN`](https://fonts.adobe.com/fonts/din-2014), [`Industry`](https://fonts.adobe.com/fonts/industry)
  - monospace fonts: https://devfonts.gafi.dev/
- Free fonts that are great with examples (thanks [@edadams](https://github.com/sw-yx/spark-joy/issues/22))
  - Google Fonts - ([see Harry Roberts on Google Font loading perf](https://csswizardry.com/2020/05/the-fastest-google-fonts/))
    - [40 best google fonts by Typewolf](https://www.typewolf.com/google-fonts)
    - [50 selections of google fuonts](https://www.notion.so/e873b52e0cc54f2981acc430417ba61d?v=05acdd40b0564920be69f5347f619bc3)
    - [Noto Sans](https://www.google.com/get/noto/)
    - [Fira Sans](https://fonts.google.com/specimen/Fira+Sans) - related to [Fira Code](https://github.com/tonsky/FiraCode) for devvy stuff
    - [Raleway](https://fonts.google.com/specimen/Raleway)
    - [Open Sans](https://fonts.google.com/specimen/Open+Sans)
    - [Recursive](https://www.recursive.design/) - 1 variable font that can handle both monospace and UI usecases, very versatile
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
  - https://www.colorsandfonts.com/font-pairings
- [Font variants and oldstyle numbers](https://www.jonathan-harrell.com/blog/better-typography-with-font-variants/)
- steve schoger blessed typekit fonts **for UI's**
  - proxima nova
  - aktiv grotesk
  - acumin pro
  - Museo Sans ([example](https://youtu.be/ZJj7uNdzPpM?t=566)) and similar from [TypeKit](https://fonts.adobe.com/fonts?browse_mode=default&filters=cl:ss,rc:p,ns:uc)
- https://practicaltypography.com/system-fonts.html
- https://practicaltypography.com/free-fonts.html
- eye catching fun fonts
  - https://www.haleyfiege.fun/fonts
  - pixel fonts https://twitter.com/castpixel/status/1281345373336985612?s=20
- CSS 3D text https://markdotto.com/playground/3d-text/
- JS 3D text https://bennettfeely.com/ztext/ 
- TypeSpiration https://typespiration.com/ premade font pairings for you
- more opinions places
  - https://muffingroup.com/blog/best-free-fonts/
  - https://type-scale.com/
  - [6 ways to justify font choices in your designs](https://learnui.design/blog/justifying-font-choices.html)
   

<details>
  <summary> Premium fonts and some examples </summary>
  
  - Proxima Nova https://a16z.com/ (on Typekit)
  - Graphik https://type.today/en/Graphik
  - https://www.typewolf.com/
  - Arida Black (maggie's font) https://www.myfonts.com/fonts/latinotype/arida/black/
  - [Dank Mono](https://dank.sh/)
  - Tekton https://twitter.com/round/status/1178090204562968576?s=19
  
you can learn more about proofing premium fonts here https://www.typography.com/blog/text-for-proofing-fonts

</details>

Don't forget setting `max-width` - betweeen 60-75chars is good.

- https://pearsonified.com/characters-per-line/
- https://grtcalculator.com/
- https://www.charactercountonline.com/
- https://charcounter.com/en/

Don't forget setting Leading on your h1 text and minding kerning:

![https://hottips.imgix.net/2020/07/044-tracking-animation.gif](https://hottips.imgix.net/2020/07/044-tracking-animation.gif)

- https://creativemarket.com/blog/whats-the-difference-between-leading-kerning-and-tracking
- https://99designs.com/blog/tips/11-kerning-tips/

Other things you might try:

- Font smoothing - [explained](https://szafranek.net/blog/2009/02/22/font-smoothing-explained/), [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth)
- Tool for learning what fonts other people use https://fontanello.oktavilla.se/
- Fluid typography with [`clamp`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp): `font-size: clamp(1.125rem, 1rem + 2vw, 1.5rem)`
  - Another responsive typography fallback - [`font-size: calc(1rem + 2px + ((100vw - 550px) / 250))`](https://twitter.com/Kikobeats/status/1093620157912616966?s=20) - you can [fit text to screen width](https://twitter.com/shshaw/status/1240647643388395521?s=20) 
- [FlowType.js](https://simplefocus.com/flowtype/)
- [FitText](https://css-tricks.com/viewport-sized-typography/)
- [Inter/Tailwind font-size combo](https://twitter.com/samselikoff/status/1204412222593568769?s=20)
- [BAD, SLOW fontsize calc](https://twitter.com/drewml/status/1115339490179072000?s=20)
- [Complete font-size notes](https://manishearth.github.io/blog/2017/08/10/font-size-an-unexpectedly-complex-css-property/)
- Don't rely on varying fontsize to control hierarchy - also use font weight (normal = 400/500, heavy = 600/700) and color
  - Don't go under font weight 400, use a lighter color or smaller fontsize instead
- International fonts stack https://www.figma.com/blog/when-fonts-fall/
- In future, try out [leading-trim](https://medium.com/microsoft-design/leading-trim-the-future-of-digital-typesetting-d082d84b202) 


Note: `vw` has known a11y issues: Preserve Zooming. [Sara Soueidan](https://twitter.com/SaraSoueidan/status/1121645149983891457?s=20) recommends wrapping with `calc`, e.g. `font-size: calc(16px + .3vw);`

You may wish to use `max-width: 60ch` on content. [Note on the `ch` unit not being EXACTLY 60 chars](https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/)

## Colors

Pick a primary "brand" color to match your personality. [DO NOT OVERUSE IT.](https://twitter.com/steveschoger/status/1299372332579008515)

- Blue: safe, familiar
- Gold: expensive, sophisticated ([Examples](https://twitter.com/erikdkennedy/status/948914185596960768), [again](https://twitter.com/erikdkennedy/status/1331236629571362816?s=20))
- Pink: fun, not so serious

You can also have a grey for secondary content, and lighter grey for tertiary content.

Don't use system default/named colors, too brutal. Soften it a bit. "[Never use black](https://ianstormtaylor.com/design-tip-never-use-black/)" has been proposed as a rule, but [this is debated](https://news.ycombinator.com/item?id=24303042).

1 in 12 men and 1 in 200 women have color blindness. Make sure to check that important distinctions can be perceived. 

- https://twitter.com/LoanReads/status/1313974210151305218?s=20
- https://www.colourblindawareness.org/colour-blindness/

<details>
<summary>
Example blueish palette
</summary>
  
  

Monotone: 

- White-ish Card background: #FCFCFC
- Blueish-Black icons: #1C1E20
- Lighter text on white: #485963
- Bluish background: #202D34

Multicolor:

- Black: #1d1d1d.
- purple: #b066ff;
- blue: #203447;
- lightblue: #1f4662;
- blue2: #1C2F40;
- yellow: #ffc600;
- pink: #EB4471;
- white: #d7d7d7;

</details>


<details>
<summary>  
You may or may not want to use generic names if you want it swappable for dark mode:
</summary>
  
Example [yellowish palette](https://codepen.io/oliviale/full/XyqQYL):


- primary-light: #FFD151 mustard
- primary-dark: #FFAE03 UCLA gold
- secondary-success: #20A39E light sea green
- secondary-warning: #EF5B5B sunset orange
- secondary-info: #08D377 dark cerulean
- grays: #E8E9E9, #D1D3D4, #BABDBF, #808488, #666A6D, #4D5052, #333537, #1C1D1E

Examples: https://dev.to/dcodeyt/add-dark-mode-to-your-websites-with-css-5bh4

**Note - THIS IS DISPUTED!!!** Even Slack's impl has separate light and dark theming.

> The problem is "primary" isn't a color, it's a measure of contrast in the current context. On the same page you might have a white panel with a black button and a black panel with a white button, and both of those buttons are "primary" even though they are different colors. - [Adam Wathan](https://twitter.com/adamwathan/status/1291724757402976257?s=20)

</details>

One liner dark mode (careful about perf!): `filter: invert(100%) hue-rotate(180deg);` - more [filters here](https://svelte.dev/repl/defc901c5f434ed4a76161605cf1db76?version=3.29.0)

But here are tools to help generate palettes:

- https://tailwind.ink/
- https://colorgen.dev/
- https://color.adobe.com/create
- https://www.colorsandfonts.com/
- https://coolors.co/
- https://colorsinspo.com
- https://duo.alexpate.uk/
- https://colorhunt.co/
- https://2colors.colorion.co/
- https://dribbble.com/colors/4030e8
- https://palettte.app/ (advanced tool; try importing the default palettes)
- http://colours.neilorangepeel.com/category/red/
- https://www.colorbox.io (by Lyft Design https://design.lyft.com/)
- Consider [darker/lighter color variations](https://learnui.design/blog/color-in-ui-design-a-practical-framework.html)
- https://croncolor.com/color-tool
- https://leonardocolor.io/?colorKeys=%236fa7ff&base=ffffff&ratios=3%2C4.5&mode=CAM02
- https://happyhues.co/
- gradients https://mybrandnewlogo.com/color-gradient-generator
- https://www.colourlovers.com/ *recommended by Tracy Osborn*
- https://flatuicolors.com/
- https://colorsupplyyy.com/
- [chroma.js color palette helper](https://gka.github.io/palettes/#/9|s|00429d,96ffea,ffffe0|ffffe0,ff005e,93003a|1|1)
- https://palx.jxnblk.com/
- https://hotpot.ai/assistant/color_assistant Get suggestions for palettes, gradients, and text colors. Hit the space bar for ML-powered ideas.
- https://tltemplates.com/tool/color/tailwind-color Tailwind inspired color generator
- https://yeun.github.io/open-color/
- http://khroma.co/ neural network generated color palettes
- https://learnui.design/tools/data-color-picker.html Color picker for data visualizations
- https://learnui.design/tools/accessible-color-generator.html Accessible color generator
- CSS Gradient Text https://twitter.com/argyleink/status/1281623252662489088/photo/2
- https://maketintsandshades.com/ Generate tint and shades from hex code
- Special usecases: 
  - Pick colors from an image https://imagehive.co/
  - Mix colors in pure CSS https://css-tricks.com/mixing-colors-in-pure-css/

### Color knowledge

<details>
  <summary> Not tools but still important so here they are </summary>
  
- [Sarah Drasner on Color](https://css-tricks.com/nerds-guide-color-web/)
- [Louisa Barret on Color](https://www.youtube.com/watch?v=NdKAUXAvt8E)
- [Erik Kennedy on HSB](https://learnui.design/blog/the-hsb-color-system-practicioners-primer.html)
- [Erik Kennedy on color variations](https://learnui.design/blog/color-in-ui-design-a-practical-framework.html)
- [JustinMezzell on Color](https://medium.com/@JustinMezzell/how-i-work-with-color-8439c98ae5ed) - advanced stuff on picking color tone/temperature
- [Justin Baker on Color Theory](https://medium.muz.li/the-ultimate-ux-guide-to-color-design-4d0a18a706ed)
- [How to do Dark Mode right](https://darkmodedesign.xyz/)
- [Inventorying and naming a Color Palette at UXPin](https://medium.com/@marcintreder/design-system-sprint-2-one-color-palette-to-rule-them-all-d0114ed1f659)
- [Reasoning about Color](http://notes.neeasade.net/color-spaces.html) some light reading on color spaces and transforms (eg "pastelize" operation) 
- [Picking your palette](https://refactoringui.com/previews/building-your-color-palette/) 

</details>

## Icons and Favicons

### Favicons

Don't forget them!

  - **[Real Favicon generator](https://realfavicongenerator.net/)** - pop in an image, get back a favicon! The most comprehensive one for all platforms (Windows, iOS, Android)
  - [Favicon.io](https://favicon.io/) - Generate a favicon from text, from an image, or from an emoji. Download in .ico and .png formats
  - [FontIcon](https://gauger.io/fonticon/) - Generate favicons and images from Font Awesome icons
  - [Favicon Generator](http://tools.dynamicdrive.com/favicon/) - another one
  - https://textmoji.app/ small text icons meant for Slack but also can use for faviconning
  - [SVG Favicon maker](https://formito.com/tools/favicon) - supports emojis and 2 letter favicons with custom fonts
  - SVG favicons are modifiable by scroll percentage
    - you can https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/
    - put the scroll percentage! https://css-tricks.com/how-i-put-the-scroll-percentage-in-the-browser-title-bar/

### Icons

Logos (incl company logos)
- https://logosear.ch/ superfast metasearch of 200k svg logos from GitHub
- https://seeklogo.com/
- https://www.iconfinder.com/iconsets/payment-method-1
- https://www.logology.co/
- https://iconsear.ch/ instant search of 50k svg icons from GitHub and GitLab
- https://macosicons.com/  icons intended to replace mac desktop icons
- https://awsicons.dev/ AWS icons

General & Misc

> Note you can put gradients on SVG icons manually https://play.tailwindcss.com/yM2N8GpEUK

- ⭐ https://www.heroicons.com/ Steve schoger's (somewhat limited) svg iconset. another viewer: https://heroicons.dev/
- ⭐ https://phosphoricons.com/ 3000+ fully customizable free SVG and PNG icons
- ⭐ https://tablericons.com/ 937 Fully customizable free SVG icons
- https://icons.modulz.app/ Radix Icons - >250 15×15 icons designed by the Modulz team. - some great app icons
- **list of lists of icons**
  - https://icones.netlify.app/
  - https://www.iconbolt.com/

- https://thenounproject.com/ Every icon you can think of, in PNG or SVG formats. They offer over 20 million icons, with built-in customization colors like size and color. Requires login, needs creative commons attribution or $3 download
- https://hotpot.ai/free_icons 5,000+ free icons. Customize colors, size, and other properties. PNG, JPG, iOS, Android, PDF. No svg.
- **https://iconmonstr.com/** Discover 4486+ free icons in 310 collections. SVG, EPS, PSD, PNG. [OK without attribution, don't sell it](https://iconmonstr.com/license/).
- https://icomoon.io/ - 450 icons, SVG, PDF, EPS, Ai, PSD. Paid tier goes up to 1600 icons.
- https://orioniconlibrary.com/ has customizable colors and packs eg for ecommerce
- https://material.io/resources/icons/?style=baseline
- https://icons8.com/l/fluent/ colored "microsoft style" icons
- https://icons8.com/emoji emoji style customizable icons
- https://icons8.com/line-awesome fontawesome-like icons
- http://www.entypo.com/
- Bootstrap Icons https://github.com/twbs/icons
- https://systemuicons.com/
- https://icons.mono.company/
- https://iconscout.com/unicons and https://github.com/Iconscout/react-unicons
- https://feathericons.com/
- https://www.zondicons.com/
- https://linearicons.com/free
- animated icons http://www.transformicons.com/builder.html
- https://game-icons.net/
- Covid 19 icons - https://design.dev/ 
- https://kenney.nl/ public domain game assets
- https://www.iconshock.com/social-media-icons/ A pack of 300 social media icons (PNG & Vector) and a set of animated icons (Lottie and AE), which cover all the trendiest social media networks nowadays.
- brand icons
  - http://simpleicons.org/ icons for every brand like graphql, adobe xd, youtube, etc
  - https://css.gg/ 700+ Customizable & Retina-Ready app icons — entirely built in CSS 
  - https://worldvectorlogo.com/
  - https://www.vectorlogo.zone/ - consistently formatted SVG logos
- React Icons
  - https://github.com/miukimiu/react-kawaii
  - https://reactsvgicons.com/
  - https://react-icons.netlify.com/#/icons/fa (typically fontawesome). note that there is some tree shaking issues in the discussions. you may wish to use the https://github.com/meronex/meronex-icons fork instead
  - https://github.com/bytedance/IconPark - more than 1,200 high-quality icons, and introduces an interface for customizing your icons. across React, Vue, SVG, PNG.
  - https://github.com/useAnimations/react-useanimations


**premium/paid icons**

- http://shape.so/ 4300+ Icons & Illustrations (by Meng To)
- https://logobly.com/ create custom logos
- https://hatchful.shopify.com/ more custom logos
- https://radicalicons.com/ use `radicaldesign`
- https://symbolicons.com/
- 🔥 https://streamlineicons.com/ (used in [Glide Apps](https://twitter.com/glideapps/status/1199396690182230016))
- https://www.iconfinder.com/
- https://www.flaticon.com/
- https://gumroad.com/l/primaries
- https://gumroad.com/l/gPEAU ios 14 icons from traf - for inspo, mainly


## Diagramming

Before you get to the tools - some good thinking (and lists of tools) on architecture diagrams:

- https://nocomplexity.com/documents/arplaybook/businessarchitecture.html
- https://c4model.com/ ([more from Simon](https://dev.to/simonbrown/how-to-review-a-software-architecture-diagram-6p0))

General Purpose

- https://excalidraw.com/ (free, open source)
- https://miro.com/ - freemium, used by Maggie
- https://www.draw.io/ - now [shifted](https://www.diagrams.net/blog/move-diagrams-net) to https://www.diagrams.net/ (free) - has [VS Code extension](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- https://inkscape.org/ (free)
- https://www.websequencediagrams.com/
- https://whimsical.com/ ($10/mo)
- https://www.lucidchart.com/
- https://www.simplediagrams.com/
- [Microsoft Visio](https://www.microsoft.com/en-sg/microsoft-365/visio/flowchart-software)
- https://www.plectica.com/
- more tools - [see hn thread](https://news.ycombinator.com/item?id=21513337)

Entity Relationship Diagrams

- https://dbdiagram.io/home

Special Focus For Cloud Architecture diagrams (needs logos etc)

- Amazon architecture icons: https://aws.amazon.com/architecture/icons/ as well as the software that has them built in
  - https://awsicons.dev/ AWS icons
- https://www.draw.io/
- https://www.lucidchart.com/
- https://www.omnigroup.com/omnigraffle/ (used by tim bray)
- https://www.ilograph.com/
- https://www.cloudcraft.co/ focused on AWS
- https://www.cloudskew.com/
- https://arcentry.com/ (interactive/realtime) - discontinued!

Code-based Graph tools

- graphviz/dot - useful inside jupyter
- mermaid
- python's `diagrams` https://pypi.org/project/diagrams/
- https://structurizr.com/
- https://plantuml.com/
- https://github.com/mhlabs/cfn-diagram visualize cloudformation -> draw.io 

## Wireframing

- balsamiq
- https://wireflow.co/ free open source visual designer for user flows. collaborative.


## Graphics and SVG Illustrations

Hipster Logo Generator? any others?

- https://hipsterlogogenerator.com/

Backend entity/ ERD /SQL diagramming 

- SQL https://drawsql.app/
- Cloud AWS/Azure/GCP diagrams https://www.cloudskew.com/

DIY illustration

- Wobble paint https://www.lexaloffle.com/bbs/?tid=40058

### Device Mocks 

Mocking your browser/phone

- Browser: https://shooot.bourhaouta.com/, https://screenshot.rocks/
- Books: https://diybookcovers.com/3Dmockups/ 
  - https://3d-book-css.netlify.app/ and https://3dbook.xyz/
- Macbook: https://magicmockups.com
- animate them, why not https://deviceful.app/
- phone/watch: https://www.rotato.xyz/
- other devices https://deviceshots.com/
- 🔥 [Facebook Design Devices](https://facebook.design/devices)
- [Shotsnapp](https://shotsnapp.com/)
- https://www.ls.graphics/devices-mockups
- in context: [Device Mock-Up Inspiration](https://onepagelove.com/tag/devices)
- [Lstore Graphics](https://www.ls.graphics/) – Includes video
- [Creative Market](https://creativemarket.com/templates/mockups/mobile-web) device mockups

### Illustrations

- https://www.reddit.com/r/FreeIllustrations/top?t=all
- :star: https://undraw.co/ An open-source illustrations website, where you can change the colors of the illustrations online before downloading.
- :star: https://www.humaaans.com/ diverse, customizable human svgs
  - https://fresh-folk.com/ is similar
- :star: https://www.blackillustrations.com/ "Beautiful, FREE illustrations of black people for your next digital project"
  - hire custom designs via https://www.illustratorhub.com/
- :star: https://www.vecteezy.com/ High quality vector graphics with worry-free licensing for personal and commercial use.
- :star: https://streamlineicons.com/ux/ illustrations to go with Streamline icons
- https://icons8.com/illustrations (previously ouch.pics)
- :star: https://blush.design/ good random generator by Pablo Stanley.  Made for Sketch, Figma, InVision Studio and Adobe XD.
- :star: https://www.freepik.com/ Graphic resources for everyone: Find Free Vectors, Stock Photos, PSD and Icons
- https://www.seekpng.com/ 1m+ Transparent PNG Images For Free
- https://freellustrations.com/
- https://www.reddit.com/r/FreeIllustrations/top/?t=all
- https://2.flexiple.com/scale/home
- https://www.glazestock.com/
- https://openclipart.org/
- https://iradesign.io/ Build your own illustrations, Using our gradients and hand drawn sketch components.
- https://gallery.manypixels.co/ ManyPixels offer free svg illustrations with the possibility to customize the color as well.
- https://generator.opendoodles.com/ illustrations with color generator for svgs
- https://www.openpeeps.com/ a hand-drawn illustration library to create scenes of people.
- https://opengameart.org/
- https://illlustrations.co/ 100 beautiful illustrations, designed by Vijay Verma during a 100 days of illustrations challenge.
- https://isometric.online/ This website offers a searchable list of nice and free isometric illustrations.
- https://www.glazestock.com/ 
- https://lukaszadam.com/illustrations  library of Free Illustrations and Icons for everyone.
- https://design.dev/ some illustrations in PS/sketch/etc. requires account.
- https://www.manuelalangella.com/retroooo-folks/ Retroooo Folks is a vector-based Mix-and-Match library of hand-drawn sketches, created for Adobe Illustrator, Sketch and Adobe Draw.
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
- https://www.magicpattern.design/examples - one-click web editor for illustration patterns. It's perfect for branding landing pages, social media posts and featured images. Requires Google signup.
- https://gumroad.com/l/just sketch me (paid) 

Illo's in context: https://onepagelove.com/tag/illustrations

Learn 3d illo in blender https://polygonrunway.com/

### DIY Graphic Design

- https://snappa.com/
- https://www.canva.com/

### Stock Photos and Videos

- https://zoomstock.com/ t-SNE stock photo search 
- https://artvee.com/?s=nasa&post_type=product&product_cat=0 public domain art
- https://covers.alphacoders.com/by_category/4/2/twitter-header
- https://www.nappy.co/ "Beautiful, high-res photos of black and brown people. For free."
- https://photos.icons8.com/creator/ Create custom stock photos
- https://pexels.com
- https://generated.photos/ AI-generated stock photos
- https://visualsofearth.com/c/ nature, space, desert, etc. mobile focused.
- https://unsplash.com/ of course
- https://photos.icons8.com/
- http://www.ghibli.jp/info/013251/ studio ghibli free backgrounds
- https://www.stocksy.com/ (premium)
- https://duotone.shapefactory.co/?f=f56468&t=27184f&q=_&i=oMpAz-DN-9I (unsplash with duotone filter)
- https://github.com/neutraltone/awesome-stock-resources
- https://allthefreestock.com/
- https://thenounproject.com/search/photos/?q=happy


### Avatars

- instead of showing people's faces, try stippling https://github.com/pshihn/stippled-image
- https://en.gravatar.com/
- https://unavatar.now.sh/ grab social images from username/email
- http://avatars.adorable.io/#demo
- https://personas.draftbit.com/ A playful avatar generator for the modern age.
- https://avataaars.com/ and https://getavataaars.com/
- https://bigheads.io/
- https://joeschmoe.io/ An illustrated avatar collection for
developers and designers
- https://amritpaldesign.com/toy-faces Toy Faces is a fun diverse library of 3D avatars for your design mockups and personal use.
- https://gumroad.com/l/siKBl 3d diverse avatars, paid

## Pure CSS Tricks

- MAKE SURE TO CHECK OUT https://components.ai
- https://twitter.com/JoshWComeau/status/1170358024319492097?s=20
- Sarah Drasner picks https://codepen.io/collection/nMgKxJ?cursor=ZD0xJm89MCZwPTEmdj0yNjc5NTQ1
- CSS3 3D Buttons http://simurai.com/archive/buttons/#
- Lea Verou CSS Secrets https://twitter.com/swyx/status/982786353216843776?s=20
  - CSS3 Patterns https://leaverou.github.io/css3patterns/
- CSS 3D Text https://markdotto.com/playground/3d-text/
- 3D CSS hover effects https://polypane.app/css-3d-transform-examples/
- Shadows
  - Box shadows https://brumm.af/shadows
    - drop shadows - eg -1px left -1px top - makes buttons look stamped
    - text shadows
    - experiment with multiple shadows on one element
    - https://getcssscan.com/css-box-shadow-examples
  - Card border Generator https://card.surge.sh/
  - Conic gradient borders https://twitter.com/argyleink/status/1282889809782927360
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
- https://www.shapedivider.app/
- https://getwaves.io/
- https://wweb.dev/resources/css-separator-generator
- https://inkscape.org/
- text effects https://css-tricks.com/animate-blob-text-with-svg-text-clipping/
- more text effects https://letsbuildui.dev/articles/css-text-effects-five-minimal-examples
- animate an existing svg https://svgartista.net/
- `mix-blend-mode: screen` is [really good for SVG icons, with hover](https://ishadeed.com/article/blending-modes-css/)
- SVG animations
  - https://www.svgator.com/
  - SVG icon transitions https://blog.nucleoapp.com/create-2-state-svg-powered-animated-icons-76ed19160a7e
  - scroll based svg text path animation https://www.youtube.com/watch?v=Tae96ze3xwY
  - stroke path animation https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/

## Background Stuff

### Background Gradients and Patterns

Not just for background backgrounds - applying gradients and background images to text is super underrated. Examples:

- [https://philcoffman.com/](https://user-images.githubusercontent.com/6764957/64589989-7985f500-d374-11e9-9d8a-2a8888df6981.png)
- [https://css-tricks.com/](https://user-images.githubusercontent.com/6764957/64590103-beaa2700-d374-11e9-8a84-95ab4826a577.png)

Background Radial Bursts behind images:

- https://cssgradient.io/
- https://youtu.be/U4z-wph1NyI
- https://onepagelove.com/tag/gradients

![https://hottips.imgix.net/2020/07/063-burst.jpg?w=1200&auto=compress](https://hottips.imgix.net/2020/07/063-burst.jpg?w=1200&auto=compress)

#### Background Gradients


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


#### Background Patterns

- https://leaverou.github.io/css3patterns/
- https://github.com/bansal-io/pattern.css
- http://www.heropatterns.com/
- https://www.transparenttextures.com/
- https://www.toptal.com/designers/subtlepatterns/ (exports png though :( )
- https://pattern.flaticon.com/ (create a bg pattern of icons)
- https://coolbackgrounds.io/
- https://css-doodle.com/
- https://hero-generator.netlify.app/ hero picture CSS generator
- https://www.gradientmagic.com/
- http://thepatternlibrary.com/
- http://svgbackgrounds.com/
- https://pattern.monster/
- https://bgjar.com/
- https://products.ls.graphics/paaatterns/
- https://notchris.net/patterns/ (Really simple SVG Patterns using single unicode characters.)

### Background Illustrations

- https://freellustrations.com/

### Background Stock Photos



#### Misc Backgroundy Stuff

- CSS Doodle https://css-doodle.com/
- CSS backgroundy patterns https://leaverou.github.io/css3patterns/
- this guy https://twitter.com/yuanchuan23
- Generative Gradients http://generative-placeholders.glitch.me/
- Image Placeholders - blurring - https://blurha.sh/ (and gatsby image and nextjs image)
- Dimming/coloring text on background images https://coder-coder.com/background-image-opacity/
- [True Grit Texture Supply](https://www.truegrittexturesupply.com/) PNG textures (paid)
- Remove backgrounds https://www.remove.bg/
- colorizing black and white images https://demos.algorithmia.com/colorize-photos

## Spinners

- web components https://wc-spinners.cjennings.dev/
- Spinners https://tobiasahlin.com/spinkit/
- Buttons, hover, inputs, and loaders https://cssfx.netlify.com/
- Conic gradient loader in CSS - [Codepen](https://codepen.io/keithclark/pen/aEbEoo)
- React, Vue and Angular Spinners https://github.com/JoshK2/react-spinners-css
- https://andrew.wang-hoyer.com/experiments/svg-animations/
- Single Element CSS Spinners https://projects.lukehaas.me/css-loaders/

## Animations & Transitions

- Buttons, hover, inputs, and loaders https://cssfx.netlify.com/
- general http://animista.net
  - animate an existing svg https://svgartista.net/ (by the same people as animista)
- general https://animejs.com/
- motion graphics https://github.com/mojs/mojs
- general https://daneden.github.io/animate.css/
- general https://ianlunn.github.io/Hover/
- Burgers https://march08.github.io/animated-burgers/
- Burgers http://negomi.github.io/react-burger-menu/
- Layout https://github.com/aholachek/react-flip-toolkit
- Hover and loaders: https://www.csswand.dev/
- Graphic animations: https://lottiefiles.com/
- HTML animation? https://tumult.com/hype/ (paid)
- Page Transitions with swup https://github.com/swup/swup ([css tricks](https://css-tricks.com/page-transitions-for-everyone/))
- React
  - https://react-simple-animate.now.sh/
  - https://github.com/brunnolou/react-morph
  - https://github.com/kitze/react-genie
  - Page transitions https://github.com/joerez/react-transitions/

## Individual Elements

- links https://cssanimation.rocks/animating-links/
- tooltips on hover https://kazzkiq.github.io/balloon.css/
- Link and Button hover effects https://www.youtube.com/watch?v=ceNMP-aQkQ4

### Buttons

- https://frontend.horse/articles/buttons-that-spark-joy/
- https://cssbuttons.vercel.app/ cssbuttons: HTML & CSS Buttons Collection Built in React
- moving lightsource on hover css buttons idea https://jsfiddle.net/pixel67/ZxZ6B/28/

### Forms

- Accessible Styled Forms https://github.com/scottaohara/a11y_styled_form_controls
- WTF Forms: Nicer Forms eg Radio Buttons with pure CSS https://github.com/mdo/wtf-forms
- Output-inspired form: https://twitter.com/steveschoger/status/1171429842442522625
- show button when placeholder-shown:  https://codepen.io/liamj/pen/vYYLGZj
- Toggles: https://jnkkkk.github.io/MoreToggles.css/allToggles.html
- 3D LED switch: https://codepen.io/jkantner/pen/VwaBomY
- The Crazy Egg Guide to Great Form UI and UX https://www.crazyegg.com/blog/guides/great-form-ui-and-ux/

### Tables

- https://www.uxbooth.com/articles/designing-user-friendly-data-tables/
- https://twitter.com/erikdkennedy/status/1329787833058353154?s=20

### Sound

- https://www.zapsplat.com/
- https://www.myinstants.com/index/se/
- https://www.youtube.com/audiolibrary/music?nv=1
- https://icons8.com/music
- https://freesound.org/
- https://cchound.com/ 100% free, quality CC audio

Paid:

- https://www.epidemicsound.com/
- https://artlist.io/ - may have better licensing https://www.youtube.com/watch?v=mYU6XhORomg but no fx
- https://www.soundstripe.com/ (cheapest) here's a comparison https://www.youtube.com/watch?v=1YBjY79axRo
- https://www.bensound.com/ 


Tools:

- https://www.audacityteam.org/
- https://joshwcomeau.com/react/announcing-use-sound-react-hook/
- https://source-separation.github.io/tutorial/landing.html

### Lightweight Charts/Dataviz

- https://rbitr.github.io/ChartS.css/
- Sparkline fonts in text: https://github.com/aftertheflood/sparks and https://www.scribbletone.com/typefaces/ff-chartwell

### Nice React Components

- https://react-smooth-range-input.now.sh/
- Theme-ui-sketchy - https://github.com/beerose/theme-ui-sketchy roughjs components with themeui
- React Physics Dragger https://react-physics-dragger-demo.netlify.com/
- [React-Designer](http://react-designer.github.io/react-designer/): Easy to configure, lightweight, editable vector graphics in your react components.
- `<Foldable>` from [Folding the DOM](https://www.joshwcomeau.com/posts/folding-the-dom/)
- React Hamburger Icons https://hamburger-react.netlify.com/
- React Curved Arrow https://react-curved-arrow.nickjanssen.com/
- Spinners
  - https://github.com/tienpham94/react-awesome-spinners - requires styled components
  - https://github.com/davidhu2000/react-spinners
  - https://github.com/JoshK2/react-spinners-css
  - https://github.com/JoshK2/react-spinners-css
  - https://www.npmjs.com/package/react-loaders-kit - 200kb tho
  - https://github.com/adexin/spinners-react
  - https://gooey-react.netlify.app/examples/rotating-loader/
- PDF viewer https://react-pdf-viewer.dev/

### React Toasting

- https://cogoport.github.io/cogo-toast
- https://fkhadra.github.io/react-toastify/

### React Gamification

- https://github.com/thedevelobear/react-rewards
- React Confetti https://alampros.github.io/react-confetti/
- React DOM Confetti https://daniel-lundin.github.io/react-dom-confetti/

### Misc Weird fun stuff

- Perspective stairstep text effects https://codepen.io/jamc92/details/KaMLvY (in action: http://tennentbrown.co.nz)
- Duotone blend modes: https://jmperezperez.com/duotone-using-css-blend-modes/
- Decovar Font with Text shadows: https://codepen.io/mandymichael/details/dJZQaz (and other [Variable Fonts by Mandy](https://variablefonts.dev/))
- Drop shadows: `box-shadow: 10px 12px 0.5rem rgba(0,0,0,0.5);`
- Expanding Search buton and text from Ana Tudor [mentioned here](https://dev.to/chriscoyier/learn-about-css-custom-properties-through-clever-uses-of-them-2fjo)
- ClippyJS https://www.smore.com/clippy-js
- Rythm.js - make your page dance https://okazari.github.io/Rythm.js/
- XKCD chart https://timqian.com/chart.xkcd/
- Netflix slide-in menu - [Codepen](https://codepen.io/FlorinPop17/pen/KKPBgeQ)
- Peek Href on Links - [2min video](https://www.youtube.com/watch?v=zMZckWl_B4c&feature=youtu.be)
- [Gooey Effect with SVG and Filters](https://css-tricks.com/gooey-effect/)
- [Backdrop Filters and Multiple Inner Shadows](https://twitter.com/MengTo/status/1311029761490198528?s=20)
- [Swyx CSS Filter toy](https://svelte.dev/repl/defc901c5f434ed4a76161605cf1db76?version=3.29.0)
- [CSS motion blur on css tricks](https://css-tricks.com/how-to-create-a-realistic-motion-blur-with-css-transitions/)
- [Instagram filters created with CSS filters, by Una](https://una.im/CSSgram/)
- [CSS only hover effect with Headers](https://codepen.io/oliviale/pen/YgzNzK)
- [SVG iPhone mock and animated notification transition](https://codepen.io/sdras/pen/LYELqPX)
- RoughJS Annotation - https://roughnotation.com/
- Greensock GSAP scroll trigger demo with a ThreeJS Plane model https://codepen.io/ste-vg/pen/GRooLza
- little HTML tricks that are handy https://htmldom.dev/
- https://1stwebdesigner.com/css-effects/

## Design Software

- Image editing/Export to SVG/Object Removal/Photoshop - [Photopea](https://www.photopea.com/)
- online SVG editor - https://yqnn.github.io/svg-path-editor/
- GIMP alternative - https://glimpse-editor.org/
- Lunacy - https://icons8.com/lunacy Graphic design software with built-in assets
- Website design feedback collaboration - [Pagereview.io](https://pagereview.io/)
- Invision https://www.invisionapp.com/inside-design/design-resources/
- Scenes
  - https://www.ls.graphics/scene-creators
- UI kit collections
  - https://www.ls.graphics/ui-ux-tools
- Responsive Dev Browsers
  - FOSS https://responsively.app/
  - http://sizzy.co/ (paid)
  - https://polypane.app/ (paid)
  - [more alternatives](https://www.reddit.com/r/webdev/comments/f6ah78/responsive_website_testing_any_alternative_to/)

### Figma

- https://100dailyui.webflow.io/ Free Figma library of products, elements,
and screens.
- https://blush.design/ -  Free Customizable Illustrations With Figma Plugin
- https://www.figmafreebies.com/

### Sketch

- http://freebiesketch.com/
- https://www.sketchappsources.com/

## Canvas

- Trianglify http://qrohlf.com/trianglify/
- generative artistry https://generativeartistry.com/
- Canvas Cards https://canvas-cards.glitch.me/
- Open Processing https://www.openprocessing.org/

## WebGL

- [Curtains.js](https://www.curtainsjs.com/) ([example](https://codepen.io/martinlaxenaire/post/webgl-enhanced-drag-slider-tutorial-with-curtains-js-part-3))

## 3D

ThreeJS

- LowPoly 3D models from Google https://poly.google.com/search/duck
- https://www.kukla-kit.com/ Huge pack of 3D elements accessible directly from Figma.

BabylonJS

- https://babylonjs.medium.com/babylon-js-4-2-simplicity-reimagined-965f88d0fad

## Video

- https://animoto.com/ - drag and drop video maker
- https://biteable.com/ - video maker with templates
- https://powtoon.com - videos and presentations for engaging and explaining
- https://storycreatorapp.com/ - Simple online video editing for digital creators
- make video demos https://glitterly.app/
- https://storycreatorapp.com/
- https://www.fiverr.com/search/gigs?query=explainer%20videos&source=top-bar&search_in=everywhere&search-autocomplete-original-term=explainer%20videos
- https://www.medialuv.com/
- https://videohive.net/
- https://invideo.io/ - video maker with templates

Tutorials from successful Youtubers

- https://www.youtube.com/watch?v=N6-Q2dgodLs

## Onboarding

- https://www.appcues.com/ show people things they need as they need them
- React Curved Arrow https://react-curved-arrow.nickjanssen.com/

## Misc Genres (Handwriting, Pixel, ASCII styles)


### RoughJS Tools

- RoughJS Animated Annotation - https://roughnotation.com/
- https://excalidraw.com/
- https://alias-rahil.github.io/handwritten.js/

### Pixel Art

- http://pixelartmaker.com/
- https://nostalgic-css.github.io/NES.css/
- SNES music https://www.zophar.net/music/nintendo-snes-spc

### ASCII Art

- https://fatiherikli.github.io/archetype/
- https://textik.com/#a4ec12a68785f25f
- http://asciiflow.com/
- https://monodraw.helftone.com/
- text to diagramming tools [list](https://smusamashah.github.io/text-to-diagram)

### Perf

- https://tinypng.com/
- https://resizeimage.net/

```jsx
        <link rel="icon" type="image/png" href="/temporal-icon.png" />
        <meta name="theme-color" content="#317EFB"/>
        <meta property="title" content="Temporal.io: Build Invincible Apps" />
        <meta property="og:title" content="Temporal.io: Build Invincible Apps" />
        <meta name="description" content="Temporal is the open source runtime for running mission critical code that runs atop unreliable, distributed services at any scale." />
        <meta property="og:description" content="Temporal is the open source runtime for running mission critical code that runs atop unreliable, distributed services at any scale." />
        <meta property="og:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="og:url" content="http://temporal.io" />
        <meta property="twitter:title" content="Temporal.io: Build Invincible Apps" />
        <meta property="twitter:description" content="Temporal is the open source runtime for running mission critical code that runs atop unreliable, distributed services at any scale." />
        <meta property="twitter:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@temporaltech" />

        {/* resource hints */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://yt3.ggpht.com" />
        <link rel="preconnect" href="https://static.doubleclick.net" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://s.ytimg.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '[Tracking ID]');
              `,
          }}
        />
```

## Other Lists like this one

- https://a11yresources.webflow.io/ 
- https://github.com/bradtraversy/design-resources-for-developers
- https://tiny-helpers.dev/
- https://www.uigoodies.com/
- https://www.uplabs.com/
- https://github.com/neutraltone/awesome-stock-resources
- https://nodesign.dev/
- https://github.com/LisaDziuba/Awesome-Design-Tools
- https://github.com/emmabostian/design-inspiration
- https://undesign.learn.uno/

## Helpful podcasts and talks

- [How do I learn design?](https://www.codenewbie.org/podcast/how-do-i-learn-design) (CodeNewbie)
- [Design foundations for developers](https://syntax.fm/show/196/design-foundations-for-developers) (Syntax)
- [Design tips for developers](https://syntax.fm/show/068/design-tips-for-developers) (Syntax)
- [Tactical design advice for developers](https://changelog.com/podcast/333) (The Changelog)
- [UI Design for Developers](https://designcode.io/ui-design-for-developers) (Meng To)
- [Learning How to Design](https://shoptalkshow.com/343/) (ShopTalk)
- [Laws of UX](https://lawsofux.com/) 
- [Design Principles](https://principles.design/)
- https://twitter.com/mrcndrw/status/1283078825870532609?s=20
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
- [Design Details: Principles of Design](https://designdetails.fm/episodes/220880) - Design Details' most downloaded episode of all time!
- [7 Rules for Creating Gorgeous UI](https://learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-1.html)
  - Light comes from the sky
  - Black and white first
  - Double your whitespace
  - Learn the methods of overlaying text on images
  - Make text pop — and un-pop
  - Use only good fonts
  - Steal like an artist

## More Free Stuff

- [Canva Design School](https://designschool.canva.com/)
- [Degreeless.design](https://www.degreeless.design/#basics)
- Free tier software https://free-for.dev/#/
- https://github.com/Vincenius/link-list
- Public API's for demos https://github.com/public-api-lists/public-api-lists
- Demo HTML
  - https://github.com/cristurm/nyan-cat
  - https://github.com/netlify/netlify-drop-demo-site/archive/master.zip
- [The Design Newsletter](https://learnui.design/newsletter.html)

## Paid Premium Services

- Design Pickle
- Manypixels
- Contentfly (copywriting)

## Courses

- https://learnux.io/
- for the 4 minute version: https://jgthms.com/web-design-in-4-minutes/
- for the 4 hour version: https://frontendmasters.com/courses/design-for-developers/
- for the 4 week version: https://refactoringui.com/book
- for the 4 month version: https://learnui.design/
- i may be signing up for https://shiftnudge.com/ .. its super expensive tho
- upcoming design for devs book from adrian twarog https://www.enhanceui.com/
- meng to https://designcode.io/ui-design-for-developers

## The value of design

- https://medium.com/@awilkinson/slack-s-2-8-billion-dollar-secret-sauce-5c5ec7117908

## Interaction/Design Inspo

- Dribbble ofc
- https://pageflows.com/
- https://uimovement.com/
- https://uidesigndaily.com/
- https://www.siteinspire.com/
- https://www.landingfolio.com
- http://www.cssmania.com/
- https://www.uisources.com/
- [Codrops](https://tympanus.net/codrops/2019/06/04/inspirational-websites-roundup-5/)
- https://collectui.com/
- https://theanimatedweb.com/
- https://pageflows.com/
- https://goodui.org/ "leaked ab tests" 

## Mock APIs

- https://dog.ceo/
- https://randomuser.me/
- https://swapi.dev/
- https://jsonplaceholder.typicode.com/
- https://github.com/public-apis/public-apis
- https://public-apis.io/ (A Directory of Free Public & Open Rest APIs)
- https://pokeapi.co/api/v2/
- https://github.com/Marak/faker.js - generate fake pdf https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/
- https://dev.to/dailydevtips1/15-better-lorem-ipsum-generators-3f99

## Emails

- https://www.goodemailcopy.com/
