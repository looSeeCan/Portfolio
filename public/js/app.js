console.dir(window);

const navigate = (path) => {
  switch (path) {
    case "/":
      //prettier-ignore
      document.getElementById("content").innerHTML = 
      `<aside>
        <p>Welcome</p>
      </aside>
      <section>This is a Section</section>
      `;

      break;
    case "/about":
      document.getElementById("content").innerHTML = "<h3>About Page</h3>";
      break;
    default:
      document.getElementById("content").innerHTML =
        "<h1>404 - Page Not Found</h1>";
  }
};

window.onload = () => {
  console.log(window.location.pathname);
  navigate(window.location.pathname);
};

window.onpopstate = () => {
  navigate(window.location.pathname);
};

document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(window.location.pathname);

  history.pushState(null, "", "/");
  navigate("/");
});

document.getElementById("about").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(window.location.pathname);

  history.pushState(null, "", "/about");
  navigate("/about");
});
