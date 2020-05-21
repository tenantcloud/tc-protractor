class Clipboard {
	constructor() {
		this.countDots = 0;
		this.activeSpecs = null;
		this.allSpecs = 0;
	}

	getCount() {
		return this.countDots;
	}

	resetCount() {
		this.countDots = 0;
	}

	increaseSpecsCount() {
		this.countDots++;
	}

	setActiveSpecs(allSpecs) {
		this.activeSpecs = allSpecs;
	}

	getActiveSpecs() {
		return this.activeSpecs;
	}

	decreaseSpecsCount(countActiveTasks) {
		if (countActiveTasks !== 0) {
			process.stdout.write('.');
		}
		this.activeSpecs--;
	}

	setAllSpecs(count) {
		this.allSpecs = count;
	}

	getAllSpecs() {
		return this.allSpecs;
	}
}

module.exports = Clipboard;
