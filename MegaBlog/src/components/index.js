/**
 * This file exports all the components in the src/components folder as named exports.
 *
 * Components are reusable UI elements that can be used throughout the application.
 *
 * The Header and Footer components in this file are exported as named exports and can be imported
 * in other files to use them.
 *
 * This file is usually imported in other files using a relative path to the file.
 * For example: `import { Header, Footer } from "./components";`
 */

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export { Header, Footer };
