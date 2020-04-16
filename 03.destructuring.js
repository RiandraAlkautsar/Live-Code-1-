//ES5
const data = {
    nama: `Saras`,
    umur: 24,
    pekerjaan: `UI/UX Designer`
}

// console.log("Nama " + data.nama + "\nUmur" + data[`umur`] + "\nPekerjaan " + data.pekerjaan);

//ES6
const {nama , umur , pekerjaan} = data;

console.log(`Nama ${nama}
Umur ${umur}
Pekerjaan ${pekerjaan}
`);