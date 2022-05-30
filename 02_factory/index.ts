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
