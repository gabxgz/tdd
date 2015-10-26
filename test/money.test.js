define(['src/dollar'], function(Dollar){
	
	describe('Dollar', function() {
		it('should be able to multiply and return a new Dollar', function() {
			var five = new Dollar(5);

			expect(five.times(2).amount).toBe(new Dollar(10).amount);
			expect(five.times(3).amount).toBe(new Dollar(15).amount);
		});

		it('should equal Dollars of the same amount', function() {
			expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
			expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
		});
	});
});