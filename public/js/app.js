console.log("message");

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  console.log("click");
  // window.history.pushState({}, "", event.target.href);
};

///when using es modules functions inside your ap.js file are not autoamtically accessible to the global scope
window.route = route;
