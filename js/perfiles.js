import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("perfilIndividualForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre_cliente = document.getElementById("nombre_cliente").value;
        const perfil_cliente = document.getElementById("perfil_cliente").value;
        const pin_cliente = document.getElementById("pin_cliente").value || null;
        const correo_cuenta = document.getElementById("correo_cuenta").value;
        const contraseña_cuenta = document.getElementById("contraseña_cuenta").value;
        const fecha_vencimiento = document.getElementById("fecha_vencimiento").value;

        // Insertar en Supabase
        const { data, error } = await supabase
            .from("perfiles_vendidos")
            .insert([{ nombre_cliente, perfil_cliente, pin_cliente, correo_cuenta, contraseña_cuenta, fecha_vencimiento }]);

        if (error) {
            alert("Error al registrar el perfil: " + error.message);
        } else {
            alert("Perfil registrado correctamente.");
            form.reset(); // Limpiar el formulario
        }
    });
});
