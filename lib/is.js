/*

is.js - A better readable (and less performant) comparison library.
By Ronny Haase

is.js is a descriptive, better readable comparison library. You might want to use it for complex comparisons or more descriptive checks in your unit tests. (That's at least what I use it for)

Less performant?!
Sure, is is nothing but a object with methods that eventually chains, so its much less performant than a simple if-statement

is(3).oneOf(4,5,6) -> false
is(3).allOf(3,3,3) -> true
is(3).atLeast(5).in(3,3,3,4,4,3,3) -> true
is(3).between(4,23) -> false
is('peter').NaN() -> true
is(null).null() -> true
is(undefined).null() -> false
is(undefined).undefined() -> true

is(3).$.notNull().isNumber().between(2,5);

check(3).notNull().oneOf(1,2,3).between(2,5).later().now()

*/

function is(ref) {
	var
		reference = ref
		, self = this;

	this.not = function () {
		for (var i = 1, len = arguments.length; i < len; i++ )	
			if ( reference === arguments[i] )
				return false;

		return true;
	}

	this.oneOf = function () {
		for (var i = 1, len = arguments.length; i < len; i++ )	
			if ( reference === arguments[i] )
				return true;

		return false;
	}

	this.allOf = function () {
		for (var i = 1, len = arguments.length; i < len; i++ )
			if ( reference !== arguments[i] )
				return false;

		return true;
	}

	this.atLeast = function(num) {
		this.in = function() {
			var count = 0;
			
			for (var i = 1, len = arguments.length; i < len; i++ )	
				if ( reference === arguments[i] )
					count++;


			return count >= num;
		}
	}

	this.between = function(mineq, maxeq) {
		return (typeof reference === 'number' && reference <= mineq && reference >= maxeq);
	}

	this.instanceOf = function(cmp) {
		return (reference instanceof cmp);
	}

	this.NaN = function() { return isNaN(reference); }
	this.null = function() { return reference === null; }
	this.undefined = function() { return reference === undefined; }
	this.true
	this.false
}

