const YAML = require('yaml');

function jsonToYaml(jsonStr) {
  try {
    const obj = JSON.parse(jsonStr);
    return YAML.stringify(obj);
  } catch (e) {
    return `Error: ${e.message}`;
  }
}

function yamlToJson(yamlStr) {
  try {
    const obj = YAML.parse(yamlStr);
    return JSON.stringify(obj, null, 2);
  } catch (e) {
    return `Error: ${e.message}`;
  }
}

module.exports = { jsonToYaml, yamlToJson };
