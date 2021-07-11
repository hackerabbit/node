const buf = Buffer.from('Hey!')
console.log(buf)
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])
console.log(buf[3])

console.log(buf.toString())

console.log(buf.length)

for (const item of buf) {
    console.log(item)
}

const buf1 = Buffer.alloc(4);
buf1.write('Hey!');