'use strict';
let buff = {};
Object.defineProperty(exports, '__esModule', { value: true });
let ExecutionMetrics = (function() {
	function ExecutionMetrics() {
	}
	ExecutionMetrics.prototype.start = function(taskId) {
		buff[taskId] = {};
		buff[taskId].startTime = new Date().getTime();
	};
	ExecutionMetrics.prototype.stop = function(taskId) {
        buff[taskId].duration = new Date().getTime() - buff[taskId].startTime;
		this.duration = buff[taskId].duration;
	};
	ExecutionMetrics.prototype.getDuration = function(taskId) {
		return buff[taskId].duration;
	};
	return ExecutionMetrics;
})();
exports.ExecutionMetrics = ExecutionMetrics;
//# sourceMappingURL=execution-metrics.js.map