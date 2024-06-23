<script lang="ts">
	import ContactFormLabel from '$lib/components/ContactFormLabel.svelte';
	import Button from '$lib/components/Button.svelte';

	interface Label {
		name: string;
		type: string;
		required: boolean;
	}

	const labels = [
		{
			name: 'Name',
			type: 'input',
			required: true
		},
		{
			name: 'Email Address',
			type: 'input',
			required: true
		},
		{
			name: 'Company Name',
			type: 'input',
			required: true
		},
		{
			name: 'Title',
			type: 'input',
			required: true
		},
		{
			name: 'Message',
			type: 'textarea',
			required: true
		}
	] as Label[];
</script>

<form class="flex flex-col gap-y-6">
	{#each labels as label}
		<ContactFormLabel {...label} />
	{/each}

	<Button text="submit" />
</form>
