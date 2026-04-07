install:
	npm ci
publish:
	npm publish --dry-run
brain-games:
	node bin/brain-games.js
lint:
	npx eslint .
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
<<<<<<< HEAD
	node bin/brain-progression.js
=======
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js
>>>>>>> 181bb04 (5)
