# noopener.js
Prevent phishing when use ```target="_blank"```. This JavaScript is self executed. It will find all ```<a>```-Elements in your document and will set the ```rel```-Atribute to ```noopener noreferrer```.

## Installation

You can install it wih bower:

```
bower install noopener-js
```

Further, you can also install it via NPM:

```
npm install noopener-js --save
```

Or just like the oldschool, copy the [source](https://raw.githubusercontent.com/XmlmXmlmX/noopener.js/master/src/main.js) or better the [minified file](https://raw.githubusercontent.com/XmlmXmlmX/noopener.js/master/dest/noopener.js) into your project.

## Usage

Very straightforward when using NPM:

```
<script src="node_modules/noopener-js/dest/noopener.js" type="text/javascript"></script>
```

Or when using Bower:

```
<script src="bower_components/noopener-js/dest/noopener.js" type="text/javascript"></script>
```

## Example

If your markup looks like this:

```
<a href="https://google.de/" target="_blank">Visit Google</a>
```

Noopener.js will change your markup to this:

```
<a href="https://google.de/" target="_blank" rel="noopener noreferrer">Visit Google</a>
```

## Resources
- https://mathiasbynens.github.io/rel-noopener/
- https://dev.to/ben/the-targetblank-vulnerability-by-example?utm_source=codropscollective

## To-Dos
- Test
- Update this readme!
