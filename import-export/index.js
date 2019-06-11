import ImportExport from './importexport';

console.info('Here is ImportExport inside index.js: ', ImportExport);

export default {
	...ImportExport
}