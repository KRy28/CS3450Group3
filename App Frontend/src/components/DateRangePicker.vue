<!-- src/components/DateRangePicker.vue -->
<!-- Define the template for the component -->
<template>
  <div class="date-range-picker">
    <h1>Car Rental Date Range Picker</h1>
    <!-- Input field for the start date, bound to the startDate property and with a minimum date of minDate -->
    <div class="input-wrapper">
      <label for="start-date">Start Date:</label>
      <input id="start-date" type="date" v-model="startDate" :min="minDate" @input="checkDates" />
    </div>
    <!-- Input field for the end date, bound to the endDate property and with a minimum date of either startDate or minDate -->
    <div class="input-wrapper">
      <label for="end-date">End Date:</label>
      <input id="end-date" type="date" v-model="endDate" :min="startDate || minDate" @input="checkDates" />
    </div>
    <!-- Display a summary of the selected dates if both start and end dates are selected -->
    <div v-if="startDate && endDate" class="summary">
      <p>Start Date: {{ formattedStartDate }}</p>
      <p>End Date: {{ formattedEndDate }}</p>
      <p>Total Days: {{ totalDays }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // Define the data properties of the component
  data() {
    return {
      startDate: "", // Start date input value
      endDate: "", // End date input value
      minDate: "", // Minimum date for the date picker
    };
  },
  
  // Called when the component is mounted to the DOM
  mounted() {
    this.minDate = this.tomorrow(); // Set the minimum date to tomorrow
  },
  
  // Computed properties that are calculated based on other data properties
  computed: {
    formattedStartDate() {
      return this.formatDate(this.startDate); // Format the start date
    },
    formattedEndDate() {
      return this.formatDate(this.endDate); // Format the end date
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
          // Show an alert if the end date is earlier than the start date
          alert("End date should be greater than or equal to start date.");
          this.endDate = "";
        } else {
          // Emit an event to notify the parent component that a valid date range is selected
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

<style scoped>
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
