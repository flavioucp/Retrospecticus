/* ====================
   GUARDAR EN LOCALSTORAGE + CAPSULA MÁGICA
==================== */

const form = document.getElementById("capsulaForm");
const savedMessage = document.getElementById("savedMessage");

const capsulaMagic = document.getElementById("capsulaMagic");
const capsulaText = document.getElementById("capsulaText");

const mensajesMagicos = [
    "✨ Tu futuro ya recibió este mensaje desde el cosmos ✨",
    "🚀 Tu aprendizaje despegó más lejos de lo que imaginás.",
    "🪐 Lo que hoy sembraste brillará como una estrella.",
    "🌌 La cápsula guardó tu esencia para el viaje del tiempo.",
    "🔮 Tu potencial acaba de activar un nuevo camino."
];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        nombre: document.getElementById("nombre").value,
        aprendido: document.getElementById("aprendido").value,
        noSe: document.getElementById("noSe").value,
        mejorar: document.getElementById("mejorar").value,
        camino: document.getElementById("camino").value,
        miedo: document.getElementById("miedo").value,
        confianza: document.getElementById("confianza").value
    };

    // Guarda la info por nombre
    localStorage.setItem("capsula_" + data.nombre, JSON.stringify(data));

    // Muestra mensaje luminoso del formulario
    savedMessage.style.opacity = 1;
    setTimeout(() => savedMessage.style.opacity = 0, 2000);

    // Mensaje mágico aleatorio
    const mensaje = mensajesMagicos[Math.floor(Math.random() * mensajesMagicos.length)];
    capsulaText.textContent = mensaje;

    // Muestra cápsula animada
    capsulaMagic.classList.add("show");

    // La oculta después de 4 segundos
    setTimeout(() => {
        capsulaMagic.classList.remove("show");
    }, 4000);

    // Limpiar formulario
    form.reset();
});


/* ====================
   ANIMACIÓN DE ESTRELLAS
==================== */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

let stars = [];

for (let i = 0; i < 180; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random(),
        size: Math.random() * 2
    });
}

function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#9ffcff";

    stars.forEach((s) => {
        s.y += s.speed;
        if (s.y > canvas.height) {
            s.y = 0;
            s.x = Math.random() * canvas.width;
        }
        ctx.fillRect(s.x, s.y, s.size, s.size);
    });

    requestAnimationFrame(animate);
}

animate();
// script.js
import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

document.getElementById("capsuleForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const learned = document.getElementById("learned").value;
    const dontKnow = document.getElementById("dontKnow").value;
    const wantLearn = document.getElementById("wantLearn").value;
    const fear = document.getElementById("fear").value;
    const feelsAble = document.getElementById("feelsAble").value;

    try {
        await addDoc(collection(db, "capsulas"), {
            name,
            learned,
            dontKnow,
            wantLearn,
            fear,
            feelsAble,
            createdAt: serverTimestamp()
        });

        document.getElementById("capsuleForm").reset();

        // Mostrar pantalla mágica
        document.getElementById("magicMessage").classList.add("show");

    } catch (error) {
        console.error("Error al guardar en Firebase:", error);
        alert("Hubo un error, intenta de nuevo.");
    }
});
