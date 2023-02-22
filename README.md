# SCROLLMAP

An HTML wrapper/lightweight javascript library for creating scrolling storymaps. This library was developed for and used in _Geography 572: Graphic Design in Cartography_ at University of Wisconsin—Madison.

## Demo

[Basic Demo](https://cartobaldrica.github.io/scrollmap/examples/example572.html)

## Examples

These examples are from UW-Madison students who created storymaps using Scrollmap in Fall 2022.

[Kiki's Delivery Service](https://smichalski3.github.io/portfolio/kikis-delivery.html) by Sophie Michalski ([portfolio](https://smichalski3.github.io/portfolio/index.html))

[Faience Map](https://htpurisch.github.io/web_portfolio/scrollmap_demo/scrollmap.html) by Hans Purisch ([portfolio](https://htpurisch.github.io/web_portfolio/))

[22, a map](https://jake-steinberg.github.io/portfolio/22map.html) by Jake Steinberg ([portfolio](https://jake-steinberg.github.io/portfolio/index.html))

[Slippy Postal Map](https://sid-rcs.github.io/scrolly-map/) by Chinna Subbaraya Siddharth (Sid) Ramavajjala ([portfolio](https://sid-rcs.github.io/maps/))

## How to Use

### Basics

Once you install scrollmap.js and scrollmap.css from the Github Repo, and link to them on an HTML page, start by creating a `div` with a class `content`.

```
<div class = "content">
```

To add content to a story, add a `div` class `row`. 

```
<div class = "content">
    <div class = "row">
    </div>
</div>
```

Individual content blocks are `divs` with position classes. For example, the `center` class will create a centered content block on desktop.

```
<div class = "content">
    <div class = "row">
        <div class = "center">
            //insert content here
        </div>
    </div>
</div>
```

`left` and `right` positioned content `divs` can be placed side-by-side.

```
<div class = "content">
    <div class = "row">
        <div class = "left">
            //left content
        </div>
        <div class = "right">
            //right content
        </div>
    </div>
</div>
```

### Sidecar

Basic content classes are easy to easy to use, but they are somewhat limited. A _sidecar_ fixes content to the background, and then scrolls other content atop it. This example uses `img` elements, but any HTML elements can be used. 

Unlike basic content, which uses the `row` class, `sidecar` elements use the `scroll-container` class. Within the `scroll-container` class, a sidecar has a `background-item` div and a `foreground-item` div. 

```
<div class = "content">
    <div class = "scroll-container">
        <div class = "background-item">
            //background items
        </div>
        <div class = "foreground-item">
            //foreground items
        </div>
    </div>
</div>
```

At its most basic, a `background-item` can simply be an `img`

```
<div class = "background-item">
    <img src="img/background.png">
</div>
```

On the other hand, a `foreground-item` contains any number of basic content blocks.

```
<div class = "foreground-item">
    <div class = "row">
        <div class = "center">
            //insert content here
        </div>
    </div>
 </div>
 ```

 So, the following script would scroll the two foreground items that scroll over a background image.

```
<div class = "content">
    <div class = "scroll-container">
        <div class = "background-item">
            <img src="img/background.png">
        </div>
        <div class = "foreground-item">
            <div class = "row">
                <div class = "center">
                    //insert content here
                </div>
            </div>
            <div class = "row">
                <div class = "left">
                    //insert content here
                </div>
            </div>
        </div>
    </div>
</div>
```

If, in the previous example, you wanted a new background image to correspond with the second `row` `class` (the `row` that contained a `left` div), you can use the `data-slide` property. `data-slide` links an item in the background to an item in the foreground. 

In the below example, the first `img` in the background appears with the first `div` in the foreground, and the second background `img` appears with the second `div`.

```
<div class = "background-item">
    <img src="img/background.png" data-slide="0">
    <img src="img/background2.png" data-slide="1">
</div>
<div class = "foreground-item">
    <div class = "row">
        <div class = "center">
            //insert content here
        </div>
    </div>
    <div class = "row">
        <div class = "left">
            //insert content here
        </div>
    </div>
</div>
```

The `data-slide` property essentially allows you have longer sidecars with multiple background and foreground items.

## Documentation

### Content classes

`content`: Class for the highest level div in the document. Required parent class.

`row`: Class for organizing blocks of scrolling content. Required as a parent class for block positioning classes and as a child of the `foreground-item` class.

### Sidecar

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

### Size Classes

`fit`: Set width to 100% of the parent container. This can be used to constrain the width of images to the width of their parent blocks.

`fill`: Set height to 100% of the parent container. This can be used to set an image to the height of the browser.

### Other Classes

`vert-center`: Vertically center an element within a block. 

`no-margin`: No margin beneath an element. 

`sm-margin`: 25% margin beneath an element. 

`lg-margin`: 100% margin beneath an element. 

## License

Copyright © 2022 cartobaldrica

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
