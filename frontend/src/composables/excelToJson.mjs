import XLSX from 'xlsx';
import fs from 'fs';

const parseExcelToJson = (inputFile, outputFile, sheetNumber) => {
  console.log(`Parsing Excel file: ${inputFile}`);
  const workbook = XLSX.readFile(inputFile);
  const sheetName = workbook.SheetNames[sheetNumber];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  console.log(`Parsed JSON data: ${JSON.stringify(jsonData)}`);

  console.log(`Writing output to file: ${outputFile}`);
  fs.writeFileSync(outputFile, JSON.stringify(jsonData));
  console.log(`Output file written successfully`);

  return jsonData;
}

const parseExcelToJson2 = (inputFile, outputFile, sheetNumber) => {
  console.log(`Parsing Excel file: ${inputFile}`);
  const workbook = XLSX.readFile(inputFile);
  const sheetName = workbook.SheetNames[sheetNumber];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  // Create an object with a key-value pair for each row
  const namedData = {};
  namedData['en'] = jsonData[0];
  namedData['nl'] = jsonData[1];
  namedData['aw'] = jsonData[2];
  namedData['es'] = jsonData[3];

  console.log(`Parsed JSON data: ${JSON.stringify(namedData)}`);

  console.log(`Writing output to file: ${outputFile}`);
  fs.writeFileSync(outputFile, JSON.stringify(namedData));
  console.log(`Output file written successfully`);

  return namedData;
}


const inputFile = process.argv[2];
const outputFileItems = "data/wasteitems.json";
const outputFileContent = "data/wasteitemscontent.json";
const outputLanguages = "data/messages.json"

parseExcelToJson(inputFile, outputFileItems, 0);
parseExcelToJson(inputFile, outputFileContent, 1);
parseExcelToJson2(inputFile, outputLanguages, 2);

export default parseExcelToJson;

//command for cmd: node src/composables/excelToJson.mjs data/wasteitemsexcel.xlsx
