<script></script>
<template>
  <div class="modal-mask">
    <div class="modal-container">
      <header>
        <slot name="header" :message="'default header'"> </slot>
      </header>
      <main>
        <slot :message="'default body'"></slot>
      </main>
      <footer>
        <slot name="footer" :message="'default footer'"></slot>
      </footer>
      <slot name="button"> </slot>
    </div>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}
.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
