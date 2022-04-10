module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
],
theme: {
  extend: {
      fontFamily: {
          sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
        colors: {
          blue : ['#1A56DB']
        },
       
          objectPosition: {
            'center-bottom': 'center bottom',
          }
  },
},
plugins: [
  require('flowbite/plugin')
]
}
