const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = {
  stories: ['../src/stories/**/*.story.@(ts|js)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs/preset', '@storybook/addon-postcss'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer')
            ]
          }
        },
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
            /* resources: [
              '../src/assets/scss/*.scss',
            ], */
            resources: [
              path.resolve(__dirname, '../src/assets/scss/*.scss'),
            ],
            rootPath
          }
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config
  }
}
