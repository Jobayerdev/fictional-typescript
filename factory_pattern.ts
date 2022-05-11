interface Dialog {
	template: string
	title: string
	message: string
	visible: boolean
	hide(): void
	render(title: string, message: string): string
}
class MobileDialog implements Dialog {
	title: string = ""
	message: string = ""
	visible: boolean = false
	template: string = `<div class="mobile-dialog">
                        <h2>${this.title};</h2>
                        <p class="dialog-content">
                          ${this.message}
                        </p>
                      </div>`
	hide(): void {
		this.visible = false
	}
	render(title: string, message: string): string {
		this.title = title
		this.message = message
		this.visible = true
		return this.template
	}
}
class DesktopDialog implements Dialog {
	title: string = ""
	message: string = ""
	visible: boolean = false
	template = `
      <div class="desktop-dialog">
          <h1>${this.title};</h1>
          <hr>
          <p class="dialog-content">
            ${this.message}
          </p>
      </div>
  `
	hide() {
		this.visible = false
	}
	render(title: string, message: string) {
		this.title = title
		this.message = message
		this.visible = true
		return this.template
	}
}
class DialogFactory {
	createDialog(type: "mobile" | "desktop"): Dialog {
		if (type === "mobile") {
			return new MobileDialog()
		} else {
			return new DesktopDialog()
		}
	}
}
class App {
	dialog!: Dialog
	factory = new DialogFactory()
	render() {
		this.dialog = this.factory.createDialog("mobile")
		if (this.dialog.visible) {
			this.dialog.render("Hello", "Hello World")
		}
	}
}
