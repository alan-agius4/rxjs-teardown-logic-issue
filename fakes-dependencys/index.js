const rxjs = require('rxjs');

const result = new rxjs.Observable(obs => {
	return rxjs.of(undefined).subscribe(obs)
})

module.exports = { result: result }