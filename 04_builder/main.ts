interface User {
	name: string
	age: number
}

class UserBuilder {
	private readonly user: User

	constructor() {
		this.user = {
			name: '',
			age: 0,
		}
	}

	setName(name: string) {
		this.user.name = name
		return this
	}

	setAge(age: number) {
		this.user.age = age
		return this
	}

	build() {
		return this.user
	}
}

const user1 = new UserBuilder().setAge(20).setName('Jon Doe')
