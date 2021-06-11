"use strict";

const X = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
const DELETE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>';
const PENCIL = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>';
const PRINT = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 8H2v9h4v4h12v-4h4V8zm-6 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>';
const MENU = '<svg viewBox="1 1 128 128"><circle cx= "128" cy="64" r="14" fill="#ff4"></circle><circle cx= "100" cy="16" r="14" fill="#f44"></circle><circle cx="0" cy="112" r="14" fill="#48f"></circle></svg>';
const DOWNLOAD = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>';
const UPLOAD = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/></svg>';
const FILE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>';
const PLUS = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';
const BUILD = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.09 2.91C10.08.9 7.07.49 4.65 1.67l4.34 4.34-3 3-4.34-4.34C.48 7.1.89 10.09 2.9 12.1c1.86 1.86 4.58 2.35 6.89 1.48l9.82 9.82 3.71-3.71-9.78-9.79c.92-2.34.44-5.1-1.45-6.99z"/></svg>';
const UP = '<svg height="12px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12"><path d="M0 0h24v12H0z" fill="none"/><path d="M0 10 H24 L12 2z"/></svg>';
const DOWN = '<svg height="12px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12"><path d="M0 0h24v12H0z" fill="none"/><path d="M0 2 H24 L12 10z"/></svg>';
const REORDER = '<svg height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 14 H24 L12 22z"/><path d="M0 10 H24 L12 2z"/></svg>';
const ARROW_DOWN = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>';
const CIRCLE = '<svg viewBox="0 0 24 24"><circle cx= "12" cy="12" r="6"></svg>'
const PAINT = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/></svg>';
const ABOUT = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>';
const SHEETS = '<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 204.376 204.376" style="enable-background:new 0 0 204.376 204.376;" xml:space="preserve"><path d="M171.247,204.376c2.485,0,4.5-2.015,4.5-4.5V61.35h-51.744c-7.502,0-13.605-6.107-13.605-13.614V0H33.13	c-2.485,0-4.5,2.015-4.5,4.5v195.376c0,2.485,2.015,4.5,4.5,4.5H171.247z M52.891,87.627h99.717v80H52.891V87.627z M106.749,143.96	h37.858v15.667h-37.858V143.96z M60.891,119.294h37.858v16.666H60.891V119.294z M60.891,143.96h37.858v15.667H60.891V143.96z	 M106.749,95.627h37.858v15.667h-37.858V95.627z M106.749,119.294h37.858v16.666h-37.858V119.294z M60.891,95.627h37.858v15.667	H60.891V95.627z M120.397,47.736v-37.34L164.2,51.35h-40.197C122.014,51.35,120.397,49.729,120.397,47.736z"/>';

function make(el) {
    let split1 = el.split(/[#]/);
    let elementSplit = split1[0];
    let element = elementSplit.split(/[.]/)[0];
    let css = parseClasses(elementSplit);
    let $el = $(document.createElement(element))
                .attr("class", css);
    if (split1.length > 1){
        let idSplit = split1[1];
        let id = idSplit.split(/[.]/)[0];
        css += " " + parseClasses(idSplit);
        $el.attr("id", id).attr("class", css);
    }
    return $el;
}

function parseClasses(str){
    let classes = str.split(/[.]/);
    let css = "";
    if (classes.length > 1) {
        css = classes[1];
        for (let i = 2; i < classes.length; i++){
            css += " " + classes[i];
        }
    }
    return css;
}

$.fn.setVar = function(val){
    let el = $(this);
    el.data("obj")[el.data("prop")] = val;
    return el;
}

$.fn.returnVar = function(){
    let el = $(this);
    return el.data("obj")[el.data("prop")];
}

function createStylesheet(id) {
    var stylesheet = document.createElement('style');
    stylesheet.type = 'text/css';
    stylesheet.id = id;
    document.head.appendChild(stylesheet);
    return stylesheet;
}

function writeCSSRules(gOrS, palette){
    let rules =  "." + gOrS.colorClass + "{background:" + palette[gOrS.color[0]] + ";color:" + palette[gOrS.color[1]] + ";}" +
            " ." + gOrS.colorClass + ".hvr{filter: brightness(70%);}" + 
            " ." + gOrS.colorClass + ":hover{filter: brightness(70%);}" + 
            " ." + gOrS.colorClass + ".selected{background:#000;color:" + palette[gOrS.color[0]] + ";}" +
            " .inv.sel."  + gOrS.colorClass + ":hover{background:" + palette[gOrS.color[0]] + "};";
    gOrS.stylesheet.innerHTML = rules;
}

$.fn.showPanel = function(panel){
    let frame = this;
    frame.children().detach();
    frame.append(panel);
    panel.show();
}