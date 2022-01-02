let n = 4;
let asteristico = "";

for (let linha = 1; linha <= n; linha+=1) {
    for (let coluna = 1; coluna <= n; coluna+=1) {
        asteristico += '*';
    }
    console.log(asteristico);
    asteristico = "";
}
