<!-- src/views/CalendarView.vue -->
<template>
  <div id="app">
    <!-- <DateRangePicker class="centered" /> -->
    <DateRangePicker :car-id="carId" @date-range-selected="onDateRangeSelected" />

  </div>
</template>

<script>
import DateRangePicker from "../components/DateRangePicker.vue";

export default {
  data() {
    return {
      carId: '1', // Default ID
    };
  },
  components: {
    DateRangePicker,
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