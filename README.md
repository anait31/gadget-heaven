# GH Store - E-commerce React Website

Welcome to GH Store, a modern e-commerce website built with React. This website allows users to browse and purchase a variety of products in a user-friendly interface. The project is built with React.js and uses modern web development tools.

# Live Website Link: https://gh-store.surge.sh/

Requirement Document Link
The full requirements and specifications for this project can be found in the following document: https://drive.google.com/file/d/1GFVF8UUMruQrMkArK1OyrE6Dv3YCrGeC/view?usp=sharing

- React Fundamentals Used in the Project
This project utilizes various core concepts of React to deliver a seamless experience. Below are some of the fundamental React concepts used:
Components: Functional and class-based components to structure the UI and manage state.
State and Props: Passing and managing data between components using state and props.
useState Hook: For handling state within functional components.
useEffect Hook: Used for side-effects like fetching data or updating the DOM after changes.
Event Handling: Managing user interactions like clicks, input changes, and form submissions.
Conditional Rendering: Dynamically displaying content based on conditions (e.g., showing loading state or user authentication status).
JSX Syntax: Using JavaScript within HTML-like syntax for building UI components.
React Router: For client-side routing to navigate between different pages of the website (e.g., product page, cart page, etc.).
Error Boundaries: Handling JavaScript errors in React components and displaying fallback UI.

- Data Management
Local Storage:
Data such as shopping cart items are persisted in the browser's local storage so that users' carts are saved even if they reload the page or revisit the website.
This allows for a more seamless shopping experience.

5 Key Features of the Website

Product Catalog Functionality:
Users can browse through a catalog of products, filter by categories items. Product details such as price, description, and images are available for each product.

Add to Cart:
Users can add items to their shopping cart, adjust quantities, and proceed to purchase. The cart is stored in local storage to ensure persistence.

User Authentication:
Users can register, log in, and manage their accounts. This feature is tied to the state of the application and uses Context API to manage user sessions.

Responsive Design:
The website is fully responsive and optimized for all screen sizes, ensuring an optimal experience on mobile, tablet, and desktop devices.

Product Wishlist:
Customers can add products to wishlist.