<template>
  <div class="car-rental">
    <h1>Car Rental</h1>
    <div class="selected-car">
      <h2>Selected Car</h2>
      <p>Make: Tesla</p>
      <p>Model: Model 3</p>
      <p>Year: 2020</p>
      <p>Price: $100/day</p>
    </div>
    <div class="date-selection">
      <h2>Select Rental Dates</h2>
      <v-date-picker
        mode="range"
        v-model="dates"
        :attributes="attributes"
        is-expanded
        is-required
      ></v-date-picker>
    </div>
    <button @click="bookCar">Book Car</button>
  </div>
</template>

<script>
import 'v-calendar/lib/v-calendar.min.css';
import VCalendar from 'v-calendar';

export default {
  name: 'CarRental',
  components: {
    VCalendar,
  },
  data() {
    return {
      dates: {
        start: null,
        end: null,
      },
      attributes: [
        {
          key: 'disabled',
          highlight: true,
          dates: new Date(),
          isDateDisabled: (date) => date < new Date(),
        },
      ],
    };
  },
  methods: {
    bookCar() {
      if (this.dates.start && this.dates.end) {
        alert(`Booking car from ${this.dates.start} to ${this.dates.end}`);
      } else {
        alert('Please select rental dates.');
      }
    },
  },
};
</script>

<style scoped>
.car-rental {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selected-car {
  margin-bottom: 30px;
}

.date-selection {
  margin-bottom: 30px;
}
</style>
