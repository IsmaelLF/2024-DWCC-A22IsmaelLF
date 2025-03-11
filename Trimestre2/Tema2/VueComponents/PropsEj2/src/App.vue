<script>
import FormularioDatos from "./components/FormularioDatos.vue";
import MostrarNomeAno from "./components/MostrarNomeAno.vue";

export default {
  components: {
    MostrarNomeAno,
    FormularioDatos,
  },
  data() {
    return {
      nomePersoa: "Andrea",
      anoNacemento: 1993,
    };
  },
  methods: {
    actualizarDatos(novoNome, novoAno) {
      this.nomePersoa = novoNome;
      this.anoNacemento = novoAno;
    },
  },
};
</script>

<template>
  <MostrarNomeAno :nomePersoa="nomePersoa" :anoNacemento="anoNacemento" />
  <FormularioDatos
    :nomePersoa="nomePersoa"
    :anoNacemento="anoNacemento"
    @update="actualizarDatos"
  />
</template>

<style></style>
