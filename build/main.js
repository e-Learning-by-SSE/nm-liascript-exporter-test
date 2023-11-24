"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_js_1 = require("./../node_modules/custom_lia_script_build/dist/main.js");
// const fs = require("fs");
//const fs = module.constructor._load("fs");
//import * as fsPromise from "fs/promises";
const example = {
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
(0, main_js_1.libLiaScrImp)(example)
    .then((doc) => {
    console.log("ok", doc);
    //fs.writeFileSync("example.md", doc);
    // fsPromise.writeFile("./example.md", doc);
})
    .catch((err) => {
    console.warn("err", err);
});
