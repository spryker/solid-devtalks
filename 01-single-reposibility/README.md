# SOLID principles: single responsibility

This folder contains the code examples for *single responsibility* devtalk, by Alessandro Bellini.
You can find the slides here: []().

### Requirements
- `node.js` 5.0.0 or above
- `npm` 3.6.0 or above

### Setup
Download this repo on your local machine, then:

``` bash
# go to this talk root folder
cd /path/of/this/repo/01-single-responsibility

# install the dependencies
npm install

# build the examples
# watch over the assets for changing 
# and create a server on localhost:6789
npm run serve 

# or just build the examples
npm run build 
```

If you want to change the default server port, edit the `package.json`:

``` json
"devServer": {
	"port": 6789
}
```
