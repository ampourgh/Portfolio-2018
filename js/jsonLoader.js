var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://raw.githubusercontent.com/ampourgh/Portfolio-2018/master/js/webContent.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var profileInfo = request.response;
  populateHeader(profileInfo);
  showInfo(profileInfo);
}
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['Name'];
  header.appendChild(myH1);

  socialMedia = ['gitHub', 'linkedIn', 'reddit']

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

  for (i = 0; i < 3; i++) {
    var link = document.createElement("a");

    link.href = jsonObj[socialMedia[i]];
    link.alt = socialMedia[i].capitalize();
    link.id = socialMedia[i].capitalize();
    link.class = socialMedia[i].capitalize();
    link.title = socialMedia[i].capitalize();

    var img = document.createElement("img");
    img.src = 'img/' + socialMedia[i] + '.png';
    link.appendChild(img);

    header.appendChild(link);
}


  var myPara = document.createElement('p');
  myPara.textContent = 'Also known as ' + jsonObj['internetNickname'];
  header.appendChild(myPara);
}
function showInfo(jsonObj) {
  var info = jsonObj['members'];
  for(var i = 0; i < info.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');
    myH2.textContent = info[i].name;
    myPara1.textContent = 'Project Name: ' + info[i].projectName;
    myPara3.textContent = 'About Project:';
    var aboutProjects = info[i].aboutProject;
    for(var j = 0; j < aboutProjects.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = aboutProjects[j];
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    section.appendChild(myArticle);
  }
}
