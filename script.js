let form = document.querySelector("form");
let input = document.querySelector("form input");
let ul = document.querySelector("ul");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const text = input.value.trim();
	if (!text) return;

	const li = document.createElement("li");

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	const label = document.createElement("label");
	label.textContent = text;

	const span = document.createElement("span");
	const img = document.createElement("img");
	img.src = "icons/delete.svg";
	img.alt = "deletar item";
	img.className = "delete-btn";
	span.appendChild(img);

	li.appendChild(checkbox);
	li.appendChild(label);
	li.appendChild(span);

	ul.appendChild(li);

	input.value = "";
	input.focus();
});

// Marca a tarefa como concluída
ul.addEventListener("change", (event) => {
	if (event.target.matches('input[type="checkbox"]')) {
	}
});

// Deletar tarefa ao clicar no ícone
ul.addEventListener("click", (event) => {
	if (event.target.matches('.delete-btn')) {
		const li = event.target.closest('li');
		if (li) li.remove();
	}
});