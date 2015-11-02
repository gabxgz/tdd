define(function() {
	var Money = function(amount) {
		this.amount = amount;
	};

	Money.prototype.times = function(multiplier) {
		return new Money(this.amount * multiplier);
	};

	Money.prototype.equals = function(money) {
		return this.amount === money.amount;
	};

	return Money;
});