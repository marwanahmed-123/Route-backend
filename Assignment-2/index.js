//Marawan Ahmed - 01149830040 - Assignment 2 - Sat&Tue 8:00 PM - 7marawan7@gmail.com
//======================================================================================
// const path = require("node:path");

//=====================================================================================
// 1.  Write a function that logs the current file path and directory. (0.5 Grade)
//=====================================================================================
// function printFileAndDir() {
//   console.log(`File: ${__filename}`, `Dir: ${__dirname}`);
// }
//=====================================================================================
// 2.Write a function that takes a file path and returns its file name. (0.5 Grade)
//=====================================================================================
// function parseFilePath(filePath) {
//   pathObj = path.parse(filePath);
//   console.log(pathObj.name + pathObj.ext);
// }
// parseFilePath(`/user/files/report.pdf`);
//=====================================================================================
// 3.Write a function that builds a path from an object (0.5 Grade)
//=====================================================================================
// function getFileName(fileObj) {
//   console.log(path.join(fileObj.dir, fileObj.name + fileObj.ext));
// }
// getFileName({ dir: "/folder", name: "app", ext: ".js" });
//=====================================================================================
// 4.Write a function that returns the file extension from a given file path. (0.5 Grade)
//=====================================================================================
// function getFileExt(filePath) {
//   pathObj = path.parse(filePath);
//   console.log(pathObj.ext);
// }
// getFileExt(`/docs/readme.md`);
//=====================================================================================
// 5.Write a function that parses a given path and returns its name and ext. (0.5 Grade)
//=====================================================================================
// function getFileNameAndExt(filePath) {
//   pathObj = path.parse(filePath);
//   result = { name: pathObj.name, ext: pathObj.ext };
//   return result;
// }
// console.log(getFileNameAndExt(`/home/app/main.js`));
//=====================================================================================
// 6.Write a function that checks whether a given path is absolute. (0.5 Grade)
//=====================================================================================
// function isAbsolutePath(filePath) {
//   return path.isAbsolute(filePath);
// }
// console.log(isAbsolutePath(`/home/user/file.txt`));
//=====================================================================================
// 7.Write a function that joins multiple segments (0.5 Grade)
//=====================================================================================
// function joinSegments(...segments) {
//   result = path.join(...segments);
//   return result;
// }
// console.log(joinSegments("src", "components", "App.js"));
//=====================================================================================
// 8.Write a function that resolves a relative path to an absolute one. (0.5 Grade)
//=====================================================================================
// function relativeToAbsolute(pathName) {
//   return path.resolve(pathName);
// }
// console.log(relativeToAbsolute(`./index.js`));
//=====================================================================================
// 9.Write a function that joins two paths. (0.5 Grade)
//=====================================================================================
// function joinPaths(path1, path2) {
//   return path.join(path1, path2);
// }
// console.log(joinPaths(`/folder1`, `folder2/file.txt`));
//=====================================================================================
// 10.Write a function that deletes a file asynchronously. (0.5 Grade)
//=====================================================================================
// const fs = require("node:fs/promises");
// async function deleteFile(filePath) {
//   try {
//     await fs.unlink(filePath);
//     console.log(`file deleted: ${filePath}`);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// deleteFile(`./test.txt`);
//=====================================================================================
// 11.Write a function that creates a folder synchronously. (0.5 Grade)
//=====================================================================================
// const fs = require("node:fs/promises");
// function createFolderSync(folderPath) {
//   try {
//     fs.mkdir(folderPath, { recursive: true });
//     console.log(`Folder created: ${folderPath}`);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// createFolderSync(`./newFolder`);
//=====================================================================================
// 12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
//=====================================================================================
// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();
// eventEmitter.on("start", () => {
//   console.log("Welcome message, The event has started!");
// });
// eventEmitter.emit("start");
//=====================================================================================
// 13.Emit a custom "login" event with a username parameter. (0.5 Grade)
//=====================================================================================
// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();
// eventEmitter.on("login", (username) => {
//   console.log(`${username} logged in successfully.`);
// });
// eventEmitter.emit("login", "Marwan");
//=====================================================================================
// 14.Read a file synchronously and log its contents. (0.5 Grade)
//=====================================================================================
// const fs = require("node:fs");
// function readFileSync(filePath) {
//   try {
//     const data = fs.readFileSync(filePath, "utf8");
//     console.log(data);
//   } catch (error) {
//     console.error(`Error reading file: ${error.message}`);
//   }
// }
// readFileSync("./test.txt");
//=====================================================================================
// 15. Write asynchronously to a file. (0.5 Grade)
//=====================================================================================
// const fs = require("node:fs/promises");
// async function writeFileAsync(filePath, content) {
//   try {
//     await fs.writeFile(filePath, content);
//     console.log("Data has been written to output.txt");
//   } catch (error) {
//     console.error("An error occurred while writing the file:", error);
//   }
// }
// writeFileAsync("./test.txt", "Content..");
//=====================================================================================
// 16. Check if a directory exists. (0.5 Grade)
//=====================================================================================
// const fs = require("node:fs/promises");
// async function checkDirectoryExists(dirPath) {
//   try {
//     await fs.access(dirPath);
//     console.log(`True`);
//   } catch (error) {
//     console.error(`False`);
//   }
// }
// checkDirectoryExists("./newFolder");
//=====================================================================================
// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
//=====================================================================================
// const os = require("node:os");
// function getOSInfo() {
//   const platform = os.platform();
//   const arch = os.arch();
//   return { platform, arch };
// }
// console.log(getOSInfo());
//=====================================================================================
// 18. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade)
//=====================================================================================
// const fs = require("node:fs");
// const { Readable } = require("node:stream");
// function readFileInChunks(filePath) {
//   const readableStream = fs.createReadStream(filePath, {
//     encoding: "utf8",
//     highWaterMark: 16,
//   });
//   readableStream.on("data", (chunk) => {
//     console.log(`Chunk: ${chunk}`);
//   });
//   readableStream.on("end", () => {
//     console.log("Finished reading file.");
//   });
//   readableStream.on("error", (error) => {
//     console.error(`Error reading file: ${error.message}`);
//   });
// }
// readFileInChunks("./test.txt");
//=====================================================================================
// 19. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
//=====================================================================================
// const fs = require("node:fs");
// const { pipeline } = require("node:stream");
// function copyFile(source, destination) {
//   const readableStream = fs.createReadStream(source);
//   const writableStream = fs.createWriteStream(destination);
//   pipeline(readableStream, writableStream, (error) => {
//     if (error) {
//       console.error(`Error copying file: ${error.message}`);
//     } else {
//       console.log(`File copied from ${source} to ${destination}`);
//     }
//   });
// }
// copyFile("./test.txt", "./test2.txt");
//=====================================================================================
// 20. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
//=====================================================================================
// const fs = require("node:fs");
// const zlib = require("node:zlib");
// const { pipeline } = require("node:stream");
// function compressFile(source, destination) {
//   const readableStream = fs.createReadStream(source);
//   const gzip = zlib.createGzip();
//   const writableStream = fs.createWriteStream(destination);
//   pipeline(readableStream, gzip, writableStream, (error) => {
//     if (error) {
//       console.error(`Error compressing file: ${error.message}`);
//     } else {
//       console.log(`File compressed from ${source} to ${destination}`);
//     }
//   });
// }
// compressFile("./test.txt", "./test.txt.gz");
