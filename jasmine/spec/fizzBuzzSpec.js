describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    beforeEach(function() {
      javabuzz = new Javabuzz();
    });

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('returns Fizz and Buzz in right situations', function() {
    
  });
});
