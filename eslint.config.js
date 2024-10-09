import js from '@eslint/js'
import globals from 'globals'
// TypeScript
import tseslint from 'typescript-eslint'
// React
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default tseslint.config(
  { ignores: ['dist/**/*'] },
  js.configs.recommended,
  {
    files: ['ui/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },

  // TypeScript
  ...tseslint.configs.recommended,

  // React
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  reactPlugin.configs.flat['jsx-runtime'],
  {
    files: ['ui/**/*.tsx'],
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
  },
)
