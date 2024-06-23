<script>
	import ContactFormSection from '$lib/components/contact-form/ContactFormSection.svelte';
	import FooterMobile from '$lib/components/footer/FooterMobile.svelte';
	import FooterTablet from '$lib/components/footer/FooterTablet.svelte';
</script>

<div class="bg-surface-500 relative overflow-hidden">
	<div class="px-6 py-12 flex flex-col gap-y-20">
		<ContactFormSection />
	</div>
</div>

<div class="md:hidden">
	<FooterMobile />
</div>
<div class="hidden md:block lg:hidden">
	<FooterTablet />
</div>
