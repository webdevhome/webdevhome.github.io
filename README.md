# webdevhome

webdevhome is a collection of links I, as a web developer, use very frequently. Maybe you will find them useful, too. You can also access the search feature of some of these pages from within webdevhome.

[Open webdevhome](https://webdevhome.github.io)

## Developed with

[![](https://img.shields.io/badge/Vite-354050?logo=vite)](https://github.com/vitejs/vite) [![](https://img.shields.io/badge/TypeScript-354050?logo=typescript)](https://github.com/microsoft/TypeScript) [![](https://img.shields.io/badge/React-354050?logo=react&logoColor=61DAFB)](https://github.com/facebook/react) [![](https://img.shields.io/badge/Nano_Stores-354050?logo=nanostores)](https://github.com/nanostores/nanostores) [![](https://img.shields.io/badge/fuzzysort-354050)](https://github.com/farzher/fuzzysort)

[![](https://img.shields.io/badge/Headless_UI-354050?logo=headlessui)](https://github.com/tailwindlabs/headlessui) [![](https://img.shields.io/badge/Tailwind_CSS-354050?logo=tailwind-css&logoColor=00bcff)](https://github.com/tailwindlabs/tailwindcss)

[![](https://img.shields.io/badge/Simple_Icons-354050?logo=simpleicons)](https://github.com/simple-icons/simple-icons) [![](https://img.shields.io/badge/Lucide_Icons-354050?logo=lucide)](https://github.com/lucide-icons/lucide)

## How to use

### Filter and search

By just typing in the name of a website the links get filtered automatically. E.g. just typing `gh` filters all pages that contain those letters, most importantly GitHub.

Now press `Return` to go to the GitHub homepage, or press `Tab` to use on site search to directly search for things on GitHub. After entering a search term and pressing `Return` the search results page of that particular website opens with your search term already applied.

You can also use the magnifier icon next to a link to enter on site search for that site directly.

### Link descriptions

Hover over a link to get a description of what the linked website is about.

You can also permanently show this description for all links by enabling the option "Show links description" in the "Options" menu.

### Customize visible links

By clicking on "Options" and then "Show/hide links..." you can select which links are shown initially.

You can still access hidden links by clicking "Show x hidden links" or by using the search. Hidden links will be sorted to the bottom when using the search.

**Caveat:** If you hide all links inside a category that category is hidden entirely. That means there's also no "Show x hidden links" button. To show a category at least one link in that category must be visible. You can still find all hidden links in the search though.

### Theme

You can choose between "Light", "Dark", and "System". The "System" theme will automatically apply the light or dark theme depending on your operating system or browser settings.

### Import and export hidden links

You can export a list of all hidden links to the clipboard and import them from the clipboard. The format is a simple JSON array. That way you can share the list of your hidden links between multiple devices.

### Keyboard shortcuts

There are a couple of keyboard shortcuts that you can use:

| Shortcut           | Action                                                    |
| ------------------ | --------------------------------------------------------- |
| `alt/option` + `1` | Focus the jump links sidebar (if it's visible).           |
| `alt/option` + `2` | Focus the main links area.                                |
| `alt/option` + `E` | Enter customization mode where you can show/hide links.   |
| `alt/option` + `B` | Toggle jump links sidebar.                                |
| `Escape`           | Exit out of search, on site search or customization mode. |

## Run development

### Using Node.js

```shell
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app is now running on http://localhost:5173.

Exit the dev server by pressing `ctrl` + `C` in your terminal.

### SimpleIcons

Whenever the app needs to render an icon from SimpleIcons a JSON file is being fetched that only contains the necessary data for that one icon. These files are located at `public/simple-icons/*.json` but they are not included in the repository. They get generated when you run `npm run dev` or `npm run build`. However, you can generate them manually by running `npm run build:icons`. This might be necessary if you for example update the `simpleicons` npm package while the dev server is running.

## Run production

### Using static hosting

- Clone this repository.
- Change `config.json` how you see fit.
- Run `npm install`.
- Run `npm run build`.
- Deploy the content of the `dist` folder.

### Using Docker

Using Docker you can host webdevhome yourself and even customize the app. You can choose your own app name as well what categories and links should be available.

Create a new folder and place the following content inside it:

- A new file named `compose.yml`
- A new file named `config.json`
  - This is where you configure the app and define your links and categories.
- A new folder named `icons`
  - You can place your custom icons in here.

Put the following into your `compose.yml` and change the settings marked with comments:

```yaml
name: webdevhome

services:
  app:
    container_name: webdevhome
    build:
      context: https://github.com/webdevhome/webdevhome.github.io.git#latest
      dockerfile: docker/Dockerfile
    ports:
      - target: 80
        published: 8123 # Change this to a port that is available in your environment.
        # Uncomment the following to use the original links that are available under https://webdevhome.github.io
        #args:
        #- use_dynamic_config=false

    volumes:
      - type: bind
        source: ./config.json
        target: /usr/share/nginx/html/public/config.json
        read_only: true
      - type: bind
        source: ./icons
        target: /usr/share/nginx/html/icons
        read_only: true
```

Put the following into your `config.json`:

```json
{
  "appTitle": ["my", "links"],
  "categories": {
    "category1": {
      "title": "Category 1",
      "color": "red",
      "links": {
        "github": {
          "title": "GitHub",
          "url": "https://github.com",
          "icon": "si:github",
          "searchUrl": "https://github.com/search?q={search}"
        }
      }
    }
  }
}
```

Then run `docker compose up` in that directory.

The application is now available under `http://localhost:8123` (or whatever port you use).

## `config.json` documentation

### Config root

| Property     | Type                                 | Description                                                      |
| ------------ | ------------------------------------ | ---------------------------------------------------------------- |
| `appTitle`   | `string\|string[]`                   | The title of the app. Displayed in the tab title and app header. |
| `categories` | `Record<string, CategoryDefinition>` | A list of your categories including all their links.             |

### Type `CategoryDefinition`

| Property | Type                             | Description                                                            |
| -------- | -------------------------------- | ---------------------------------------------------------------------- |
| `title`  | `string`                         | The name of the category.                                              |
| `color`  | `string`                         | The color of the category. Only TailwindCSS color names are supported. |
| `links`  | `Record<string, LinkDefinition>` | A list of all links in that category.                                  |

### Type `CategoryDefinition.color`

One of the following values:

- red
- orange
- amber
- yellow
- lime
- green
- emerald
- teal
- cyan
- sky
- blue
- indigo
- violet
- purple
- fuchsia
- pink
- rose
- slate
- gray
- zinc
- neutral
- stone
- taupe
- mauve
- mist
- olive

### Type `LinkDefinition`

| Property    | Type     | Description                                                |
| ----------- | -------- | ---------------------------------------------------------- |
| `title`     | `string` | The title of the link.                                     |
| `url`       | `string` | The url of the link.                                       |
| `icon`      | `string` | The icon of that link. (see below for more details)        |
| `color`     | `string` | The color that should be used for the icon.                |
| `searchUrl` | `string` | The search url for that link. (see below for more details) |

### Type `LinkDefinition.icon`

Currently two types of icons are supported: [SimpleIcons](https://simpleicons.com) and custom icons.

To define an icon from **SimpleIcons** use a value of the format `si:{iconname}` – e.g. `"icon": "si:github"`. You can get the names for each icon from the SimpleIcons website.

To define a **custom icon** use a value of the format `file:{filepath}` – e.g. `"icon": "file:icons/github.svg"`. `filepath` is used like this: `<img src={filepath}>`. This means you can use any file format that's supported by `<img>` including `.jpg`, `.png`, or `.svg`. The file must be located in your `icons` folder. In the example above there must be a file named `icons/github.svg`.

### Type `LinkDefinition.searchUrl`

Define here the URL of the websites search page with the search term replaced by `{search}` – e.g. `"searchUrl": "https://github.com/search?q={search}"`.
