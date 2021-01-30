class Clipboard {
	constructor() {
		this.countDots = 0;
		this.activeSpecs = null;
		this.allSpecs = 0;
	}

	getCount() {
		return this.countDots;
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

	decreaseSpecsCount() {
		this.activeSpecs--;
	}

	setAllSpecs(count) {
		this.allSpecs = count;
		this.setActiveSpecs(count);
	}

	getAllSpecs() {
		return this.allSpecs;
	}
}

module.exports = Clipboard;
