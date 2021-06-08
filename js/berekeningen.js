// function Calculate() {
//     var table = document.getElementById('table');
//     var items = table.getElementsByTagName('input');
//     var sum = 0;
//     var output = document.getElementById('sum');
//     output.innerHTML = sum;
//     for(var i=0; i<items.length; i++)
//         sum += parseInt(items[i].value);
//     var output = document.getElementById('sum');
//     output.innerHTML = sum;
// }

// function addRow() {
//     var table = document.getElementById('table');

//     var button = document.getElementsByTagName('input')[0];

//     button.onclick = function() {
//         var clone = table.rows[table.rows.length - 2].cloneNode(true);
//         clone.cells[0].firstChild.data =
//         clone.cells[0].firstChild.data.replace(/(\d+):/, function(str, g1) {
//             return (+g1 + 1) + ':';
//         });
//         table.tBodies[0].appendChild(clone);
//     };
// }