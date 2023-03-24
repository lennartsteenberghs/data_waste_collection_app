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

const inputFile = process.argv[2];
const outputFileItems = process.argv[3] +".json";
const outputFileContent = process.argv[3] + "content.json";

parseExcelToJson(inputFile, outputFileItems, 0);
parseExcelToJson(inputFile, outputFileContent, 1);

export default parseExcelToJson;

//command for cmd: node src/composables/excelToJson.mjs data/wasteitemsexcel.xlsx data/wasteitems
