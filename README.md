# [![Taily UI - Tailwind CSS components](https://tailyui.by.nikdelv.in/assets/github/logo.png)](https://tailyui.by.nikdelv.in)

Introducing Taily UI - 🚀 Beautiful, fast, and modern UI Library 100% built and animated with pure Tailwind CSS.

[![Total Downloads](https://img.shields.io/npm/dt/taily-ui.svg)](https://www.npmjs.com/package/taily-ui)
[![Latest Release](https://img.shields.io/npm/v/taily-ui.svg)](https://github.com/nikdelvin/taily-ui/releases)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://tailyui.nikdelvin.dev/docs/getting-started/license)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Table of Contents

- Taily UI
  - [Table of Contents](#table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Quick Start](#-quick-start)
  - [📋 Prerequisites](#-prerequisites)
  - [💻 Installation](#-installation)
    - [NPM Installation](#npm-installation)
  - [📖 Usage](#-usage)
    - [Data Attributes](#data-attributes)
  - [🪄 Components](#-components)
    - [Featured Components](#featured-components)
  - [❓ Troubleshooting](#-troubleshooting)
    - [Styles not showing up?](#styles-not-showing-up)
    - [Components not working?](#components-not-working)
  - [🤝 Contributing](#-contributing)
    - [Getting Started](#getting-started)
  - [📜 License](#-license)

## ✨ Features

- **🎨 Pure Tailwind CSS** - No extra CSS files or dependencies to load
- **⚡ Lightweight & Fast** - Minimal bundle size with zero overhead
- **🔧 Fully Customizable** - Use Tailwind utilities to style components
- **📱 Responsive by Default** - Mobile-first design patterns
- **♿ Accessible** - Built with accessibility best practices
- **🎯 Simple Data Attributes** - Easy-to-use HTML interface

## 🚀 Quick Start

The fastest way to get started with Taily UI is to use the data attributes interface:

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <button data-color="primary" data-type="solid" data-size="medium" class="button">
        Start using Taily UI
    </button>
</body>
</html>
```

For a complete setup guide, check the [Installation](#-installation) section below.

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js** 14.0 or higher ([Download](https://nodejs.org/))
- **Tailwind CSS** 3.0 or higher ([Install Guide](https://tailwindcss.com/docs/installation))

## 💻 Installation

Taily UI can be included as a plugin into an existing Tailwind CSS project to help you build websites faster with a set of beautiful, production-ready web components built with Tailwind CSS utilities.

### NPM Installation

Make sure that you have [Node.js](https://nodejs.org/en/) and [Tailwind CSS](https://tailwindcss.com/) installed first.

1. Install Taily UI as a dependency:

    ```bash
    npm install taily-ui
    ```

2. Add Taily UI as a plugin in your `tailwind.config.js`:

    ```javascript
    const { tailyUI } = require('taily-ui')

    module.exports = {
        plugins: [tailyUI]
    }
    ```

3. Or if you use TypeScript, add it to your `tailwind.config.ts`:

    ```typescript
    import type { Config } from 'tailwindcss'
    import { tailyUI } from 'taily-ui'

    const config: Config = {
        plugins: [tailyUI]
    }
    export default config
    ```

## 📖 Usage

### Data Attributes

The preferred way to use Taily UI components is via the data attributes interface. This allows you to configure components directly in your HTML using simple attributes:

```html
<button data-color="primary" data-type="solid" data-size="medium" class="button">
    Start using Taily UI
</button>
```

Available attributes include:

- `data-color` - Set the button color (primary, secondary, default, etc.)
- `data-type` - Choose the button type (solid, outline, ghost, etc.)
- `data-size` - Define the button size (small, medium, large, etc.)

## 🪄 Components

Taily UI is an open source collection of 50+ UI components built with the utility classes from Tailwind CSS that you can use as a starting point when coding user interfaces and websites. Each component is production-ready, fully customizable, and accessible.

### Featured Components

| Button | Button Group | Card |
| --- | --- | --- |
| [![Tailwind CSS Button](https://tailyui.by.nikdelv.in/assets/github/button.png)](https://tailyui.by.nikdelv.in/docs/components/buttons) | [![Tailwind CSS Button Group](https://tailyui.by.nikdelv.in/assets/github/button-group.png)](https://tailyui.by.nikdelv.in/docs/components/button-groups) | [![Tailwind CSS Card](https://tailyui.by.nikdelv.in/assets/github/card.png)](https://tailyui.by.nikdelv.in/docs/components/cards) |

[View all components →](https://tailyui.by.nikdelv.in/docs/components)

## ❓ Troubleshooting

### Styles not showing up?

Make sure Taily UI is correctly installed as a plugin in your `tailwind.config.js` or `tailwind.config.ts` file. The plugin needs to be included in the `plugins` array for styles to be generated.

### Components not working?

Ensure that:

- Tailwind CSS version 3.0 or higher is installed
- You've included the Taily UI plugin in your Tailwind config
- You're using the correct data attributes

For more help, check the [documentation](https://tailyui.by.nikdelv.in/docs) or open an issue on GitHub.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/nikdelvin/taily-ui/issues).

### Getting Started

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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
