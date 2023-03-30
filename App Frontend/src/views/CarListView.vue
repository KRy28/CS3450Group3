<script>
export default {
  data() {
  	return {
    	items: [
        { car: 'Reliant Robin',
          dates: '10/09/2001 - 10/11/2001',
          cost: 100,
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/1977_Reliant_Robin_850_%2814136529926%29_%28cropped%29.jpg'
        }, 
        { car: 'Batmobile',
          dates: '10/12/2001 - 10/13/2001',
          cost: 200,
          image: 'https://i.insider.com/620ef712462ff20019c59af9?width=700'
        }, 
        { car: 'Delorean',
          dates: '10/14/2001 - 10/15/2001',
          cost: 150,
          image: 'https://hagerty-media-prod.imgix.net/2021/12/BTTF-DeLorean-CATC-2021-Hagerty-Drivers-Foundation-01-scaled.jpg?auto=format%2Ccompress&ixlib=php-3.3.0'
        }, 
        { car: 'The Beast',
          dates: '10/16/2001 - 10/17/2001',
          cost: 100000,
          image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91dKQ+KFNEL._AC_UF894,1000_QL80_.jpg'
        }, 
        ],
      total:0
  	}
	},

  methods:{
    deleteEvent: function(index) {
      this.items.splice(index, 1);
    }
  },
  
}
</script>

<template>
    <div class="Cart" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
        <center>
            <h1>List of Cars</h1>    
            <p style="display:none">{{ total = 0 }}</p>
            <li v-for="(item, index) in items" style="list-style-type: none;">
              <RouterLink class="navigateButton" :to="`/details/${item.car}`">
                <div class="container">
                  <div class="image">
                    <img :src="item.image" style="height:100px">
                  </div>
                  <div class="text">
                    <p><strong>{{ item.car }}</strong></p>
                    <p>Cost: ${{ item.cost.toLocaleString('en', {useGrouping:true}) }}/Day</p>
                  </div>
                  
                </div>
                <p style="display: none;"> {{ total += item.cost }} </p>
            </RouterLink>
            </li>
        </center>
    </div>
  
  </template>

  
  <style>
  @media (min-width: 1024px) {
    .container {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 5px;
    }

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
        background-color: lightgray;
    }

    

  }
  </style>