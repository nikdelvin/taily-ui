<p>
    <a href="https://tailyui.by.nikdelv.in">
      <img alt="Taily UI - Tailwind CSS components" width="350" src="https://tailyui.by.nikdelv.in/assets/github/logo.png">
    </a><br>
    Introducing Taily UI - 🚀 Beautiful, fast, and modern UI Library 100% built and animated with pure Tailwind CSS.
</p>

<p>
    <a href="https://www.npmjs.com/package/taily-ui"><img src="https://img.shields.io/npm/dt/taily-ui.svg" alt="Total Downloads"></a>
    <a href="https://github.com/nikdelvin/taily-ui/releases"><img src="https://img.shields.io/npm/v/taily-ui.svg" alt="Latest Release"></a>
    <a href="https://tailyui.nikdelvin.dev/docs/getting-started/license"><img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese"></a>
</p>

## 🚀 Getting started

Taily UI can be included as a plugin into an existing Tailwind CSS project and it is supposed to help you build websites faster by having a set of web components to work with built with the utility classes from Tailwind CSS.

### Install using NPM

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" >Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow" >Tailwind CSS</a> installed. 

1. Install Taily UI as a dependency using NPM by running the following command:

    ```bash
    npm install taily-ui
    ```

2. (A) Require Taily UI as a plugin inside the `tailwind.config.js` file:

    ```javascript
    const { tailyUI } = require('taily-ui')

    module.exports = {
        plugins: [tailyUI]
    }
    ```

3. (B) Or if you work with Typescript import Taily UI as a plugin inside the `tailwind.config.ts` file:

    ```javascript
    import type { Config } from 'tailwindcss'
    import { tailyUI } from 'taily-ui'

    const config: Config = {
        plugins: [tailyUI]
    }
    export default config
    ```

### Data attributes

The preferred way to use the interactive UI components from Taily UI is via the data attributes interface which allows us to add functionality via the HTML element attributes and most of the examples on our documentation applies this strategy.

For example, to set up a button component all you need to do is use `data-color`, `data-type` and `data-size` to setup color, type and size of the component.

```html
<button data-color="default" data-type="solid" data-size="medium" class="button">
    Start using Taily UI
</button>
```

## 🪄 Components

Taily UI is an open source collection of UI components built with the utility classes from Tailwind CSS that you can use as a starting point when coding user interfaces and websites.

<table>
    <tr>
        <td width="33.3333%">Button</td>
        <td width="33.3333%">Button Group</td>
        <td width="33.3333%">Card</td>
    </tr>
    <tr>
        <td width="33.3333%">
            <a href="https://tailyui.by.nikdelv.in/docs/components/buttons">
                <img alt="Tailwind CSS Button" src="https://tailyui.by.nikdelv.in/assets/github/button.png">
            </a>
        </td>
        <td width="33.3333%">
            <a href="https://tailyui.by.nikdelv.in/docs/components/button-groups">
                <img alt="Tailwind CSS Button Group" src="https://tailyui.by.nikdelv.in/assets/github/button-group.png">
            </a>
        </td>
        <td width="33.3333%">
            <a href="https://tailyui.by.nikdelv.in/docs/components/cards">
                <img alt="Tailwind CSS Card" src="https://tailyui.by.nikdelv.in/assets/github/card.png">
            </a>
        </td>
    </tr>
</table>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page.   

1. Fork the Project

2. Create your Feature Branch

    ```bash
    git checkout -b feature/AmazingFeature
    ```

3. Commit your Changes

    ```bash
    git commit -m 'Add some AmazingFeature'
    ```

4. Push to the Branch 

    ```bash
    git push origin feature/AmazingFeature
    ```

5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

1. [Tailwind CSS Team](https://tailwindcss.com/)