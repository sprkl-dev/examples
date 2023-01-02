# How to run?

## Running regularly

```bash
node index.js
```

## Running with Sprkl
Before running, checkout the `index.js` file, uncomment line #5.

https://github.com/sprkl-dev/examples/blob/fb63da0947f1f44d9a45bc6764482eaf6967ca15/native-http/index.js#L5

Now execute:

```bash
sprkl -- node index.js
```

Then, trigger the server by calling the deployed server API, at any path:

```bash
curl localhost:3000
```

Now, checkout your dashboard and you should see:

<img width="2130" alt="image" src="https://user-images.githubusercontent.com/89517972/210239660-27c464df-d4fb-4409-a487-d4b553a196dd.png">
