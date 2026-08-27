const API_URL = "https://api.soyella.com/api/auth/catalog-config";
const API_KEY = "Ella-Service-Client-Sect369630";
const container = document.getElementById("doctors-container");

const cleanHtml = (textArr = []) => {
  const str = Array.isArray(textArr) ? textArr.join(" ") : String(textArr || "");
  return str.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ").trim();
};

const renderCards = (doctors) => {
  if (!doctors || !doctors.length) {
    container.innerHTML = '<p class="status">No se encontraron especialistas en la respuesta.</p>';
    return;
  }

  container.innerHTML = doctors
    .map(
      (doc) => `
      <article class="card">
        <div class="card-header">
          ${doc.foto ? `<img src="${doc.foto}" alt="${doc.nombre}" class="card-avatar" onerror="this.style.display='none'" />` : ''}
          <div>
            <h3>${doc.nombre}</h3>
            <p class="specialty">${doc.especialidad}</p>
          </div>
        </div>
        <p><strong>Precio:</strong> ${doc.precio}</p>
        <p><strong>Price ID:</strong> <code>${doc.price_id}</code></p>
        <p class="description"><strong>Descripción:</strong> ${doc.descripcion}</p>
      </article>
    `
    )
    .join("");
};

const fetchDoctors = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error en el servidor: HTTP ${response.status} (${response.statusText})`);
    }

    const payload = await response.json();
    const rawList = payload.doctorsDetails || payload.data?.doctorsDetails || [];

    if (!Array.isArray(rawList)) {
      throw new Error("El formato devuelto por la API no contiene el array 'doctorsDetails'");
    }

    const uniqueDoctors = rawList
      .filter((doc, idx, self) => idx === self.findIndex((d) => (d.uuid || d.name) === (doc.uuid || doc.name)))
      .map((doc) => ({
        nombre: doc.title || doc.name || "Sin nombre",
        foto: doc.avatarUrl || doc.avatar_url || "",
        precio: doc.price || doc.firstCatalogService?.formattedPrice || "N/A",
        especialidad: doc.specialty || doc.discipline || "General",
        price_id: doc.firstCatalogService?.priceId || "N/A",
        descripcion: cleanHtml(doc.bio) || "Sin descripción disponible"
      }));

    renderCards(uniqueDoctors);
  } catch (error) {
    console.error("Detalle del error:", error);
    container.innerHTML = `
      <div class="error-box">
        <p><strong>No se pudo cargar la información:</strong></p>
        <p>${error.message}</p>
      </div>
    `;
  }
};

fetchDoctors();
