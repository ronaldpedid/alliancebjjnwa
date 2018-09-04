function initializeApp() {
  const express = require('express');
  const app = express();

  const path = require('path');

  let PORT = 8000;
  let PORT_ENV = process.env.PORT;

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

  app.listen(PORT || PORT_ENV);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });


  return app;
}

initializeApp();

