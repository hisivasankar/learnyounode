var argv = process.argv;
var sum = 0;
for (var index = 2; index < argv.length; index++) {
    sum += Number(argv[index]);
}
console.log(sum);