define(['./money'], function(Money) {
	var Franc = function (amount) {
		Money.call(this, amount);
	};

	Franc.prototype = Object.create(Money.prototype);
	Franc.prototype.constructor = Franc;

	return Franc;
});