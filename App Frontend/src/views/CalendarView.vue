<template>
  <div id="app">
    <DateRangePicker :car-id="carId" @date-range-selected="onDateRangeSelected" />
  </div>
</template>

<script>
import DateRangePicker from "../components/DateRangePicker.vue";

export default {
  data() {
    return {
      carId: '',
    };
  },
  components: {
    DateRangePicker,
  },
  created() {
    // this.carId = this.$route.params.carId;
    this.carId = this.$route.params.id;
  },
  methods: {
    onDateRangeSelected(range) {
      console.log(range);
    },
  },
};

</script>

<style>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
