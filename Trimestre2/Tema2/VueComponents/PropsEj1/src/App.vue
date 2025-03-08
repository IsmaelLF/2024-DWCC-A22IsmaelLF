<script>
import Contact from "./components/Contact.vue";
import FormNovoContacto from "./components/FormNovoContacto.vue";
export default {
  components: {
    Contact,
    FormNovoContacto,
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
  methods: {
    addContacto(contacto) {
      this.persoas.push(contacto);
    },
    removeContacto(contacto) {
      // Voume cagar en Dios, media hora e o unico que me faltaba era "this.persoas =" AAAAAAAAAAAAAA
      this.persoas = this.persoas.filter(
        (persoa) => persoa.telefono != contacto.telefono
      );
    },
  },
};
</script>

<template>
  <div>
    <Contact
      @remove-contacto="removeContacto"
      v-for="persoa in persoas"
      :key="persoa.telefono"
      :nome="persoa.nome"
      :telefono="persoa.telefono"
      :correo="persoa.correo"
    />
  </div>
  <br /><br /><br />
  <div>
    <FormNovoContacto @add-contacto="addContacto" />
  </div>
</template>
<style>
body {
  margin: auto;
  text-align: center;
}
</style>
