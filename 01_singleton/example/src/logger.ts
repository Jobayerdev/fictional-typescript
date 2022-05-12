export class Logger {
	private static instance: Logger
	private static config: LoggerConfig = {
		showLog: true,
	}
	private constructor() {}
	public static getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger()
		}
		return Logger.instance
	}
	public log(message: string, ...optionalParams: any[]) {
		if (Logger.config.showLog) {
			console.log(message, ...optionalParams)
		}
	}
	public setConfig(logger: LoggerConfig) {
		Logger.config = logger
	}
}
interface LoggerConfig {
	showLog: boolean
}
