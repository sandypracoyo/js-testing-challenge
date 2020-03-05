# REVIEW MATERI

## 1. UNIT TESTING
### Test Driven Development
Test driven development atau bisa disingkat TDD merupakan sebuah metodologi pengembangan sistem dengan mengedepankan testing untuk memastikan bahwa setiap komponen dalam sebuah sistem dapat berjalan dengan semestinya.
Ada dua hal yang harus diperhatikan dalam TDD
1. Ekspektasi
    Ekpektasi adalah hasil yang kita harapkan dari kinerja sebuah komponen
2. Realita
    Realita adalah hasil sesungguhnya dari kinerja sebuah komponen.

Proses dalam melakukkan test driven development sebagai berikut :
1. Skenario testing pada setiap komponen
2. Development skenario komponen sampai lulus testing
3. Menyusun semua komponen yang lulus testing
4. Menggabungkan semua testing hingga sistem selesai

Implementasinya adalah sebagai berikut :
1. Sebelum menulis kode, tuliskan test-nya terlebih dahulu. Pastikan kita memasukkan semua kemungkinan yang dapat kita pikirkan untuk input dan outputnya.
2. Jalankan test-nya, dan pastikan test-nya fail karena belum ada kode apapun untuk membuat test-nya pass.
3. Ketik working code seminimum mungkin dengan tujuan agar test-nya pass.
4. Jalankan test dan cek apakah test-nya pass. Jika belum pass, maka perbaiki working code kita sampai memenuhi ekspektasi dari test.
5. Merasa working code yang kita tulis tadi berantakan ? Jangan khawatir, Refactor the code, do some cleaning and DRY-ing. Selama test-nya masih pass, berarti tidak ada masalah dengan kode yang di refactor tersebut.
Ulangi proses dari no 1–5 untuk fungsi-fungsi lainnya.

##### Manfaat dari melakukkan Test Driven Development
1. Melakukan uji coba secara bersamaan tanpa perlu untuk mendapatkan hasil aktual dengan berbagai ekspektasi.
2. Mempermudah tracking code yang error dari sebuah ekspektasi, karena akan ada kspektasi kita yang sangat random yang bahkan kita tidak sadar hal itu dapat menyebabkan error.
3. Mencegah redundant code dengan refactoring code.
4. Meningkatkan kapabilitas diri. Ingat sebagai Developer kita tidak boleh berhenti belajar, harus terus meningkatkan kapabilitas diri!

### Behavior Driven Development
Behavior driven development adalah metodologi pengembangan sistem yang lebih berfokus pada behavior sistem. dimana behavior ini adalah client harapkan dapat dilakukan oleh suatu sistem. 

Proses pada behavior driven development sebagai berikut :
1. Skenario testing pada setiap behavior
Membuat skenario test pada setiap behavior
2. Memastikan sudah lulus behavior test
Melakukkan test dan memastikan setiap behavior ini lulus pada saat pengujian.
3. Deployment
Apabila semua behavior lolos  test, selanjutnya bisa melakukkan deployment

### Unit Testing
Unit Testing adalah metode verifikasi perangkat lunak di mana programmer menguji suatu unit program layak untuk tidaknya dipakai. Unit testing ini fokusnya pada verifikasi pada unit yang terkecil pada desain perangkat lunak (komponen atau modul perangkat lunak). Karena dalam sebuah perangkat lunak banyak memiliki unit-unit kecil maka untuk mengujinya biasanya dibuat program kecil atau main program) untuk menguji unit-unit perangkat lunak. 

- Sebuah unit adalah diuji bagian terkecil dari sebuah aplikasi seperti fungsi, kelas, prosedur, interface. Unit testing adalah metode yang masing-masing unit dari kode sumber diuji untuk menentukan apakah mereka cocok untuk digunakan.
- Unit tes pada dasarnya ditulis dan dieksekusi oleh pengembang perangkat lunak untuk memastikan kode yang memenuhi desain dan persyaratan dan berperilaku seperti yang diharapkan.
- Tujuan dari pengujian unit adalah untuk memisahkan setiap bagian dari program dan uji bahwa bagian-bagian individu bekerja dengan benar.
- Ini berarti bahwa untuk setiap fungsi atau prosedur ketika set input yang diberikan maka harus mengembalikan nilai-nilai yang tepat. Ini harus menangani kegagalan anggun selama eksekusi bila ada input tidak valid diberikan.
- Tes unit menyediakan kontrak tertulis bahwa potongan kode harus menjamin. Oleh karena itu memiliki beberapa manfaat.
- Unit testing pada dasarnya dilakukan sebelum integrasi seperti yang ditunjukkan pada gambar di bawah.

##### Keuntungan dari Unit testing :
1. Masalah yang ditemukan pada tahap awal. Sejak unit testing dilakukan oleh pengembang di mana mereka menguji kode masing-masing sebelum integrasi. Oleh karena itu permasalahan dapat ditemukan sangat awal dan dapat diselesaikan saat itu juga tanpa mempengaruhi bagian lain dari kode.
2. Unit pengujian membantu dalam mempertahankan dan mengubah kode. Hal ini dimungkinkan dengan membuat kode kurang saling tergantung sehingga unit testing dapat dieksekusi. Oleh karena itu kemungkinan dampak perubahan kode lainnya akan berkurang.
3. Karena bug yang ditemukan di awal unit testing karena itu juga membantu dalam mengurangi biaya perbaikan bug. Bayangkan saja biaya bug yang ditemukan selama tahap akhir pembangunan seperti selama pengujian sistem atau selama pengujian penerimaan.
4. Unit pengujian membantu dalam menyederhanakan proses debugging. Jika kira tes gagal maka hanya perubahan terbaru dibuat dalam kode perlu debugged.

Beberapa tools unit test di javascript :
1. Jest
2. Mocha/Chai
3. Jasmine
4. Ava
5. Tape

#### Unit Testing Dengan Jest
Jest merupakan sebuah framework testing untuk javascript, jest dapat berjalan pada  Babel, TypeScript, Node, React, Angular, Vue dan masih banyak yang lainnya.
Link official website jest : https://jestjs.io/

##### 1. Instalasi Jest
Untuk instalasi Jest kedalam project menggunakan npm dengan perintah
```
npm init -y //untuk menginisiasi project node
npm install --save-dev jest //untuk menginstall jest ke dalam mode development
```
##### 2. Konfigurasi jest pada package.json
Pada package.json, ubah isi default test nya menjadi "jest"

```
{
	"name": "js-testing-challenge",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "jest" //ubah disini
	},
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"jest": "^25.1.0"
	}
}
```

##### 3. Implementasi
Pertama, buat file testing dengan nama ```<namafile>.test.js```, lalu tuliskan test yang akan kita lakukkan

```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

kedua, buat file yang akan kita uji 
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

untuk menjalankan test nya kita bisa menggunakan perintah
```
npm run test
```
#### Note :
Untuk tipe data primitive seperti string, number dan boolean gunakan toBe, lalu tipe data Object atau Array gunakan toEqual
Lebih lengkapnya bisa di cek pada dokumentasi jest : https://jestjs.io/docs/en/expect

## 2. FUNCTIONAL PROGRAMMING PARADIGM
Functional Programming Paradigm adalah sebuah style penulisan pada sebuah function yang menekankan pada komputasi didalam sebuah fungsi matematis dan menghindari perubahan data.
Beberapa hal yang harus diperhatikan Functional programming paradigm :
1. Hindari penggunaan variable let dan var (mutable variable)
Lebih baik menggunakan variable const
2. Hindari perubahan pada sebuah array, object, map maupun set, lebih baik membuat baru.
Membuat variabel baru untuk menampung perubahan pada array.
3. Hindari melakukan loop pada function, contoh: total harus pakai reduce() pada sebuah Array.

### Pure Function
Pure function adalah sebuah fungsi yang bersifat pure tanpa mengubah value dari variabel. mudah nya, apabila sebuah pure function diberi sebuah argumen yang sama, maka akan menghasilkan output yang sama. dalam pure function, kita tidak boleh mengacu pada variabel diluar scope fungsi

Kriteria dari pure function adalah :
1. Jika diberi argument yang sama, maka akan menghasilkan output yang sama.
2. Tanpa side effects.

Side effects itu seperti :
1. Mengubah dan mengacu pada variable diluar scope function bersangkutan
2. Melakukan network request
3. Menampilkan sesuatu di console
4. Memanipulasi DOM

Contoh dari pure function 
```
function sum(a, b) {
  return a + b;
}

sum(1, 2);
sum(5, 1);
```

### Callback dan higher order function
Adalah sebuah fungsi yang menggunakan fungsi lain sebagai parameter.
Contohnya : 
```
setTimeout(function(){

   console.log("This will be written after 3 seconds");

},3000);
```

### Recursive Function
Adalah sebuah fungsi yang dapat memanggil diri nya sendiri.
Pada pembentukan fungsi dengan recursion atau lebih dikenal dengan recursive function,terdapat dua hal yang penting, yakni penentuan: base case dan step reduction.

Secara umum, base case merupakan kondisi dimana fungsi akan berhenti (tidak lagi berulang) dan step reduction adalah bagaimana agar fungsi tersebut kembali memanggil dirinya sendiri dengan tahapan hingga mencapai base case.
```
const factor = function(number) {
  let result = 1;
  let count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factor(6));
```

### Array Method
Pada beberapa method array dapat menerapkan callback misalnya pada map, reduce, sort, forEach dll











