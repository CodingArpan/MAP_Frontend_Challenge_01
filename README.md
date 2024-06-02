
# Horizontal Scrollable Card List

A React component that displays a list of products in a horizontally scrollable format. Each product is represented by a card that includes an image, title, description, price, and optional tags such as "Ads", "Trending", or "Recommended".

## Features

- Horizontally scrollable list of product cards.
- Each card displays product details including image, title, description, and price.
- Cards can have optional tags like "Ads", "Trending", or "Recommended".
- Smooth scrolling functionality for navigating through the list.
- Skeleton loader for cards to enhance user experience during data fetching.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CodingArpan/MAP_Frontend_Challenge_01.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MAP_Frontend_Challenge_01
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to see the component in action.

## Project Structure

```plaintext
horizontal-scrollable-card-list/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── CardSkeleton.jsx
│   │   ├── HorizontalScrollCardList.jsx
│   └── App.css
│   └── App.jsx
│   └── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── postcss.config.js
└── tailwind.config.js
└── vite.config.js
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

