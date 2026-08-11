// İki biti XOR işlemine göre karşılaştırır.
function xor(firstBit, secondBit) {
  return firstBit === secondBit ? "0" : "1";
}

// Veriyi generator ile böler ve kalan kısmı döndürür.
function divide(data, generator) {
  const bits = data.split("");

  // CRC bölmesi normal çıkarma yerine XOR ile yapılır.
  for (let i = 0; i <= bits.length - generator.length; i++) {
    if (bits[i] === "1") {
      for (let j = 0; j < generator.length; j++) {
        bits[i + j] = xor(bits[i + j], generator[j]);
      }
    }
  }

  return bits.slice(-(generator.length - 1)).join("");
}

// Verinin sonuna generator uzunluğunun 1 eksiği kadar sıfır ekler.
// Örnek: data = 11011, generator = 1001 ise 3 sıfır eklenir: 11011 + 000
export function calculateCRC(data, generator) {
  const zeros = "0".repeat(generator.length - 1);
  return divide(data + zeros, generator);
}

// Alınan veriyi kontrol eder ve hata olup olmadığını döndürür.
export function verifyCRC(receivedData, generator) {
  const remainder = divide(receivedData, generator);

  return {
    remainder: remainder,
    hasError: remainder.includes("1"),
  };
}
