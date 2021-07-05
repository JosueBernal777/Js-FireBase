let firebaseConfig = {
    apiKey: "AIzaSyASfhuT8T7rDdZvVH5UYN0sxFAHHmZMsv8",
    authDomain: "shunku-kundur.firebaseapp.com",
    projectId: "shunku-kundur",
    storageBucket: "shunku-kundur.appspot.com",
    messagingSenderId: "726742946013",
    appId: "1:726742946013:web:1891f65231cd8ebeb30b34",
    measurementId: "G-5PYB8M76GQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

let artesaniasHtml = document.getElementById("artesanias");

export async function getArtesanias() {
    const artesanias = await db.collection('artesanias').get();
    let list = "";
    artesanias.forEach(doc => {
        list += `<li class="cite text-color-secondary">
        <p>${doc.data().nombre}</p>
        <p>${doc.data().descripcion}</p>
        <p>$ ${doc.data().precio}</p>
      </li>`;
    });
    artesaniasHtml.innerHTML = list
}

export async function setArtesanias(nombre, descripcion, precio) {
    await db.collection('artesanias').doc().set({
        nombre,
        descripcion,
        precio
    })
}