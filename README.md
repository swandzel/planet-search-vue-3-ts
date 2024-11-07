# Planet Search in Vue 3 + TypeScript developed by swandzel

1. npm install
2. npm run dev

This app is online here: https://planet-search-vue-3-ts.netlify.app/

Sorting in this project is not 100% accurate. The sorting is applied only to the results currently visible on the screen (which the API returns with pagination), rather than across all records in the database, as the API lacks sorting functionality (or I couldn’t find it in the documentation). To make sorting work, I would need to fetch all results and perform sorting and pagination locally, which is not a good practice in commercial projects.
