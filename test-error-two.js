"use strict";

var tiptoe = require("./index");

tiptoe(
	function step1()
	{
		return "a";
	},
	function step2(a)
	{
		console.log(a);

		process.nextTick(function() { this("b"); }.bind(this));
	},
	function step3()
	{
		console.log("SHOULD NOT SEE1");
	},
	function finish(err)
	{
		if(err)
		{
			console.log(err);
			console.log("c");
			process.exit(1);
		}

		console.log("SHOULD NOT SEE2");
		process.exit(0);
	}
);