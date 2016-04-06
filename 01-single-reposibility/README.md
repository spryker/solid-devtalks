# SOLID principles: single responsibility

This folder contains the code examples for *single responsibility* devtalk, by Alessandro Bellini.
You can find the slides here: []().

### Requirements
- `node.js` 5.0.0 or above
- `npm` 3.6.0 or above

### Setup

```
# install the dependencies
npm install

# it builds the examples
npm run build 

# it builds the examples and create a server on localhost:6789
# where you can see them
npm run serve 
```

If you want to change the default server port, edit the `package.json`:

```
"devServer": {
	"port": 6789
}
```
