import {
  si30secondsofcode,
  siAlpinedotjs,
  siAlternativeto,
  siAngular,
  siApachecouchdb,
  siApollographql,
  siApple,
  siApplemusic,
  siAppwrite,
  siAsana,
  siAsciidoctor,
  siAssemblyscript,
  siAstro,
  siAtlassian,
  siAuth0,
  siAutoprefixer,
  siAwesomelists,
  siAxios,
  siBabel,
  siBem,
  siBiome,
  siBitbucket,
  siBlazor,
  siBootstrap,
  siBruno,
  siBuddy,
  siBulma,
  siBun,
  siChai,
  siChromewebstore,
  siCircleci,
  siCloudflare,
  siCodesandbox,
  siComposer,
  siCraftcms,
  siCrystal,
  siCss,
  siCssmodules,
  siCursor,
  siCypress,
  siD3,
  siDailydotdev,
  siDart,
  siDatefns,
  siDeezer,
  siDeno,
  siDigitalocean,
  siDirectus,
  siDocker,
  siDotnet,
  siDrupal,
  siEditorconfig,
  siElectron,
  siEsbuild,
  siEslint,
  siExpress,
  siFastify,
  siFigma,
  siFirebase,
  siFirefoxbrowser,
  siFishshell,
  siFlutter,
  siFlydotio,
  siFontawesome,
  siGatsby,
  siGit,
  siGitbook,
  siGitea,
  siGithub,
  siGitignoredotio,
  siGitkraken,
  siGitlab,
  siGo,
  siGooglechrome,
  siGooglecloud,
  siGooglefonts,
  siGraphql,
  siGrav,
  siGsap,
  siGulp,
  siHaveibeenpwned,
  siHeadlessui,
  siHotwire,
  siHtml5,
  siHtmx,
  siI18next,
  siImmer,
  siInsomnia,
  siIonic,
  siJavascript,
  siJenkins,
  siJest,
  siJetbrains,
  siJsfiddle,
  siJson,
  siJsonwebtokens,
  siKeepachangelog,
  siKirby,
  siKotlin,
  siKubernetes,
  siLaravel,
  siLatex,
  siLess,
  siLetsencrypt,
  siLit,
  siLodash,
  siLucide,
  siMariadb,
  siMarkdown,
  siMaterialdesign,
  siMdnwebdocs,
  siMermaid,
  siMixcloud,
  siMobx,
  siMocha,
  siMongodb,
  siMozilla,
  siMui,
  siMysql,
  siNanostores,
  siNativescript,
  siNeo4j,
  siNestjs,
  siNetlify,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siNuget,
  siNushell,
  siNuxt,
  siNvm,
  siOctobercms,
  siOctopusdeploy,
  siOpenjdk,
  siOpenjsfoundation,
  siOwasp,
  siOxc,
  siPackagist,
  siPandoc,
  siPexels,
  siPhp,
  siPinia,
  siPnpm,
  siPostcss,
  siPostgresql,
  siPostman,
  siPreact,
  siPrettier,
  siPuppeteer,
  siPython,
  siQuarkus,
  siQuasar,
  siReact,
  siReactivex,
  siReactquery,
  siReactrouter,
  siReadthedocs,
  siReason,
  siReddit,
  siRedis,
  siRedux,
  siRender,
  siRescript,
  siRolldown,
  siRollupdotjs,
  siRuby,
  siRubyonrails,
  siRust,
  siSass,
  siSelenium,
  siSemver,
  siServerfault,
  siShieldsdotio,
  siSimpleicons,
  siSocketdotio,
  siSolid,
  siSoundcloud,
  siSpotify,
  siSpring,
  siSqlite,
  siStackoverflow,
  siStackshare,
  siStatamic,
  siStencil,
  siStimulus,
  siStyledcomponents,
  siStylus,
  siSupabase,
  siSuperuser,
  siSurrealdb,
  siSvelte,
  siSwc,
  siSwift,
  siSymfony,
  siTailwindcss,
  siTanstack,
  siTauri,
  siTelegram,
  siThreedotjs,
  siToml,
  siToptal,
  siTurbo,
  siTypescript,
  siTypst,
  siUnpkg,
  siUnsplash,
  siVagrant,
  siVanillaextract,
  siVercel,
  siVirtualbox,
  siVite,
  siVitepress,
  siVitest,
  siVscodium,
  siVuedotjs,
  siWebpack,
  siWhatsapp,
  siWordpress,
  siX,
  siXstate,
  siYaml,
  siYarn,
  siYii,
  siYoutube,
  siYoutubemusic,
  siZedindustries,
  siZig,
  siZod,
  siZsh,
} from 'simple-icons'
import { type LinksData } from './links/links.ts'

export const linksData: LinksData = {
  sourceControl: {
    title: 'Source Control & CI/CD',
    color: 'mist',
    links: {
      github: {
        title: 'GitHub',
        url: 'https://github.com',
        icon: siGithub,
        searchUrl: 'https://github.com/search?q={search}',
      },
      gitlab: {
        title: 'GitLab',
        url: 'https://gitlab.com',
        icon: siGitlab,
        searchUrl: 'https://gitlab.com/search?utf8=%E2%9C%93&search={search}',
      },
      gitea: {
        title: 'Gitea',
        url: 'https://gitea.com',
        icon: siGitea,
        searchUrl:
          'https://gitea.com/explore/repos?only_show_relevant=false&q={search}&sort=recentupdate',
      },
      atlassianHome: {
        title: 'Atlassian Home',
        url: 'https://start.atlassian.com',
        description: 'A portal page to access your Atlassian services.',
        icon: siAtlassian,
      },
      bitbucket: {
        title: 'Bitbucket',
        url: 'https://bitbucket.org',
        icon: siBitbucket,
      },
      asana: {
        title: 'Asana',
        url: 'https://asana.com',
        description: 'Project management service.',
        icon: siAsana,
      },
      circleCi: {
        title: 'CircleCI',
        url: 'https://circleci.com',
        description: 'CI/CD/Deployment service.',
        icon: siCircleci,
      },
      jenkins: {
        title: 'Jenkins',
        url: 'https://www.jenkins.io',
        description: 'CI/CD/Deployment service.',
        icon: siJenkins,
      },
      buddyWorks: {
        title: 'Buddy',
        url: 'https://buddy.works',
        description: 'CI/CD/Deployment service.',
        icon: siBuddy,
      },
      octopusDeploy: {
        title: 'Octopus Deploy',
        url: 'https://octopus.com',
        description: 'CI/CD/Deployment service.',
        icon: siOctopusdeploy,
      },
    },
  },

  hosting: {
    title: 'Hosting & Cloud Services',
    color: 'mist',
    links: {
      vercel: {
        title: 'Vercel',
        url: 'https://vercel.co',
        description: 'Hosting solution by the developers of Next.js.',
        icon: siVercel,
      },
      netlify: {
        title: 'Netlify',
        url: 'https://netlify.com',
        icon: siNetlify,
      },
      heroku: {
        title: 'Heroku',
        url: 'https://heroku.com',
        searchUrl: 'https://heroku.com/search?s={search}',
      },
      renderDotCom: {
        title: 'Render',
        url: 'https://render.com',
        icon: siRender,
      },
      flyDotIo: {
        title: 'Fly.io',
        url: 'https://fly.io',
        icon: siFlydotio,
      },
      fortRabbit: {
        title: 'Fortrabbit',
        url: 'https://www.fortrabbit.com',
        description: 'PHP hosting platform.',
      },
      msAzure: {
        title: 'Microsoft Azure',
        url: 'https://azure.microsoft.com',
        searchUrl: 'https://azure.microsoft.com/search/?q={search}',
      },
      aws: {
        title: 'Amazon Web Services',
        url: 'https://aws.amazon.com',
        searchUrl: 'https://aws.amazon.com/de/search/?searchQuery={search}',
      },
      googleCloud: {
        title: 'Google Cloud',
        url: 'https://cloud.google.com',
        icon: siGooglecloud,
        searchUrl: 'https://cloud.google.com/s/results/?q={search}',
      },
      firebase: {
        title: 'Firebase',
        url: 'https://firebase.google.com',
        icon: siFirebase,
        searchUrl: 'https://firebase.google.com/s/results?q={search}',
      },
      supabase: {
        title: 'Supabase',
        url: 'https://supabase.com',
        icon: siSupabase,
      },
      appwrite: {
        title: 'Appwrite',
        url: 'https://appwrite.io',
        icon: siAppwrite,
      },
      digitalOcean: {
        title: 'DigitalOcean',
        url: 'https://www.digitalocean.com',
        icon: siDigitalocean,
      },
      cloudflare: {
        title: 'Cloudflare',
        url: 'https://www.cloudflare.com',
        icon: siCloudflare,
        searchUrl:
          'https://www.cloudflare.com/searchresults/#q={search}&f[Language]=English',
      },
    },
  },

  packages: {
    title: 'Packages',
    color: 'orange',
    links: {
      npm: {
        title: 'npm',
        url: 'https://npmjs.com',
        description: 'Node.js package directory and package manager.',
        icon: siNpm,
        searchUrl: 'https://www.npmjs.com/search?q={search}',
      },
      npmx: {
        title: 'npmx',
        url: 'https://npmx.dev',
        description: 'A fast, modern browser for the npm registry.',
        searchUrl: 'https://npmx.dev/search?q={search}',
      },
      yarn: {
        title: 'Yarn',
        url: 'https://yarnpkg.com',
        description: 'Alternative package manager for Node.js.',
        icon: siYarn,
        searchUrl: 'https://yarnpkg.com/search?q={search}',
      },
      pnpm: {
        title: 'pnpm',
        url: 'https://pnpm.io',
        description: 'Alternative package manager for Node.js.',
        icon: siPnpm,
      },
      unpkg: {
        title: 'unpkg',
        url: 'https://unpkg.com',
        description: 'A content delivery network for everything on npm.',
        icon: siUnpkg,
      },
      phpComposer: {
        title: 'Composer',
        url: 'https://getcomposer.org',
        description: 'PHP package manager.',
        icon: siComposer,
      },
      packagist: {
        title: 'Packagist',
        url: 'https://packagist.org',
        description: 'PHP package directory.',
        icon: siPackagist,
        searchUrl: 'https://packagist.org/?query={search}',
      },
      nuget: {
        title: 'Nuget',
        url: 'https://nuget.org',
        description: '.Net package manager.',
        icon: siNuget,
        searchUrl: 'https://www.nuget.org/packages?q={search}',
      },
      goPackages: {
        title: 'Go Packages',
        url: 'https://pkg.go.dev',
        description: 'Golang package directory.',
        icon: siGo,
        searchUrl: 'https://pkg.go.dev/search?q={search}',
      },
      rustCrates: {
        title: 'Rust Crates',
        url: 'https://crates.io',
        description: 'Rust package directory.',
        icon: siRust,
        searchUrl: 'https://crates.io/search?q={search}',
      },
      dartPackages: {
        title: 'Dart Packages',
        url: 'https://pub.dev',
        description: 'Dart package directory.',
        icon: siDart,
        searchUrl: 'https://pub.dev/packages?q={search}',
      },
      dockerHub: {
        title: 'Docker Hub',
        url: 'https://hub.docker.com',
        description: 'Docker image directory.',
        icon: siDocker,
        searchUrl: 'https://hub.docker.com/search?q={search}',
      },
    },
  },

  codeRelated: {
    title: 'Code Related Services',
    color: 'orange',
    links: {
      '30secsOfCode': {
        title: '30 seconds of code',
        url: 'https://30secondsofcode.org',
        description: 'Short code snippets for repeating programming tasks.',
        icon: si30secondsofcode,
      },
      bundlePhobia: {
        title: 'BundlePhobia',
        url: 'https://bundlephobia.com',
        description: 'Check bundle size of npm packages.',
        searchUrl: 'https://bundlephobia.com/result?p={search}',
      },
      bundleJs: {
        title: 'bundlejs',
        url: 'https://bundlejs.com',
        description: 'A npm package size checker.',
      },
      jsBenchmark: {
        title: 'JS Benchmark',
        url: 'https://jsbenchmark.com',
        description:
          'A website where you can write small benchmarks in the browser.',
      },
      gitignoreDotIo: {
        title: 'gitignore.io',
        url: 'https://www.toptal.com/developers/gitignore',
        description: 'Generate .gitignore files (by Toptal).',
        icon: siGitignoredotio,
      },
      alternativeTo: {
        title: 'AlternativeTo',
        url: 'https://alternativeto.net',
        description: 'Find alternatives to some given technology.',
        icon: siAlternativeto,
        searchUrl: 'https://alternativeto.net/browse/search?q={search}',
      },
      stackShare: {
        title: 'StackShare',
        url: 'https://stackshare.io',
        description:
          "A service that let's you analyze and manage your technology stack. You can also browse other company's stacks.",
        icon: siStackshare,
        searchUrl: 'https://stackshare.io/search/q={search}',
      },
    },
  },

  helpDiscuss: {
    title: 'Find Help & Discuss',
    color: 'cyan',
    links: {
      stackOverflow: {
        title: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        icon: siStackoverflow,
        searchUrl: 'https://stackoverflow.com/search?q={search}',
      },
      superUser: {
        title: 'Super User',
        url: 'https://superuser.com',
        icon: siSuperuser,
        searchUrl: 'https://superuser.com/search?q={search}',
      },
      serverFault: {
        title: 'Server Fault',
        url: 'https://serverfault.com',
        icon: siServerfault,
        searchUrl: 'https://serverfault.com/search?q={search}',
      },
      reddit: {
        title: 'Reddit',
        url: 'https://reddit.com',
        icon: siReddit,
        searchUrl: 'https://www.reddit.com/search/?q={search}',
      },
      twitter: {
        title: 'X / Twitter',
        url: 'https://twitter.com',
        icon: siX,
        searchUrl: 'https://twitter.com/search?q={search}',
      },
      whatsAppWeb: {
        title: 'WhatsApp Web',
        url: 'https://web.whatsapp.com',
        icon: siWhatsapp,
      },
      telegramWeb: {
        title: 'Telegram Web',
        url: 'https://web.telegram.org',
        icon: siTelegram,
      },
      msTeams: {
        title: 'Microsoft Teams',
        url: 'https://www.microsoft.com/microsoft-teams/log-in',
      },
      slack: {
        title: 'Slack',
        url: 'https://slack.com',
      },
    },
  },

  docsLearning: {
    title: 'Docs & Learning Resources',
    color: 'cyan',
    links: {
      devDocsDotIo: {
        title: 'DevDocs',
        url: 'https://devdocs.io',
        description: 'Collection of language and library documentations.',
      },
      readTheDocs: {
        title: 'Read the Docs',
        url: 'https://about.readthedocs.com',
        description: 'Service for writing documentation for your libraries.',
        icon: siReadthedocs,
        searchUrl: 'https://readthedocs.org/search/?q={search}',
      },
      gitBook: {
        title: 'GitBook',
        url: 'https://www.gitbook.com',
        icon: siGitbook,
      },
      mdnWebDocs: {
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        description:
          'Web technology documentation (HTML, CSS, JS, Browser APIs, etc.) by Mozilla.',
        icon: siMdnwebdocs,
        searchUrl: 'https://developer.mozilla.org/search?q={search}',
      },
      gitHubDocs: {
        title: 'GitHub Docs',
        url: 'https://docs.github.com',
        icon: siGithub,
        searchUrl:
          'https://docs.github.com/search?search-overlay-input={search}&query={search}',
      },
      msDocs: {
        title: 'Microsoft Docs',
        url: 'https://docs.microsoft.com',
        searchUrl:
          'https://docs.microsoft.com/en-us/search/?search={search}&category=All',
      },
      appleDeveloper: {
        title: 'Apple Developer',
        url: 'https://developer.apple.com',
        icon: siApple,
        searchUrl: 'https://developer.apple.com/search/?q={search}',
      },
      oracleHelpCenter: {
        title: 'Oracle Help Center',
        url: 'https://docs.oracle.com/en',
      },
      cheatography: {
        title: 'Cheatography',
        url: 'https://cheatography.com',
        description: 'List of various cheat sheets.',
        searchUrl: 'https://cheatography.com/explore/search/?q={search}',
      },
      devhintsDotIo: {
        title: 'devhints.io',
        url: 'https://devhints.io/',
        description: 'A list of cheatsheets by Rico Sta. Cruz.',
      },
      emmetCheatSheet: {
        title: 'Emmet Cheat Sheet',
        url: 'https://docs.emmet.io/cheat-sheet',
        description:
          'The official cheat sheet for Emmet - the editor shortcuts to quickly write HTML.',
      },
      learnXInYMinutes: {
        title: 'Learn X in Y minutes',
        url: 'https://learnxinyminutes.com',
        description: 'Resources to learn languages or tools in X minutes.',
      },
      typeLevelTypeScript: {
        title: 'Type Level TypeScript',
        url: 'https://type-level-typescript.com/',
        description: 'A course to learn TypeScript in-depth.',
      },
      publicAPIs: {
        title: 'Public APIs',
        url: 'https://github.com/public-apis/public-apis',
        description: 'A list of public APIs.',
      },
    },
  },

  playgrounds: {
    title: 'Playgrounds',
    color: 'cyan',
    links: {
      codePen: {
        title: 'CodePen',
        url: 'https://codepen.io',
        searchUrl: 'https://codepen.io/search/pens?q={search}',
      },
      codeSandbox: {
        title: 'CodeSandbox',
        url: 'https://codesandbox.io',
        icon: siCodesandbox,
        searchUrl: 'https://codesandbox.io/search?query={search}',
      },
      tsPlayground: {
        title: 'TS Playground',
        url: 'https://www.typescriptlang.org/play',
        icon: siTypescript,
      },
      rustPlayground: {
        title: 'Rust Playground',
        url: 'https://play.rust-lang.org',
        icon: siRust,
      },
      dartPad: {
        title: 'DartPad',
        url: 'https://dartpad.dev',
        icon: siDart,
      },
      sassPlayground: {
        title: 'Sass Playground',
        url: 'https://sass-lang.com/playground',
        icon: siSass,
      },
      jsFiddle: {
        title: 'JSFiddle',
        url: 'https://jsfiddle.net',
        icon: siJsfiddle,
      },
      jsBin: {
        title: 'JS Bin',
        url: 'https://jsbin.com',
      },
      regex101: {
        title: 'regex101',
        url: 'https://regex101.com',
      },
    },
  },

  cssProcessors: {
    title: 'CSS Processors',
    color: 'purple',
    links: {
      sassLang: {
        title: 'Sass',
        url: 'https://sass-lang.com',
        icon: siSass,
      },
      lessLang: {
        title: 'Less',
        url: 'https://lesscss.org',
        icon: siLess,
      },
      stylusLang: {
        title: 'Stylus',
        url: 'https://stylus-lang.com',
        icon: siStylus,
      },
      postCss: {
        title: 'PostCSS',
        url: 'https://postcss.org',
        icon: siPostcss,
      },
      autoprefixer: {
        title: 'Autoprefixer',
        url: 'https://github.com/postcss/autoprefixer',
        description:
          'Library that automatically insert browser prefixes into your CSS.',
        icon: siAutoprefixer,
      },
    },
  },

  cssLibs: {
    title: 'CSS Frameworks & Libraries',
    color: 'purple',
    links: {
      tailwindCss: {
        title: 'Tailwind CSS',
        url: 'https://tailwindcss.com',
        description: 'A utility class based CSS framework.',
        icon: siTailwindcss,
      },
      mui: {
        title: 'MUI',
        url: 'https://mui.com',
        description:
          'React component library with different design languages, including Material UI, and an unstyled version of every component.',
        icon: siMui,
      },
      bootstrap: {
        title: 'Bootstrap',
        url: 'https://getbootstrap.com',
        icon: siBootstrap,
      },
      bulma: {
        title: 'Bulma',
        url: 'https://bulma.io',
        icon: siBulma,
      },
      materialDesign: {
        title: 'Material Design',
        url: 'https://m3.material.io',
        description: "Official documentation for Google's Material Design.",
        icon: siMaterialdesign,
        searchUrl: 'https://material.io/search.html?q={search}',
      },
      cssModules: {
        title: 'CSS Modules',
        url: 'https://github.com/css-modules/css-modules',
        icon: siCssmodules,
      },
      linaria: {
        title: 'linaria',
        url: 'https://linaria.dev/',
        description: 'A zero-runtime CSS-in-JS library.',
      },
      pandaCss: {
        title: 'Panda CSS',
        url: 'https://panda-css.com/',
        description: 'A zero-runtime CSS-in-JS library.',
      },
      vanillaExtract: {
        title: 'vanilla-extract',
        url: 'https://vanilla-extract.style',
        description: 'A zero-runtime CSS-in-JS library.',
        icon: siVanillaextract,
      },
      styledComponents: {
        title: 'Styled Components',
        url: 'https://styled-components.com',
        icon: siStyledcomponents,
      },
      bem: {
        title: 'BEM',
        url: 'https://getbem.com/introduction',
        description:
          'A CSS naming convention that groups classes using namespaces.',
        icon: siBem,
      },
    },
  },

  uiFrameworksDomControlling: {
    title: 'UI Frameworks (DOM controlling)',
    color: 'blue',
    links: {
      reactJs: {
        title: 'React',
        url: 'https://reactjs.org',
        icon: siReact,
      },
      preact: {
        title: 'Preact',
        url: 'https://preactjs.com',
        description: 'Fast and small alternative to React with the same API.',
        icon: siPreact,
      },
      solidJs: {
        title: 'SolidJS',
        url: 'https://www.solidjs.com',
        icon: siSolid,
      },
      vueJs: {
        title: 'Vue',
        url: 'https://vuejs.org',
        icon: siVuedotjs,
      },
      angular: {
        title: 'Angular',
        url: 'https://angular.dev',
        icon: siAngular,
      },
      stencilJs: {
        title: 'Stencil',
        url: 'https://stenciljs.com',
        icon: siStencil,
      },
      litJs: {
        title: 'Lit',
        url: 'https://lit.dev',
        description: 'A library for building web components.',
        icon: siLit,
      },
      svelte: {
        title: 'Svelte',
        url: 'https://svelte.dev',
        description: 'A framework without a runtime.',
        icon: siSvelte,
      },
      jsFrameworkBenchmark: {
        title: 'JS web framework benchmark',
        url: 'https://krausest.github.io/js-framework-benchmark',
        description:
          'A performance benchmark table for many JS web frameworks.',
      },
    },
  },

  uiFrameworksDomEnhancing: {
    title: 'UI Frameworks (DOM enhancing)',
    color: 'blue',
    links: {
      alpineJs: {
        title: 'Alpine.js',
        url: 'https://alpinejs.dev',
        description: 'A library that attaches JS logic to the DOM.',
        icon: siAlpinedotjs,
      },
      htmx: {
        title: 'HTMX',
        url: 'https://htmx.org',
        description: 'A library to add logic to HTML by using attributes.',
        icon: siHtmx,
      },
      hotwire: {
        title: 'Hotwire',
        url: 'https://hotwired.dev',
        description:
          'Hotwire is an alternative approach to building modern web applications without using much JavaScript by sending HTML instead of JSON over the wire. (Hotwire = Turbo + Stimulus)',
        icon: siHotwire,
      },
      hotwiredTurbo: {
        title: 'Turbo',
        url: 'https://turbo.hotwired.dev',
        description:
          'The speed of a single-page web application without having to write any JavaScript.',
        icon: siTurbo,
      },
      stimulusJs: {
        title: 'Stimulus',
        url: 'https://stimulus.hotwired.dev',
        description:
          'A modest JavaScript framework for the HTML you already have.',
        icon: siStimulus,
      },
    },
  },

  uiFrameworksServerSide: {
    title: 'UI Frameworks (Server side)',
    color: 'blue',
    links: {
      astroJs: {
        title: 'Astro',
        url: 'https://astro.build',
        description: 'A framework for content-driven websites.',
        icon: siAstro,
      },
      nextJs: {
        title: 'Next.js',
        url: 'https://nextjs.org',
        description: 'A framework based on React.',
        icon: siNextdotjs,
      },
      nuxtJs: {
        title: 'Nuxt.js',
        url: 'https://nuxt.com',
        description: 'A framework based on Vue.',
        icon: siNuxt,
      },
      vitePress: {
        title: 'VitePress',
        url: 'https://vitepress.dev',
        description: 'Static site generator powered by Vue.',
        icon: siVitepress,
      },
      gatsby: {
        title: 'Gatsby',
        url: 'https://gatsbyjs.org',
        description: 'A framework based on React.',
        icon: siGatsby,
      },
    },
  },

  uiAnimationRendering: {
    title: 'UI, Animation & Rendering',
    color: 'blue',
    links: {
      headlessUi: {
        title: 'Headless UI',
        url: 'https://headlessui.dev',
        description:
          'Unstyled UI components for React and Vue by the developers of Tailwind CSS.',
        icon: siHeadlessui,
      },
      motionJs: {
        title: 'Motion',
        url: 'https://motion.dev',
        description: 'A JavaScript animation library.',
      },
      gsap: {
        title: 'GSAP',
        url: 'https://gsap.com',
        description: 'A JavaScript animation library.',
        icon: siGsap,
      },
      pixiJs: {
        title: 'PixiJS',
        url: 'https://pixijs.com',
        description: 'A 2D WebGL renderer.',
        searchUrl: 'https://pixijs.com/search/?q={search}',
      },
      d3js: {
        title: 'D3',
        url: 'https://d3js.org',
        description: 'A library for data-driven visualizations.',
        icon: siD3,
      },
      threeJs: {
        title: 'Three.js',
        url: 'https://threejs.org',
        description: 'A library for creating 3D graphics.',
        icon: siThreedotjs,
      },
    },
  },

  stateManagement: {
    title: 'State Management',
    color: 'blue',
    links: {
      jotai: {
        title: 'Jotai',
        url: 'https://jotai.org',
        description: 'Atomic state management library for React.',
      },
      zustand: {
        title: 'Zustand',
        url: 'https://zustand-demo.pmnd.rs',
        description: 'State management library for React.',
      },
      pinia: {
        title: 'Pinia',
        url: 'https://pinia.vuejs.org',
        description: 'Data store for Vue.js.',
        icon: siPinia,
      },
      redux: {
        title: 'Redux',
        url: 'https://redux.js.org',
        description: 'State management library.',
        icon: siRedux,
      },
      mobX: {
        title: 'MobX',
        url: 'https://mobx.js.org',
        description: 'State management library.',
        icon: siMobx,
      },
      nanoStores: {
        title: 'Nano Stores',
        url: 'https://github.com/nanostores/nanostores',
        description:
          'A tiny state manager for React, React Native, Preact, Vue, Svelte, Solid, Lit, Angular, and vanilla JS.',
        icon: siNanostores,
      },
      xoid: {
        title: 'xoid',
        url: 'https://www.xoid.dev/',
        description:
          'Framework-agnostic state management library with bindings for multiple frameworks.',
      },
      xState: {
        title: 'XState',
        url: 'https://stately.ai',
        description:
          'Actor-based state management & orchestration for complex app logic.',
        icon: siXstate,
      },
    },
  },

  miscJsLibs: {
    title: 'Other JS Libraries',
    color: 'blue',
    links: {
      reactRouter: {
        title: 'React Router',
        url: 'https://reactrouter.com',
        icon: siReactrouter,
      },
      tanStack: {
        title: 'TanStack',
        url: 'https://tanstack.com',
        description: 'List of open source libraries, including TanStack Query.',
        icon: siTanstack,
      },
      tanStackQuery: {
        title: 'TanStack Query',
        url: 'https://tanstack.com/query',
        description:
          'Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte.',
        icon: siReactquery,
      },
      socketDotIo: {
        title: 'Socket.io',
        url: 'https://socket.io',
        description:
          'Bidirectional and low-latency communication for every platform.',
        icon: siSocketdotio,
      },
      apolloGraphQl: {
        title: 'Apollo',
        url: 'https://www.apollographql.com',
        description: 'GraphQL client.',
        icon: siApollographql,
      },
      axios: {
        title: 'Axios',
        url: 'https://axios-http.com',
        description: 'JS REST client library.',
        icon: siAxios,
      },
      tinyBase: {
        title: 'TinyBase',
        url: 'https://tinybase.org',
        description: 'A reactive data store & sync engine.',
      },
      i18next: {
        title: 'i18next',
        url: 'https://www.i18next.com',
        description: 'Framework-agnostic i18n library.',
        icon: siI18next,
        searchUrl: 'https://www.i18next.com/?q={search}',
      },
      zod: {
        title: 'Zod',
        url: 'https://zod.dev',
        description:
          'TypeScript-first schema validation with static type inference.',
        icon: siZod,
      },
      immer: {
        title: 'Immer',
        url: 'https://immerjs.github.io/immer',
        description:
          'Library that allows working with immutable data structures while you can use mutating syntax.',
        icon: siImmer,
      },
      immutableJs: {
        title: 'Immutable.js',
        url: 'https://immutable-js.com',
        description: 'Library that provides immutable data structures.',
      },
      rxJs: {
        title: 'RxJS',
        url: 'https://rxjs.dev',
        description: 'Library for functional reactive programming.',
        icon: siReactivex,
      },
      lodash: {
        title: 'Lodash',
        url: 'https://lodash.com',
        description: 'A classic utility library for JavaScript.',
        icon: siLodash,
      },
      esToolkit: {
        title: 'es-toolkit',
        url: 'https://es-toolkit.slash.page',
        description: 'State-of-the-art JavaScript utility library.',
      },
      dateFns: {
        title: 'date-fns',
        url: 'https://date-fns.org',
        description:
          'date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.',
        icon: siDatefns,
      },
    },
  },

  nativeHybrideApps: {
    title: 'Native & Hybrid Apps',
    color: 'blue',
    links: {
      ionic: {
        title: 'Ionic',
        url: 'https://ionic.io',
        description: 'A framework for hybrid mobile apps.',
        icon: siIonic,
      },
      reactNative: {
        title: 'React Native',
        url: 'https://reactnative.dev',
        icon: siReact,
      },
      nativeScript: {
        title: 'NativeScript',
        url: 'https://nativescript.org',
        description: 'A cross-platform framework for any frontend framework.',
        icon: siNativescript,
      },
      quasar: {
        title: 'Quasar',
        url: 'https://quasar.dev',
        description: 'A cross-platform Vue.js framework.',
        icon: siQuasar,
      },
      svelteNative: {
        title: 'Svelte Native',
        url: 'https://svelte.nativescript.org',
        description: 'Build native apps using Svelte.',
        icon: siSvelte,
      },
      electron: {
        title: 'Electron',
        url: 'https://www.electronjs.org',
        description:
          'A framework to build native desktop apps using the web stack.',
        icon: siElectron,
        searchUrl: 'https://www.electronjs.org/?q={search}',
      },
      tauri: {
        title: 'Tauri',
        url: 'https://tauri.app',
        description:
          'A framework to build native desktop apps using the web stack and Rust.',
        icon: siTauri,
      },
      blazor: {
        title: 'Blazor',
        url: 'https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor',
        description: 'Compile C# to WASM and run it in the Browser.',
        icon: siBlazor,
      },
      flutter: {
        title: 'Flutter',
        url: 'https://flutter.dev',
        description: 'A Dart based framework to build multi-platform apps.',
        icon: siFlutter,
        searchUrl: 'https://flutter.dev/search?q={search}',
      },
    },
  },

  buildBundle: {
    title: 'Build & Bundle',
    color: 'green',
    links: {
      webpack: {
        title: 'Webpack',
        url: 'https://webpack.js.org',
        description: 'A JavaScript bundler.',
        icon: siWebpack,
      },
      vite: {
        title: 'Vite',
        url: 'https://vitejs.dev',
        description: 'A JavaScript bundler.',
        icon: siVite,
      },
      vitePlus: {
        title: 'Vite+',
        url: 'https://viteplus.dev',
        description: 'A unified toolchain by void(0).',
        icon: siVite,
      },
      rolldown: {
        title: 'Rolldown',
        url: 'https://rolldown.rs',
        description: 'A JavaScript bundler by void(0).',
        icon: siRolldown,
      },
      oxc: {
        title: 'oxc',
        url: 'https://oxc.rs/',
        description: 'A JavaScript compiler by void(0).',
        icon: siOxc,
      },
      void0: {
        title: 'void(0)',
        url: 'https://voidzero.dev',
        description: 'A universal build chain from the creators of Vite.',
      },
      biome: {
        title: 'Biome',
        url: 'https://biomejs.dev',
        description:
          "A universal build chain that includes a linter, compiler, bundler, and more. It's the successor of Rome.",
        icon: siBiome,
      },
      swc: {
        title: 'SWC',
        url: 'https://swc.rs',
        description: 'Rust-based platform for the web.',
        icon: siSwc,
      },
      esbuild: {
        title: 'esbuild',
        url: 'https://esbuild.github.io',
        description: 'An extremely fast JavaScript bundler.',
        icon: siEsbuild,
      },
      parcel: {
        title: 'Parcel',
        url: 'https://parceljs.org',
        description: 'A JavaScript bundler.',
      },
      rollup: {
        title: 'Rollup',
        url: 'https://rollupjs.org',
        description: 'A JavaScript bundler.',
        icon: siRollupdotjs,
      },
      gulp: {
        title: 'Gulp',
        url: 'https://gulpjs.com',
        description: 'A task management toolkit.',
        icon: siGulp,
      },
    },
  },

  testing: {
    title: 'Testing',
    color: 'green',
    links: {
      vitest: {
        title: 'Vitest',
        url: 'https://vitest.dev',
        description: 'JS/TS testing framework by void(0).',
        icon: siVitest,
      },
      jest: {
        title: 'Jest',
        url: 'https://jestjs.io',
        description: 'JS/TS testing framework.',
        icon: siJest,
      },
      mocha: {
        title: 'Mocha',
        url: 'https://mochajs.org',
        description: 'JS test runner.',
        icon: siMocha,
      },
      chai: {
        title: 'Chai',
        url: 'https://www.chaijs.com',
        description: 'BDD/TDD assertion library.',
        icon: siChai,
      },
      cypress: {
        title: 'Cypress',
        url: 'https://www.cypress.io',
        description: 'Library for test automation.',
        icon: siCypress,
      },
      puppeteer: {
        title: 'Puppeteer',
        url: 'https://developers.google.com/web/tools/puppeteer',
        description:
          'API to control and automate a browser without showing its UI.',
        icon: siPuppeteer,
      },
      selenium: {
        title: 'Selenium',
        url: 'https://www.selenium.dev',
        description: 'A framework for browser automation.',
        icon: siSelenium,
      },
    },
  },

  security: {
    title: 'Security',
    color: 'green',
    links: {
      owaspCheatSheet: {
        title: 'OWASP Cheat Sheet Series Project',
        url: 'https://cheatsheetseries.owasp.org',
        description:
          'Open Web Application Security Project (OWASP) Cheat Sheets.',
        icon: siOwasp,
        searchUrl: 'https://cheatsheetseries.owasp.org/?q={search}',
      },
      letsEncrypt: {
        title: "Let's Encrypt",
        url: 'https://letsencrypt.org',
        description: 'Free TLS certificates.',
        icon: siLetsencrypt,
      },
      jwt: {
        title: 'JWT',
        url: 'https://jwt.io',
        description: 'JSON Web Tokens.',
        icon: siJsonwebtokens,
      },
      auth0: {
        title: 'Auth0',
        url: 'https://auth0.com',
        description: 'An authentication and authorization platform.',
        icon: siAuth0,
      },
      haveIBeenPwned: {
        title: 'Have I been pwned',
        url: 'https://haveibeenpwned.com',
        icon: siHaveibeenpwned,
      },
    },
  },

  codeStyle: {
    title: 'Linting & Code Style',
    color: 'green',
    links: {
      webhint: {
        title: 'webhint',
        url: 'https://webhint.io',
        description:
          "Linting tool that checks your website's accessibility, speed, cross-browser compatibility, and more.",
      },
      eslint: {
        title: 'ESLint',
        url: 'https://eslint.org',
        description: 'JavaScript and TypeScript linter.',
        icon: siEslint,
      },
      prettier: {
        title: 'Prettier',
        url: 'https://prettier.io',
        description: 'An opinionated code formatter.',
        icon: siPrettier,
      },
      editorConfig: {
        title: 'EditorConfig',
        url: 'https://editorconfig.org',
        description:
          'Control some text editor settings by using a config file.',
        icon: siEditorconfig,
      },
    },
  },

  bestPractices: {
    title: 'Best Practices & Conventions',
    color: 'green',
    links: {
      the12factorApp: {
        title: 'The Twelve-Factor App',
        url: 'https://12factor.net',
        description:
          'A methodology for building modern, scalable, maintainable software-as-a-service apps.',
      },
      keepAChangelog: {
        title: 'Keep a Changelog',
        url: 'https://keepachangelog.com/en/1.1.0',
        description: 'Convention for writing changelogs.',
        icon: siKeepachangelog,
      },
      semver: {
        title: 'Semver',
        url: 'https://semver.org',
        description:
          'A detailed description of the versioning schema "MAJOR.MINOR.PATCH".',
        icon: siSemver,
      },
      gitmoji: {
        title: 'Gitmoji',
        url: 'https://gitmoji.carloscuesta.me',
        description: 'An emoji guide for your commit messages.',
      },
    },
  },

  markupDataTypesetting: {
    title: 'Markup, Data & Typesetting',
    color: 'amber',
    links: {
      markdown: {
        title: 'Markdown',
        url: 'https://daringfireball.net/projects/markdown/',
        icon: siMarkdown,
      },
      commonMark: {
        title: 'CommonMark',
        url: 'https://commonmark.org',
        icon: siMarkdown,
      },
      gfm: {
        title: 'GitHub Flavored Markdown',
        url: 'https://github.github.com/gfm/',
      },
      asciiDoc: {
        title: 'AsciiDoc',
        url: 'https://asciidoc.org/',
        icon: siAsciidoctor,
      },
      mermaidJs: {
        title: 'Mermaid',
        url: 'https://mermaid.js.org',
        description: 'A language that turns text to diagrams.',
        icon: siMermaid,
      },
      d2lang: {
        title: 'D2',
        url: 'https://d2lang.com',
        description: 'A language that turns text to diagrams.',
      },
      json: {
        title: 'JSON',
        url: 'https://www.json.org',
        icon: siJson,
      },
      jsonSchema: {
        title: 'JSON Schema',
        url: 'https://json-schema.org',
      },
      toml: {
        title: 'TOML',
        url: 'https://toml.io',
        icon: siToml,
      },
      yaml: {
        title: 'YAML',
        url: 'https://yaml.org',
        icon: siYaml,
      },
      docBook: {
        title: 'DocBook',
        url: 'https://www.oasis-open.org/docbook/',
        description: 'XML document for books, articles, and documentation.',
      },
      dita: {
        title: 'DITA',
        url: 'https://dita-lang.org',
        description: 'XML-Format.',
      },
      latex: {
        title: 'LaTeX',
        url: 'https://www.latex-project.org',
        description: 'The traditional typesetting language.',
        icon: siLatex,
      },
      typst: {
        title: 'Typst',
        url: 'https://typst.app',
        description: 'A modern, scriptable typesetting language.',
        icon: siTypst,
      },
      pandoc: {
        title: 'Pandoc',
        url: 'https://pandoc.org',
        description: 'A universal document converter.',
        icon: siPandoc,
      },
    },
  },

  jsWasmLangs: {
    title: 'JS & WASM Languages',
    color: 'amber',
    links: {
      typeScript: {
        title: 'TypeScript',
        url: 'https://www.typescriptlang.org',
        icon: siTypescript,
      },
      jsDoc: {
        title: 'JSDoc',
        url: 'https://jsdoc.app',
      },
      assemblyScript: {
        title: 'AssemblyScript',
        url: 'https://www.assemblyscript.org',
        icon: siAssemblyscript,
      },
      reasonMl: {
        title: 'Reason',
        url: 'https://reasonml.github.io',
        icon: siReason,
      },
      reScript: {
        title: 'ReScript',
        url: 'https://rescript-lang.org',
        icon: siRescript,
      },
      babelJs: {
        title: 'Babel',
        url: 'https://babeljs.io',
        icon: siBabel,
      },
    },
  },

  jsRuntimes: {
    title: 'JS Runtimes & Tools',
    color: 'amber',
    links: {
      nodeJs: {
        title: 'Node.js',
        url: 'https://nodejs.org/en',
        icon: siNodedotjs,
      },
      nvm: {
        title: 'nvm',
        url: 'https://github.com/nvm-sh/nvm',
        description: 'Node.js version manager for macOS and Linux.',
        icon: siNvm,
      },
      nvmWindows: {
        title: 'NVM for Windows',
        url: 'https://github.com/coreybutler/nvm-windows',
        description:
          'Node.js version manager for Windows. (Notice: The developers are working on a successor called "Runtime". NVM for Windows will be deprecated as soon as Runtime gets released.)',
      },
      deno: {
        title: 'Deno',
        url: 'https://deno.land',
        icon: siDeno,
      },
      bun: {
        title: 'Bun',
        url: 'https://bun.sh',
        icon: siBun,
      },
    },
  },

  miscLangs: {
    title: 'Other Languages',
    color: 'amber',
    links: {
      python: {
        title: 'Python',
        url: 'https://www.python.org',
        icon: siPython,
        searchUrl: 'https://www.python.org/search/?q={search}',
      },
      php: {
        title: 'PHP',
        url: 'https://www.php.net',
        icon: siPhp,
        searchUrl: 'https://www.php.net/manual-lookup.php?pattern={search}',
      },
      dotNet: {
        title: '.NET',
        url: 'https://dotnet.microsoft.com',
        icon: siDotnet,
      },
      java: {
        title: 'Java',
        url: 'https://www.java.com',
      },
      openJdk: {
        title: 'OpenJDK',
        url: 'https://openjdk.java.net',
        icon: siOpenjdk,
      },
      kotlin: {
        title: 'Kotlin',
        url: 'https://kotlinlang.org',
        icon: siKotlin,
      },
      ruby: {
        title: 'Ruby',
        url: 'https://www.ruby-lang.org',
        icon: siRuby,
      },
      crystal: {
        title: 'Crystal',
        url: 'https://crystal-lang.org',
        icon: siCrystal,
      },
      dart: {
        title: 'Dart',
        url: 'https://dart.dev',
        icon: siDart,
        searchUrl: 'https://dart.dev/search?ie=UTF-8&q={search}',
      },
      swift: {
        title: 'Swift',
        url: 'https://swift.org',
        icon: siSwift,
      },
      rust: {
        title: 'Rust',
        url: 'https://rust-lang.org',
        icon: siRust,
      },
      zig: {
        title: 'Zig',
        url: 'https://ziglang.org',
        icon: siZig,
      },
      golang: {
        title: 'Golang',
        url: 'https://go.dev',
        icon: siGo,
      },
      typeSpec: {
        title: 'TypeSpec',
        url: 'https://typespec.io',
        description:
          'A language by Microsoft to describe data and to generate API specs, client and server code, docs, etc.',
      },
    },
  },

  serverFrameworks: {
    title: 'Server Frameworks',
    color: 'amber',
    links: {
      symfony: {
        title: 'Symfony',
        url: 'https://symfony.com',
        description: 'PHP web framework.',
        icon: siSymfony,
        searchUrl: 'https://symfony.com/search?q={search}',
      },
      laravel: {
        title: 'Laravel',
        url: 'https://laravel.com',
        description: 'PHP web framework.',
        icon: siLaravel,
      },
      yii: {
        title: 'Yii',
        url: 'https://www.yiiframework.com',
        description: 'PHP web framework.',
        icon: siYii,
        searchUrl: 'https://www.yiiframework.com/search?q={search}',
      },
      fiber: {
        title: 'Fiber',
        url: 'https://gofiber.io',
        description: 'Go web framework.',
      },
      expressJs: {
        title: 'Express',
        url: 'https://expressjs.com',
        description: 'Node.js web framework.',
        icon: siExpress,
      },
      fastify: {
        title: 'Fastify',
        url: 'https://fastify.dev',
        description: 'Node.js web framework.',
        icon: siFastify,
      },
      nestJs: {
        title: 'NestJS',
        url: 'https://nestjs.com',
        description: 'Node.js web framework.',
        icon: siNestjs,
      },
      rubyOnRails: {
        title: 'Ruby on Rails',
        url: 'https://rubyonrails.org',
        description: 'Ruby web framework.',
        icon: siRubyonrails,
      },
      aspDotNet: {
        title: 'ASP.NET',
        url: 'https://dotnet.microsoft.com/apps/aspnet',
        description: '.NET web framework.',
      },
      javaSpring: {
        title: 'Spring',
        url: 'https://spring.io',
        description: 'Java web framework.',
        icon: siSpring,
      },
      quarkus: {
        title: 'Quarkus',
        url: 'https://quarkus.io',
        searchUrl: 'https://quarkus.io/guides/#q={search}',
        icon: siQuarkus,
      },
      micronaut: {
        title: 'Micronaut',
        url: 'https://micronaut.io',
      },
    },
  },

  cms: {
    title: 'Content Management',
    color: 'amber',
    links: {
      wordPress: {
        title: 'WordPress',
        url: 'https://wordpress.org',
        description: 'Open source PHP CMS.',
        icon: siWordpress,
        searchUrl: 'https://wordpress.org/search/{search}/',
      },
      drupal: {
        title: 'Drupal',
        url: 'https://www.drupal.org',
        description: 'Open source PHP CMS.',
        icon: siDrupal,
        searchUrl: 'https://www.drupal.org/search/site/{search}',
      },
      grav: {
        title: 'Grav',
        url: 'https://getgrav.org',
        description: 'Open source PHP CMS.',
        icon: siGrav,
      },
      craftCms: {
        title: 'Craft CMS',
        url: 'https://craftcms.com',
        description: 'Commercial PHP CMS.',
        icon: siCraftcms,
      },
      statamic: {
        title: 'Statamic',
        url: 'https://statamic.com',
        description: 'Commercial PHP CMS.',
        icon: siStatamic,
      },
      octoberCms: {
        title: 'October CMS',
        url: 'https://octobercms.com/',
        description: 'Commercial PHP CMS.',
        icon: siOctobercms,
      },
      kirbyCms: {
        title: 'Kirby',
        url: 'https://getkirby.com',
        description: 'Commercial PHP CMS.',
        icon: siKirby,
      },
      directus: {
        title: 'Directus',
        url: 'https://directus.io',
        description: 'Free* headless CMS for Node.js.',
        icon: siDirectus,
      },
    },
  },

  dbs: {
    title: 'Databases',
    color: 'amber',
    links: {
      mySql: {
        title: 'MySQL',
        url: 'https://www.mysql.com',
        description: 'A relational database.',
        icon: siMysql,
        searchUrl:
          'https://search.oracle.com/mysql?q={search}&size=10&page=1&tab=all&app=mysql',
      },
      mariaDb: {
        title: 'MariaDB',
        url: 'https://mariadb.org',
        description: 'A relational database.',
        icon: siMariadb,
      },
      msSqlServer: {
        title: 'Microsoft SQL Server',
        url: 'https://www.microsoft.com/de-de/sql-server',
        description: 'A relational database.',
        searchUrl: 'https://www.microsoft.com/en-us/search/explore?q={search}',
      },
      postgreSql: {
        title: 'PostgreSQL',
        url: 'https://www.postgresql.org',
        description: 'A relational database.',
        icon: siPostgresql,
        searchUrl: 'https://www.postgresql.org/search/?q={search}',
      },
      oracleDb: {
        title: 'Oracle Database',
        url: 'https://www.oracle.com/de/database/technologies',
        description: 'A relational database.',
      },
      sqlite: {
        title: 'SQLite',
        url: 'https://www.sqlite.org',
        description: 'A file based relational database.',
        icon: siSqlite,
        searchUrl: 'https://www.sqlite.org/search?s=d&q={search}',
      },
      mongoDb: {
        title: 'MongoDB',
        url: 'https://www.mongodb.com',
        description: 'A document database.',
        icon: siMongodb,
        searchUrl: 'https://www.mongodb.com/search?addsearch={search}',
      },
      couchDb: {
        title: 'CouchDB',
        url: 'https://couchdb.apache.org',
        description: 'A document database.',
        icon: siApachecouchdb,
        searchUrl:
          'https://docs.couchdb.org/en/stable/search.html?q={search}&check_keywords=yes&area=default',
      },
      surrealDb: {
        title: 'SurrealDB',
        url: 'https://surrealdb.com',
        icon: siSurrealdb,
      },
      redis: {
        title: 'Redis',
        url: 'https://redis.io',
        description: 'An in-memory key value store.',
        icon: siRedis,
      },
      neo4j: {
        title: 'Neo4j',
        url: 'https://neo4j.com',
        description: 'A graph database.',
        icon: siNeo4j,
      },
    },
  },

  selfHosting: {
    title: 'Self Hosting',
    color: 'amber',
    links: {
      selfhost: {
        title: 'selfh.st',
        url: 'https://selfh.st',
        description: 'A weekly newsletter about self hosting.',
      },
      awesomeSelfhost: {
        title: 'Awesome Selfhosted',
        url: 'https://awesome-selfhosted.net',
        description: 'List of apps and services you can host yourself.',
        icon: siAwesomelists,
      },
    },
  },

  fontsTexts: {
    title: 'Fonts & Texts',
    color: 'fuchsia',
    links: {
      googleFonts: {
        title: 'Google Fonts',
        url: 'https://fonts.google.com',
        icon: siGooglefonts,
        searchUrl: 'https://fonts.google.com/?query={search}',
      },
      googleWebfontsHelper: {
        title: 'Google Webfonts Helper',
        url: 'https://gwfh.mranftl.com',
        description:
          'A web service that helps to self-host fonts from Google Fonts.',
      },
      getLorem: {
        title: 'Get Lorem',
        url: 'https://getlorem.com',
        description: 'An online Lorem Ipsum generator which also offers a CLI.',
      },
    },
  },

  icons: {
    title: 'Icons',
    color: 'fuchsia',
    links: {
      icones: {
        title: 'Icônes',
        url: 'https://icones.js.org',
        description:
          'A collection of many icon sets. You can search for icons in all icon sets at once.',
        searchUrl: 'https://icones.js.org/collection/all?s={search}',
      },
      fontAwesome: {
        title: 'Font Awesome',
        url: 'https://fontawesome.com',
        icon: siFontawesome,
        searchUrl: 'https://fontawesome.com/icons?d=gallery&p=2&q={search}',
      },
      pictogrammers: {
        title: 'Pictogrammers',
        url: 'https://pictogrammers.com',
        description:
          'A collection of open-source icons including "Material Design Icons".',
      },
      heroicons: {
        title: 'Heroicons',
        url: 'https://heroicons.com',
        description: 'Icons by the developers of Tailwind CSS.',
      },
      lucide: {
        title: 'Lucide',
        url: 'https://lucide.dev',
        description: 'Fork of Feather Icons with more icons.',
        icon: siLucide,
      },
      dashboardIcons: {
        title: 'Dashboard Icons',
        url: 'https://dashboardicons.com/',
        description:
          'A collection of icons for services, applications and tools, designed specifically for dashboards and app directories.',
        searchUrl: 'https://dashboardicons.com/icons?q={search}',
      },
      simpleIcons: {
        title: 'Simple Icons',
        url: 'https://simpleicons.org',
        description: 'Collection of single colored brand logos.',
        icon: siSimpleicons,
        searchUrl: 'https://simpleicons.org/?q={search}',
      },
      shieldsIo: {
        title: 'Shields.io',
        url: 'https://shields.io',
        description:
          'A public API to generate small static and dynamic badge images.',
        icon: siShieldsdotio,
      },
    },
  },

  imagesPhotos: {
    title: 'Images & Photos',
    color: 'fuchsia',
    links: {
      pexels: {
        title: 'Pexels',
        url: 'https://www.pexels.com',
        description: 'Stock images.',
        icon: siPexels,
        searchUrl: 'https://www.pexels.com/de-de/suche/{search}',
      },
      unsplash: {
        title: 'Unsplash',
        url: 'https://unsplash.com',
        description: 'Stock images.',
        icon: siUnsplash,
        searchUrl: 'https://unsplash.com/s/photos/{search}',
      },
      subtlePatterns: {
        title: 'Subtle Patterns',
        url: 'https://www.toptal.com/designers/subtlepatterns',
        description: 'A collection of subtle background patterns (by Toptal).',
        icon: siToptal,
      },
      transparentTextures: {
        title: 'Transparent Textures',
        url: 'https://transparenttextures.com',
        description: 'A collection of transparent background patterns.',
      },
      loremPicsum: {
        title: 'Lorem Picsum',
        url: 'https://picsum.photos',
        description: 'The lorem ipsum for photos.',
      },
    },
  },

  colorsPalettes: {
    title: 'Colors & Palettes',
    color: 'fuchsia',
    links: {
      oklchColorPicker: {
        title: 'OKLCH Color Picker',
        url: 'https://oklch.com',
        description: 'A color picker for the OKLCH color space.',
      },
      harmonizer: {
        title: 'Harmonizer',
        url: 'https://harmonizer.evilmartians.com',
        description: 'A color palette generator using the OKLCH color space.',
      },
    },
  },

  devPlatforms: {
    title: 'Development Platforms',
    color: 'violet',
    links: {
      chromeDevelopers: {
        title: 'Chrome Developers',
        url: 'https://developer.chrome.com',
        description: 'Official developer resources about Chrome Browser.',
        icon: siGooglechrome,
      },
      chromeOsDotDev: {
        title: 'ChromeOS.dev',
        url: 'https://chromeos.dev',
        description: 'Official developer resources about ChromeOS.',
        icon: siGooglechrome,
        searchUrl: 'https://chromeos.dev/en/search?q={search}',
      },
      chromeWebStoreDashboard: {
        title: 'Chrome Web Store Developer Dashboard',
        url: 'https://chrome.google.com/webstore/devconsole',
        description:
          'Official Dashboard to manage Chrome Extensions, Themes, etc.',
        icon: siChromewebstore,
      },
      firefixAddOnDevHub: {
        title: 'Firefox Add-On Developer Hub',
        url: 'https://addons.mozilla.org/en-US/developers/addons',
        description: 'Official Dashboard to manage Firefox Extensions.',
        icon: siFirefoxbrowser,
      },
    },
  },

  webStandardsEcosystem: {
    title: 'Web Standards & Ecosystem',
    color: 'violet',
    links: {
      w3c: {
        title: 'W3C',
        url: 'https://www.w3.org',
      },
      webdxDevSignals: {
        title: 'WebDX Developer Signals',
        url: 'https://github.com/web-platform-dx/developer-signals',
        description:
          'A repository to gather feedback about wanted web platform features, provided by the W3C WebDX Community Group.',
      },
      esProposals: {
        title: 'ECMAScript Proposals',
        url: 'https://github.com/tc39/proposals',
        description: 'Official repository of all ECMAScript proposals.',
      },
      esCompatTable: {
        title: 'ECMAScript Compatibility Table',
        url: 'https://compat-table.github.io/compat-table/es2016plus',
        description:
          'Table illustrating browser support of ECMAScript features.',
      },
      cssDatabase: {
        title: 'CSS Database',
        url: 'https://cssdb.org',
        description:
          'CSS database is a list of CSS features and their positions in the process of becoming implemented web standards.',
        icon: siCss,
      },
      mozSpecPositions: {
        title: 'Mozilla Specification Positions',
        url: 'https://mozilla.github.io/standards-positions',
        description:
          "A list of Mozilla's position on open web and web-related specifications.",
        icon: siMozilla,
      },
      tc39: {
        title: 'TC39',
        url: 'https://tc39.es',
        description:
          "Official website of Ecma International's TC39 (Technical Committee 39).",
      },
      tc39Forum: {
        title: 'TC39 Forum',
        url: 'https://es.discourse.group',
        description:
          "Official forum of Ecma International's TC39 (Technical Committee 39). Talk about ECMAScript features and proposals.",
        searchUrl: 'https://es.discourse.group/search?q={search}',
      },
      wicg: {
        title: 'WICG',
        url: 'https://wicg.io/',
        description:
          'Official website of the WICG (Web Incubator Community Group).',
        searchUrl: 'https://discourse.wicg.io/search?q={search}',
      },
      openUi: {
        title: 'Open UI',
        url: 'https://open-ui.org/',
        description:
          "Official website of Open UI (a W3C community group). It's about making built-in form controls styleable while also adding new ones.",
      },
      openJs: {
        title: 'OpenJS Foundation',
        url: 'https://openjsf.org',
        icon: siOpenjsfoundation,
      },
    },
  },

  browserStatus: {
    title: 'Browser Status',
    color: 'violet',
    links: {
      canIUse: {
        title: 'Can I use...',
        url: 'https://caniuse.com',
        description:
          'Check browser compatibility of various language features and browser APIs.',
        searchUrl: 'https://caniuse.com/#search={search}',
      },
      canIEmail: {
        title: 'Can I email...',
        url: 'https://caniemail.com',
        description:
          'Check e-mail client compatibility of various language features.',
        searchUrl: 'https://www.caniemail.com/search/?s={search}',
      },
      canIWebView: {
        title: 'Can I WebView...',
        url: 'https://caniwebview.com',
        description: 'Check system webviews for feature support.',
        searchUrl: 'https://caniwebview.com/search/?s={search}',
      },
      a11ySupport: {
        title: 'Accessibility Support',
        url: 'https://a11ysupport.io',
        description: 'Will your code work with assistive technologies?',
      },
      webPlatformStatus: {
        title: 'Web Platform Status',
        url: 'https://webstatus.dev',
        description:
          'A website to check which browser supports which web platform features. Initially developed by Google.',
        searchUrl: 'https://webstatus.dev/?q={search}',
      },
      chromePlatformStatus: {
        title: 'Chrome Platform Status',
        url: 'https://www.chromestatus.com',
        description: 'Chrome browser release notes.',
        icon: siGooglechrome,
      },
      msEdgeRoadmap: {
        title: 'Microsoft 365/Edge Roadmap',
        url: 'https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=Microsoft%20Edge',
      },
      nodeGreen: {
        title: 'Node Green',
        url: 'https://node.green',
        description:
          'Table that illustrates which Node.js version supports which ECMAScript features.',
      },
      browsersTimeline: {
        title: 'Timeline of Web Browsers',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Timeline_of_web_browsers.svg',
        description:
          'A graphical timeline of all web browsers, grouped by used engine.',
      },
    },
  },

  software: {
    title: 'Software',
    color: 'rose',
    links: {
      firefoxBrowser: {
        title: 'Mozilla Firefox',
        url: 'https://www.mozilla.org/de/firefox/new',
        icon: siFirefoxbrowser,
      },
      chromeBrowser: {
        title: 'Google Chrome',
        url: 'https://www.google.com/intl/de/chrome',
        icon: siGooglechrome,
      },
      msEdgeBrowser: {
        title: 'Microsoft Edge',
        url: 'https://www.microsoft.com/de-de/edge/download',
      },
      adobe: {
        title: 'Adobe',
        url: 'https://www.adobe.com',
        searchUrl:
          'https://www.adobe.com/search.html#q={search}&sort=relevancy',
      },
      affinity: {
        title: 'Affinity',
        url: 'https://affinity.studio',
      },
      canva: {
        title: 'Canva',
        url: 'https://www.canva.com',
      },
      figma: {
        title: 'Figma',
        url: 'https://figma.com',
        icon: siFigma,
      },
    },
  },

  codeEditors: {
    title: 'Code Editors & IDEs',
    color: 'rose',
    links: {
      visualStudio: {
        title: 'Visual Studio',
        url: 'https://visualstudio.microsoft.com',
      },
      vsCode: {
        title: 'Visual Studio Code',
        url: 'https://code.visualstudio.com',
        searchUrl: 'https://code.visualstudio.com/Search?q={search}',
      },
      vsCodium: {
        title: 'VSCodium',
        url: 'https://vscodium.com',
        description: 'Free/Libre Open Source Software Binaries of VS Code.',
        icon: siVscodium,
      },
      jetBrains: {
        title: 'JetBrains',
        url: 'https://www.jetbrains.com',
        description:
          'Developer of IDEs like IntelliJ, PHPStorm, WebStorm, etc.',
        icon: siJetbrains,
        searchUrl: 'https://www.jetbrains.com/search/?q={search}',
      },
      zedEditor: {
        title: 'Zed',
        url: 'https://zed.dev',
        icon: siZedindustries,
      },
      cursorEditor: {
        title: 'Cursor',
        url: 'https://cursor.com',
        icon: siCursor,
      },
    },
  },

  devTools: {
    title: 'Development Tools',
    color: 'rose',
    links: {
      docker: {
        title: 'Docker',
        url: 'https://www.docker.com',
        icon: siDocker,
        searchUrl: 'https://www.docker.com/search/?_sf_s={search}',
      },
      kubernetes: {
        title: 'Kubernetes',
        url: 'https://kubernetes.io',
        icon: siKubernetes,
      },
      ddev: {
        title: 'ddev',
        url: 'https://ddev.com',
      },
      virtualBox: {
        title: 'VirtualBox',
        url: 'https://www.virtualbox.org',
        icon: siVirtualbox,
        searchUrl:
          'https://www.virtualbox.org/search?q={search}&wiki=on&changeset=on&ticket=on',
      },
      vagrant: {
        title: 'Vagrant',
        url: 'https://developer.hashicorp.com/vagrant',
        icon: siVagrant,
      },
      postman: {
        title: 'Postman',
        url: 'https://www.postman.com',
        description: 'A REST client.',
        icon: siPostman,
      },
      insomnia: {
        title: 'Insomnia',
        url: 'https://insomnia.rest',
        description: 'A REST client.',
        icon: siInsomnia,
      },
      bruno: {
        title: 'Bruno',
        url: 'https://www.usebruno.com',
        description: 'A git friendly REST client.',
        icon: siBruno,
      },
      git: {
        title: 'Git',
        url: 'https://git-scm.com',
        icon: siGit,
        searchUrl: 'https://git-scm.com/search/results?search={search}',
      },
      gitKraken: {
        title: 'GitKraken',
        url: 'https://gitkraken.com',
        description: 'A git client.',
        icon: siGitkraken,
      },
      fork: {
        title: 'Fork',
        url: 'https://git-fork.com',
        description: 'A git client for Windows and macOS.',
      },
    },
  },

  shells: {
    title: 'Shells',
    color: 'rose',
    links: {
      zsh: {
        title: 'Zsh',
        url: 'https://www.zsh.org',
        icon: siZsh,
      },
      fishShell: {
        title: 'Fish shell',
        url: 'https://fishshell.com',
        icon: siFishshell,
      },
      nushell: {
        title: 'Nushell',
        url: 'https://www.nushell.sh',
        icon: siNushell,
      },
      powerShell: {
        title: 'PowerShell',
        url: 'https://learn.microsoft.com/de-de/powershell/',
      },
    },
  },

  audioVideo: {
    title: 'Audio & Video',
    color: 'rose',
    links: {
      youTube: {
        title: 'YouTube',
        url: 'https://youtube.com',
        icon: siYoutube,
        searchUrl: 'https://www.youtube.com/results?search_query={search}',
      },
      ytMusic: {
        title: 'YouTube Music',
        url: 'https://music.youtube.com',
        icon: siYoutubemusic,
        searchUrl: 'https://music.youtube.com/search?q={search}',
      },
      spotify: {
        title: 'Spotify',
        url: 'https://open.spotify.com',
        icon: siSpotify,
        searchUrl: 'https://open.spotify.com/search/{search}',
      },
      appleMusic: {
        title: 'Apple Music',
        url: 'https://music.apple.com',
        icon: siApplemusic,
        searchUrl: 'https://music.apple.com/us/search?term={search}',
      },
      deezer: {
        title: 'Deezer',
        url: 'https://www.deezer.com',
        searchUrl: 'https://www.deezer.com/search/{search}',
        icon: siDeezer,
      },
      soundCloud: {
        title: 'SoundCloud',
        url: 'https://soundcloud.com',
        icon: siSoundcloud,
        searchUrl: 'https://soundcloud.com/search?q={search}',
      },
      mixcloud: {
        title: 'Mixcloud',
        url: 'https://mixcloud.com',
        icon: siMixcloud,
      },
      tuneIn: {
        title: 'TuneIn',
        url: 'https://tunein.com',
        searchUrl: 'https://tunein.com/search/?query={search}',
      },
      diFm: {
        title: 'DI.FM',
        url: 'https://di.fm',
        searchUrl: 'https://www.di.fm/search?q={search}',
      },
      myNoise: {
        title: 'myNoise',
        url: 'https://mynoise.net',
        description: 'Custom Soundscapes for Focus, Relaxation & Sleep.',
      },
    },
  },

  surveys: {
    title: 'Developer Surveys',
    color: 'mauve',
    links: {
      stackOverflowSurvey: {
        title: 'Stack Overflow Annual Developer Survey',
        url: 'https://survey.stackoverflow.co',
        icon: siStackoverflow,
      },
      stateOfHtml: {
        title: 'State of HTML',
        url: 'https://stateofhtml.com',
        icon: siHtml5,
      },
      stateOfCss: {
        title: 'State of CSS',
        url: 'https://stateofcss.com',
        icon: siCss,
      },
      stateOfJs: {
        title: 'State of JavaScript',
        url: 'https://stateofjs.com',
        icon: siJavascript,
      },
      stateOfGraphQL: {
        title: 'State of GraphQL',
        url: 'https://www.stateofgraphql.com',
        icon: siGraphql,
      },
      stateOfReact: {
        title: 'State of React',
        url: 'https://stateofreact.com',
        icon: siReact,
      },
    },
  },

  newsletters: {
    title: 'Stay in the Loop',
    color: 'mauve',
    links: {
      frontendFocus: {
        title: 'Frontend Focus',
        url: 'https://frontendfoc.us',
        description: 'Newsletter with news about web frontend development.',
        icon: siHtml5,
      },
      webWeekly: {
        title: 'Web Weekly',
        url: 'https://webweekly.email',
      },
      cssWeekly: {
        title: 'CSS Weekly',
        url: 'https://css-weekly.com',
        icon: siCss,
      },
      jsWeekly: {
        title: 'JavaScript Weekly',
        url: 'https://javascriptweekly.com',
        icon: siJavascript,
      },
      nodeWeekly: {
        title: 'Node Weekly',
        url: 'https://nodeweekly.com',
        icon: siNodedotjs,
      },
      reactStatusNewsletter: {
        title: 'React Status Newsletter',
        url: 'https://react.statuscode.com',
        icon: siReact,
      },
      goWeekly: {
        title: 'Golang Weekly',
        url: 'https://golangweekly.com',
        icon: siGo,
      },
      swiftUiWeekly: {
        title: 'SwiftUI Weekly',
        url: 'https://weekly.swiftwithmajid.com',
        icon: siSwift,
      },
      pycodersWeekly: {
        title: "Pycoder's Weekly",
        url: 'https://pycoders.com',
        icon: siPython,
      },
      rubyWeekly: {
        title: 'Ruby Weekly',
        url: 'https://rubyweekly.com',
        icon: siRuby,
      },
      postgresWeekly: {
        title: 'Postgres Weekly',
        url: 'https://postgresweekly.com',
        icon: siPostgresql,
      },
      dailyDotDev: {
        title: 'daily.dev',
        url: 'https://daily.dev',
        icon: siDailydotdev,
      },
      codropsCollective: {
        title: 'Codrops Collective',
        url: 'https://tympanus.net/codrops/collective',
        searchUrl: 'https://tympanus.net/codrops/?s={search}&search-type=posts',
      },
    },
  },
}
