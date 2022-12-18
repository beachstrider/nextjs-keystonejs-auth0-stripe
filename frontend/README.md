Clean Next-Apollo-Bootstrap build

Runs on port 3000 per package.json
Looks for keystone server or API as defined in apollo-client.js

Bootstrap is imported before global styles for cascading

--custom configurations--
components/ClientOnly.js - waits until data is loaded from the API client side before rendering
pages/app.js wrapped in <ApolloProvider>
pages/\_document.js - overrides default document to load bootstrap for all pages
