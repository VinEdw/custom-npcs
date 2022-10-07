function mapType(type) {
  const mapping = {
    "byte": "Number",
    "short": "Number",
    "int": "Number",
    "long": "Number",
    "float": "Number",
    "double": "Number",
  };
  return mapping[type] || type;
}
let str = "";
let methods = document.querySelectorAll("#method-detail ul.member-list > li");
for (const node of methods) {
  const name = node.querySelector("h3").textContent
  const returnType = mapType(node.querySelector(".return-type").textContent)
  const parameters = node.querySelector(".parameters");
  if (parameters) {
    const typeNameList = parameters.textContent
      .slice(1, -1)
      .split(",")
      .map(val => val.trim())
      .map(val => val.split(/\s+/));
    const paramTypes = typeNameList.map(val => mapType(val[0])).join(", ");
    const paramNames = typeNameList.map(val => val[1]).join(", ");
    str += ` * @property {function(${paramTypes}):${returnType}} ${name}(${paramNames})\n`;
  }
  else {
    str += ` * @property {function():${returnType}} ${name}\n`;
  }
}