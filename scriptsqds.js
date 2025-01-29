function toggleCheckboxes(buttonId, sectionSelector) {
    const btn = document.getElementById(buttonId);
    const checkboxes = document.querySelectorAll(`${sectionSelector} input[type="checkbox"]`);

    btn.addEventListener('click', () => {
        const todosMarcados = Array.from(checkboxes).every(checkbox => checkbox.checked);
        checkboxes.forEach(checkbox => {
            checkbox.checked = !todosMarcados;
        });
    });
}

// Chame a função para ambas as seções
toggleCheckboxes('marcar-todos-medio', '.section-two');
toggleCheckboxes('marcar-todos-longo', '.section-three');