async function getData() {
  let url =
    "https://firebasestorage.googleapis.com/v0/b/just-query.appspot.com/o";
  try {
    let o = await fetch(url);
    return o.json();
  } catch (error) {
    console.log(error);
  }
}

let o = await getData();

const len = o.items.length;
const container = document.getElementById("name");
// console.log(o.items[1]);

for (var i = 0; i < 2000; i++) {
  var encoded = encodeURIComponent(o.items[i].name);
  var lastThree = encoded.substring(encoded.length - 3);
  console.log(lastThree);
  if (lastThree === "png" || lastThree === "jpg") {
    let img = new Image();
    img.src =
      "https://firebasestorage.googleapis.com/v0/b/just-query.appspot.com/o/" +
      encoded +
      "?alt=media";
    container.appendChild(img);
  } else if (lastThree === "pdf") {
    var a = document.createElement("a");
    var linkText = document.createTextNode(
      "https://firebasestorage.googleapis.com/v0/b/just-query.appspot.com/o/" +
        encoded +
        "?alt=media"
    );
    a.appendChild(linkText);
    a.title = "my title text";
    a.href =
      "https://firebasestorage.googleapis.com/v0/b/just-query.appspot.com/o/" +
      encoded +
      "?alt=media";
    document.body.appendChild(a);
  }
}
