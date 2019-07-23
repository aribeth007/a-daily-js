const csvFilePath='input.csv'
const csv=require('csvtojson')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'output.csv',
    header: [
        {id: 'FirstName', title: 'FirstName'},
        {id: 'LastName', title: 'LastName'},
        {id: 'EmailAddress', title: 'EmailAddress'},
        {id: 'Identifier', title: 'Identifier'}
    ]
});

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    //prints the whole array 
    console.log('Initial array:', jsonObj);
    //modifies array
    const newJsonObject = jsonObj.map((element, index) => {
        return {
            FirstName: element.FirstName,
            LastName: element.LastName,
            EmailAddress: element.Email,
            Identifier: 'Id' + index
        }
    })
    //prints new array
    console.log('New array:', newJsonObject);
    //write new array to csv
    csvWriter.writeRecords(newJsonObject)
    .then(() => {
        console.log('...Done writing csv');
    });
})