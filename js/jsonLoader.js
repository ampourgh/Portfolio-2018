var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://raw.githubusercontent.com/ampourgh/Portfolio-2018/master/js/webContent.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var profileInfo = request.response;
  populatenavbar(profileInfo);
  populateHeader(profileInfo);
  showInfo(profileInfo);
}


function populatenavbar(jsonObj) {
  var info = jsonObj['members'];
    for(var i = 0; i < info.length; i++) {
      var link = document.createElement("a");
      var myNavbar = document.getElementById('projectsNavbar');
      var text = document.createTextNode(" " + info[i].projectName);
      link.setAttribute("href", "#" + info[i].projectName.replace(" ", ""));
      link.appendChild(text);
      myNavbar.appendChild(link);

      onClick(link);
    }

    for(var i = 0; i < info.length; i++) {
      var link2 = document.createElement("a");
      var myMobileNavbar = document.getElementById('mobileNavbar' + [i]);
      var text2 = document.createTextNode(" " + info[i].projectName);
      link2.setAttribute("href", "#" + info[i].projectName.replace(" ", ""));
      link2.appendChild(text2);
      myMobileNavbar.appendChild(link2);

      onClick(link2);
    }
}

function populateHeader(jsonObj) {

  var myPortrait = document.getElementById('portrait');
  myPortrait.src = jsonObj['portrait'];

  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['name'];
  header.appendChild(myH1);

  socialMedia = ['gitHub', 'linkedIn', 'codePen', 'reddit', 'twitter', 'gmail']

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

  for (i = 0; i < socialMedia.length; i++) {
    var link = document.createElement("a");

    link.href = jsonObj[socialMedia[i]];
    link.alt = socialMedia[i].capitalize();
    link.id = 'social-media';
    link.class = 'social-media';
    link.title = socialMedia[i].capitalize();

    var img = document.createElement("img");
    img.src = 'img/' + socialMedia[i] + '.svg';
    link.appendChild(img);

    header.appendChild(link);
}

  var resume = document.createElement("a");
  var myPara = document.createElement("h5");
  resume.href = jsonObj['resume'];
  resume.class = 'resume'
  myPara.textContent = ' Download Resume';
  resume.appendChild(myPara);
  header.appendChild(resume);
}

function onClick(link){
  $(link).on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 320, 'linear');
  });
}


function showInfo(jsonObj) {
  var info = jsonObj['members'];

  // the down chevron in the first page, goes to the first project
  var sectionStart = document.getElementById('section-start');
  sectionStart.setAttribute("href", "#" + info[0].projectName.replace(" ", ""));

  onClick(sectionStart);

  for(var i = 0; i < info.length; i++) {
    var myArticle = document.createElement('article');
    var hr = document.createElement('hr');
    var gitHub = document.createElement("a");
    // var webPage = document.createElement("a");
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('h2');
    var myPara2 = document.createElement('p');
    var myList = document.createElement('ul');

    // Project name
    myH2.textContent = info[i].name;
    myPara1.textContent = info[i].projectName;
    myPara1.class = "ProjectName";
    myPara1.id = info[i].projectName.replace(" ", "");

    // Project image
    var image = document.createElement("img");
    image.src = 'img/' + info[i].projectName.replace(" ", "") + '.jpg';
    image.class = 'image';
    image.id = 'image';

    // Modal
    var modal = document.getElementById('myModal');
    var imageModal = document.getElementById('imageModal');

    image.onclick = function(){
      modal.style.display = "block";
      imageModal.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Outside click
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }

    // GitHub to project
    gitHub.href = info[i].gitHub;
    gitHub.alt = info[i].projectName.capitalize();
    gitHub.id = info[i].projectName.capitalize();
    gitHub.class = info[i].projectName.capitalize();
    gitHub.title = info[i].projectName.capitalize();

    var imgGitHub = document.createElement("img");
    imgGitHub.src = 'img/gitHub.svg';
    imgGitHub.id = 'GitHub';
    gitHub.appendChild(imgGitHub);

    // About project
    var aboutProjects = info[i].aboutProject;
    for(var j = 0; j < aboutProjects.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = aboutProjects[j];
      myList.appendChild(listItem);
    }

    // Append to article
    myArticle.appendChild(myH2);
    myArticle.appendChild(hr);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(image);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myList);
    section.appendChild(myArticle);
    myArticle.appendChild(gitHub);
    myArticle.appendChild(gitHub);
  }
}
