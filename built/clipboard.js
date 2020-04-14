class Clipboard {
	constructor() {
		this.countDots = 0;
		this.activeSpecs = null;
	}

	getCount() {
		return this.countDots;
	}

	increaseSpecsCount() {
		this.countDots += 1;
	}

	setActiveSpecs(allSpecs) {
		this.activeSpecs = allSpecs;
	}

	getActiveSpecs() {
		return this.activeSpecs;
	}

	decreaseSpecsCount(countActiveTasks) {
		if(countActiveTasks !== 0){
			process.stdout.write('.');
		}
		this.activeSpecs = this.activeSpecs - 1;
	}
}

let clipboard = new Clipboard();

exports.Clipboard = clipboard;
