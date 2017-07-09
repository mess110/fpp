# fpp

Fantastic Power Point

Inserts `boilerplate.html` within a preconfigured `deck.js` presentation.

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

# thanks

* [deck.js](https://github.com/imakewebthings/deck.js)
