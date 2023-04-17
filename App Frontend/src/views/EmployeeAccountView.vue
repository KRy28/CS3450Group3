<template>
    <main>
        <div style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif">    
            <center>
                <h1>Hello (Employee)!</h1>
                <p>Current Hourly Rate: $___</p>
                <h2>Currently Rented Cars</h2>
                        <li style="list-style-type: none">
                            <div class="container" :style="{ backgroundColor: getColor(index), padding: '15px', borderRadius: '10px', margin: '10px' }">
                                <div>
                                    <p><strong>(Car)</strong></p>
                                </div>
                                <div>
                                    <p>Insurance purchased: (yes/no) </p><button class="checkoutButton">Breakdown Car (if no Insurance)</button>
                                </div>
                            </div>    
                        </li>
                <h3>Hours Worked: _____</h3>
                <div class="form-group">
                    <label for="addFunds">Input Hours Worked: </label>
                    <input type="number" id="addFunds">
                    <button>+</button>
                </div>
                <h3>Balance: $____</h3>
                <div class="form-group">
                    <label for="addFunds">Add funds: $</label>
                    <input type="number" id="addFunds">
                    <button>+</button>
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

  methods: {
    
    getColor(index) {
      const colors = [
        // "#F0F0F0", // Light gray
        "#D6EAF8", // Light blue
        "#FCF3CF"  // Light yellow
      ];
      return colors[index % colors.length];
    }
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

