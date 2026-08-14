# CRC Projesi

Bu proje, binary verinin CRC kodunu hesaplar ve veride hata olup olmadığını kontrol eder.

Proje HTML, Tailwind ve JavaScript ile hazırlanmıştır. Arayüz olduğu için CRC hesaplama, gönderilen veri, kalan değer ve hata tespiti adımları öğretmene daha kolay gösterilebilir.

## Dosyalar

- `index.html`: Basit arayüz
- `src/crc.js`: CRC hesaplama ve doğrulama fonksiyonları <---`proje kodu`
- `src/app.js`: Butonlar ve ekrana sonuç yazdırma işlemleri

## Nasıl Çalışır?

CRC, veri iletiminde hata kontrolü yapmak için kullanılır. Gönderen ve alan taraf aynı generator değerini kullanır.

```text
Veri:      11011
Generator: 1111
```

Generator 4 bit olduğu için verinin sonuna 3 sıfır eklenir:

```text
11011 + 000 = 11011000
```

Bu veri generator ile XOR bölmesine sokulur. Kalan değer CRC kodudur ve verinin sonuna eklenir. Alıcı taraf tekrar böler; kalan sıfırsa veri doğru, değilse hata vardır.

## Gerçek Dünya Kullanımları

- İnternet ve ağ iletişiminde veri paketlerinin bozulup bozulmadığını kontrol etmek için kullanılır.
- USB, hard disk ve SSD gibi depolama aygıtlarında veri hatalarını kontrol etmek için kullanılır.
- ZIP ve benzeri dosyalarda dosyanın zarar görüp görmediğini anlamak için kullanılır.
- Bluetooth, Wi-Fi ve Ethernet gibi iletişim teknolojilerinde hata kontrolü için kullanılır.

## Özellikler

- Kullanıcıdan binary veri alma
- Generator değeri alma
- CRC kodunu hesaplama
- CRC kodunu verinin sonuna ekleme
- Veriyi doğrulama
- Veriyi manuel değiştirip hata kontrolü yapma
- Hata varsa `Hata tespit edildi`, yoksa `Veri doğru` mesajını gösterme


## Çalıştırma

Projeyi test etmek isteyenler bilgisayarına klonlayıp kolayca çalıştırabilir.

```bash
git clone <repo-linki>
cd crc-projesi
npm start
```

Sonra tarayıcıda şu adres açılır:

```text
http://localhost:5500
```

Ekstra kurulum veya veritabanı gerekmez. HTML ve JavaScript ile çalıştığı için proje basit şekilde tarayıcı üzerinden gösterilebilir.

## Örnek

```text
Veri: 1101011011
Generator: 1111
CRC: 001
Gönderilen Veri: 1101011011001
Sonuç: Veri doğru
```

Yapay hata oluşturulursa sonuç:

```text
Hata tespit edildi
```

## Ozeti/Summary

Bu projede CRC algoritması JavaScript ile uygulanmıştır. Kullanıcıdan binary veri ve generator alınır. CRC kodu hesaplanır, verinin sonuna eklenir ve alınan veri aynı generator ile doğrulanır. Kalan sıfırsa veri doğru kabul edilir, sıfır değilse hata tespit edilir.
