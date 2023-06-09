
const fs  = require("fs")
const basePath = process.cwd();

const envType = process.argv[2].substring(4);

const devPath = `${basePath}/env/dev.env`;

const prodPath = `${basePath}/env/prod.env`;

const jsPath = `${basePath}/dsn_link/dsn_link.ts`;



console.log("devPath", devPath);

console.log("basePath", basePath);

let link;

switch (envType) {
  case "dev":
    link = fs.readFileSync(devPath, { encoding: "utf8", flag: "r" });
console.log("link for dev",link);
    break;
  case "prod":
    link = fs.readFileSync(prodPath, { encoding: "utf8", flag: "r" });
    console.log("link for prod",link);

    break;
  default:
    console.log("default")
}

fs.writeFileSync(jsPath, `export const dsnLink = ${link}`);

console.log("link", link);

console.log("envtype", envType);


