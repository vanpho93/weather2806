// function inSoChiaHetCho2() {
//     for (let i = 0; i <= 100; i++) {
//         const dieuKien = i % 2 === 0;
//         if (dieuKien) console.log(i);
//     }
// }

// function inSoChiaHetCho5() {
//     for (let i = 0; i <= 100; i++) {
//         const dieuKien = i % 5 === 0;
//         if (dieuKien) console.log(i);
//     }
// }

// function inSoChinhPhuong() {
//     for (let i = 0; i <= 100; i++) {
//         const dieuKien = Math.sqrt(i) % 1 === 0;
//         if (dieuKien) console.log(i);
//     }
// }

function inSo(cb) {
    for (let i = 0; i <= 100; i++) {
        const dieuKien = cb(i);
        if (dieuKien) console.log(i);
    }
}

inSo(e => Math.sqrt(e) % 1 === 0);
