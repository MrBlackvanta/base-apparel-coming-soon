# Base Apparel coming soon

My solution to the [Base Apparel coming soon page](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://base-apparel-coming-soon.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/base-apparel-coming-soon

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

Four colours moved to clear AA:

|                             | design    | built     | contrast     |
| --------------------------- | --------- | --------- | ------------ |
| "WE'RE" heading             | `#CE9898` | `#C17D7D` | 2.28 to 3.00 |
| Paragraph and placeholder   | `#CE9898` | `#AF5757` | 2.28 to 4.51 |
| Error border, icon, message | `#F96464` | `#CE3B43` | 2.77 to 4.50 |
| Input border                | `#E6CCCC` | `#A38989` | 1.41 to 3.00 |

Both pinks keep the original hue and saturation exactly and differ only in lightness, so
they read as one two-step scale rather than two unrelated colours. There was a marginally
closer desaturated match but it loses the rose character, which isn't a good trade.

**The placeholder's 50% opacity had to go.** At half strength over this background no
colour reaches 4.5:1, not even pure black, because half the backdrop always shows through.
So the placeholder takes the body colour at full strength rather than becoming a third
pink.

**One error red, not two.** The design's red fails both as a 2px boundary and as message
text. A light red for the border and a darker one for the message thirty pixels below
would read as a mistake, so one colour does both. The border ends up darker than it
strictly needs to be.

The white arrow on the pink button stays as drawn. Darkening it would put a dark glyph on
the page's one focal element, and the button carries an `aria-label` so nothing is lost
for assistive tech.

### Layout

**The design file has no tablet frame, so the tablet layout is a decision.** The two-column
split starts at 768px with the design's own 830/610 proportion. Stretching mobile to 1024
would have upscaled the 375-wide crop 2.7 times across the widest image on the page.

The heading steps 40 to 48 to 64px rather than jumping straight to the design's 64. At
768 the content column offers 355px and 64px needs 385, so the design's size would spill
into the hero. It first fits around 834px and ships from 1024.

The hero band switches source and shape at 480px, which is exactly where the mobile crop's
3:2 ratio equals the desktop crop's fixed height, so the transition is seamless and the
worst upscale anywhere on the page is 1.28x.

Above 1440 the columns stay proportional rather than pinning.

**The input's boundary is an inset ring, not a border.** The design draws 1px normally and
2px on error. As a border that shifts the content box the moment an error appears; an
inset ring is painted rather than laid out, so the placeholder and caret hold still.

### Other

**The hero photo isn't the one supplied with the challenge.** It's a different shot of the
same wardrobe and pose, cropped to the same two sizes and framed to match, so the layout
is unaffected but it won't pixel-match the design JPGs. There's a third, larger variant
behind `srcset` for retina, otherwise the hero upscaled 1.8x at 2560px.

**The success state is an addition.** The brief only asks for error handling and the
design draws none, so a valid submit clears the field and announces a confirmation in the
same slot the error uses, keyed so a repeat submission re-announces.

The mobile input is 14px, which makes iOS Safari zoom on focus. The design specifies 14px
and that's what I shipped.

Colours come from the design file rather than the style guide, which rounds all five a
point or two off. The file also uses two colours the guide never lists.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
