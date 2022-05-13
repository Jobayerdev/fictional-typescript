<script lang="ts">
	import { LogisticsFactory } from './logistics'

	const roadLogistics = new LogisticsFactory().createLogistics('road')
	const airLogistics = new LogisticsFactory().createLogistics('air')
	const seaLogistics = new LogisticsFactory().createLogistics('sea')

	let weight = 0
</script>

<div class="container">
	<div class="input-group input-group-lg">
		<span class="input-group-text">Weight Kilo</span>
		<input bind:value={weight} type="text" class="form-control" />
	</div>
	<h4 class="mt-4">Logistics</h4>
	<ol class="list-group list-group-numbered ">
		<li
			class="list-group-item d-flex justify-content-between align-items-start"
		>
			<div class="ms-2 me-auto">
				<div class="fw-bold">Road Logistics</div>
			</div>
			<b>${roadLogistics.shippingCharge(weight)}</b>
		</li>
		<li
			class="list-group-item d-flex justify-content-between align-items-start"
		>
			<div class="ms-2 me-auto">
				<div class="fw-bold">Air Logistics</div>
			</div>
			<b>${airLogistics.shippingCharge(weight)}</b>
		</li>
		<li
			class="list-group-item d-flex justify-content-between align-items-start"
		>
			<div class="ms-2 me-auto">
				<div class="fw-bold">Sea Logistics</div>
			</div>
			<b>${seaLogistics.shippingCharge(weight)}</b>
		</li>
	</ol>
</div>
