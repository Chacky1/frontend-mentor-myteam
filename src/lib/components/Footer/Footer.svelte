<script>
	import Contact from '$lib/components/Footer/Contact.svelte';
	import Copyright from '$lib/components/Footer/Copyright.svelte';
</script>

<footer class="py-16 px-6 flex flex-col gap-y-12">
	<div class="flex justify-center">
		<img src="logo.svg" alt="logo" width="96" height="24" />
	</div>
	<ul class="flex justify-center gap-x-6">
		<li><a class="text-1" href="/static">home</a></li>
		<li><a class="text-1" href="/about">about</a></li>
	</ul>
	<Contact />
	<Copyright />
</footer>
