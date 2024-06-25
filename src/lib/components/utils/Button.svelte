<script lang="ts">
	export let text: string;
	export let disabled: boolean;
	export let outlined: boolean;
	export let darkMode: boolean;
	export let hoverTextClass: string = '';
	export let hoverBgClass: string = '';
</script>

<button
	type="button"
	class="btn text-lg w-fit px-8 py-3 hover:{hoverTextClass} hover:{hoverBgClass}
	{outlined ? 'variant-ringed border-2' : 'variant-filled'}
	{disabled ? 'opacity-60 cursor-not-allowed' : ''}
	{darkMode ? 'border-surface-800' : ''}
"
>
	{text}
</button>
