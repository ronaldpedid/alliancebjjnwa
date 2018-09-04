function initializeApp() {
  const express = require('express');
  const app = express();

  const path = require('path');

  let PORT = 8000;


  /* production only */
  if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets ie: main.css/main.js
    app.use(express.static('client/src'));
    //express will serve up the index.html file if it doesn't recognize the route.
    app.get('/*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    });
  }

  require('./routes/routes')(app);


  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  });

  app.listen(PORT || process.env.PORT);


  return app;
}

initializeApp();

