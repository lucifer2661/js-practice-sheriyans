let toastCount = 0;

function createToaster(config) {
  return function (str) {

    const div = document.createElement("div");
    div.innerText = str;

    // base styles
    div.classList.add(
      "inline-block",
      "px-4",
      "py-2",
      "rounded-md",
      "shadow-md",
      "fixed",
      "transition-opacity",
      "duration-300",
      "opacity-0"
    );

    // theme
    if (config.theme === "dark") {
      div.classList.add("bg-gray-800", "text-white");
    } else {
      div.classList.add("bg-white", "text-gray-800");
    }

    // horizontal position
    if (config.positionX === "right") {
      div.classList.add("right-4");
    } else {
      div.classList.add("left-4");
    }

    // stacking logic
    toastCount++;

    const spacing = 60; // distance between toasts
    const offset = 20 + (toastCount - 1) * spacing;

    if (config.positionY === "top") {
      div.style.top = offset + "px";
    } else {
      div.style.bottom = offset + "px";
    }

    document.body.appendChild(div);

    // fade in
    setTimeout(() => {
      div.classList.remove("opacity-0");
      div.classList.add("opacity-100");
    }, 100);

    // fade out + remove
    setTimeout(() => {
      div.classList.remove("opacity-100");
      div.classList.add("opacity-0");

      setTimeout(() => {
        div.remove();
        toastCount--; // reduce count when removed
      }, 300);
    }, config.duration * 1000);
  };
}

// create toaster
const toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 3
});

// test multiple
toaster("Toast 1 🚀");
setTimeout(() => toaster("hello  🔥"), 500);
setTimeout(() => toaster("aditya is gayyy 😏"), 1000);