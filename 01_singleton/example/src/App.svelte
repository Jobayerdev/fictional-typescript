<script lang="ts">
	import { onMount } from "svelte"
	import { Logger } from "./logger"
	import Product from "./Product.svelte"

	onMount(() => {
		Logger.getInstance().setConfig({
			showLog: true,
		})
	})
</script>

<Product />

<style>
</style>
