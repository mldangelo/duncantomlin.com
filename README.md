# Duncan Tomlin's official™ personal site


## TODO 

### General 

1. Add a bio
2. SEO optimize
2. Add a "In what context do you know Duncan?" question on the index - can be a text input or drop down. Build separates sites for: personal, professional, romantic, art, architecture, etc.

### Impose Constraints of Physical Reality 

1. Social Distancing - use websockets to track # of active visitors - prevent more than X people from browsing the site at the same time.
2. By appointment - open the site early / late if someone requests an appointment.
3. Out of stock - some pages can go out of stock if too many people view them.
4. Update open / closing hours to support holidays
5. Social Distancing within a page -> websockets communicate mouse cursor locations -> warn users if cursors are too close (consider color change? how fast should this be? Do we have to do any motion filtering?)

### Nostalgia

1. Add fake advertisements that feature Duncan. Ideally as low quality gifs.
    - Ad a note about the importance of advertisements, and how people should contact you if they would like to be featured on your site. 
2. Whenver possible, use ~ circa 2000 web design principals - everything is a table - very little CSS

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Builds and deploys the production site to github pages. Utilizes react-snap to render all available routes and automatically adds production build to `gh-pages` branch and pushes to remote.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
