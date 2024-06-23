<script>
	import FooterMobile from '$lib/components/footer/FooterMobile.svelte';
	import Hero from '$lib/components/HeroSection.svelte';
	import ValueProposalSection from '$lib/components/ValueProposalSection.svelte';
	import TestomialSection from '$lib/components/TestomialSection.svelte';
	import ActionSection from '$lib/components/ActionSection.svelte';
	import FooterTablet from '$lib/components/footer/FooterTablet.svelte';
</script>

<div class="bg-surface-500">
	<div class="px-6 py-12 flex flex-col gap-y-20">
		<Hero />
	</div>
</div>

<div class="bg-surface-800 relative overflow-hidden">
	<div class="px-6 py-12 flex flex-col gap-y-20 md:py-[100px]">
		<ValueProposalSection />
	</div>
</div>

<div class="bg-surface-500 relative">
	<div class="px-6 py-12 flex flex-col gap-y-20">
		<TestomialSection />
	</div>
</div>

<ActionSection />
<div class="md:hidden">
	<FooterMobile />
</div>
<div class="hidden md:block lg:hidden">
	<FooterTablet />
</div>
