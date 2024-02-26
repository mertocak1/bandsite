
const ticketData = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
  }
  ,
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
  }
  ,
  {
    date: "Sat Oct 12 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
  }
  ,
  {
    date: "Mon Sept 09 2024",
    venue: "View Launge",
    location: "San Francisco, CA"
  }
  ,
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
  }
  ,
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA"
  }
  ,
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA"
  }
];

displayTicket(ticketData);


function displayTicket(arrayData) {
  
  // Get Section
  const ticketSection = document.getElementById("ticketSection");
  const titleWrapper = document.getElementById("titleWrapper");

  

 
  // Create ticket titles (Just for tablet and desktop view!!!!)
    const tabletTitleDiv = document.createElement("div");
    tabletTitleDiv.classList.add("ticket-section__tablet-title");
    titleWrapper.append(tabletTitleDiv);

    const tabletTitle1 = document.createElement("h5");
    tabletTitle1.innerText = "DATE"
    tabletTitleDiv.append(tabletTitle1);

    const tabletTitle2 = document.createElement("h5");
    tabletTitle2.innerText = "VENUE"
    tabletTitleDiv.append(tabletTitle2);

    const tabletTitle3 = document.createElement("h5");
    tabletTitle3.innerText = "LOCATION"
    tabletTitleDiv.append(tabletTitle3);
  ///////////////////////////////////////////////////////////////////

  // Loop For Each array element
  arrayData.forEach(element => {
    
    // Create and display main wrapper
    const mainWrapper = document.createElement("div");
    mainWrapper.classList.add("ticket-section__main-wrapper");
    ticketSection.append(mainWrapper);
    // adds attribute to make the div focusable
    mainWrapper.setAttribute("tabindex", "0");
    // mouseenter and mouse leave adds better hover stage than css psuedo class
    mainWrapper.addEventListener("mouseenter", () => {
      mainWrapper.classList.add("ticket-section__main-wrapper--hover");
    });
    mainWrapper.addEventListener("mouseleave", () => {
      mainWrapper.classList.remove("ticket-section__main-wrapper--hover");
    });
    //  this event listener adds active stage
    mainWrapper.addEventListener("focus", () => {
      mainWrapper.classList.add("ticket-section__main-wrapper--active");
    });

    // this event listener adds allows to disable active stage when somewhere else clicked
    mainWrapper.addEventListener("blur", (event) => {
      event.target.classList.remove("ticket-section__main-wrapper--active");
    });

    // Create and display content wrapper
    const contentWrapper1 = document.createElement("div");
    contentWrapper1.classList.add("ticket-section__content-wrapper");
    mainWrapper.append(contentWrapper1);

    // Create title for ticket content (Date)
    const contentTitle1 = document.createElement("h5");
    contentTitle1.classList.add("ticket-section__content-title");
    contentTitle1.innerText = "DATE"
    contentWrapper1.append(contentTitle1);

    const contentP1 = document.createElement("p");
    contentP1.classList.add("ticket-section__content-p");
    contentP1.classList.add("ticket-section__content-p--semi");
    contentP1.innerText = element.date;
    contentWrapper1.append(contentP1);

    const contentWrapper2 = document.createElement("div");
    contentWrapper2.classList.add("ticket-section__content-wrapper");
    mainWrapper.append(contentWrapper2);

    // Create title for ticket content (Venue)
    const contentTitle2 = document.createElement("h5");
    contentTitle2.classList.add("ticket-section__content-title");
    contentTitle2.innerText = "VENUE"
    contentWrapper2.append(contentTitle2);

    const contentP2 = document.createElement("p");
    contentP2.classList.add("ticket-section__content-p");
    contentP2.innerText = element.venue;
    contentWrapper2.append(contentP2);

    // Create and display content wrapper
    const contentWrapper3 = document.createElement("div");
    contentWrapper3.classList.add("ticket-section__content-wrapper");
    mainWrapper.append(contentWrapper3);

    // Create title for ticket content (Location)
    const contentTitle3 = document.createElement("h5");
    contentTitle3.classList.add("ticket-section__content-title");
    contentTitle3.innerText = "LOCATION"
    contentWrapper3.append(contentTitle3);

    const contentP3 = document.createElement("p");
    contentP3.classList.add("ticket-section__content-p");
    contentP3.innerText = element.location;
    contentWrapper3.append(contentP3);

    const ticketButton = document.createElement("button");
    ticketButton.classList.add("ticket-section__button");
    ticketButton.innerText = "BUY TICKETS"
    mainWrapper.append(ticketButton);

    const sectionSplitter = document.createElement("div");
    sectionSplitter.classList.add("ticket-section__section-splitter");
    ticketSection.append(sectionSplitter);
  });
}

