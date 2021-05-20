'use strict';

const { server } = require( '../src/server.js' );
const supergoose = require( '@code-fellows/supergoose' );
const request = supergoose( server );
const mongoose = require('mongoose');
require('dotenv').config();


let id;
//testing food api


//testing clothes api
describe( 'clothes api', () => {
  
  // Test create method
  it( 'should create a new clothes using POST request', async () => {
    // arrange
    let clothes = {
      name: 'T-shirt',
      color:'red',
    };
      //act
    const res = await request.post( '/api/v1/clothes' ).send( clothes );
    //assert
    expect( res.status ).toEqual( 201 );
    expect( res.body.name ).toEqual( 'T-shirt' );
    expect( res.body.color ).toEqual( 'red' );
    expect(res.body._id.length).toBeGreaterThan(0);
    id = res.body._id;
  } );
  // Test get method
  it( 'should return clothes using GET', async () => {
    const res = await request.get( '/api/v1/clothes' );
    expect( res.status ).toEqual( 200 );
    expect( Array.isArray( res.body ) ).toBeTruthy();
  } );

  // Test get method with id
  it( 'should return specific clothes data using GET', async () => {
    const res = await request.get( `/api/v1/clothes/${id}` );
    expect( res.body[0].name ).toEqual( 'T-shirt' );
    expect( res.body[0].color ).toEqual( 'red' );
    expect( res.status ).toEqual( 200 );
  } );

  // Test update method
  it( 'should update specific clothes data using PUT', async () => {
    // arrange
    let editingClothes = {
      name: 'T-shirt',
      color:'green',
    };
    const res = await request.put( `/api/v1/clothes/${id}` ).send ( editingClothes );
    expect( res.body.name ).toEqual( 'T-shirt' );
    expect( res.body.color ).toEqual( 'green' );
    expect(res.body._id.length).toBeGreaterThan(0);
    expect( res.status ).toEqual( 200 );
  } );
  // Test delete method
  it( 'should delete specific clothes data using delete', async () => {
    const res = await request.delete( `/api/v1/clothes/${id}` );
    expect( res.status ).toEqual( 200 );
  } );
});

//testing food api

describe( 'food api server', () => {
  
  // Test create method
  it( 'should create a new food using POST request', async () => {
    // arrange
    let food = {
      name: 'cherry',
      type:'fruit',
    };
      //act
    const res = await request.post( '/api/v1/food' ).send( food );
    //assert
    expect( res.status ).toEqual( 201 );
    expect( res.body.name).toEqual('cherry');
    expect( res.body.type).toEqual('fruit');
    expect(res.body._id.length).toBeGreaterThan(0);
    id = res.body._id;
  } );
  // Test get method
  it( 'should return food using GET', async () => {
    const res = await request.get( '/api/v1/food' );
    expect( res.status ).toEqual( 200 );
    expect( Array.isArray( res.body ) ).toBeTruthy();
  } );

  // Test get method with id
  it( 'should return specific food data using GET', async () => {
    const res = await request.get( `/api/v1/food/${id}` );
    expect( res.body[0].name ).toEqual( 'cherry' );
    expect( res.body[0].type ).toEqual( 'fruit' );
    expect( res.status ).toEqual( 200 );
  } );

  // Test update method
  it( 'should update specific food data using PUT', async () => {
    // arrange
    let editingFood = {
      name: 'strawberry',
      type:'fruit',
    };
    const res = await request.put( `/api/v1/food/${id}` ).send ( editingFood );
    expect( res.body.name ).toEqual( 'strawberry' );
    
    expect(res.body._id.length).toBeGreaterThan(0);
    expect( res.status ).toEqual( 200 );
  } );
  // Test delete method
  it( 'should delete specific food data using delete', async () => {
    const res = await request.delete( `/api/v1/food/${id}` );
    expect( res.status ).toEqual( 200 );
  } );
});
