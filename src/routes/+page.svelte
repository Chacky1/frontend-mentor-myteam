<script>
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Hero from '$lib/components/HeroSection.svelte';
	import ValueProposalSection from '$lib/components/ValueProposalSection.svelte';
	import TestomialSection from '$lib/components/TestomialSection.svelte';
	import ActionSection from '$lib/components/ActionSection.svelte';
</script>

<div class="bg-surface-500">
	<div class="px-6 py-12 flex flex-col gap-y-20">
		<Hero />
	</div>
</div>

<div class="bg-surface-800 relative overflow-hidden">
	<div class="px-6 py-12 flex flex-col gap-y-20">
		<ValueProposalSection />
	</div>
</div>

<div class="bg-surface-500 relative">
	<div class="px-6 py-12 flex flex-col gap-y-20">
		<TestomialSection />
	</div>
</div>

<ActionSection />
<Footer />
