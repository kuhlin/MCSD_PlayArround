 // Recreating "never force" by Gerard Ferrandez:
// https://codepen.io/ge1doot/pen/jEgLKo

var mouse = createVector(window.innerWidth * 0.5, window.innerHeight * 0.5);

function draw(e) {
	if (mouseIn) {
		mouse.lerp(mousePos, 0.05);
	} else
	{
		var speed = 0.03;
		var target = Vector.center();
		// if(isPreviewEmbed()) {
		speed = 0.05;
		var time = e * 0.001;
		target = target.add(createVector(sin(time * 3), cos(time * 5)).mult(200));
		// }
		mouse.lerp(target, speed);
	}
	var size = 50;
	var xCount = width / size;
	var yCount = height / size;
	size *= 0.75;
	var iXCount = 1 / xCount;
	var iYCount = 1 / yCount;
	var r = 200;
	var iR = 1 / r;
	lineCap('round');
	var vecs = [];
	for (var Y = 0; Y < yCount; Y++) {
		for (var X = 0; X < xCount; X++) {
			var pos = createVector(X, Y).
			add(0.5).
			mult(iXCount, iYCount).
			mult(width, height);
			var diff = mouse.copy().sub(pos);
			var mag = diff.mag();
			if (mag > r) {
				continue;
			}
			var m = mag * iR;
			var k = m * PI;
			var end = diff.copy().mult(-sin(k)).add(pos);
			vecs.push({ pos: pos, end: end, diff: diff, m: m, z: 1 + 3 * (1 - sin(k * 0.5)) });
		}
	}
	var h = ease.sine.inOut(mouse.x / width) * 360;
	vecs.sort(function (a, b) {return a.z - b.z;}).forEach(function (_ref, i) {var pos = _ref.pos,end = _ref.end,diff = _ref.diff,m = _ref.m;
		var l = ease.expo.inOut(1 - m) * 50 + 25;
		var a = constrain((1 - m) * 5, 0, 1);
		var color = hsl(h, 100, l, a);
		beginPath();
		line(pos, end);
		ctx.shadowBlur = m * 30;
		ctx.shadowColor = lightenHSL(color, -0.625);
		var sOff = diff.mult(-0.1);
		ctx.shadowOffsetX = sOff.x;
		ctx.shadowOffsetY = sOff.y;
		stroke(color, size);
	});
}