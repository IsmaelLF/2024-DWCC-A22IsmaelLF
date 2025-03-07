<script>
import Contact from "./components/Contact.vue";

export default {
  components: {
    Contact,
  },
  data() {
    return {
      persoas: [
        {
          nome: "Ada Lovelace",
          telefono: 123456789,
          correo: "ada@lovelace.edu",
        },
        {
          nome: "Lovelace Ada",
          telefono: 987654321,
          correo: "lovelace@ada.edu",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Contact
      v-for="(persoa, index) in persoas"
      :key="index"
      :nome="persoa.nome"
      :telefono="persoa.telefono"
      :correo="persoa.correo"
    />
  </div>
</template>
