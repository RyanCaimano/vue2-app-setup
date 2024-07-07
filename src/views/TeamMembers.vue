<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Development Team</h1>
        <v-list>
          <v-list-item v-for="(member, index) in devTeamMembers" :key="index">
            {{ member.name }}
          </v-list-item>
        </v-list>
        <v-form @submit.prevent="addMember">
          <v-text-field
            v-model="newMemberName"
            label="New Member Name"
            required
          ></v-text-field>
          <v-btn type="submit">Add New Team Member</v-btn>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      newMemberName: '',
    };
  },
  computed: {
    devTeamMembers() {
      return this.$store.getters.devTeamMembers;
    },
  },
  methods: {
    addMember() {
      if (this.newMemberName) {
        this.$store.dispatch('addTeamMember', { name: this.newMemberName });
        this.newMemberName = '';
      }
    },
  },
};
</script>
