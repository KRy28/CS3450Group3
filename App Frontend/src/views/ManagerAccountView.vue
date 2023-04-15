<template>
    <main>
        <div style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif">    
            <center>
                <h1>Hello (Manager)!</h1>
                <h2>Currently Rented Cars</h2>
                    <ul style="list-style-type: none;">
                        <li class="container"
                :style="{ backgroundColor: getColor(index), padding: '15px'}">
                            <ul style="list-style-type: none;">
                                <li>
                                    <p><strong>(Car)</strong></p>
                                </li>
                                <li>
                                    <p>Insurance purchased: (yes/no) <button>Breakdown Car (if no Insurance)</button></p>
                                </li>

                            </ul>

                        </li>
                    </ul>
                <h2>Employees</h2>
                <ul style="list-style-type: none;">
                        <li class="container"
                :style="{ backgroundColor: getColor(index), padding: '15px'}">
                            <ul style="list-style-type: none;">
                                <li>
                                    <p><strong>(Employee)</strong></p>
                                </li>
                                <li>
                                    <label for="addFunds">Pay: $</label>
                    <input type="number" id="addFunds">
                    <button>+</button>
                                </li>

                            </ul>

                        </li>
                    </ul>
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
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s;
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-decoration: none;
      margin: 100px;
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

