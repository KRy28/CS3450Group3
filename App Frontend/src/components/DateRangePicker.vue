<!-- src/components/DateRangePicker.vue -->


<template>
  <div class="date-range-picker">
    <h1>Car Rental Date Range Picker</h1>
    <div class="input-wrapper">
      <label for="start-date">Start Date:</label>
      <input id="start-date" type="date" v-model="startDate" :min="minDate" @input="checkDates" />
    </div>
    <div class="input-wrapper">
      <label for="end-date">End Date:</label>
      <input id="end-date" type="date" v-model="endDate" :min="startDate || minDate" @input="checkDates" />
    </div>
    <div v-if="startDate && endDate" class="summary">
      <p>Start Date: {{ formattedStartDate }}</p>
      <p>End Date: {{ formattedEndDate }}</p>
      <p>Total Days: {{ totalDays }}</p>
    </div>
    <button @click="submitReservation">Submit Reservation</button>
  </div>
</template>

<script>
//import { useRouter } from "vue-router";
import { useRouter, useRoute } from "vue-router";

export default {
  props: {
    carId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      minDate: "",
    };
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    return {
      router,
      route,
    };
  },

  mounted() {
    this.minDate = this.tomorrow();
  },

  computed: {
    formattedStartDate() {
      return this.formatDate(this.startDate);
    },
    formattedEndDate() {
      return this.formatDate(this.endDate);
    },
    totalDays() {
      if (!this.startDate || !this.endDate) {
        return 0;
      }
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      return (end - start) / (1000 * 60 * 60 * 24) + 1;
    },
  },

  methods: {
    formatDate(dateString) {
      const [year, month, day] = dateString.split("-");
      const date = new Date(year, month - 1, day);
      return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
    },

    tomorrow() {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split("T")[0];
    },

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
    submitReservation() {
      console.log("submitReservation called in DateRangePicker");
      if (this.startDate && this.endDate) {
        // this.router.push(
        //   `/rental-confirmation/${this.carId}/${this.startDate}/${this.endDate}`
        // );
        this.router.push(`/rental-confirmation/${this.route.params.carId}/${this.startDate}/${this.endDate}`);
      } else {
        alert("Please select a valid date range.");
      }
},

    // submitReservation() {
    //   console.log("submitReservation called in DateRangePicker");
    //   if (this.startDate && this.endDate) {
    //     this.$emit("reservation-submitted", {
    //       carId: this.carId,
    //       startDate: this.startDate,
    //       endDate: this.endDate,
    //     });
    //   } else {
    //     alert("Please select a valid date range.");
    //   }
    // },
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
