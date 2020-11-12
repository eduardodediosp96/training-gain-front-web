<template>
  <v-container grid-list-md text-md-center fluid fill-height>
    <v-row>
      <v-col v-for="i in planDTO" :key="i" cols="6">
        <PlansCard :item="i" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import PlansCard from "../components/PlansCard.vue";

export default Vue.extend({
  name: "Plans",
  components: {
    PlansCard,
  },

  data() {
    return {
      planDTO: [
        {
          id: 0,
          description: "string",
          cost: 0,
        },
        {
          id: 0,
          description: "string",
          cost: 0,
        },
        {
          id: 0,
          description: "string",
          cost: 0,
        },
        {
          id: 0,
          description: "string",
          cost: 0,
        },
      ],
    };
  },
//   created() {
//   },
//   methods: {
//   },
});
</script>

<style lang="scss" scoped>
.row {
  padding-left: 20px;
}

.col {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
