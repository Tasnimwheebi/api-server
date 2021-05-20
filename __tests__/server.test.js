'use strict';

const { server } = require( '../src/server.js' );
const supertest = require( 'supertest' );
const request = supertest( server );

//testing server api
describe ( 'server',()=>{
  // test bad route
  it( 'should get 404 status', async()=>{
    const res = await request.get( '/go' );
    expect( res.status ).toBe( 404 );
  } );

  // test bad method
  it( 'should get 404 status', async()=>{
    const res = await request.post( '/' );
    expect( res.status ).toBe( 404 );
  } );

});



