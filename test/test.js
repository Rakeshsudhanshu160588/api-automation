const supertest = require("supertest");

const {expect}   = require("chai");
let data = require('../data/data.json');

let baseurl = data.baseurl;
let endpoints = data.endpoints;
let headers = data.headersdata;
let payloads = data.payloadsdata;


describe ("Test suites ", () =>{
    it('should pass the test ', async function() {
        let response = await supertest(baseurl)
        .post(endpoints)
        .set(headers)
        .send(payloads);
        console.log(response.body);
        console.log(response.statusCode);
        expect(response.statusCode).to.equal(404);
        //expect(response.body).to.have.property('id');
        console.log("Test passed");

    });
})