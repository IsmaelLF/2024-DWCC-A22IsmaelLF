<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    telefono: {
      type: Number,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOculto: true,
      isFavorito: false,
    };
  },
  methods: {
    mostrarInfo() {
      this.isOculto = !this.isOculto;
    },
    toggleFavorito() {
      this.isFavorito = !this.isFavorito;
    },
  },
  computed: {
    textoBoton() {
      return this.isOculto ? "Mostrar Información" : "Ocultar Información";
    },
    emojiFav() {
      return this.isFavorito ? "   ⭐" : "   ☆";
    },
  },
};
</script>

<template>
  <div>
    <h3>{{ nome }}</h3>
    <button @click="mostrarInfo">{{ textoBoton }}</button>
    <div :class="{ oculto: isOculto }">
      <h4>
        {{ nome }}
        <button type="radio" @click="toggleFavorito">{{ emojiFav }}</button>
      </h4>
      <h4>{{ telefono }}</h4>
      <h4>{{ correo }}</h4>
      <button
        type="radio"
        @click="
          this.$emit('removeContacto', {
            nome: this.nome,
            telefono: Number(this.telefono),
            correo: this.correo,
          })
        "
      >
        ❌
      </button>
    </div>
  </div>
</template>

<style>
button[type="radio"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.oculto {
  display: none;
}
</style>
