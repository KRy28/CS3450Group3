<!-- src/components/DateRangePicker.vue -->
<template>
    <div>
      <h1>Car Rental Date Range Picker</h1>
      <input type="date" v-model="startDate" @input="checkDates" />
      <input type="date" v-model="endDate" @input="checkDates" />
      <div v-if="startDate && endDate">
        <p>Start Date: {{ startDate }}</p>
        <p>End Date: {{ endDate }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import Vue from "vue";

  // import DatePicker from 'v-calendar/lib/components/date-picker.umd'
  // import 'v-calendar/lib/v-calendar.min.css'
  //import VCalendar from "v-calendar";
  
  Vue.use(VCalendar);
  
  export default {
    data() {
      return {
        startDate: "",
        endDate: "",
      };
    },
    methods: {
      checkDates() {
        if (this.startDate && this.endDate) {
          if (this.startDate > this.endDate) {
            alert("End date should be greater than or equal to start date.");
            this.endDate = "";
          } else {
            this.$emit("date-range-selected", {
              startDate: this.startDate,
              endDate: this.endDate,
            });
          }
        }
      },
    },
  };
  </script>
  