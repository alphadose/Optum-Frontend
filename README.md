### Quick Start

* Install dependencies by running `yarn`.
* Run `yarn serve` to start the local development server.

<br />

### Project Structure

* All templates are located inside `src/views` and most of them are self-contained.
* There's only one single layout defined (Default) inside `src/layouts`, however the current structure provides an easy way of extending the UI kit.
* The `src/components` directory hosts all template-specific subcomponents in their own subdirectory.
* Almost all components have their styles isolated in SFC, however, some global styles are also placed inside `src/assets/scss` next to Shards Dashboard Lite's base styles.
* The `src/utils` directory contains generic Chart.js utilities.

<br />

### Built using

* [Shards Vue](https://designrevision.com/downloads/shards-vue)
* [Chart.js](http://www.chartjs.org/)
* [Vue Datepicker](https://github.com/charliekassel/vuejs-datepicker)
* [NoUiSlider](https://refreshless.com/nouislider/)
* [Quill](https://quilljs.com/)
* [Material Icons](http://material.io/icons)
* [FontAwesome Icons](http://fontawesome.io)
