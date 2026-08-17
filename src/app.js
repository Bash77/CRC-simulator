import { calculateCRC, verifyCRC } from "./crc.js";

const dataInput = document.querySelector("#dataInput");
const generatorInput = document.querySelector("#generatorInput");
const receivedInput = document.querySelector("#receivedInput");
const crcOutput = document.querySelector("#crcOutput");
const sentOutput = document.querySelector("#sentOutput");
const remainderOutput = document.querySelector("#remainderOutput");
const resultOutput = document.querySelector("#resultOutput");
const stepsOutput = document.querySelector("#stepsOutput");

function clean(value) {
  return value.trim();
}

function isValidBinary(value) {
  return /^[01]+$/.test(value);
}

function isValidGenerator(generator) {
  return isValidBinary(generator) && generator.length >= 2;
}

function xor(firstBit, secondBit) {
  return firstBit === secondBit ? "0" : "1";
}

function putChar(line, position, character) {
  const chars = line.padEnd(position + 1, " ").split("");

  if (chars[position] === " ") {
    chars[position] = character;
  }

  return chars.join("");
}

function markChar(line, position) {
  const chars = line.padEnd(position + 1, " ").split("");

  return `${chars.slice(0, position).join("")}\u0001${chars[position]}\u0002${chars.slice(position + 1).join("")}`;
}

function spaced(bits) {
  return bits.split("").join(" ");
}

function getDivisionSteps(data, generator) {
  const bits = data.split("");
  const dataStart = spaced(generator).length + 3;
  const rows = [
    " ".repeat(dataStart) + "",
    " ".repeat(dataStart) + "",
    `${spaced(generator)} ) ${spaced(data)}`,
  ];
  const drops = [];
  const marks = [{ row: 2, position: dataStart }];
  const quotient = [];
  const dividendRow = 2;
  const bitPosition = (index) => dataStart + index * 2;
  const bitsAt = (index, value) => " ".repeat(bitPosition(index)) + spaced(value);
  const lineAt = (index, length) => " ".repeat(bitPosition(index)) + "-".repeat(length * 2 - 1);

  for (let i = 0; i <= bits.length - generator.length; i++) {
    if (bits[i] === "1") {
      quotient.push("1");
      rows.push(bitsAt(i, generator));
      rows.push(lineAt(i, generator.length));

      for (let j = 0; j < generator.length; j++) {
        bits[i + j] = xor(bits[i + j], generator[j]);
      }

      const nextGroup = bits.slice(i + 1, Math.min(i + 1 + generator.length, bits.length)).join("");

      if (i + generator.length < bits.length) {
        drops.push({
          position: bitPosition(i + generator.length),
          endRow: rows.length,
        });
      }

      rows.push(bitsAt(i + 1, nextGroup));
      marks.push({ row: rows.length - 1, position: bitPosition(i + 1) });
    } else {
      quotient.push("0");
      rows.push(bitsAt(i, "0".repeat(generator.length)));
      rows.push(lineAt(i, generator.length));

      const nextGroup = bits.slice(i + 1, Math.min(i + 1 + generator.length, bits.length)).join("");

      if (nextGroup) {
        drops.push({
          position: bitPosition(i + generator.length),
          endRow: rows.length,
        });
        rows.push(bitsAt(i + 1, nextGroup));
        marks.push({ row: rows.length - 1, position: bitPosition(i + 1) });
      }
    }
  }

  const remainder = bits.slice(-(generator.length - 1)).join("");
  const quotientText = quotient.join("");
  rows[0] = " ".repeat(dataStart) + spaced(quotientText);
  rows[1] = " ".repeat(dataStart) + "-".repeat(data.length * 2 - 1);

  for (const drop of drops) {
    for (let row = dividendRow + 1; row < drop.endRow; row++) {
      rows[row] = putChar(rows[row], drop.position, "|");
    }
  }

  for (const mark of marks) {
    rows[mark.row] = markChar(rows[mark.row], mark.position);
  }

  return [
    `Bölünen veri: ${data}`,
    `Generator:    ${generator}`,
    `Bölüm:        ${quotientText} (CRC için kullanılmaz)`,
    "",
    ...rows,
    "",
    `Kalan: ${remainder}`,
  ].join("\n");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function colorGuideCharacters(value) {
  let isMarked = false;

  return value
    .split("")
    .map((character) => {
      if (character === "\u0001") {
        isMarked = true;
        return "";
      }

      if (character === "\u0002") {
        isMarked = false;
        return "";
      }

      if (isMarked) {
        return `<span class="text-rose-300">${escapeHtml(character)}</span>`;
      }

      if (character === "|" || character === "-") {
        return `<span class="text-gray-500">${character}</span>`;
      }

      return escapeHtml(character);
    })
    .join("");
}

function showSteps(text, generator) {
  const lines = text.split("\n");
  const emptyLineIndex = lines.findIndex((line) => line === "");

  const renderedLines = lines
    .map((line, index) => {
      if (index === emptyLineIndex + 1) {
        return `<span class="text-rose-300">${escapeHtml(line)}</span>`;
      }

      return colorGuideCharacters(line);
    })
    .join("\n");

  stepsOutput.innerHTML = `<span class="inline-block text-left">${renderedLines}</span>`;
}

function showResult(status, detail = "", type = "normal") {
  const colors = {
    error: "text-red-600",
    success: "text-green-700",
    normal: "text-gray-700",
  };

  const detailHtml = detail
    ? ` <span class="text-gray-500">(${escapeHtml(detail)})</span>`
    : "";

  resultOutput.innerHTML = `<span class="${colors[type]}">${escapeHtml(status)}</span>${detailHtml}`;
}

function clearOutputs(clearReceivedData = false) {
  crcOutput.textContent = "-";
  sentOutput.textContent = "-";
  remainderOutput.textContent = "-";
  stepsOutput.textContent = "-";

  if (clearReceivedData) {
    receivedInput.value = "";
  }
}

function calculate() {
  const data = clean(dataInput.value);
  const generator = clean(generatorInput.value);

  if (!isValidBinary(data) || !isValidBinary(generator)) {
    clearOutputs(true);
    showResult("Sadece 0 ve 1 giriniz.", "", "error");
    return;
  }

  if (!isValidGenerator(generator)) {
    clearOutputs(true);
    showResult("Generator en az 2 bit olmalıdır.", "", "error");
    return;
  }

  const crc = calculateCRC(data, generator);
  const sentData = data + crc;
  const dataWithZeros = data + "0".repeat(generator.length - 1);

  crcOutput.textContent = crc;
  sentOutput.textContent = `${data} + ${crc} = ${sentData}`;
  receivedInput.value = sentData;
  remainderOutput.textContent = "-";
  showResult("CRC hesaplandı.");
  showSteps(getDivisionSteps(dataWithZeros, generator), generator);
}

function verify() {
  const data = clean(dataInput.value);
  const receivedData = clean(receivedInput.value);
  const generator = clean(generatorInput.value);

  if (!isValidBinary(data) || !isValidBinary(receivedData) || !isValidBinary(generator)) {
    clearOutputs();
    showResult("Sadece 0 ve 1 giriniz.", "", "error");
    return;
  }

  if (!isValidGenerator(generator)) {
    clearOutputs();
    showResult("Generator en az 2 bit olmalıdır.", "", "error");
    return;
  }

  const expectedLength = data.length + generator.length - 1;

  if (receivedData.length !== expectedLength) {
    sentOutput.textContent = `Kontrol edilen veri: ${receivedData}`;
    const result = verifyCRC(receivedData, generator);

    remainderOutput.textContent = result.remainder;
    showResult("Hata tespit edildi", `beklenen uzunluk: ${expectedLength}, gelen uzunluk: ${receivedData.length}`, "error");
    showSteps(getDivisionSteps(receivedData, generator), generator);
    return;
  }

  const result = verifyCRC(receivedData, generator);

  sentOutput.textContent = `Kontrol edilen veri: ${receivedData}`;
  remainderOutput.textContent = result.remainder;
  showResult(result.hasError ? "Hata tespit edildi" : "Veri doğru", "", result.hasError ? "error" : "success");
  showSteps(getDivisionSteps(receivedData, generator), generator);
}

document.querySelector("#calculateButton").addEventListener("click", calculate);
document.querySelector("#verifyButton").addEventListener("click", verify);
generatorInput.addEventListener("input", () => {
  const generator = clean(generatorInput.value);

  if (generator !== "" && isValidBinary(generator) && generator.length < 2) {
    clearOutputs(true);
    showResult("Generator en az 2 bit olmalıdır.", "", "error");
  }
});
receivedInput.addEventListener("input", () => {
  remainderOutput.textContent = "-";
  showResult("Kontrol etmek için Doğrula butonuna bas.");
});

calculate();
