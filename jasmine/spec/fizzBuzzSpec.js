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
    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.play(3)).toEqual("Java");
      expect(javabuzz.play(6)).toEqual("Java");
    });
    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.play(5)).toEqual("Buzz");
      expect(javabuzz.play(10)).toEqual("Buzz");
    });
    it('"Javabuzz" when a number is divisible by 15', function() {
      expect(javabuzz.play(15)).toEqual("Javabuzz");
      expect(javabuzz.play(90)).toEqual("Javabuzz");
    });
    it('"number" when a number is not divisible by 3, 5 or 15', function() {
      expect(javabuzz.play(2)).toEqual(2);
    });
  });
});
