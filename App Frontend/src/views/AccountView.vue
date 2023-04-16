<template>
  <main>
    <div style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif">
      <center>
        <h1>Hello ______!</h1>
        <h3>Here are your reservations:</h3>
        <p>Coming soon...</p>
        <h3>Balance: $____</h3>
        <div class="form-group">
          <label for="addFunds">Add funds: $</label>
          <input type="number" id="addFunds">
          <button id="addFundsButton">+</button>
        </div>
      </center>
    </div>
  </main>
</template>

<style>
  @media (min-width: 1024px) {
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
        display: grid;
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

<script>
export default {
  mounted() {
    document.getElementById("addFundsButton").addEventListener("click", async () => {
      const amount = parseFloat(document.getElementById("addFunds").value);
      const userId = 1; // Hardcoded user ID for testing

      if (!isNaN(amount) && amount > 0) {
        try {
          const response = await fetch("/addWallet", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, amount }), // Pass the userId in the request body
          });

          if (response.ok) {
            const updatedBalance = await response.json();
            // Update the balance displayed on the page
            this.$el.querySelector("h3").textContent = `Balance: $${updatedBalance.balance}`;
          } else {
            // Handle error case
            const error = await response.json();
            alert(`Error: ${error.message}`);
          }
        } catch (error) {
        console.error('Error:', error, error.response);
        alert('An error occurred while adding funds.');
       }
      } else {
        alert("Please enter a valid amount to add.");
      }
    });
  },
};
</script>
