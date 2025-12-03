import { db } from "./firebase.js";
import { collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

async function loadCapsules() {
    const list = document.getElementById("capsuleList");

    const q = query(collection(db, "capsulas"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    list.innerHTML = "";

    snapshot.forEach(doc => {
        const data = doc.data();

        const item = document.createElement("div");
        item.classList.add("capsuleItem");

        item.innerHTML = `
            <h2>👤 ${data.name}</h2>
            <p><b>Aprendió:</b> ${data.learned}</p>
            <p><b>No sabe:</b> ${data.dontKnow}</p>
            <p><b>Quiere aprender:</b> ${data.wantLearn}</p>
            <p><b>Miedo:</b> ${data.fear}</p>
            <p><b>¿Cree que puede aprenderlo?:</b> ${data.feelsAble}</p>
            <small>${data.createdAt?.toDate().toLocaleString() ?? "Sin fecha"}</small>
        `;

        list.appendChild(item);
    });
}

loadCapsules();
