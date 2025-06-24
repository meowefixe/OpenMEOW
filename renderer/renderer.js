document.getElementById('toYAML').onclick = async () => {
  const input = document.getElementById('input').value;
  const result = await window.meowAPI.convertJSONtoYAML(input);
  document.getElementById('output').value = result;
};

document.getElementById('toJSON').onclick = async () => {
  const input = document.getElementById('input').value;
  const result = await window.meowAPI.convertYAMLtoJSON(input);
  document.getElementById('output').value = result;
};