<template>
  <div class="container">
    <ul>
      <li v-for="user in users" :key="user.id">
        <input
          type="checkbox"
          :value="user.id"
          v-model="selected"
          @change="onChangeUser(user, $event)"
        />
        {{ user.name }}
      </li>
    </ul>
    {{ selected }}
    <pre>{{ selectedUsers }}</pre>

    <button
    @click.prevent="getSelectedUsers()"
    >Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Alda Myrrhine",
          pcn: {
            id: 1,
            name: "a",
          },
        },
        {
          id: 2,
          name: "Amrita Rabi",
          pcn: {
            id: 2,
            name: "ab",
          },
        },
        {
          id: 3,
          name: "Ruza Alannah",
          pcn: {
            id: 3,
            name: "abc",
          },
        },
      ],

      selected: [],
      selectedUsers: [],
    };
  },

   methods: {
    onChangeUser(item) {
      let self = this;
      this.users.forEach(function (value, key) {
        if (value.id == item.id) {
          self.selectedUsers.push({
              id:value.id+'_'+value.pcn.id,
            user_id: value.id,
            pcn_id: value.pcn.name,
            user_name: value.name,
          });
        }
      });
    },
    getSelectedUsers() {
      let array2 = [];
      let result = this.selectedUsers.filter(function (a) {
        return !this[a.id] && (this[a.id] = true);
      }, Object.create(null));
      array2.push(result);

      this.selectedUsers.forEach


      this.selectedUsers = array2;
      array2 = [];
      //filter empty objects and update final array
    //   this.selectedUsers = this.selectedUsers.filter(
    //     (value) => Object.keys(value).length !== 0
    //   );
    },
  }
};
</script>