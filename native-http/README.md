# How to run?

## Running regularly

```bash
node index.js
```

## Running with Sprkl
Before running, checkout the `index.js` file, uncomment line #5.

https://github.com/sprkl-dev/examples/blob/3c3605013c522e2a987057fc500e1a4c2d177c35/native-http/index.js#L4-L6

Now execute:

```bash
sprkl -- node index.js
```

Then, trigger the server by calling the deployed server API, at any path:

```bash
curl localhost:3000
```

Now, checkout your dashboard and you should see:

<img width="2079" alt="image" src="https://user-images.githubusercontent.com/89517972/210246317-3db0a71b-240d-42fe-a548-f3602d49fc75.png">
