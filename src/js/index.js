document.addEventListener("DOMContentLoaded", () => {
    const introPanel = document.getElementById('intro-panel');
    const colorPanel = document.getElementById('color-panel');
    const svg = document.getElementById('map-svg');
    introPanel.style.display = 'flex';

    let selectedCountry = null;
    let originalColor = {};
    let scale = 1;
    let pos = { x: 0, y: 0 };
    let isDragging = false;
    let startPos = { x: 0, y: 0 };

    // Función de zoom
    const applyTransform = () => {
        svg.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale})`;
    };

    // Eventos de zoom con rueda del mouse
    svg.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        scale *= delta;
        scale = Math.min(Math.max(1, scale), 5); // Límites de zoom
        applyTransform();
    });

    // Eventos de arrastre
    svg.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPos = { x: e.clientX - pos.x, y: e.clientY - pos.y };
        svg.classList.add('dragging');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        pos.x = e.clientX - startPos.x;
        pos.y = e.clientY - startPos.y;
        applyTransform();
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        svg.classList.remove('dragging');
    });

    // Cerrar paneles
    window.closeIntroPanel = () => introPanel.style.display = 'none';
    window.closeColorPanel = () => colorPanel.style.display = 'none';

    // Manejo de países
    document.querySelectorAll('path').forEach(country => {
        originalColor[country.id] = country.style.fill || '#6c8a71';

        country.addEventListener('click', (e) => {
            e.stopPropagation();
            selectedCountry = country;
            colorPanel.style.display = 'flex';
        });
    });

    // Selección de color
    document.querySelectorAll('.color-panel div').forEach(colorDiv => {
        colorDiv.addEventListener('click', (e) => {
            if (!selectedCountry) return;
            const color = colorDiv.getAttribute('data-color');
            selectedCountry.style.fill = color;
            colorPanel.style.display = 'none';
        });
    });

    // Cerrar paneles al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.panel-content') && !e.target.closest('path')) {
            colorPanel.style.display = 'none';
        }
    });
});