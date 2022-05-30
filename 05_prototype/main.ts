interface Prototype {
	clone(): Prototype
	toString(): string
}
class Concrete1 implements Prototype {
	clone(): Prototype {
		return new Concrete1()
	}
	toString(): string {
		return 'This is Concrete One'
	}
}
class Concrete2 implements Prototype {
	clone(): Prototype {
		return new Concrete2()
	}
	toString(): string {
		return 'This is Concrete Two'
	}
}
class Concrete3 implements Prototype {
	clone(): Prototype {
		return new Concrete2()
	}
	toString(): string {
		return 'This is Concrete Three'
	}
}
// builder
class Builder {
	private prototypeMap: { [s: string]: Prototype } = {}
	constructor() {
		this.prototypeMap['c1'] = new Concrete1()
		this.prototypeMap['c2'] = new Concrete2()
		this.prototypeMap['c3'] = new Concrete3()
	}
	createOne(s: string) {
		console.log(s)
		return this.prototypeMap[s].clone()
	}
}

const builder = new Builder()
const client1 = builder.createOne('c1').clone()

console.log(builder['prototypeMap']['c1'].toString())
