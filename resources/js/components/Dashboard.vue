<template>
  <div class="container">
    <b-button variant="outline-primary" @click="isEditProfile = true">
      Edit
    </b-button>
    <!-- <Sidebar 
           :openSidebar = "isEditProfile"
           @toggleSidebars="toggleSidebar()"
           /> -->
    <div>
      <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>
      <b-sidebar
        id="sidebar-variant"
        title="Sidebar"
        bg-variant="dark"
        text-variant="light"
        shadow
      >
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <b-img
            src="https://picsum.photos/500/500/?image=54"
            fluid
            thumbnail
          ></b-img>
        </div>
      </b-sidebar>

      <div>
        <pre>{{ newName }}</pre>
        <propAndEmit :details.sync="newName" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import propAndEmit from "./propsAndEmit.vue";
export default {
  components: {
    Sidebar,
    propAndEmit,
  },

  data() {
    return {
      isEditProfile: false,
      newName: "rrr",
    };
  },

  mounted() {
    console.log("Component mounted.");
  },

  methods: {
    getDetails(value) {
      this.newName = value;
    },

    // toggleSidebar() {
    //         this.isEditProfile = !this.isEditProfile

    // }
  },
};
</script>
