# Ejemplo Directorio de Doctoras - Soy ELLA

Demostración estática en HTML, CSS y JavaScript para consultar y listar las especialidades y doctoras del catálogo.

## Requisitos de Ejecución

Para evitar bloqueos de seguridad del navegador (**CORS Preflight** al enviar cabeceras como `x-api-key`), el proyecto debe ser servido desde un servidor web local y no abriendo directamente el archivo con doble clic (`file://`).

---

## ¿Cuál es el Estándar para Arrancar Servidores Locales?

El estándar más utilizado en desarrollo web cuando trabajas con HTML/CSS/JS estático depende de tus herramientas preinstaladas:

1. **Python (`python3 -m http.server 8000`) - El Estándar Nativo en Linux/macOS:**
   Es la forma más rápida y estándar porque **Python 3 ya viene preinstalado** en casi todos los sistemas Linux y macOS. No requiere instalar paquetes adicionales (`npm`, `pip`, etc.).

2. **Node.js (`npx serve`) - El Estándar en Ecosistemas Frontend / Node:**
   Si trabajas habitualmente con JavaScript/Node.js, `npx serve` o `npx http-server` es el estándar moderno en la industria.

3. **PHP (`php -S localhost:8000`) - Alternativa Nativa Backend:**
   Si utilizas PHP / PhpStorm, PHP incluye su propio servidor integrado de desarrollo de una sola línea.

4. **Extensión Live Server (VS Code / PhpStorm) - El Estándar de 1-Clic en IDE:**
   Para demostraciones en vivo desde el editor de código, la extensión **Live Server** es la opción más sencilla ya que recarga la página automáticamente ante cualquier cambio.

---

## Comandos Rápidos de Inicio

### Opción 1: Con Python (Sin instalaciones previas en Linux/macOS)
```bash
python3 -m http.server 8000
```
Navega a: `http://localhost:8000`

### Opción 2: Con Node.js (`npx`)
```bash
npx serve .
```
Navega a la URL mostrada en consola (ej. `http://localhost:3000`).

### Opción 3: Con PHP
```bash
php -S localhost:8000
```
Navega a: `http://localhost:8000`

### Opción 4: Extensión de IDE (1-Clic)
En PhpStorm o VS Code, haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.

---

## Estructura del Proyecto

- `index.html`: Estructura HTML principal.
- `css/style.css`: Estilos visuales de tarjetas, avatares y grid responsivo.
- `js/app.js`: Petición a la API y renderizado dinámico del directorio.
