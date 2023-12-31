function calculateTriangleArea() {
  // get triangle base value
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText)
  console.log(base);

  // get triangle height value
  const heightField = document.getElementById('triangle-height');
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  console.log(height);

  const area = 0.5 * base * height;
  console.log(area);

  // show triangle area
  const areaSpan = document.getElementById('triangle-area');
  areaSpan.innerText = area;
}

function calculateRectangleArea() {
  // get rectangle width
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  console.log(width);

  // get rectangle length
  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  console.log(length);

  // calculate area
  const area = width * length;

  // show rectangle area
  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = area;
}

// reusable function --> reduce duplicate code

function calculateParallelogramArea() {
  const base = getInputValue('parallelogram-base');

  const height = getInputValue('parallelogram-height');

  const area = base * height;

  setElementInnerText('parallelogram-area', area);
}

// reusable get input value in number
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

// reusable set
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}