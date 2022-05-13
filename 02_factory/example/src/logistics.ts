interface ILogistics {
	shippingCharge(weight: number): number
}

class RoadLogistics implements ILogistics {
	shippingCharge(weight: number): number {
		return 0.3 * weight
	}
}

class AirLogistics implements ILogistics {
	shippingCharge(weight: number): number {
		return 0.5 * weight
	}
}

class SeaLogistics implements ILogistics {
	shippingCharge(weight: number): number {
		return 0.4 * weight
	}
}

export class LogisticsFactory {
	createLogistics(type: 'road' | 'air' | 'sea'): ILogistics {
		if (type === 'road') {
			return new RoadLogistics()
		} else if (type === 'air') {
			return new AirLogistics()
		} else {
			return new SeaLogistics()
		}
	}
}
