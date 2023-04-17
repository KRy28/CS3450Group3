<template>
    <main>
        <div style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif">    
            <center>
                <h1 v-if="user">Hello {{ user.username }}!</h1>
                <h2>Currently Rented Cars</h2>
                        <li style="list-style-type: none">
                            <div class="container" :style="{ backgroundColor: getColor(index), padding: '15px', borderRadius: '10px', margin: '10px' }">
                                <div>
                                    <p><strong>Coming Soon...</strong></p>
                                </div>
                                
                            </div>    
                        </li>
                <h2>Employees</h2>
                <li style="list-style-type: none">
                            <div class="container" :style="{ backgroundColor: getColor(index), padding: '15px', borderRadius: '10px', margin: '10px' }">
                                
                                    <button class="checkoutButton" @click="payEmployee">Pay Employees</button>
                            </div>    
                        </li>
                <h3>Balance: ${{ user.wallet.toLocaleString('en', {useGrouping:true}) }}</h3>
                <div class="form-group">
                    <label for="addFunds">Add funds: $</label>
                    <input type="number" id="addFunds">
                    <button @click="updateWallet(5)">+</button>
                </div>
            </center>
        </div>
    </main>
    

</template>

<script>
export default {
  data() {
  	return {
    }
	},

  computed: {
    user () {
      return this.$store.getters.getUser
    }
  },

  methods: {
    async updateWallet(amount) {
      console.log(this.$store.getters.getUser)
      try {
        const response = await fetch(`http://localhost:3000/addWallet/add/${amount}`, {
          method: "GET",
        });
        
        if (response.ok) {
          alert("Employees Paid successfully!");
        } else {
          const error = await response.json();
          alert(`Error: ${error.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while paying the employee.');
      }
  },

    
    getColor(index) {
      const colors = [
        // "#F0F0F0", // Light gray
        "#D6EAF8", // Light blue
        "#FCF3CF"  // Light yellow
      ];
      return colors[index % colors.length];
    },
    async payEmployee() {
      console.log(this.$store.getters.getUser)
      try {
        const response = await fetch(`http://localhost:3000/payment`, {
          method: "GET",
        });
        
        if (response.ok) {
          alert("Employees Paid successfully!");
        } else {
          const error = await response.json();
          alert(`Error: ${error.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while paying the employee.');
      }
  },
  }
};
</script>

<style>
  @media (min-width: 1024px) {
    /* .container {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 5px;
    } */

    .checkoutButton{
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: background-color 0.2s;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-decoration: none;
    }
    .checkoutButton:hover {
      background-color: #0069d9; /* darken background color on hover */
    }

    .carButton{
      width:100%;
      border:none;
      appearance:none;
      cursor:default;
      background-color: inherit;
    }

    .carButton:hover{
      background-color: lightgray;
    }

    .navigateButton{
      cursor: pointer;
      text-decoration: none;
      color:black;
    }
    .navigateButton:hover{
        color: gray;

    }
    .container {
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    

  }
  </style>

