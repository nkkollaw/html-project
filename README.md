## Requirements

You need NodeJS and Ruby 2.1+ installed.

Sass is good to have and required for some tasks.

## Installation

Install NPM and Bower dependencies:

```
npm install

bower install
```

Run Gulp:

```
gulp
```

## Customization

### Bower

Install Bower packages and they'll be included in the HTML automatically (most packages, anyway).

### Bootstrap

Bootstrap 4 beta will be included from `src/css/lib/bootstrap.min.css` and `src/css/lib/bootstrap.min.js`.

Source code for Bootstrap can be found in `src/css/lib/bootstrap/4.0.0-beta/`.

You can customize it by changing `src/css/lib/bootstrap/4.0.0-beta/scss/_variables.scss` and recompile.

Run the following commands first as necessary (might have to use `sudo` for gems):

```
cd src/css/lib/bootstrap/4.0.0-beta/
gem install bundler --verbose # if you don't have it already
bundler install --verbose
npm install --verbose
```

Then, run this to recompile after every change:

```
npm run dist

```
