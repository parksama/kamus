let mix = require('laravel-mix');

mix
	.sass('src/css/style.scss', 'css')
	.js('src/js/app.js', 'js')
	.react()
	.setPublicPath('dist');