//Manuel Martinez
//Stacks Data Structure
//LIFO - Last In First Out

//using JS built in methods
var letters = [];

var word = "racecar";

var rword = "";

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
}
console.log(word + " is not a palindrome");

//using created JS class
var Stack = function () {
  this.count = 0;
  this.storage = [];

  //PUSH method adds value at the end of stack
  this.push = function (value) {
    this.storage[this.count] == value;
    this.count++;
  };

  //POP method removes and returns value at end of stack
  this.pop = function (value) {
    if (this.count === 0) {
      return null;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //SIZE returns value of array
  this.size = function (value) {
    return this.count;
  };

  //PEEK returns value at the end of stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};
