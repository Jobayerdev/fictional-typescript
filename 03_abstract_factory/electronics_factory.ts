// Mobile factories
interface ElectronicsProduct {
	name: string
	memory: number
	price: number
	getPrice(): number
	getName(): string
}
class Mobile implements ElectronicsProduct {
	name: string = ""
	memory: number = 0
	price: number = 0
	getPrice(): number {
		return this.price
	}
	getName(): string {
		return this.name
	}
}
class Laptop implements ElectronicsProduct {
	name: string = ""
	memory: number = 0
	price: number = 0
	processor: string = ""
	getPrice(): number {
		return this.price
	}
	getName(): string {
		return this.name
	}
	getProcessor(): string {
		return this.processor
	}
	getMemory(): number {
		return this.memory
	}
}
interface Factory {
	createElectronicsProduct(type: "MOBILE" | "LAPTOP"): Mobile | Laptop | null
}
export class ElectronicsFactory implements Factory {
	createElectronicsProduct(type: "MOBILE" | "LAPTOP"): Mobile | Laptop | null {
		if (type === "MOBILE") return new Mobile()
		if (type === "LAPTOP") return new Laptop()
		return null
	}
}
