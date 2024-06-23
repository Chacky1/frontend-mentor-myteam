<script lang="ts">
	import '../app.postcss';
	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';

	import Navigation from '$lib/components/header/Navigation.svelte';

	initializeStores();
</script>

<Drawer>
	<Navigation />
</Drawer>
<slot />
