import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cuentaCompletaForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const correo = document.getElementById("correo").value;
        const cantidad_perfiles = parseInt(document.getElementById("cantidad_perfiles").value);
        const fecha_vencimiento = document.getElementById("fecha_vencimiento").value;
        const plataforma = document.getElementById("plataforma").value;

        // Insertar en Supabase
        const { data, error } = await supabase
            .from("cuentas_completas")
            .insert([{ correo, cantidad_perfiles, fecha_vencimiento, plataforma }]);

        if (error) {
            alert("Error al registrar la cuenta: " + error.message);
        } else {
            alert("Cuenta registrada correctamente.");
            form.reset(); // Limpiar el formulario
        }
    });
});
