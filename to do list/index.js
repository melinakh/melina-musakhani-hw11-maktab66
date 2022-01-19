let todoes = [
  { task: "coding", status: false },
  { task: "shopping", status: false },
  { task: "visiting dotor", status: false },
  { task: "read a book", status: false },
  { task: "clean the house", status: false },
];

function showToDO(todoes) {
  const UL = document.querySelector("ul");
  UL.innerText = "";
  todoes.forEach((todo, index) => {
    const list = document.createElement("li");
    const label = document.createElement("label");
    label.className = "container";
    if (todo.status) {
      label.classList.add("lineThrough");
    }
    const input = document.createElement("input");
    const span = document.createElement("span");
    span.className = "checkmark";
    label.style.marginLeft = "2%";
    input.type = "checkbox";
    input.addEventListener("change", () => {
      handelCheck(index);
    });
    input.checked = todo.status;
    input.className = "checkedBox";
    label.appendChild(input);
    label.append(todo.task);
    list.appendChild(label);
    const icon = document.createElement("span");
    icon.style.cursor = "pointer";
    icon.className = "fas fa-times icon";
    icon.style.marginRight = "3%";
    icon.onclick = () => handelDelet(index);
    label.appendChild(span);
    list.appendChild(icon);
    UL.appendChild(list);
  });
  const fillterArray = todoes.filter((item) => {
    return !item.status;
  });
  const itemsLeft = document.getElementById("leftItems");
  itemsLeft.innerText = `${fillterArray.length} items left`;
}
showToDO(todoes);
const firstInput = document.querySelector("#myInput");

firstInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    todoes.push({ task: event.target.value, status: false });
    showToDO(todoes);
  }
});

function handelDelet(index) {
  todoes.splice(index, 1);
  showToDO(todoes);
}

function handelCheck(index) {
  todoes[index].status = !todoes[index].status;

  showToDO(todoes);
}

const active = document.getElementById("active");
active.onclick = () => {
  const fillterArray = todoes.filter((item) => {
    return item.status === false;
  });

  showToDO(fillterArray);
};

const completed = document.getElementById("completed");
completed.onclick = () => {
  const fillterArray = todoes.filter((item) => {
    return item.status === true;
  });

  showToDO(fillterArray);
};
const all = document.getElementById("all");
all.onclick = () => {
  showToDO(todoes);
};

const ClearCompleted = document.getElementById("removeCompelet");
ClearCompleted.innerText = "Clear Completed";
ClearCompleted.addEventListener("click", () => {
  todoes = todoes.filter((item) => item.status === false);
  showToDO(todoes);
});
