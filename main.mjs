import DomParser from 'dom-parser';
import fs from 'fs';
fs.readFile("./dataSource.json", "utf8", (data) => {
	let jsonData = JSON.parse(data);
	for (const employeeKey in jsonData) {
		console.log(`employee ${employeeKey}`);
		for (const attributeKEy in jsonData[employeeKey]) {
			console.log(`the key is ${attributeKEy} the value is ${jsonData[employeeKey][attributeKEy]}`);
		}
		console.log("-".repeat(20));
	}
});

fs.readFile("./dataSource.xml", "utf8", (error, data) => {
	let parser = new DomParser();
	let xmlDoc = parser.parseFromString(data, "text/xml");
	let employees = xmlDoc.getElementsByTagName("employees")[0];
	let counter = 0;
	for (let i = 0; i < employees.childNodes.length; i++) {
		if (employees.childNodes[i].nodeName != "#text") {
			counter++;
			console.log(employees.childNodes[i].nodeName + " " + counter);
			for (let j = 0; j < employees.childNodes[i].childNodes.length; j++) {
				if (employees.childNodes[i].childNodes[j].nodeName != "#text") {
					console.log(`${employees.childNodes[i].childNodes[j].nodeName} : ${employees.childNodes[i].childNodes[j].textContent}`);
				}
			}
			console.log("-".repeat(20));
		}
	}
});