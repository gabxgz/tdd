define(function() {
	return function Dollar (amount) {
		this.amount = amount;
		
		this.times = function(multiplier) {
			return new Dollar(this.amount * multiplier);
		};

		this.equals = function(dollar) {
			return this.amount === dollar.amount;
		};
	};
});