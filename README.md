# Safari Bug

```bash
> npm install
> npm run dev
```

Open Safari Devtools and immediately notice client errors:

```
[Error] ReferenceError: Cannot access uninitialized variable.
	handleError (client-manifest.js:16)
	handle_error (client.js:1692)
	(anonymous function) (client.js:1630)
	asyncFunctionResume
	(anonymous function)
	promiseReactionJobWithoutPromise
	promiseReactionJob
[Error] Unhandled Promise Rejection: ReferenceError: Cannot access uninitialized variable.
	(anonymous function) (start.js:38)
	asyncFunctionResume
	(anonymous function)
	promiseReactionJobWithoutPromise
	promiseReactionJob
```
