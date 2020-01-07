class Coder {
    name(val) {
        console.log(val);
        return val;
    }

    skill(val) {
        console.log(this.name('qix') + '----' + 'skill:' + val);
    }

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }
}

let qix = new Coder();
qix.name('qix');
qix.skill('web');

let qix2 = new Coder(1, 2);
console.log(qix2.add());

class Htmler extends Coder {

}

let qix3 = new Htmler();
qix3.name('啊啊啊');