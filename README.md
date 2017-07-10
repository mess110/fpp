# fpp

Fantastic Power Point

Inserts `boilerplate.html` within a preconfigured `deck.js` presentation and
outputs a file `boilerplate.fpp.html`.

Under the hood, it uses deck.js, compiles sass, convers images to base64
inline in css, concatenates html files from theme, converts html images to
base64 inline and saves the output as a single file which holds the entire
presentation.

Full build:

```
npm install
PRESENTATION=boilerplate THEME=tkw npm run start
```

Rebuild only the boilerplate (faster):

```
npm run concat
```

# todo

* [x] compile to a single file
* [x] templating for making fast presentations
* [x] syntax highlighting
* [ ] keyboard shortcuts (ESC, slide overview)
* [ ] ctrl buttons (fullscreen, slide overview)
* [ ] remote control
* [ ] generic template
* [ ] yaml presentations

# thanks

* [deck.js](https://github.com/imakewebthings/deck.js)
