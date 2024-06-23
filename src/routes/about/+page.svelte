<script>
	import AboutSection from '$lib/components/AboutSection.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import ActionSection from '$lib/components/ActionSection.svelte';
	import DirectorsSection from '$lib/components/DirectorsSection.svelte';
	import ClientsSection from '$lib/components/ClientsSection.svelte';
</script>

<div class="bg-surface-500 relative overflow-hidden">
	<div class="px-6 py-12 flex flex-col gap-y-20">
		<AboutSection />
	</div>
</div>

<div class="bg-surface-700 relative overflow-hidden">
	<div class="px-6 py-20 flex flex-col gap-y-20">
		<DirectorsSection />
	</div>
</div>

<div class="bg-surface-800 relative overflow-hidden">
	<div class="px-6 py-20 flex flex-col gap-y-20">
		<ClientsSection />
	</div>
</div>

<ActionSection />
<Footer />
