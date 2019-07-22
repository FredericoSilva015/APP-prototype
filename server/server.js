'use strict';

import express from 'express';
import compression from 'compression';
import connections from './connections';
import path from 'path';
import fs from 'fs';

const app = express();

/**
 * We define the port to what ever the enviroment is currently on
 * or 3000 if undefined
 */
const PORT = process.env.PORT || 3000;

/**
 * Cors policy
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * Lets compress all middleware request comming through and increase http speed
 * for more info check: https://www.npmjs.com/package/compression
 */
app.use( compression() );

/**
 * serving the app/public folder 
 */
app.use( express.static( path.join( __dirname, '..', 'app', 'public' )));

/**
 * serve the index html in public containing the APP
 */
app.get('/', (req, res) => {

  const html = fs.readFileSync( 
    path.resolve( __dirname, '..', 'app', 'public', 'index.html' ), 'utf8'
  );

  res.send( html );
});

/**
 * Get all campaign endpoint
 */
app.get('/api/v1/all', (req, res) => {

 connections.getAll().then( response => {
      return res.status( 200 ).send( response );
  })
  .catch( error => {
    return res.status( 403 ).send( 'Error' );
  })
});

app.listen( PORT, () => {
  console.info( `Listening on port ${PORT}...` );
  console.info( `App is running in http://localhost:3000` );
});

