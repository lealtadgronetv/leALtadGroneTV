import { supabase } from "./supabase.js";

// Función para cargar cuentas completas
async function cargarCuentas() {
    const { data, error } = await supabase.from("cuentas_completas").select("*");

    if (error) {
        console.error("Error al obtener cuentas:", error);
        return;
    }

    const tablaCuentas = document.getElementById("tablaCuentas");
    tablaCuentas.innerHTML = ""; // Limpiar la tabla antes de llenar

    data.forEach((cuenta) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${cuenta.id}</td>
            <td>${cuenta.correo}</td>
            <td>${cuenta.cantidad_perfiles}</td>
            <td>${cuenta.fecha_vencimiento}</td>
            <td>${cuenta.plataforma}</td>
            <td>
                <button onclick="eliminarCuenta(${cuenta.id})">Eliminar</button>
                <button onclick="reemplazarCuenta(${cuenta.id})">Reemplazar</button>
            </td>
        `;
        tablaCuentas.appendChild(row);
    });
}

// Función para cargar perfiles vendidos
async function cargarPerfiles() {
    const { data, error } = await supabase.from("perfiles_vendidos").select("*");

    if (error) {
        console.error("Error al obtener perfiles:", error);
        return;
    }

    const tablaPerfiles = document.getElementById("tablaPerfiles");
    tablaPerfiles.innerHTML = ""; // Limpiar la tabla antes de llenar

    data.forEach((perfil) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${perfil.id}</td>
            <td>${perfil.nombre_cliente}</td>
            <td>${perfil.perfil_cliente}</td>
            <td>${perfil.pin_cliente || "N/A"}</td>
            <td>${perfil.correo_cuenta}</td>
            <td>${perfil.contraseña_cuenta}</td>
            <td>${perfil.fecha_vencimiento}</td>
            <td>
                <button onclick="eliminarPerfil(${perfil.id})">Eliminar</button>
                <button onclick="reemplazarPerfil(${perfil.id})">Reemplazar</button>
            </td>
        `;
        tablaPerfiles.appendChild(row);
    });
}

// Función para eliminar una cuenta
async function eliminarCuenta(id) {
    const { error } = await supabase.from("cuentas_completas").delete().match({ id });
    if (error) {
        console.error("Error al eliminar cuenta:", error);
    } else {
        cargarCuentas(); // Recargar la tabla
    }
}

// Función para eliminar un perfil
async function eliminarPerfil(id) {
    const { error } = await supabase.from("perfiles_vendidos").delete().match({ id });
    if (error) {
        console.error("Error al eliminar perfil:", error);
    } else {
        cargarPerfiles(); // Recargar la tabla
    }
}

// Función para reemplazar una cuenta
async function reemplazarCuenta(id) {
    const nuevoCorreo = prompt("Ingrese el nuevo correo de la cuenta:");
    if (!nuevoCorreo) return;

    const { error } = await supabase.from("cuentas_completas").update({ correo: nuevoCorreo }).match({ id });
    if (error) {
        console.error("Error al reemplazar cuenta:", error);
    } else {
        cargarCuentas(); // Recargar la tabla
    }
}

// Función para reemplazar un perfil
async function reemplazarPerfil(id) {
    const nuevoPerfil = prompt("Ingrese el nuevo perfil del cliente:");
    if (!nuevoPerfil) return;

    const { error } = await supabase.from("perfiles_vendidos").update({ perfil_cliente: nuevoPerfil }).match({ id });
    if (error) {
        console.error("Error al reemplazar perfil:", error);
    } else {
        cargarPerfiles(); // Recargar la tabla
    }
}

// Cargar los datos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarCuentas();
    cargarPerfiles();
});