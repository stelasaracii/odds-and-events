// STATE
const state = {
  bank: [],
  odds: [],
  evens: [],
};

// APP ROOT
// =======================
const app = document.getElementById("app");

// COMPONENTS

function AppTitle() {
  const h1 = document.createElement("h1");
  h1.textContent = "Odds and Events";
  return h1;
}

function NumberForm() {
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Add a number";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add number";
  addBtn.type = "submit";

  const sortOneBtn = document.createElement("button");
  sortOneBtn.textContent = "Sort 1";
  sortOneBtn.type = "button";

  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.type = "button";

  // EVENTS
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = Number(input.value);
    if (!Number.isNaN(value)) {
      state.bank.push(value);
      input.value = "";
      render();
    }
  });

  sortOneBtn.addEventListener("click", () => {
    if (state.bank.length === 0) return;

    const num = state.bank.shift();
    if (num % 2 === 0) {
      state.evens.push(num);
    } else {
      state.odds.push(num);
    }
    render();
  });

  sortAllBtn.addEventListener("click", () => {
    while (state.bank.length > 0) {
      const num = state.bank.shift();
      if (num % 2 === 0) {
        state.evens.push(num);
      } else {
        state.odds.push(num);
      }
    }
    render();
  });

  form.append(input, addBtn, sortOneBtn, sortAllBtn);
  return form;
}

function NumberSection(title, numbers) {
  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = numbers.join(" ");

  section.append(h2, p);
  return section;
}

// =======================
// RENDER
// =======================
function render() {
  app.innerHTML = "";

  app.append(
    AppTitle(),
    NumberForm(),
    NumberSection("Bank", state.bank),
    NumberSection("Odds", state.odds),
    NumberSection("Evens", state.evens),
  );
}

// =======================
// INITIAL RENDER
// =======================
render();
