// import {filter, includes, orderBy, slice} from 'lodash';
var express = require('express');
var router = express.Router();
var _ = require('lodash');
let account_data = require('../const/accounts.js');
let invoice_data = require('../const/invoices.js');


router.get('/accounts', function (req, res) {
  console.log('Accounts',req.query);
  let {page, range, orderby, orderon, search} = req.query
  page = parseInt(page);
  range = parseInt(range);
  let start =   0,//((page - 1) * range),
      end   =   page * range,//start + range,
      rows  =   account_data.rows;
  if(search){
    rows = _.filter(rows, function(row) { 
      return _.includes((row.name).toLowerCase(), search.toLowerCase()) 
            || _.includes((row.status).toLowerCase(), search.toLowerCase());
    });
  }
  if(orderon && orderby){
    rows = _.orderBy(rows, [orderon], [orderby]);
  }
  rows = _.slice(rows,[start],[end]);
  res.send({rows});
});

router.get('/invoices', function (req, res) {
  console.log('Invoices',req.query);
  let {page, range, orderby, orderon, search} = req.query
  page = parseInt(page);
  range = parseInt(range);
  let start =   0,//((page - 1) * range),
      end   =   page * range,//start + range,
      rows  =   invoice_data.rows;
  if(search){
    rows = _.filter(rows, function(row) { 
      return _.includes((row.name).toLowerCase(), search.toLowerCase()) 
            || _.includes((row.status).toLowerCase(), search.toLowerCase());
    });
  }
  if(orderon && orderby){
    rows = _.orderBy(rows, [orderon], [orderby]);
  }
  rows = _.slice(rows,[start],[end]);
  res.send({rows});
});



router.get('/accountDetails', function (req, res) {
  let id = req.query.id;
  res.json({
    id: id,
    name: 'ABC-' + id,
    image: '',
    personalInfo: {
      email: 'test@gmail.com',
      address: {
        street: '24/185, MJ Street',
        city: 'New Yark'
      },
      position: 'Home Remedies for blisters',
      university: 'Cellulite Treatment Option',
      licenceNo: '718-147-2718',
    },
    passwordInfo: {
      notice: 'Note: To change these settings you must enter a password.',
      lastChanged: '18 Sep 2017 10:33AM'
    },
    payInfo: {
      creditCard: '**** **** **** **** 2747',
      paypal: 'harvey_ariel@yahoo.com'
    }
  });
});

module.exports = router;