# Code Review

## 08-12-22

- [ ] To put the images in the `src/assets` folder
- [ ] To remove `index.js` in assets
- [ ] To keep the global style in the `styles` folder
- [ ] To keep the theme, constants, helper functions use `utils` folder
- [ ] To use the [fontsource](https://fontsource.org/fonts/nunito-sans) for fonts
- [ ] Create an index.js within each folder for exporting. This will reduce repeating names on the imports.
- [ ] Use the .jsx extension for React components file
- [ ] Non-components (functions, Variable names, folder name, helper file name, etc..) should be written using camelCase - myUtilityFile.js
- [ ] To keep the router related files (RouterApp, routes, private router, etc.) in a separate `router` folder
- [ ] Always use `prop-types` to define the props for the react component
- [ ] To add the default value for the props of the component
- [ ] Use comments to explain why you did something, not how you did it. If you find yourself explaining how you did something, then spend more time writing descriptive functions, methods, and filenames that are self-explanatory.Write comments that are informative, explanatory and offer clarification
- [ ] Create multiple files instead of writing a big file. (fix to small functionality for each file) - Each with a single responsibility. Lines of code shouldn't exceed ~400
