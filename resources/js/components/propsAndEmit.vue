<template>
  <form>
    <input
      type="text"
      v-model="details"
      @input="$emit('update:details', details)"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newText: "",
    };
  },
  props: {
    details: {
      default: "",
      type: String,
    },
  },
};
</script>