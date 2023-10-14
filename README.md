# &lt;WebdevHome /&gt;

![Build and deploy website](https://github.com/webdevhome/webdevhome.github.io/workflows/Build%20and%20deploy%20website/badge.svg)

[webdevhome.github.io](https://webdevhome.github.io)

This is a collection of links I, as a web developer, use very frequently. Maybe you will find them useful, too.

## Credits

[TypeScript](https://github.com/microsoft/TypeScript)
• [React](https://github.com/facebook/react)
• [farzher/fuzzysort](https://github.com/farzher/fuzzysort)
• [Sass](https://github.com/sass/dart-sass)
• [Simple Icons](https://github.com/simple-icons/simple-icons)
• [Material Design Icons](https://github.com/Templarian/MaterialDesign)

## Development

To start WebdevHome locally and make some changes quickly run:

~~~
npm ci
~~~

and then:

~~~
npm run dev
~~~

This starts a watcher that builds the project every time you make some changes. Also, the local version of your app (running on localhost:3000) gets opened in your default browser automatically.

End the watcher script by pressing `[Ctrl]` + `[C]` in your terminal.

## Run in a Docker environment

If you want to run this app in your own Docker environment run the following commands from inside the project root directory:

~~~
docker-compose build
~~~

and then:

~~~
docker-compose up
~~~

*Or `docker-compose up -d` to run in detached mode.*

*Halt the app in detached mode by running `docker-compose down`.*

If you make any changes, start again at `docker-compose build`.

**Important:** If you change the `dependencies` in `package.json` directly you have to run `npm install` locally before running `docker-compose build`! Better use `npm i <package-name>` to add dependencies or `npm un <package-name>` to remove packages instead.

---

Developed and maintained by: Andreas Linnert ([alinnert](https://github.com/alinnert))
