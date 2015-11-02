define(['src/franc'], function(Franc){
	describe('Franc', function() {
		it('should be able to multiply and return a new Franc', function() {
			var five = new Franc(5);

			expect(five.times(2).amount).toBe(new Franc(10).amount);
			expect(five.times(3).amount).toBe(new Franc(15).amount);
		});

		it('should equal Francs of the same amount', function() {
			expect(new Franc(5).equals(new Franc(5))).toBe(true);
			expect(new Franc(5).equals(new Franc(6))).toBe(false);
		});
	});
});