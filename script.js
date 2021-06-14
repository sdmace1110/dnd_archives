const fakeJsonObj = {
  title: "Yet ANother Silly Title",
  dm: "Phil",
  content: "New content to see if they bind",
};

const title = document.getElementById("title").value;

console.log(title);

const radio = document.getElementsByName("dm");
let checked = "";
for (let i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    checked = radio[i].value;
    console.log(checked);
  }
}

const content = document.getElementById("data").value;

console.log(content);

const makeJsonObj = () => {
  let jsonObj = {
    title: title,
    dm: checked,
    content: content,
  };

  return jsonObj;
};

// Use stringify and parse to turn the JSON obj into JS obj

const Obj = makeJsonObj();

const mainJson = { fakeJsonObj, Obj };

console.log(mainJson);
