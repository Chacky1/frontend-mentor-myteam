<script lang="ts">
	export let name: string;
	export let type: string;
	export let required: boolean;

	let isFocused = false;
	let isNotCompleted = false;

	const handleFocus = () => {
		isFocused = true;
	};

	const handleBlur = (event) => {
		const { value } = event.target;

		isFocused = false;
		if (value === '') {
			isNotCompleted = true;
		} else {
			isNotCompleted = false;
		}
	};
</script>

{#if type === 'input'}
	<label class="label">
		<span class="text-2 opacity-60">{name}</span>
		<input
			class="input variant-form-material border-b outline-none
				{isFocused ? '!border-b-success-500' : isNotCompleted ? '!border-b-error-500' : '!border-b-white'}
			"
			type="text"
			{name}
			{required}
			on:focus={handleFocus}
			on:blur={handleBlur}
		/>
	</label>
{:else if type === 'textarea'}
	<label class="label">
		<span class="text-2 opacity-60">{name}</span>
		<textarea
			class="textarea variant-form-material border-b outline-none
				{isFocused ? '!border-b-success-500' : isNotCompleted ? '!border-b-error-500' : '!border-b-white'}
			"
			rows="3"
			{name}
			{required}
			on:focus={handleFocus}
			on:blur={handleBlur}
		/>
	</label>
{/if}
