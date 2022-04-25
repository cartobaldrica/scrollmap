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