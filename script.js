// Tasks 3.0 & 5.0
// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" }
      ]
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" }
      ]
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" }
      ]
    }
  ];

  // Task 1.0
  // Select and cache the <main> element in a variable named mainEl.
  const mainEl = document.querySelector("main");
  
  // Task 1.1
  // Set the background color of mainElto the value stored in the --main-bgCSS custom property.
  mainEl.style.backgroundColor = "var(--main-bg)";
  
  // Task 1.2 
  // Set the content of mainEl to <h1>SEI Rocks!</h1>.
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
  
  // Task 1.3
  // Add a class of flex-ctr to mainEl.
  mainEl.classList.add("flex-ctr");

  // Task 2.0
  // Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
  var topMenuEl = document.getElementById("top-menu");
  
  // Task 2.1
  // Set the height topMenuEl element to be 100%.
  topMenuEl.style.height = "100%";
  
  // Task 2.2
  // Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  
  // Task 2.3
  // Add a class of flex-around to topMenuEl.
  topMenuEl.classList.add("flex-around");
  
  // Task 3.1
  // Iterate over the entire menuLinks array and for each "link" object:
  // Create an <a> element.
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  // Set the new element's content to the value of the text property of the "link" object.
  // Append the new element to the topMenuEl element.
  menuLinks.forEach(function (link) {
    let newLinkEl = document.createElement("a");
    newLinkEl.href = link.href;
    newLinkEl.textContent = link.text;
    topMenuEl.appendChild(newLinkEl);
  });
  
  // Task 4.0
  // Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
  var subMenuEl = document.querySelector("#sub-menu");
  
  // Task 4.1
  // Set the height subMenuEl element to be 100%.
  subMenuEl.style.height = "100%";
  
  // Task 4.2
  // Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  
  // Task 4.3
  // Add the class of flex-around to the subMenuEl element.
  subMenuEl.classList.add("flex-around");
  
  // Task 4.4
  // Set the CSS position property of subMenuEl to the value of absolute.
  subMenuEl.style.position = "absolute";
  
  // Task 4.5
  // Set the CSS top property of subMenuEl to the value of 0.
  subMenuEl.style.top = "0";
  
  // Task 5.1
  // Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
  const topMenuLinks = topMenuEl.querySelectorAll("a");

  // Declare a global showingSubMenu variable and initialize it to false;
  var showingSubMenu = false;
  
  // Task 5.2
  // Attach a delegated 'click' event listener to topMenuEl.
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  // The second line of code function should immediately return if the element clicked was not an <a> element.
  topMenuEl.addEventListener("click", function (event) { 
    event.preventDefault(); 
    if (event.target.tagName !== "A") { 
      return;
    }
    console.log(event.target.tagName) // console.log the content of the <a>to verify the handler is working.
  // Task 5.3
  // Next in the event listener, if the clicked <a> link has a class of active:
  // Remove the active class from the clicked <a> element.
  // Set the showingSubMenu to false.
  // Set the CSS topproperty of subMenuEl to 0.
  // return to exit the handler.
    if (event.target.className === "active") {
      event.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = 0;
      return;
    }
  // Task 5.4
  // Next, the event listener should remove a class name of activefrom each <a> element in topMenuLinks- whether the activeclass exists or not.
    for (let i=0; i<topMenuLinks.length; i++){
      topMenuLinks[i].classList.remove("active")
  // Task 6.4
  // If the ABOUT link is clicked, an <h1>about</h1>should be displayed.
      mainEl.innerHTML = "<h1>about</h1>"
    }
  // Task 5.5
  // Next, the event listener should add a class name of active to the <a> element that was clicked.
    event.target.classList.add("active");
  
  // Task 5.6
  // Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
    const menuLink = menuLinks.find((link) => {
      return link.text === event.target.textContent
    })
    if (menuLink === undefined){
      return
    }
  // Task 5.7 & 5.8
  // Code the buildSubMenu function so that it:  
    // Clears the contents of subMenuEl.
    // Iterates over the subLinks array passed as an argument; and for each "link" object:
      // Create an <a> element.
      // On the new element, add an href attribute with its value set to the href property of the "link" object.
      // Set the new element's content to the value of the text property of the "link" object.
      // Append the new element to the subMenuEl element. 
    const buildSubMenu = (subLinks) => {
      subMenuEl.textContent = ""
      for (let i=0; i<menuLink.subLinks.length; i++){
        let newSublinkEl = document.createElement('a')
        newSublinkEl.href = menuLink.subLinks[i].href
        newSublinkEl.textContent = menuLink.subLinks[i].text
        subMenuEl.appendChild(newSublinkEl)
      }
    }
  // Next in the event listener...
  // If showingSubMenu is true:
  // Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
  // Set the CSS top property of subMenuEl to 100%.
    if (menuLink.subLinks) {
        showingSubMenu = true;
        subMenuEl.style.top = '100%'
        buildSubMenu()
  // Otherwise (showingSubMenu is false):
  // Set the CSS topproperty of subMenuEl to 0.
    } else {
        showingSubMenu = false;
        subMenuEl.style.top = 0;
    }
  // Task 6.0
  // Attach a delegated 'click' event listener to subMenuEl. 
  // The first line of code of the event listener function should call the event object's preventDefault() method. 
  // The second line of code function should immediately return if the element clicked was not an <a> element.  
  // console.logthe content of the <a> to verify the handler is working.
    subMenuEl.addEventListener('click', (event) =>{
        event.preventDefault();
        if (event.target.tagName !== "A") { 
          return;
        }
        console.log(event.target.tagName)
  // Task 6.1
  // Next, the event listener should:    
    // Set showingSubMenu to false.
    // Set the CSS topproperty of subMenuEl to 0.
        showingSubMenu = false
        subMenuEl.style.top = '0'
  // Task 6.2
  // Remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not. 
        for (i=0; i<topMenuLinks.length; i++){
          topMenuLinks[i].classList.remove('active')  
  // Task 6.3
  // Update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.
          mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`
        }
      })
    });
  // Task 6.4 is on line 138
