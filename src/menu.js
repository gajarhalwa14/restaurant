const menuDiv = document.createElement("div");
menuDiv.setAttribute("class", "menu");

const menuHeader = document.createElement("h3");
menuHeader.innerText = "Menu";


menuDiv.appendChild(menuHeader);

const menuList = document.createElement("div");
menuList.setAttribute("class", "menu-list");

const cuisinesArr = ["Italian", "Indian", "Mexican", "Chinese"];
for (const cuisine in cuisinesArr) {
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("class", "menu-list-header")
    headerDiv.innerText = cuisinesArr[cuisine];
    menuList.appendChild(headerDiv);
}

const menuItemsArr = ["Lasagna", "Biriyani", "Tacos", "Chow Mein",
                      "Chicken Alfredo", "Dosa", "Burritos", "Dumplings",
                      "Shrimp Scampi", "Pav Bhaji", "Enchalada", "Sweet and Sour Chicken",
                      "Parmigiana", "Chicken Tikka Masala", "Tamales", "Hot Pot"];
for (const item in menuItemsArr) {
    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "menu-list-item");
    itemDiv.innerText = menuItemsArr[item];
    menuList.appendChild(itemDiv);
}

menuDiv.appendChild(menuList);
export default menuDiv;