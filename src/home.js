import lasagna from "./images/lasagna.jpg";
import biriyani from "./images/biriyani.jpeg";
import tacos from "./images/tacos.jpeg";

const homeDiv = document.createElement("div");
homeDiv.setAttribute("class", "home");

const homeHeader = document.createElement("h3");
homeHeader.innerText = "My Restaurant";

const paragraph = document.createElement("p");
paragraph.innerText = "This is the best restaurant in the city! We offer dishes from many different cuisines, including Italian, Chinese, Mexican, Indian, and many more! With countless options to choose from, we've got something for everybody!";

const imagePanel = document.createElement("div");
imagePanel.setAttribute("class", "image-panel");

const firstImage = document.createElement("div");
firstImage.setAttribute("class", "image");

const imageOne = document.createElement("img");
imageOne.src = lasagna;

const captionOne = document.createElement("p");
captionOne.innerText = "Lasagna";

firstImage.appendChild(imageOne);
firstImage.appendChild(captionOne);

const secondImage = document.createElement("div");
secondImage.setAttribute("class", "image");

const imageTwo = document.createElement("img");
imageTwo.src = biriyani;

const captionTwo = document.createElement("p");
captionTwo.innerText = "Biriyani";

secondImage.appendChild(imageTwo);
secondImage.appendChild(captionTwo);

const thirdImage = document.createElement("div");
thirdImage.setAttribute("class", "image");

const imageThree = document.createElement("img");
imageThree.src = tacos;

const captionThree = document.createElement("p");
captionThree.innerText = "Tacos";

thirdImage.appendChild(imageThree);
thirdImage.appendChild(captionThree);

imagePanel.appendChild(firstImage);
imagePanel.appendChild(secondImage);
imagePanel.appendChild(thirdImage);

homeDiv.appendChild(homeHeader);
homeDiv.appendChild(paragraph);
homeDiv.appendChild(imagePanel);

export default homeDiv;