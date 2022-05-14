interface ILogger {
	trace(str: string): void
	info(str: string): void
	debug(str: string): void
	warn(str: string): void
	error(str: string): void
}

class ProductionLogger implements ILogger {
	info(message: string): void {
		console.log(`INFO: ${message}`)
	}
	error(message: string): void {
		console.log(`ERROR: ${message}`)
	}
	warn(message: string): void {
		console.log(`WARN: ${message}`)
	}
	debug(message: string): void {
		console.log(`DEBUG: ${message}`)
	}
	trace(message: string): void {
		console.log(`TRACE: ${message}`)
	}
}

class DevelopmentLogger implements ILogger {
	info(message: string): void {
		console.log(`INFO: ${message}`)
	}
	error(message: string): void {
		console.log(`ERROR: ${message}`)
	}
	warn(message: string): void {
		console.log(`WARN: ${message}`)
	}
	debug(message: string): void {
		console.log(`DEBUG: ${message}`)
	}
	trace(message: string): void {
		console.log(`TRACE: ${message}`)
	}
}

class LoggerFactory {
	createLogger(type: 'production' | 'development'): ILogger {
		if (type === 'production') {
			return new ProductionLogger()
		} else {
			return new DevelopmentLogger()
		}
	}
}

const loggerFactory = new LoggerFactory().createLogger('production')

loggerFactory.info('Hello World')
loggerFactory.error('Hello World')
loggerFactory.warn('Hello World')
loggerFactory.debug('Hello World')
loggerFactory.trace('Hello World')

interface ILogistics {
	calculateShippingCharge(weight: number): number
}

class RoadLogistics implements ILogistics {
	calculateShippingCharge(weight: number): number {
		return (10 / 100) * weight
	}
}

class AirLogistics implements ILogistics {
	calculateShippingCharge(weight: number): number {
		return (20 / 100) * weight
	}
}

class SeaLogistics implements ILogistics {
	calculateShippingCharge(weight: number): number {
		return (15 / 100) * weight
	}
}

class LogisticsFactory {
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

const roadLogistics = new LogisticsFactory().createLogistics('road')
const airLogistics = new LogisticsFactory().createLogistics('air')
const seaLogistics = new LogisticsFactory().createLogistics('sea')

console.log(
	'Road Logistics Shipping Charge',
	roadLogistics.calculateShippingCharge(100)
)
console.log(
	'Air Logistics Shipping Charge',
	airLogistics.calculateShippingCharge(100)
)
console.log(
	'Sea Logistics Shipping Charge',
	seaLogistics.calculateShippingCharge(100)
)
