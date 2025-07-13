const aboubtDiv = document.createElement("div");
aboubtDiv.setAttribute("class", "about");

const aboutHeader = document.createElement('h3');
aboutHeader.innerText = "About Us";

aboubtDiv.appendChild(aboutHeader);

const paragraph = document.createElement("p");
paragraph.innerText = "We are a restaurant that truly serves all. Our founders are all from different parts of the world, and bring different culinary dishes and styles with them. With these differences we are able to create a melting pot of different dishes for everyone, making sure that each visit is a brand new experience. We have been operating for over 20 years, receiving multiple awards and commendments from the community."

aboubtDiv.appendChild(paragraph);

const contactHeader = document.createElement("p");
contactHeader.setAttribute("class", "contact-header");
contactHeader.innerText = "Contact Us";

aboubtDiv.appendChild(contactHeader);

const formElement = document.createElement("form");

const formEmailInput = document.createElement("input");
formEmailInput.setAttribute("type", "text");
formEmailInput.setAttribute("placeholder", "Email Address");

const formButton = document.createElement("button");
formButton.setAttribute("id", "form-btn");
formButton.innerText = "Submit";

formElement.appendChild(formEmailInput);
formElement.appendChild(formButton);

aboubtDiv.appendChild(formElement);

export default aboubtDiv;