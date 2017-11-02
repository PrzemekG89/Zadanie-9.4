//function

function drawTree(n) {
    for (i = 1; i <= n; i++) {
        var space = '';
        var star = '';
        for (j = 1; j <= (n - i) / 2; j++) {
            space += ' ';
        }
        for (j = 1; j <= i; j++) {
            star += '*';
        };
        console.log(space + star);
    };
};
drawTree(10);