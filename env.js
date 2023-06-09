const fs = require("fs");
const basePath = process.cwd();

const envType = process.argv[2].substring(4);

const devPath = `${basePath}/env/dev.env`;

const prodPath = `${basePath}/env/prod.env`;

const stagePath = `${basePath}/env/stage.env`;

const jsPath = `${basePath}/dsn_link/dsn_link.ts`;

let link;

switch (envType) {
  case "dev":
    link = fs.readFileSync(devPath, { encoding: "utf8", flag: "r" });
    break;
  case "prod":
    link = fs.readFileSync(prodPath, { encoding: "utf8", flag: "r" });
    break;
  case "stage":
    link = fs.readFileSync(stagePath, { encoding: "utf8", flag: "r" });
    break;
  default:
    console.log("default");
}

fs.writeFileSync(jsPath, `export const dsnLink = ${link}`);
