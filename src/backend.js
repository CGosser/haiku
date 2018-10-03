class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  checkSyllable() {

  }

  lineCount() {
    let syllableCount = 0;
    line.split(" ").map((word)=>{
    syllableCount += this.checkSyllable(word)
    })
    return syllableCount
  }

  checkHaiku() {
    if (this.lineCount(this.line1) == 5
    && this.lineCount(this.line2) == 7
    && this.lineCount(this.line3) == 5){
    return true
    } else {
    return false
    }
  }
}



Haiku.prototype.checkSyllable = function(word) {
 //rules for syllables
}

Haiku.prototype.lineCount = function(line) {
let syllableCount = 0;
line.split(" ").map((word)=>{
syllableCount += this.checkSyllable(word)
})
return syllableCount
}

Haiku.prototype.checkHaiku = function() {
  if (this.lineCount(this.line1) == 5
  && this.lineCount(this.line2) == 7
  && this.lineCount(this.line3) == 5){
  return true
  } else {
  return false
  }
}
