'use strict';

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
