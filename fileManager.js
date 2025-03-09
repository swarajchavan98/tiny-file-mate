#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

const currentDir = process.cwd();

switch (command) {
  case 'list':
    fs.readdir(currentDir, (err, files) => {
      if (err) return console.error('Error reading directory: ', err);
      console.log('Files in directory: \n',files.join("\n"));
    });
    break;

  case 'read':
    if (!fileName) return console.log('Please provide a file name.');
    fs.readFile(path.join(currentDir, fileName), 'utf8', (err, data) => {
      if (err) return console.log('Error reading file: ', err);
      console.log(`Content of ${fileName}:\n`, data);
    });
    break;

  case 'create':
    if (!fileName || !content) return console.log('Usage: create <file> <content>');
    fs.writeFile(path.join(currentDir, fileName), content, (err) => {
      if (err) return console.error('Error writing file: ', err);
      console.log(`${fileName} created successfully.`);
    });
    break;

  case 'delete':
    if (!fileName) return console.log('Please provide a file name to delete.');
    fs.unlink(path.join(currentDir, fileName), (err) => {
      if (err) return console.error('Error deleting file: ', err);
      console.log(`${fileName} deleted successfully.`);
    });
    break;

  default:
    console.log('Invalid command. Use: list, read <fileName>, create <fileName> <content>, delete <fileName>');
}