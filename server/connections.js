'use strict';

/**
 * This file handles all connections to the private api
 * Since its just 3 connections, a file is more then enough
 * But if more connections start to be created, or more complex api are used,
 * there will be a need to break each connection down into micro services
 * This helps with debugging and code error
 */

import https from 'https';

/**
 * GET a single campaign Options
 */
const getOneOptions = {
  host: 'esobbc6302.execute-api.eu-west-1.amazonaws.com',
  port: 443,
  path: '/default/campaigns/{id}',
  headers: {
    'X-API-Key': 'BxVwmtoGEj8cXYSOTOZKTKZc8yFTJIB4zbCz366b'
  }
};

/**
 *  POST add a new campaign Options
 */
const addCampOptions = {
  host: 'esobbc6302.execute-api.eu-west-1.amazonaws.com',
  port: 443,
  path: '/default/campaigns',
  headers: {
    'X-API-Key': 'BxVwmtoGEj8cXYSOTOZKTKZc8yFTJIB4zbCz366b'
  }
};

/**
 * Post example
 */
// let postRequest = https.post( options, ( resp ) => {

//   let data = '';

//   resp.on( 'data', ( chunk ) => {
//     data += chunk;
//   });

//   resp.on( 'end', () => {
//     console.log( JSON.parse( data ));
//   });

// }).on( 'error', ( err ) => {
//   console.log( 'Error: ' + err.message );
// });

/**
 * GET All Campaigns Options
 */
const getAllOptions = {
  host: 'esobbc6302.execute-api.eu-west-1.amazonaws.com',
  port: 443,
  path: '/default/campaigns/*',
  headers: {
    'X-API-Key': 'BxVwmtoGEj8cXYSOTOZKTKZc8yFTJIB4zbCz366b'
  }
};
  
exports.getAll = () => {
  return new Promise( (resolve, reject) => {
    https.get( getAllOptions, ( resp ) => {
      
    let data = '';
    
      resp.setEncoding('utf8');
    
      resp.on( 'data', ( chunk ) => {
        data += chunk;
      });
    
      resp.on( 'end', () => {
    
        if ( resp.statusCode === 200 ) {
    
          try {
            const parsedData = JSON.parse( data );
            resolve(parsedData);
          } catch (e) {
            reject(e.message);
          }
    
        } else {
    
          console.log( 'Status:', resp.statusCode );
    
        }
      });
    }).on( 'error', ( err ) => {
      console.log( 'Error: ' + err.message );
    });
  });
}
