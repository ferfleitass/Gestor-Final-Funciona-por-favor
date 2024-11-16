# Este archivo contendrá la estructura básica de la aplicación y las rutas

<template>
  <div class="container mt-4">
    <!-- Barra de navegación con fondo personalizado y animación de botones -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow-sm mb-4">
      <div class="container-fluid">
        <!-- Título estilizado con icono a la izquierda -->
        <router-link to="/" class="navbar-brand fs-2 text-light fw-bold d-flex align-items-center">
          <i class="bi bi-list-ul me-2"></i> Gestor de Tareas
        </router-link>

        <!-- Botón de navegación en dispositivos móviles -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Elementos de la barra de navegación -->
        <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- Primer enlace con icono -->
            <li class="nav-item">
              <router-link to="/manual" class="nav-link btn btn-light text-dark rounded-3 me-2 px-4 py-2 transition-all hover-effect">
                <i class="bi bi-file-earmark-plus me-2"></i> Agregar Tareas Manualmente
              </router-link>
            </li>
            <!-- Segundo enlace con icono -->
            <li class="nav-item">
              <router-link to="/api" class="nav-link btn btn-light text-dark rounded-3 me-2 px-4 py-2 transition-all hover-effect">
                <i class="bi bi-cloud-download me-2"></i> Extraer Tareas de la API
              </router-link>
            </li>
            <!-- Tercer enlace con icono -->
            <li class="nav-item">
              <router-link to="/combined" class="nav-link btn btn-light text-dark rounded-3 me-2 px-4 py-2 transition-all hover-effect">
                <i class="bi bi-columns me-2"></i> Vista Combinada
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Vista principal -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Estilo para la animación en los botones */
.hover-effect:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
