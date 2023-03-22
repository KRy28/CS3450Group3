<!-- src/views/CalendarView.vue -->
<template>
  <div id="app">
    <DateRangePicker class="centered" />
  </div>
</template>

<script>
import DateRangePicker from "../components/DateRangePicker.vue";

export default {
  components: {
    DateRangePicker,
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