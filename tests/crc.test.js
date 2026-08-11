import { calculateCRC, verifyCRC } from "../src/crc.js";

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message} Beklenen: ${expected}, Gelen: ${actual}`);
  }
}

const data = "1101011011";
const generator = "10011";
const crc = calculateCRC(data, generator);
const sentData = data + crc;
const wrongData = "0" + sentData.slice(1);

assertEqual(crc, "1110", "CRC kodu yanlış.");
assertEqual(sentData, "11010110111110", "Gönderilen veri yanlış.");
assertEqual(verifyCRC(sentData, generator).hasError, false, "Doğru veri hatalı görünüyor.");
assertEqual(verifyCRC(wrongData, generator).hasError, true, "Bit hatası tespit edilmedi.");

console.log("CRC testleri başarılı.");
