function countWord() {
    var words = document
        .getElementById("word").value;
    var count = 0;
    var split = words.split(' ');
    for (var i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }
    document.getElementById("show")
        .innerHTML = count;
}