var express = require('express');
var router = express.Router();
var _ = require('lodash');
let account_data = require('../const/accounts.js');
let invoice_data = require('../const/invoices.js');


router.get('/accounts', function (req, res) {
  console.log(req.query);
  let page = req.query.page;
  let range = req.query.range;
  let orderby = req.query.orderby;
  let orderon = req.query.orderon || 'name';
  let startPoint = ((page - 1) * range) + 1;
  var data = account_data.rows;

  const getPage = (d, sp) => {
    console.log('****************',sp);
    
    d.map((r, i) => {
      r.id = sp + i;
      r.name = 'ABC-' + r.id;
    });
    return d;
  }
  if (orderby) {
    startPoint = 1;
    let data_array = [];
    for (var j = 0; j < page; j++) {
      startPoint = j * parseInt(range) + 1;
      let d = getPage(data, startPoint);
      data_array = [...data_array, ...d];
    }
    data_array = _.orderBy(data_array, [orderon], [orderby]);
    res.send({rows:data_array});
  } else {
    let d = getPage(data, startPoint);
    res.send({rows:d});
  }
});
  router.get('/invoices', function (req, res) {
    let page = req.query.page;
    let range = req.query.range;
    let orderby = req.query.orderby;
    let startPoint = ((page - 1) * range) + 1;
    let orderon = req.query.orderon || 'name';
    let data = invoice_data.rows;

    const getPage = (d, sp) => {
      d.map((r, i) => {
        r.id = sp + i;
        r.name = 'ABC-' + r.id;
      });
      return d;
    }
    if (orderby) {
      startPoint = 1;
    let data_array = [];
    for (var j = 0; j < page; j++) {
      startPoint = j * parseInt(range) + 1;
      
      let d = getPage(data, startPoint);
      data_array = [...data_array, ...d];
    }
    
    data_array = _.orderBy(data_array, [orderon], [orderby]);
    res.send({rows:data_array});
    } else {
      let d = getPage(data, startPoint);
      res.send({rows:d});
    }
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