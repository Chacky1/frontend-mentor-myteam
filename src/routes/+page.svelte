<script>
	import FooterMobile from '$lib/components/footer/FooterMobile.svelte';
	import Hero from '$lib/components/HeroSection.svelte';
	import ValueProposalSection from '$lib/components/ValueProposalSection.svelte';
	import TestomialSection from '$lib/components/TestomialSection.svelte';
	import ActionSection from '$lib/components/ActionSection.svelte';
	import FooterTablet from '$lib/components/footer/FooterTablet.svelte';
	import FooterComputer from '$lib/components/footer/FooterComputer.svelte';
</script>

<div class="bg-surface-500 relative overflow-hidden">
	<svg
		class="hidden absolute -left-[100px] top-[calc(50%-100px)] lg:block"
		xmlns="http://www.w3.org/2000/svg"
		width="200"
		height="200"
		><g fill="none" fill-rule="evenodd"
			><path fill="#79C8C7" d="M100 200h100V100H100z" /><path
				fill="#012F34"
				d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"
			/><path
				fill="#F67E7E"
				d="M196 196v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z"
			/></g
		></svg
	>
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
<div class="hidden lg:block">
	<FooterComputer />
</div>
