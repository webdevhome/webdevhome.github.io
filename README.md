# WebdevHome

WebdevHome is a collection of links I, as a web developer, use very frequently. Maybe you will find them useful, too. You can also access the search feature of some of these pages from within WebdevHome.

[Open WebdevHome](https://webdevhome.github.io)

## Credits

[TypeScript](https://github.com/microsoft/TypeScript)
• [React](https://github.com/facebook/react)
• [xoid](https://github.com/xoidlabs/xoid)
• [Headless UI](https://github.com/tailwindlabs/headlessui)
• [farzher/fuzzysort](https://github.com/farzher/fuzzysort)

[TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
• [Simple Icons](https://github.com/simple-icons/simple-icons)
• [Lucide Icons](https://github.com/lucide-icons/lucide)

## How to use

### Filter and search

By just typing in the name of a website the links get filtered automatically.

E.g. just typing `gh` filters all pages that contain those letters, most importantly GitHub.

Now press `Return` to go to the GitHub homepage, or press `Tab` and enter a search term to search for things on GitHub. Doing so opens the search results page of that particular website.

You can also use the magnifier icon next to a link to start entering the search term for that site directly.

### Link descriptions

Hover over a link to get a description of what the linked website is about.

You can also permanently show this description for all links by enabling the option "Show links description" in the "Options" menu.

### Customize visible links

By clicking on "Options" and then "Show/hide links..." you can select which links are shown initially.

You can still access hidden links by clicking "Show x hidden links" or by using the search. Hidden links will be sorted to the bottom when using the search.

**Caveat:** If you hide all links inside a group the group is hidden entirely. So, there's also no "Show x hidden links" button. To show a group at least one link in that group must be visible. You can still find all hidden links in the search though.

### Theme

You can choose between "Light", "Dark", and "System". The "System" theme will automatically apply the light or dark theme depending on your operating system or browser settings.

### Import and export hidden links

You can export a list of all hidden links to the clipboard and import them from the clipboard. The format is a simple JSON array. That way you can share the list of your hidden links between multiple devices.

## Run development

### Using Node.js

```shell
# Install dependencies
npm install

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
| :------------------- | :-------------- | :------ | :------------------------------------------------------------------------------ |
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

```shell
docker compose up --build --detach --remove-orphans webdevhome
```
