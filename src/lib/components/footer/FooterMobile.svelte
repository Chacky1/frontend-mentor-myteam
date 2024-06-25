<script>
	import Contact from '$lib/components/footer/Contact.svelte';
	import FooterSocial from '$lib/components/footer/FooterSocial.svelte';
</script>

<footer class="py-16 px-6 flex flex-col gap-y-12">
	<div class="flex justify-center">
		<img src="logo.svg" alt="logo" width="96" height="24" />
	</div>
	<ul class="flex justify-center gap-x-6">
		<li><a class="text-lg" href="/">home</a></li>
		<li><a class="text-lg" href="/about">about</a></li>
	</ul>
	<Contact />
	<FooterSocial />
	<p class="text-sm opacity-60 text-center">Copyright 2020. All Rights Reserved</p>
</footer>
