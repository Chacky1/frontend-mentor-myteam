<script lang="ts">
	import '../app.postcss';
	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';

	import Navigation from '$lib/components/Header/Navigation.svelte';

	initializeStores();
</script>

<Drawer>
	<Navigation />
</Drawer>
<slot />
