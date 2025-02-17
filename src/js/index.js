const countryNames = {
    "AF": "Afghanistan", 
     "AL": "Albania", 
     "DZ": "Algeria", 
     "AI": "Anguilla", 
     "AM": "Armenia", 
     "AW": "Aruba", 
     "AT": "Austria", 
     "BH": "Bahrain", 
     "BD": "Bangladesh", 
     "BB": "Barbados", 
     "BY": "Belarus", 
     "BE": "Belgium", 
     "BZ": "Belize", 
     "BJ": "Benin", 
     "BM": "Bermuda", 
     "BT": "Bhutan", 
     "BO": "Bolivia", 
     "BA": "Bosnia and Herzegovina", 
     "BW": "Botswana", 
     "BR": "Brazil", 
     "VG": "British Virgin Islands", 
     "BN": "Brunei Darussalam", 
     "BG": "Bulgaria", 
     "BF": "Burkina Faso", 
     "BI": "Burundi", 
     "KH": "Cambodia", 
     "CM": "Cameroon", 
     "CF": "Central African Republic", 
     "TD": "Chad", 
     "CO": "Colombia", 
     "CR": "Costa Rica", 
     "HR": "Croatia", 
     "CU": "Cuba", 
     "CW": "Curaçao", 
     "CZ": "Czech Republic", 
     "CI": "Côte d'Ivoire", 
     "KP": "Dem. Rep. Korea", 
     "CD": "Democratic Republic of the Congo", 
     "DJ": "Djibouti", 
     "DM": "Dominica", 
     "DO": "Dominican Republic", 
     "EC": "Ecuador", 
     "EG": "Egypt", 
     "SV": "El Salvador", 
     "GQ": "Equatorial Guinea", 
     "ER": "Eritrea", 
     "EE": "Estonia", 
     "ET": "Ethiopia", 
     "FI": "Finland", 
     "GF": "French Guiana", 
     "GA": "Gabon", 
     "GE": "Georgia", 
     "DE": "Germany", 
     "GH": "Ghana", 
     "GL": "Greenland", 
     "GD": "Grenada", 
     "GU": "Guam", 
     "GT": "Guatemala", 
     "GN": "Guinea", 
     "GW": "Guinea-Bissau", 
     "GY": "Guyana", 
     "HT": "Haiti", 
     "HN": "Honduras", 
     "HU": "Hungary", 
     "IS": "Iceland", 
     "IN": "India", 
     "IR": "Iran", 
     "IQ": "Iraq", 
     "IE": "Ireland", 
     "IL": "Israel", 
     "JM": "Jamaica", 
     "JO": "Jordan", 
     "KZ": "Kazakhstan", 
     "KE": "Kenya", 
     "XK": "Kosovo", 
     "KW": "Kuwait", 
     "KG": "Kyrgyzstan", 
     "LA": "Lao PDR", 
     "LV": "Latvia", 
     "LB": "Lebanon", 
     "LS": "Lesotho", 
     "LR": "Liberia", 
     "LY": "Libya", 
     "LT": "Lithuania", 
     "LU": "Luxembourg", 
     "MK": "Macedonia", 
     "MG": "Madagascar", 
     "MW": "Malawi", 
     "MV": "Maldives", 
     "ML": "Mali", 
     "MH": "Marshall Islands", 
     "MQ": "Martinique", 
     "MR": "Mauritania", 
     "YT": "Mayotte", 
     "MX": "Mexico", 
     "MD": "Moldova", 
     "MN": "Mongolia", 
     "ME": "Montenegro", 
     "MS": "Montserrat", 
     "MA": "Morocco", 
     "MZ": "Mozambique", 
     "MM": "Myanmar", 
     "NA": "Namibia", 
     "NR": "Nauru", 
     "NP": "Nepal", 
     "NL": "Netherlands", 
     "BQBO": "Netherlands", 
     "NI": "Nicaragua", 
     "NE": "Niger", 
     "NG": "Nigeria", 
     "PK": "Pakistan", 
     "PW": "Palau", 
     "PS": "Palestine", 
     "PA": "Panama", 
     "PY": "Paraguay", 
     "PE": "Peru", 
     "PL": "Poland", 
     "PT": "Portugal", 
     "QA": "Qatar", 
     "CG": "Republic of Congo", 
     "KR": "Republic of Korea", 
     "RE": "Reunion", 
     "RO": "Romania", 
     "RW": "Rwanda", 
     "BQSA": "Saba (Netherlands)", 
     "LC": "Saint Lucia", 
     "VC": "Saint Vincent and the Grenadines", 
     "BL": "Saint-Barthélemy", 
     "MF": "Saint-Martin", 
     "SA": "Saudi Arabia", 
     "SN": "Senegal", 
     "RS": "Serbia", 
     "SL": "Sierra Leone", 
     "SX": "Sint Maarten", 
     "SK": "Slovakia", 
     "SI": "Slovenia", 
     "SO": "Somalia", 
     "ZA": "South Africa", 
     "SS": "South Sudan", 
     "ES": "Spain", 
     "LK": "Sri Lanka", 
     "BQSE": "St. Eustatius (Netherlands)", 
     "SD": "Sudan", 
     "SR": "Suriname", 
     "SZ": "Swaziland", 
     "SE": "Sweden", 
     "CH": "Switzerland", 
     "SY": "Syria", 
     "TW": "Taiwan", 
     "TJ": "Tajikistan", 
     "TZ": "Tanzania", 
     "TH": "Thailand", 
     "GM": "The Gambia", 
     "TL": "Timor-Leste", 
     "TG": "Togo", 
     "TN": "Tunisia", 
     "TM": "Turkmenistan", 
     "TV": "Tuvalu", 
     "UG": "Uganda", 
     "UA": "Ukraine", 
     "AE": "United Arab Emirates", 
     "UY": "Uruguay", 
     "UZ": "Uzbekistan", 
     "VE": "Venezuela", 
     "VN": "Vietnam", 
     "EH": "Western Sahara", 
     "YE": "Yemen", 
     "ZM": "Zambia", 
     "ZW": "Zimbabwe",
     "US": "Estados Unidos", 
     "GB": "Reino Unido" 
   };

   document.addEventListener("DOMContentLoaded", () => {
    const introPanel = document.getElementById('intro-panel');
    const colorPanel = document.getElementById('color-panel');
    const svg = document.getElementById('map-svg');
    const selectedCountryNameElement = document.getElementById('selected-country-name'); // Referencia al contenedor

    introPanel.style.display = 'flex';

    let selectedCountry = null;
    let originalColor = {};
    let scale = 1;
    let pos = { x: 0, y: 0 };
    let isDragging = false;
    let startPos = { x: 0, y: 0 };

    // Crear el div para mostrar el nombre del país
    const countryNameDiv = document.createElement('div');
    countryNameDiv.style.position = 'absolute';
    countryNameDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    countryNameDiv.style.color = 'white';
    countryNameDiv.style.padding = '5px 10px';
    countryNameDiv.style.borderRadius = '5px';
    countryNameDiv.style.display = 'none'; // Inicialmente oculto
    document.body.appendChild(countryNameDiv);

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

        // Función para obtener el nombre del país
        const getCountryName = (countryElement) => {
            // Primero intenta obtenerlo del atributo "name", luego de "id", y finalmente de "class"
            let countryName = countryElement.getAttribute('name') || countryElement.id || countryElement.classList[0] || "Unknown Country";
            
            // Si el nombre está en el diccionario de países, lo reemplaza
            return countryNames[countryName] || countryName;
        };

        // Mostrar el nombre del país al pasar el mouse
        country.addEventListener('mouseenter', (e) => {
            const countryName = getCountryName(country);
            countryNameDiv.textContent = countryName;
            countryNameDiv.style.display = 'block'; // Mostrar el div

            // Posicionar el div con el nombre del país cerca del mouse
            countryNameDiv.style.left = `${e.pageX + 10}px`;
            countryNameDiv.style.top = `${e.pageY + 10}px`;
        });

        // Ocultar el nombre del país cuando el mouse sale
        country.addEventListener('mouseleave', () => {
            countryNameDiv.style.display = 'none'; // Ocultar el div
        });

        // Cuando se hace clic en un país
        country.addEventListener('click', (e) => {
            e.stopPropagation();
            selectedCountry = country;

            // Obtener y mostrar el nombre del país en el panel de selección de color
            const countryName = getCountryName(country);
            selectedCountryNameElement.textContent = countryName;

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