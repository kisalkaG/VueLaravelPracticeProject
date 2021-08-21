<template>
  <div class="container">
    <router-view />
    <router-link to="/input-bindings">Input Bindings</router-link>
    <div>

      <div> 
        <router-link to="/checkbox">Check Box</router-link>
      </div>

      <div> 
        <router-link to="/class-and-style-binding">Class And Style Binding</router-link>
      </div>

      <div> 
        <router-link to="/ternery-operation">Ternery Operation</router-link>
      </div>

       <div> 
        <router-link to="/inline-edit">Inline Edit</router-link>
      </div>

    <b-button variant="outline-primary" @click="isEditProfile = true">
      Edit
    </b-button>
    </div>
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
