class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);


class Player {
    constructor(level, exp, weapon){
    this.l = level;
    this.e = exp;
    this.w = weapon;
    }
}
var playOne = new Player('100', '999999millon', 'rubber tree branch');
console.log(playOne.w);
console.log(playOne.e);