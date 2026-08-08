# Photos

Drop your temple / jatre / village photos in this folder, then list them in
`src/data/gallery.js`:

```js
{
  id: 'moola',
  cat: 'devi',
  src: '/images/moola-devaru.jpg',   // <- your file
  caption: { kn: '...', en: '...' },
}
```

Also used by the About section — open `src/components/About.jsx` and change
`src={null}` to `src="/images/moola-devaru.jpg"`.

Tips
- Keep files under ~400 KB each (resize to about 1600 px on the long edge).
- `.jpg` for photographs, `.png` only for graphics with flat colour.
