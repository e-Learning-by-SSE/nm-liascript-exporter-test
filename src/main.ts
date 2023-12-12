import liascriptify from "../node_modules/@liascript/markdownify/dist/lib.js";
import liaScriptyfy from "./../node_modules/@e-learning-by-sse/nm-liascript-exporter-lib/lib/index.js";
import * as fs from "fs";
// const fs = require("fs");
//const fs = module.constructor._load("fs");
//import * as fsPromise from "fs/promises";

const example = { //object -> json as a object
  meta: {
    author: "Superhero",
    email: "superhero@web.de",
  },
  sections: [
    {
      title: "Title",
      indent: 1,
      body: [
        "This can be either a list of Strings",
        "that are interpreted as Markdown-blocks",
        {
          paragraph: [
            { string: "Or a set of " },
            {
              bold: [
                { string: "more sophisticated " },
                { superscript: "elements" },
              ],
            },
            "!",
          ],
        },
      ],
    },
  ],
};

/**libLiaScrImp(example)
  .then((doc: string | void) => {
    console.log("ok", doc);
    //fs.writeFileSync("example.md", doc);
    // fsPromise.writeFile("./example.md", doc);
  })
  .catch((err: string) => {
    console.warn("err", err);
  });
**/
function readJsonFile(filePath: string): any {
  try { 
    const liaJson = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(liaJson);
  } catch(e) { 
    console.warn("Error reading file: " + filePath);
    console.warn(e);
    return null; 
  }
}

//console.log(process.cwd());

let dataObject = readJsonFile("./JsonForJavaScrInJsx.json");

liaScriptyfy(dataObject)
  .then((doc: string) => {
    console.log("ok", doc);
    fs.writeFileSync("example.md", doc);
  })
  .catch((err: string) => {
    console.warn("err", err);
  });

//if (dataObject !== null) {
//  console.log(JSON.stringify(dataObject, null, 2));
//}