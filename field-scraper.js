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
let fields = document.querySelectorAll("#field-detail ul.member-list > li");
for (const node of fields) {
  const name = node.querySelector(".element-name").textContent
  const returnType = mapType(node.querySelector(".return-type").textContent)
  str += ` * @property {${returnType}} ${name}\n`;
}