define(['./money'], function(Money) {
	var Dollar = function (amount) {
		Money.call(this, amount);
	};

	Dollar.prototype = Object.create(Money.prototype);
	Dollar.prototype.constructor = Dollar;

	return Dollar;
});