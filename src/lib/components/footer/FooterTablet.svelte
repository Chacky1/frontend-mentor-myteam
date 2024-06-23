<script>
	import Contact from '$lib/components/footer/Contact.svelte';
	import FooterSocial from '$lib/components/footer/FooterSocial.svelte';
</script>

<footer class="flex justify-between py-14 w-[689px] m-auto">
	<div class="flex flex-col justify-between">
		<div>
			<img src="logo.svg" alt="logo" width="96" height="24" />
		</div>
		<div class="flex flex-col gap-y-8">
			<ul class="flex justify-center gap-x-6">
				<li><a class="text-1" href="/">home</a></li>
				<li><a class="text-1" href="/about">about</a></li>
			</ul>
			<FooterSocial />
		</div>
	</div>
	<div class="text-end flex flex-col gap-y-8 justify-between">
		<Contact />
		<p class="text-2 opacity-60 text-center">Copyright 2020. All Rights Reserved</p>
	</div>
</footer>
