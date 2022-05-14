interface ElectronicProduct {
	name: string
	memory: number
	price: number

	getPrice(): number
	getName(): string
	getMemory(): number
}
