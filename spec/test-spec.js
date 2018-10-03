import { Haiku } from '../src/backend';

describe('Haiku', function() {
  var badTestHaiku = new Haiku("one", "two", "three");
  it('should create Haiku objects', function() {
    expect(badTestHaiku.tope()).toEqual("object");
  })
})




// import { Entry } from './../src/journal.js';
//
// describe('Sentence', function() {
//   it('should check if sentence ecceeds eight words', function() {
//     var testSentence = new Entry("My favorite Day", "Wow today was so totally amazing!");
//     expect(testSentence.words()).toEqual(6);
//   })
