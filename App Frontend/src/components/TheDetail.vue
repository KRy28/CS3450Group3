<script setup>

</script>
<style scoped>
.detailbody {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}
.detail-item:nth-child(2n-1) {
  width: 250px;
  color: orange;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 30px;
  border: 5px;
  background-color: lightblue;
  border-color: blue;
}
#rental-button {
  width: 200px;
  height: 75px;
}
.detail-item {
  margin: 30px;
  height: 100vh;
}
</style>
<template>
	<div class="detailbody">
		<div class="detail-item">
			<img src="">
		<h3>A Broken down Lemon (lorem)?</h3>
			<p>20000 BHE Lorem ipsum dolor.</p>
		</div>
		<div class="detail-item">	
			<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="detail-item">
			<h3>Currently Available</h3>
			<p>1M/H + gas</p>
			<form>
				<input type="button" value="rent" name="rent" id="rental-button"/>
			</form>
		</div>
	</div>
</template>
