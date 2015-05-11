
A localization adapter for react-widgets using Momentjs.

    npm install react-widgets-moment-adapter

You can apply it by using the main module export, or the global object

```js
var widgets = require('react-widgets') // or window.ReactWidgets
  , momentAdapter = require('react-widgets-moment-adapter')

widgets.configure.setDateLocalizer(momentAdapter);

//use the widgets

```

Or if you want to minimize the size of your build you can just require the confuration module

```js
var configure = require('react-widgets/lib/configure')
  , momentAdapter = require('react-widgets-moment-adapter')

configure.setDateLocalizer(momentAdapter);

//use the widgets

```