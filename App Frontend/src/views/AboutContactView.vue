<template>
  <div class="car-rental">
    <header>
      <h1>Dans Car Barn</h1>
    </header>
    <section class="intro">
      <p>
        Welcome to Dans Car Barn, your ultimate car rental solution! With a wide selection of cars, ranging from economy to luxury, 
        we cater to the needs of all our customers. Our exceptional customer service, competitive pricing, and well-maintained 
        vehicles make us the go-to choice for your car rental needs. We pride ourselves on providing a hassle-free rental experience, 
        ensuring that you can focus on enjoying your trip. Choose Dans Car Barn for a reliable and memorable car rental experience!
      </p>
    </section>

    <section class="featured-cars">
      <h2>Featured Cars</h2>
      <ul>
        <li v-for="car in cars" :key="car.id">
          {{ car.name }} - {{ car.pricePerDay }} per day
        </li>
      </ul>
    </section>

    <footer>
      <h2>Contact Information</h2>
      <p>
        Address: 123 Main St, Logan, USA<br>
        Phone: (801) 123-4567<br>
        Email: info@danscarbarn.com
      </p>
    </footer>
  </div>
</template>

<script>

export default {

  
  data() {
    return {
      cars: [
        { id: 1, name: "Toyota Corolla", pricePerDay: "$30" },
        { id: 2, name: "Honda Civic", pricePerDay: "$35" },
        { id: 3, name: "Ford Mustang", pricePerDay: "$50" },
      ],
    };
  },
};

</script>

<style scoped>
.car-rental {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 2rem;
}

header {
  width: 100%;
  background-color: #333;
  padding: 1.5rem;
}

header h1 {
  font-size: 2rem;
  color: #fff;
  margin: 0;
}

.intro, .featured-cars, footer {
  background-color: #fff;
  width: 100%;
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

h2 {
  font-size: 1.5rem;
  margin-top: 0;
  color: #555;
}

.intro p, footer p {
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

footer {
  background-color: #f5f5f5;
}
</style>
