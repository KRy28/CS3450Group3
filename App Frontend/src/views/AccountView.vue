<template>
    <main>
        <center>
            <h1>Hello {{ this.user.firstName }}!</h1>
            <h3>Here are your reseravations:</h3>
            <p>Coming soon...</p>
            <h3>Balance: ${{ this.user.wallet.toLocaleString('en', {useGrouping:true}) }}</h3>
            <div class="form-group">
                <label for="addFunds">Add funds: $</label>
                <input type="number" id="addFunds">
                <button>+</button>
            </div>
        </center>
    </main>
    

</template>

<script>
    export default {
    data() {
        return {
        json: undefined,
        user: undefined
        }
    },

    async created(){
        await this.fetch_info();
        await this.findUser();
    },

    methods: {
       fetch_info() {
        // Fetch the car data from the JSON API
        return fetch("http://localhost:3000/users/json")
            .then(r => r.json())
            .then(json => {
            // Set the json data to the component's data
            this.json = json
            console.log(json)
            })
            .catch(error => {
            console.log(error);
            })
        },
        findUser(){
            var found = false;
            var i = 0;
            while (found == false && i < this.json.length){
                if (this.json[i].id == document.cookie){
                    found = true;
                    this.user = this.json[i];
                    break;
                }
                i++;
            }
            console.log(i);

        }
    }
    
    }
</script>