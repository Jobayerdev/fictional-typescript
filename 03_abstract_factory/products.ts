abstract class IProduct {
	name: string
	memory: number
	price: number

	abstract getPrice(): number
	abstract getName(): string
	abstract getMemory(): number
}

class Laptop implements IProduct {
	name: string
	memory: number
	price: number

	warrantyPeriod: number
	modelDetails: string

	getPrice(): number {
		return this.price
	}
	getName(): string {
		return this.name
	}
	getMemory(): number {
		return this.memory
	}
}

class Mobile implements IProduct {
	name: string
	memory: number
	price: number

	warrantyPeriod: number
	modelDetails: string
	type: "SMART" | "NORMAL"

	getPrice(): number {
		return this.price
	}
	getName(): string {
		return this.name
	}
	getMemory(): number {
		return this.memory
	}
}

export class ProductFactory {
	createProduct(type: "LAPTOP" | "MOBILE"): IProduct {
		if (type === "LAPTOP") {
			return new Laptop()
		} else {
			return new Mobile()
		}
	}
}
