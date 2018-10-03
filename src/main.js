import $ from 'jquery';
const syllable = require('syllable');
import { Haiku } from './backend';

$(document).ready(function() {
  $('#poem-form').submit(function(event) {
    event.preventDefault();
    var line1Input = $('#line1').val();
    var line2Input = $('#line2').val();
    var line3Input = $('#line3').val();
    var newHaiku = new Haiku(line1Input, line2Input, line3Input);
    console.log(newHaiku.checkHaiku());
    $('.is-or-is-not').text(newHaiku.checkHaiku() ? "This is a haiku" : "This is not a haiku");
  })
});
