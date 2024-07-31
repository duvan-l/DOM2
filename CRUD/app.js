import { validarLetras } from "./modules/validarLetras.js";
import { is_valid } from "./modules/is_valid.js";
import { validarTipDoc } from "./modules/validarTipDoc.js";

const tipo_doc = document.querySelector("#tipo_doc");
// console.log("ssssssssssssssssss")
tipo_doc.addEventListener("keypress", (e) => validarLetras(e));
tipo_doc.addEventListener("keypress", (e) => is_valid(e)); 
tipo_doc.addEventListener("change", (e) => validarTipDoc(e));