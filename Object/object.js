const cpuInformation = process.memoryUsage();

console.log(cpuInformation);

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);

const initialMemoryUsage = process.memoryUsage;
const yourName = process.argv;
const environment = process.argv;

for (let i = 0; i <= 10000; i++) {
  result = 1 + i;
}

const currentMemoryUsage = process.memoryUsage;
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);
