<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn to="/" exact>Home</v-btn>
        <v-btn to="/team-members">Team Members</v-btn>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
