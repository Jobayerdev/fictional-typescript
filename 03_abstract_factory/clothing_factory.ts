type Price = {
	size: string
	price: number
}
type Size = "S" | "M" | "L" | string

interface ClothingProduct {
	name?: string
	price?: Price[]
	getPrice(size: Size): Price[]
	getName(): string
	create(name: string, price: Price[]): ClothingProduct
}
class MenCloth implements ClothingProduct {
	name: string = ""
	price: Price[] = []

	getPrice(): Price[] {
		return this.price
	}
	getName(): string {
		return this.name
	}
	create(name: string, price: Price[]): ClothingProduct {
		this.name = name
		this.price = price
		return this
	}
}
class WomenCloth implements ClothingProduct {
	name: string = ""
	price: Price[] = []
	getPrice(): Price[] {
		return this.price
	}
	getName(): string {
		return this.name
	}
	create(name: string, price: Price[]): ClothingProduct {
		this.name = name
		this.price = price
		return this
	}
}
interface Factory {
	createClothingProduct(type: "MEN" | "WOMEN"): MenCloth | WomenCloth | null
}
export class ClothingFactory implements Factory {
	createClothingProduct(type: "MEN" | "WOMEN"): MenCloth | WomenCloth | null {
		if (type == "MEN") return new MenCloth()
		if (type == "WOMEN") return new WomenCloth()
		return null
	}
}
