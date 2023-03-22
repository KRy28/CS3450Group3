<!-- src/components/DateRangePicker.vue -->
<!-- Define the template for the component -->
<template>
  <div class="date-range-picker">
    <h1>Car Rental Date Range Picker</h1>

    <v-date-picker
      mode="range"
      v-model="dateRange"
      :min-date="minDate"
      :attributes="attributes"
      @input="checkDates"
    ></v-date-picker>

    <div v-if="startDate && endDate" class="summary">
      <p>Start Date: {{ formattedStartDate }}</p>
      <p>End Date: {{ formattedEndDate }}</p>
      <p>Total Days: {{ totalDays }}</p>
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
    // Define the data properties of the component
    data() {
  return {
    dateRange: { start: null, end: null }, // Date range object for V-Calendar
    minDate: null, // Minimum date for the date picker
  };
},

    computed: {
    startDate() {
        return this.dateRange.start;
    },
    endDate() {
        return this.dateRange.end;
    },
      totalDays() {
        if (!this.startDate || !this.endDate) {
          return 0; // If either date is not set, return 0
        }
        // Calculate the total number of days between start and end dates
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        return (end - start) / (1000 * 60 * 60 * 24) + 1;
      },
    },
    mounted() {
  this.minDate = this.tomorrow(); // Set the minimum date to tomorrow
    },
    
    // Methods that can be called by the component
    methods: {
      formatDate(dateString) {
        // Split the dateString into its components
        const [year, month, day] = dateString.split("-");

        // Create a date object using the components (adjust month since it's 0-indexed)
        const date = new Date(year, month - 1, day);

        // Return the formatted date in MM-DD-YYYY format
        return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
      },

      tomorrow() {
        const today = new Date(); // Get today's date
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1); // Set the date to tomorrow

        // Return the date string in YYYY-MM-DD format
        return tomorrow.toISOString().split("T")[0];
      },
      checkDates() {
    if (this.startDate && this.endDate) {
      if (this.startDate > this.endDate) {
        alert("End date should be greater than or equal to start date.");
        this.dateRange = { start: this.startDate, end: null };
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

<style>
/* Main container for the date range picker */
.date-range-picker {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Style the title */
h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

/* Wrapper for each input field */
.input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

/* Style labels */
label {
    margin-bottom: 5px;
}

/* Style date input fields */
input[type="date"] {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
}

/* Style the summary section */
.summary {
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 20px;
}
</style>
  
  