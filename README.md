# SCROLLMAP

An HTML wrapper/extremely lightweight javascript library for creating scrolling storymaps. Includes options to create a

## Demo

[Demo with Leaflet](examples/example1.html)

## Documentation

### Content classes

`content`: Class for the highest level div in the document. Required parent class.

`row`: Class for organizing blocks of scrolling content. Required as a parent class for block positioning classes and as a child of the `foreground-item` class.

### Scroll Container

Series of upper-level classes to create a sidecar effect, where content scrolls over a fixed background.

`scroll-container`: Parent class for a sidecar div. Requires both a `background-item` and a `foreground-item`.

`background-item`: Child class of `scroll container`, defines content fixed to the background layer.

`foreground-item`: Child class of `scroll container`, defines the "sidecar", or the content that scrolls over the background layer.

### Block Positioning 

Classes for horizontally positioning divs. 

`center`: Position block in center of the window. 

`center-wide`: Position block in the center of the window with no margins on smaller screen sizes.

`left`: Position block on left side of the window.

`right`: Position block on right side of the window.

### Title Class

`title`: Vertically center all child elements of a block to create a title effect. 

### Other Classes

`vert-center`: Vertically center an element within a block. 

### License

Copyright © 2022 cartobaldrica

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.