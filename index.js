function initializeApp() {
  const express = require('express');
  const app = express();

  const path = require('path');

  let PORT = 8000;
  let PORT_ENV = process.env.PORT;

  app.use('/dist', express.static('dist/public'))

  /* production only */
  if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets ie: main.css/main.js
    app.use(express.static('client/dist'));
    //express will serve up the index.html file if it doesn't recognize the route.
    app.get('/*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    });
  }


  app.listen(PORT_ENV || PORT);


  return app;
}

initializeApp();

