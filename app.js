const form = document.querySelector("form");
const avatarList = document.querySelector("ul");
const inputName = document.getElementById("name");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = form.name.value;
  let email = form.email.value;
  let image = form.avatar.value;
  let age = form.age.value;
  let work = form.work.value;

  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const span = document.createElement("p");
  const ageP = document.createElement("p");
  const workP = document.createElement("p");

  p.textContent = name;
  span.textContent = email;
  img.src = image;
  img.width = 100;
  ageP.textContent = age;
  workP.textContent = work;

  li.append(p, span, img, ageP, workP);
  avatarList.appendChild(li);

  form.reset();
});
