const syllable = require('syllable');

export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  tope(){
    return typeof this
  }


  // checkSyllable(word) {
  //   return syllable(word)
  //   // console.log(syllable(word));
  // }

  // lineCount(line) {
  //   let syllableCount = 0;
  //   line.split(" ").map((word)=>{
  //   syllableCount += this.checkSyllable(word)
  //   })
  //   return syllableCount;
  // }

  lineCount(line) {
    let syllableCount = 0;
    let doggeral = line.split(" ");
    console.log(line);
    console.log(doggeral);
    for(var i = 0; i < doggeral.length; i++) {
    syllableCount += syllable(doggeral[i]);
    console.log(syllable(doggeral[i]));
    console.log("the total number of syllables is " + syllableCount);
    }
    return syllableCount;
  }



  checkHaiku() {
    return (this.lineCount(this.line1) == 5
    && this.lineCount(this.line2) == 7
    && this.lineCount(this.line3) == 5)
} //RETURNS BOOLEAN
}



// Haiku.prototype.checkSyllable = function(word) {
//  //rules for syllables
// }
//
// Haiku.prototype.lineCount = function(line) {
// let syllableCount = 0;
// line.split(" ").map((word)=>{
// syllableCount += this.checkSyllable(word)
// })
// return syllableCount
// }
//
// Haiku.prototype.checkHaiku = function() {
//   if (this.lineCount(this.line1) == 5
//   && this.lineCount(this.line2) == 7
//   && this.lineCount(this.line3) == 5){
//   return true
//   } else {
//   return false
//   }
// }
