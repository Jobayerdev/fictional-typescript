<script lang="ts">
	import { Logger } from "./logger"

	const addToCart = () => {
		Logger.getInstance().log("Attemt to Add Cart")
	}
</script>

<div class="container">
	<div class="card">
		<img
			src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
			alt=""
		/>
		<div class="card-body">
			<div class="row">
				<div class="card-title">
					<h4>Nike Sneaker</h4>
					<h3>$120</h3>
				</div>
				<div class="view-btn">
					<p>View Details</p>
				</div>
			</div>
			<hr />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
				dignissimos.
			</p>
			<div class="btn-group">
				<div class="btn">
					<button on:click={addToCart}>Buy Now</button>
				</div>
				<p>Cancel</p>
			</div>
		</div>
	</div>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");
	body {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: "Open Sans", sans-serif;
	}
	.container {
		width: 100%;
		height: 80vh;
		justify-content: center;
		align-items: center;
		display: flex;
	}
	.card {
		width: 300px;
		height: 440px;
		border-radius: 5px;
		box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
	}
	.card > *:not(img) {
		padding: 5px 10px;
	}
	.card img {
		width: 100%;
		height: 180px;
	}
	.card-body {
		padding: 5px;
	}
	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px;
	}
	.card-body p {
		color: #3d3d3d;
		margin-bottom: 20px;
		font-size: 14px;
	}
	.view-btn p {
		padding: 5px 15px;
		border: 1.5px solid #007bff;
		border-radius: 3px;
		text-decoration: none;
		color: #007bff;
	}
	.btn-group {
		display: flex;
	}
	.btn-group .btn button {
		padding: 5px 15px;
		background-color: #28a745;
		color: #fff;
		border-radius: 3px;
		margin-left: -2px;
	}
	.btn-group p {
		margin: 0 10px;
		text-decoration: none;
		color: #000;
	}
</style>
