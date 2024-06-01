# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Horizontal Scrollable Card List

A React component that displays a list of products in a horizontally scrollable format. Each product is represented by a card that includes an image, title, description, price, and optional tags such as "Ads", "Trending", or "Recommended".

## Features

- Horizontally scrollable list of product cards.
- Each card displays product details including image, title, description, and price.
- Cards can have optional tags like "Ads", "Trending", or "Recommended".
- Smooth scrolling functionality for navigating through the list.
- Skeleton loader for cards to enhance user experience during data fetching.

## Demo

![Demo GIF](path_to_demo_gif.gif)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/horizontal-scrollable-card-list.git
   ```

2. Navigate to the project directory:

   ```bash
   cd horizontal-scrollable-card-list
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the component in action.

## Project Structure

```plaintext
horizontal-scrollable-card-list/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── CardSkeleton.tsx
│   │   ├── HorizontalScrollCardList.jsx
│   └── App.jsx
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

## Components

### `Card.tsx`

A component that represents a single product card.

#### Props

- `index`: Unique identifier for the card.
- `tag`: Optional tag for the card (e.g., "Ads", "Trending", "Recommended").
- `title`: Title of the product.
- `image`: URL of the product image.
- `description`: Description of the product.
- `price`: Price of the product.

### `CardSkeleton.tsx`

A skeleton loader component for the card, displayed while the actual card data is being fetched.

### `HorizontalScrollCardList.jsx`

A component that renders a horizontally scrollable list of product cards.

## Customization

You can customize the styles and behavior of the components by modifying the corresponding CSS classes and JavaScript logic in the source files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Fake Store API](https://fakestoreapi.com/) for providing sample product data.
- [React](https://reactjs.org/) for the UI library.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework.

