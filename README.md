# WebdevHome

This is a collection of links I, as a web developer, use very frequently. Maybe you will find them useful, too.

[Open WebdevHome](https://webdevhome.github.io)

## How to use

### Search links

By just typing in the name of a website the links get filtered automatically.

E.g. typing `gh` &raquo; `Return` opens GitHub.

### Search on other websites

By clicking the magnifier icon next to a link, or by pressing `Tab` while on the search page you can enter a search term
that gets sent to that website.

E.g. typing `npm` &raquo; `Tab` &raquo; `react` &raquo; `Return` starts a search for "react" on npm.com.

### Link info

Hover over a link and a tooltip will appear with more details about the linked website.

### Customize links

By clicking on "Options" and then "Customize links" you can hide some links that you don't want to see or use less
frequently.

You can still access them by clicking "Show x hidden links" or by using the search. Hidden links will be sorted to the
bottom while using the search.

**Caveat:** If you hide all links inside a group the group is hidden entirely. So, there's no "Show x hidden links"
button. You can still find them in the search though.

### Theme

You can choose between "Light", "Dark", and "System". The "System" theme will apply the light or dark theme depending on
your operating system or browser settings.

## Run development

### Using Node.js

```shell
# Install dependencies
npm ci

# Start dev server
npm run dev
```

The app is now running on http://localhost:5173.

End the dev server by pressing `[Ctrl]` + `[C]` in your terminal.

### Using Docker

```shell
# Build image
docker build . --target dev --tag webdevhome-dev --build-arg warp=true --build-arg ls_improvement=true --build-arg rm_cp_mv_interactive=true

# Create and run container
docker run --name webdevhome-dev --publish 5173:5173 --detach --tty webdevhome-dev
```

### Using Docker compose

```shell
docker compose up --build --detach --remove-orphans dev
```

### Build args

| Arg                  | Values          | Default | Description                                                                     |
|:---------------------|:----------------|:--------|:--------------------------------------------------------------------------------|
| ls_improvement       | `true`, `false` | `false` | Enable colors for `ls` command and enable aliases `ls`, `ll`, and `l`.          |
| rm_cp_mv_interactive | `true`, `false` | `false` | Enable aliases for `rm`, `cp`, and `mv` to automatically include the `-i` flag. |
| warp                 | `true`, `false` | `false` | Enable Warp support for console.                                                |

## Run production

### Using Docker

```shell
# Build image
docker build . --target prod --tag webdevhome

# Create and run container
docker run --name webdevhome --publish 80:80 --detach webdevhome-prod
```

Change the ports accordingly.

### Using Docker compose

If you want to run this app in your own Docker environment run the following commands from inside the project root
directory:

```shell
docker compose up --build --detach --remove-orphans webdevhome
```

## Credits

[TypeScript](https://github.com/microsoft/TypeScript)
• [React](https://github.com/facebook/react)
• [farzher/fuzzysort](https://github.com/farzher/fuzzysort)
• [TailwindCSS](https://tailwindcss.com/)
• [Simple Icons](https://github.com/simple-icons/simple-icons)
• [Material Design Icons](https://github.com/Templarian/MaterialDesign)
