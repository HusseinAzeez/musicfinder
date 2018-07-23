import { Template } from 'meteor/templating';

import Items from '../api/items.js';

import './body.html';

Template.body.helpers({
  data() {
    return Items.find({});
    console.log(Items.find());
  },
});

Template.body.events({
  'click .test': (event) => {
  },
});
