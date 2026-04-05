function getusers(){
  
fetch("https://randomuser.me/api/?results=5")
  .then((raw) => raw.json())
  .then((data) => {

    document.getElementById("container").innerHTML = ""; // Clear previous results
    data.results.forEach(function (user) {

      const card = document.createElement("div");
      card.className =
        "bg-white shadow-xl rounded-2xl p-6 w-80 text-center hover:scale-105 transition-transform duration-300";

      // Image
      const img = document.createElement("img");
      img.src = user.picture.large;
      img.className =
        "w-24 h-24 mx-auto rounded-full border-4 border-blue-500";

      // Name
      const name = document.createElement("h2");
      name.className = "text-xl font-semibold mt-4";
      name.textContent = `${user.name.first} ${user.name.last}`;

      // Bio (using email as demo)
      const bio = document.createElement("p");
      bio.className = "text-gray-600 text-sm mt-3";
      bio.textContent = user.email;

     
     

      // Append
    
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(bio);

const container = document.getElementById("container");
container.appendChild(card);    });
  });
}
getusers();
document.querySelector("#mainBtn").addEventListener("click", function() {
  getusers();
});
