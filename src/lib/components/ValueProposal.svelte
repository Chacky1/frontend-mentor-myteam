<script>
	export let imagePath;
	export let title;
	export let paragraph;
</script>

<div class="text-center flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:text-start">
	<img class="m-auto" src={imagePath} alt={title} />
	<div class="flex flex-col gap-y-4">
		<p class="text-error-500 text-lg">{title}</p>
		<p class="text-base">{paragraph}</p>
	</div>
</div>
