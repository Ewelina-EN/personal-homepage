# Ewelina Niewęgłowska - personal homepage

- Autor: Ewelina Niewęgłowska
- September 20, 2021
- Work in progress

## DEMO
Click on the link to see how it works || https://ewelina-en.github.io/personal-homepage/

## Technologies

- HTML
- CSS (grid/ flexbox/ media queries)
- BEM naming
- ES6+ features
- React.js
- Styled components
- Custom hooks
- Redux
- Redux-Saga
 -Redux-toolkit
 
 ## Other information 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Deployment
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Push to gh-pages branch
`npm run build`
`git subtree push --prefix build  origin gh-pages`

#### Troubleshooting
1. Delete "gh-pages" on Github.
2. Delete "gh-pages" localy `git branch -D gh-pages"
3. `git subtree push --prefix build  origin gh-pages` will force regenerate GH Page.