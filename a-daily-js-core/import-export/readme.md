How to use the example:
```
npm install
cd __test__
node -r esm testScript.js
```

1. importexport folder contains two files: hello.js and goodbye.js
2. hello.js has a default export
3. goodbye.js has a named export
4. index.js inside importexport imports both from hello and goodbye and exports { hello, goodbye }
5. the parent indexjs imports from the child index.js and exports further and object containing all of the data

Curiosities: 

1. try to change the below 
```
export default {
	...ImportExport
}
```
to
```
export default {
	ImportExport
}
```

2. try to uncomment
//import goodbye from './goodbye'; //this doesn't work since goodbye doesn't have a default export

