<script>
	export let imagePath;
	export let title;
	export let paragraph;
</script>

<div class="text-center flex flex-col gap-y-4">
	<img class="m-auto" src={imagePath} alt={title} />
	<div>
		<p class="text-error-500 text-1">{title}</p>
		<p class="text-3">{paragraph}</p>
	</div>
</div>
