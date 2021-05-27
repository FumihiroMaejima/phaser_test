# vue_rpg

my vue rpg test test.

---

# 構成

| 名前 | バージョン |
| :--- | :---: |
| npm | 6.14.8 |
| node | 12.20.0 |
| vue/cli | 4.5.13 |
| TypeScript | 4.1.3 |

---

## Update Yarn

```Shell-session
$ yarn -v
1.22.4

$ npm uninstall yarn -g
$ npm install yarn -g

$ yarn --version
1.22.10
```


## Update Vue-cli

```Shell-session
$ vue --version
@vue/cli 4.5.10

$ yarn global add @vue/cli

$ vue --version
@vue/cli 4.5.13


$ yarn -v
1.22.10
```

## TypeScriptのインストール

### グローバルにインストールする

```Shell-session
$ npm install -g typescript
$ tsc -v
Version 4.1.3
```

### プロジェクトにインストールする

＊Vue-cliのプロジェクト作成時にもインストール出来る。

```Shell-session
$ yarn add typescript
```

---


## Make Projet

### gitリポジトリそのものをフロントエンドのリポジトリにしたい場合
一度rootに新規プロジェクトディレクトリを作成し、
node_modules以外をrootディレクトリに移すことでプロジェクトを作ることが出来る。

```Shell-session
$ vue create sample
$ mv sample/* ./ // エディターを使ってコピペして来た方が良い
$ rm -rf sample
$ yarn install
```


## プロジェクト作成時のコンソール内容
```Shell-session
$ vue create sample

Vue CLI v4.5.9
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, TS, Router, Vuex, CSS
Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpilin
g JSX)? No
? Use history mode for router? (Requires proper server setup for index fallback in production)
Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sa
ss/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Pick an E2E testing solution: Cypress
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No


Vue CLI v4.5.9
✨  Creating project in /Users/fandm/app1/front/phaser_test/phaser_test.
⚙️  Installing CLI plugins. This might take a while.

🎉  Preset 20200831_v3.0pre saved in /Users/name/.vuerc

```

## Project setup
```Shell-session
yarn install
```

### Compiles and hot-reloads for development
```Shell-session
yarn serve
```

### Compiles and minifies for production
```Shell-session
yarn build
```

### Run your unit tests
```Shell-session
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```Shell-session
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

# 環境構築

vue-cliでプロジェクト作成時に、ある程度のパッケージの設定を自動的に行えるので出来るだけそちらを利用すること。

## envファイルの設定

「.env.example」をリネームして環境ごとの環境変数を設定する

```
.env.local
.env.development
.env.prod

# .env.local
NODE_ENV='local'
VUE_APP_API_BASE_URL='http://localhost:8080/api/v1/xxx'

# .env.development
# NODE_ENV='development'
# VUE_APP_API_BASE_URL='https://development/api/v1/xxx'

# .env.prod
# NODE_ENV='production'
# VUE_APP_API_BASE_URL='https://production/api/v1/xxx'
```

## アセットディレクトリの作成

/src/assets/下に
「css」、「img」ディレクトリ作成

## ライブラリの追加

下記のライブラリを追加

```Shell-session
$ yarn add axios
$ yarn add --dev stylelint
```

一括の場合

```Shell-session
yarn add axios
yarn add --dev stylelint
```

## ライブラリの設定

package.jsonの編集

```Json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test:unit": "jest",
    "fmt": "prettier --write \"src/**/*.js\"",
    "lint:css": "stylelint src/**/*.css"
  },
```

/.eslintrc.jsの作成と編集

⇨プロジェクト作成時に自動的に作成出来る。

```TypeScript
module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
```

.prettierrcの作成と編集

```Json
{
  "semi": false,
  "arrowParens": "always",
  "singleQuote": true
}
```

.stylelintrcの作成と編集

```Json
{
  "rules": {
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "custom-property-no-outside-root": true,
    "indentation": 2,
    "length-zero-no-unit": true,
    "media-feature-name-no-vendor-prefix": true,
    "number-leading-zero": "never",
    "selector-root-no-composition": true,
    "string-quotes": "single"
  }
}
```

## huskyの設定

huskyが設定されていなければ追加する

v5系から設定方法が変わっている。

```Shell-session
$ yarn add --dev husky
```

package.jsonの`srcripts`に`prepare`が追記されている為下記の通り修正する。(モノレポ用の設定)

`frontend/.huskyディレクトリ`を作成する為に`yarn prepare`と`yarn create-precommit`をそれぞれ実行する。

```json
  "scripts": {
    ...
    "prepare": "cd .. && husky install frontend/.husky",
    "create-precommit": "cd .. && husky add frontend/.husky/pre-commit \"cd frontend && yarn lint-staged\"",
    "lint-staged": "lint-staged"
  },
```

また、自分のホームディレクトリに`~/.huskyrc`を作成してnvmの設定しないと`yarn`コマンドが使えなくなる為設定する。

```Shell-session
$ touch ~/.huskyrc
$ vim ~/.huskyrc
```

```Shell-session
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# 現在利用しているnodeバージョンをuseする
nvm use stable
```


## Componentsディレクトリの設定

```Shell-session
parts
modules
views
```


### vue.config.jsの修正

バックエンドのプロキシ設定を行う。

```TypeScript
module.exports = {
  // ポートなどの設定
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api',
        https: false
      }
    }
  }
}
```

---

## テスト環境(Jest)の構築

下記をインストール

プロジェクト作成直後にJestを選択している場合は下記は全て行う必要は無い。

jest.config.jsの設定のみ修正が必要。

```shell-session
$ yarn add @vue/test-utils
$ yarn add jest
$ yarn add vue-jest
$ yarn add babel-jest
```

babel-core、babel-preset-envを「devDependencies」側にインストールする必要があるが、こちらはpackage.jsonにてバージョンを指定した上でyarn installすること。

2020年2月現在は下記の通り

```
"babel-core": "^7.0.0-bridge.0",
または "babel-core": "^7.0.0-0",
"babel-preset-env": "^7.0.0-beta.3",
```


package.jsonのscriptにJestを設定

```JSON
"scripts": {
    ・
	"test:unit": "jest",
    ・
}
```

package.jsonにJestの設定

```JSON
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "vue"
    ],
    "transform": {
      ".*\\.(vue)$": "vue-jest",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    }
  }
```

.babelrcの作成

```
{
  "presets": [["@babel/preset-env",{
    "modules": false,
    "targets": {
      "browsers": "> 1%",
      "ie": 11,
      "uglify": true
    },
    "useBuiltIns": "entry"
  }]],
  "env": {
    "test:unit": {
      "presets": [
        ["env",{"targets": {"node": "current"}}]
      ]
    }
  }
}
```

---

## tailwindcssの設定

tailwindcssのインストール

```shell-session
$ yarn add tailwindcss
```

tailwind.cssの設定ファイルの作成

```shell-session
$ yarn tailwindcss init
```

設定ファイル(tailwind.config.js)の編集

purgeの設定は必ず行う。

```Javascript
module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

専用のcssファイル(tailwind.css)の作成

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

ルートのcssファイルでimportを行う。

```css
@import './tailwind';
```

postcssの設定

```shell-session
$ yarn add autoprefixer
$ yarn add postcss
$ yarn add autoprefixer postcss-cli
```
(2020/10現在 autoprefixerは^9.8.6を指定)
(2020/11現在 tailwindcss2.0が出たが暫くpostCSSの後方互換性のある物をインストールした方が良い)
(2021/5現在 apostcss@8をインストールしてもエラーになる。)

```shell-session
$ yarn remove tailwindcss postcss postcss autoprefixer
$ yarn add tailwindcss@compat postcss@^7 autoprefixer@^9
```

設定ファイル(postcss.config.js)の編集

```Javascript
/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [tailwindcss, autoprefixer]
}
```

---

## SCSSの利用設定

### sass-loaderとnode-sassをインストールする

```shell-session
$ yarn add --dev sass-loader
$ yarn add --dev node-sass
$ yarn add --dev css-loader
$ yarn add --dev sass-resources-loader
$ yarn add --dev style-loader
$ yarn add --dev stylelint-scss
$ yarn add --dev stylelint-webpack-plugin
$ yarn add --dev stylus
$ yarn add --dev stylus-loader
```

main.tsに追記

```TypeScript
require('@/assets/scss/App.scss')
```
---

## TypeScriptのインストール

### グローバルにインストールする

```shell-session
$ npm install -g typescript
$ tsc -v
Version 3.8.3
```

### プロジェクトにインストールする

＊Vue-cliのプロジェクト作成時に選択した方が楽である。

```shell-session
$ yarn add typescript
```

その他のパッケージもインストールする

```shell-session
$ yarn add ts-loader
$ yarn add webpack
$ yarn add webpack-cli
```

## tsconfig.jsonに追記する事項

随時追記する

```Json
"resolveJsonModule": true,
"experimentalDecorators": true,
"types": [
  "webpack-env",
  "vuetify",
  "jest"
]
```

---

## VeeValidateの設定

## VeeValidateをインストール

現状は`Vue3版`をインストールする

```Shell-session
$ yarn add vee-validate@next
```

---

## Storybookの設定(v6.2.0以降)

### Storybookのインストール

```shell-session
$ yarn add --dev @storybook/vue
```

`Vue3`を使う場合は`vue3`版を用意する必要がある。

```shell-session
$ yarn add --dev @storybook/vue3
```

v16以上の`vue-loader`をインストールする。

```shell-session
$ yarn add vue-loader@next
```

### その他パッケージのインストール

202105現在、ts-loaderは8系で利用出来る。

tailwindcssを使う場合、`postcss-loader`が必要になる。

```shell-session
$ yarn add --dev style-loader
$ yarn add --dev ts-loader@^8.1.0
$ yarn add --dev sass-resources-loader
$ yarn add --dev postcss-loader
```

```shell-session
$ yarn add --dev ts-loader@^8.1.0 style-loader sass-resources-loader postcss-loader
```

### addonのインストール

```shell-session
$ yarn add --dev @storybook/addon-knobs
$ yarn add --dev @storybook/addon-docs
$ yarn add --dev @storybook/addon-notes@6.0.0-alpha.6
$ yarn add --dev @storybook/addon-a11y
$ yarn add --dev @storybook/addon-essentials
$ yarn add --dev @storybook/source-loader
```

```shell-session
$ yarn add --dev @storybook/addon-knobs @storybook/addon-docs @storybook/addon-notes @storybook/addon-a11y @storybook/addon-essentials @storybook/source-loader
```
下記のエラーが発生する場合は`style-loader`をインストールする。

```shell-session
Module not found: Error: Can't resolve 'style-loader' in
```

```shell-session
$ yarn add --dev style-loader
```

その他

```shell-session
$ yarn add --dev ts-loader vue-template-compiler sass-resources-loader
```

v6.1までVue3の対応が無いっぽい。

### Storybookのコマンド設定

pasckage.jsonの`scripts`に下記の設定を追記する。
ポート番号を変更する場合は

```Json
  "scripts": {
    "storybook": "start-storybook -p 6100"
  },
```

### Storybookの設定ファイルについて

`/.storybook`ディレクトリを作成し、下記のファイルを作成する。

- main.ts

- webpack.config.js

・main.ts

```TypeScript
module.exports = {
  stories: ['../src/stories/**/*.story.@(ts|js)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs/preset'],
}

```

・webpack.config.js

`ts`拡張子にすると現状下記の様なエラーが発生する為、`js`拡張子にする。

`Module parse failed: Unexpected character '@'`

```JavaScript
const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = ({ config, mode }) => {

  config.resolve.alias['~'] = rootPath
  config.resolve.alias['@'] = rootPath

  // for Typescript
  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
  })

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[local]_[hash:base64:5]',
          },
        }
      },
      {
        loader: 'sass-loader'
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../src/assets/scss/*.scss'),
          ],
          rootPath
        }
      },
    ]
  })

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    rootPath
  ]

  return config
}

```

### storyファイルについて

`/src/stories`ディレクトリを作成し、`*.story.@(ts|js)`の形式のファイルを作成する。

HelloWorld.vueのstoryファイルを作成した例は下記の通り

```TypeScript
// import { action } from '@storybook/addon-actions' // clickイベントなどで使う
import { text } from '@storybook/addon-knobs'
import HelloWorld from '../components/HelloWorld.vue'
import markdown from './notes/sample.md'

// コンポーネントのメタデータを記述
export default {
  title: 'Test/HelloTest',
  parameters: {
    layout: 'centered',
    docs: {
      extractComponentDescription: (component: any, { notes }: any) => {
        if (notes) {
          return notes.markdown
        }
        return null
      }
    },
    notes: { markdown }
  }
}

export const HelloTest = () => ({
  components: { HelloWorld },
  template: `
    <div>
      <HelloWorld :msg="msg" />
    </div>
  `,
  props: {
    msg: {
      type: String,
      default: text('msg', 'default text')
    }
  },
  data() {
    return {}
  },
  methods: {}
})

```

下記のコマンド実行でブラウザに画面が出力される。s

```shell-session
$ yarn storybook
```

---

## E2Eテストの設定

`cypress`を利用する。

プロジェクト作成時にcypressをインストールしている事を前提とする。

### tsconfig.jsonの設定

TypeScriptの設定の為に`types`に`cypress`を追記

```json
{
  "types": [
    "webpack-env",
    "@types/jest",
    "cypress",
    "jest"
  ],
}
```

### 外部ファイルインポートの設定

データ等を外部ファイル化した時にimport宣言した時にエラーが発生する現象の対応。

`@cypress/webpack-preprocessor`をインストールする。

```
$ yarn add --dev @cypress/webpack-preprocessor
```


`frontend/tests/e2e/plugins/index.js`の、`const webpack`と`on`のコメントアウトになっている箇所のコメントを外す。

これでテストファイル内でimport宣言が出来る様になる。


```javascript
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
  on('file:preprocessor', webpack({
    webpackOptions: require('@vue/cli-service/webpack.config'),
    watchOptions: {}
  }))

  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js'
  })
}
```
### 参考のテスト

```TypeScript
describe('Root Page Test', () => {
  it('Visits the app root url with no authData.', () => {
    cy.visit('/')

    // redirect login form
    cy.contains('div', 'Login Form')
    cy.get('button').should('be.disabled')

    cy.get('#email')
      .should('have.value', '')

    cy.get('#password')
      .should('have.value', '')
  })
})
```

---


### Vuetifyを使う場合

Vuetifyを使う場合は、`./storybook`ディレクトリにpreview.tsを作成して`config.ts`に記載していた内容を記載する。


```TypeScript
import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.css"
import colors from 'vuetify/es5/util/colors'

const vuetifyOptions = {}

Vue.use(Vuetify, {
  customVariables: ['../src/assets/variables.scss'],
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
})

export const parameters = {
  backgrounds: {
    value: [
      { name: 'Sample BG 1', value: '#CCCCCC', default: true },
      { name: 'Sample BG 2', value: '#000000' },
    ],
  },
}

export const decorators = [
  () => {
    return (
    { vuetify: new Vuetify(vuetifyOptions), template: '<v-app><story/></v-app>' }
  )}
]
```

---

## API Blueprintの設定

### aglioのインストール
*Mac版の場合

・Windowsは「--unsafe-perm」を付けない
・yarnではインストール出来ない

```
$ npm install -g aglio --unsafe-perm
```

### apibディレクトリの作成

test.apibファイルを作成し、下記のコマンドでWeb上にAPI仕様を出力出来る。

```
$ aglio -i apib/api.apib --theme-template triple -s
```

API仕様書のHTMLファイルの出力

```
$ aglio -i apib/api.apib -o apib/doc/api.html
```
