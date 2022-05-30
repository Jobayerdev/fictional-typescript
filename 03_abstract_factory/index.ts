import { ClothingFactory } from './clothing_factory'
import { ElectronicsFactory } from './electronics_factory'

interface Factory {
	createElectronicsProduct(): ElectronicsFactory
	clothingProduct(): ClothingFactory
}

class ProductFactory implements Factory {
	createElectronicsProduct(): ElectronicsFactory {
		return new ElectronicsFactory()
	}
	clothingProduct(): ClothingFactory {
		return new ClothingFactory()
	}
}
const factory = new ProductFactory()
const electronicsFactory = factory.createElectronicsProduct()
