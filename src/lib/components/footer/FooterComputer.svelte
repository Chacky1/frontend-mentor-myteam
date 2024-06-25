<script>
	import Contact from '$lib/components/footer/Contact.svelte';
	import FooterSocial from '$lib/components/footer/FooterSocial.svelte';
	import NavigationLink from '$lib/components/utils/NavigationLink.svelte';
</script>

<footer class="flex justify-between py-12 w-4/5 m-auto">
	<div class="flex flex-col justify-between">
		<div>
			<img src="logo.svg" alt="logo" width="96" height="24" />
		</div>
		<ul class="flex justify-center gap-x-6">
			<NavigationLink pageName="home" />
			<NavigationLink pageName="about" />
		</ul>
	</div>
	<div class="w-1/2">
		<Contact />
	</div>
	<div class="flex flex-col justify-between">
		<FooterSocial />
		<p class="text-sm opacity-60 text-center">Copyright 2020. All Rights Reserved</p>
	</div>
</footer>
