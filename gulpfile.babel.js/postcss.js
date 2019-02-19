import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export const postcssPlugins = [
  autoprefixer(),
  cssnano({ preset: 'default' })
]