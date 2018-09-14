const rxjs = require('rxjs');
const dependency = require('fakes-dependency');
const rxjs_operators = require('rxjs/operators');

rxjs.of(undefined).pipe(
	rxjs_operators.concatMap(() => dependency.result),
).toPromise()
