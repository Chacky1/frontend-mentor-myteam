<script lang="ts">
	export let question: string;
	export let imagePath: string;
</script>

<div class="flex gap-x-6 items-center">
	<img class="w-[72px] h-[72px]" src={imagePath} alt={question} />
	<p class="text-lg">{question}</p>
</div>
