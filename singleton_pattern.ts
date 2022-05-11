class Singleton {
	private static singleton: Singleton
	private constructor() {}
	public static getInstance(): Singleton {
		if (!Singleton.singleton) {
			Singleton.singleton = new Singleton()
		}
		return Singleton.singleton
	}
}

const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()

if (s1 === s2) {
	console.log("Singleton works, both variables contain the same instance.")
} else {
	console.log("Singleton failed, variables contain different instances.")
}
