# Html ContextMenu

> A simple and easy-to-use contextmenu library for html

[![npm](https://badgen.net/npm/v/@htmlos/contextmenu)](https://npm.im/@htmlos/contextmenu)

### Features

- [X] Supports  `html`, `vue`, `react` and other frameworks
- [X] Support infinite submenu
- [X] Support menu item click event callback
- [X] Support menu item disabled
- [X] Support menu item icon
- [X] Support hotkey description
- [X] Support automatic adaptation to browser pop-up position (keep all menus visible in browser visible area)
- [X] Support auto hide (when clicking outside area of ​​menu/adjusting browser window size/scrolling page/pressing `ESC`)
- [X] Support custom css style

![](./capture/capture1.png)

### 兼容性


| Browser  | Chrome | FireFox | IE | Safari |
|  ---- | ------ | ------- | --- | ----- |
|  Version  |    ?   |    ?    |  9+ |  11+  |


### Usage

- Installation

```shell
# npm
npm i contextmenu.ts
# yarn
yarn add contextmenu.ts
```

- Import
```js
import {ContextMenu, ContextMenuOptions} from "@htmlos/contextmenu";
import "@htmlos/contextmenu/dist/contextmenu.css";
```

- Custom style: please refer to `contextmenu.css`
  - Restrictions
    - Internally use `position: fixed`, which will cause some styles of some elements to be invalid (such as `.contextmenu` and `.contextmenu_item` of `margin`, need to use `padding` adjustment)
    - Don't use `transition` animation attribute for `.contextmenu`, this may not only be invisible during the loading process, but also affect the subsequent automatic positioning,
    - Do not use animations that affect the size. If used, it may cause typographical disturbances, because the menu is already fixed size after being visible
    - Other attributes please test by yourself

- Options: 

```js
// ContextMenu.config(options: CotextMenuOptions);
ContextMenu.config({
  i18n: function(s){
    return your_translate_function(s) || s;
  }
});
```

- Show menu
  
```js
const menu=[
  { // item
    name: "reload",
    icon: "./reload.png",
    disabled: false,
    onlick: ()=>{},
    hotkey: "ctrl+r",
    children: [
      //...
    ]
  },
  {}, // divider
  //...
]

menu[0].children=menu; // nested infinite submenu

Contextmenu.show(menu);
```

- Hide menu
  
```js
Contextmenu.hide();
```

### License

[LGPL-3.0](./license.txt)
