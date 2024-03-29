const apiKey = "8f96edb5-13f7-429e-9b5d-ed9999b9c002";

const api = new BandSiteApi(apiKey);

async function getShows() {
  const response = await api.getShowDates();
  renderTicket(response);
  console.log(response);
}

getShows();

function renderTicket(arrayData) {
  // Get Section
  const ticketSection = document.getElementById("ticketSection");
  const titleWrapper = document.getElementById("titleWrapper");

  // Create ticket titles (Just for tablet and desktop view!!!!)
  const tabletTitleDiv = document.createElement("div");
  tabletTitleDiv.classList.add("ticket-section__tablet-title");
  titleWrapper.append(tabletTitleDiv);

  const tabletTitle1 = document.createElement("h5");
  tabletTitle1.innerText = "DATE";
  tabletTitleDiv.append(tabletTitle1);

  const tabletTitle2 = document.createElement("h5");
  tabletTitle2.innerText = "VENUE";
  tabletTitleDiv.append(tabletTitle2);

  const tabletTitle3 = document.createElement("h5");
  tabletTitle3.innerText = "LOCATION";
  tabletTitleDiv.append(tabletTitle3);
  ///////////////////////////////////////////////////////////////////

  // Loop For Each array element
  arrayData.forEach((obj) => {
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
    mainWrapper.addEventListener("blur", () => {
      event.target.classList.remove("ticket-section__main-wrapper--active");
    });

    // Create and display content wrapper
    const contentWrapper1 = document.createElement("div");
    contentWrapper1.classList.add("ticket-section__content-wrapper");
    mainWrapper.append(contentWrapper1);

    // Create title for ticket content (Date)
    const contentTitle1 = document.createElement("h5");
    contentTitle1.classList.add("ticket-section__content-title");
    contentTitle1.innerText = "DATE";
    contentWrapper1.append(contentTitle1);

    const contentP1 = document.createElement("p");
    contentP1.classList.add("ticket-section__content-p");
    contentP1.classList.add("ticket-section__content-p--semi");

    contentP1.innerText = `${convertDateToWords(obj.date)}`;
    contentWrapper1.append(contentP1);

    const contentWrapper2 = document.createElement("div");
    contentWrapper2.classList.add("ticket-section__content-wrapper");
    mainWrapper.append(contentWrapper2);

    // Create title for ticket content (Venue)
    const contentTitle2 = document.createElement("h5");
    contentTitle2.classList.add("ticket-section__content-title");
    contentTitle2.innerText = "VENUE";
    contentWrapper2.append(contentTitle2);

    const contentP2 = document.createElement("p");
    contentP2.classList.add("ticket-section__content-p");
    contentP2.innerText = obj.place;
    contentWrapper2.append(contentP2);

    // Create and display content wrapper
    const contentWrapper3 = document.createElement("div");
    contentWrapper3.classList.add("ticket-section__content-wrapper");
    mainWrapper.append(contentWrapper3);

    // Create title for ticket content (Location)
    const contentTitle3 = document.createElement("h5");
    contentTitle3.classList.add("ticket-section__content-title");
    contentTitle3.innerText = "LOCATION";
    contentWrapper3.append(contentTitle3);

    const contentP3 = document.createElement("p");
    contentP3.classList.add("ticket-section__content-p");
    contentP3.innerText = obj.location;
    contentWrapper3.append(contentP3);

    const ticketButton = document.createElement("button");
    ticketButton.classList.add("ticket-section__button");
    ticketButton.innerText = "BUY TICKETS";
    mainWrapper.append(ticketButton);

    const sectionSplitter = document.createElement("div");
    sectionSplitter.classList.add("ticket-section__section-splitter");
    ticketSection.append(sectionSplitter);
  });
}
