// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
      {
        use: '@gridsome/source-wordpress',
        options: {
          baseUrl: 'https://proyectos.picnic.pe/drzaidmanweb/index.php', // required
          typeName: 'WordPress', // GraphQL schema name
        }
      }
  ],
    templates: {
        WordPressPost: '/:year/:month/:day/:slug',
        WordPressTag: '/tag/:slug'
    },
}
