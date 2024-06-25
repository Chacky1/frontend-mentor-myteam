<script lang="ts">
	export let name: string;
	export let type: string;
	export let required: boolean;

	let isFocused = false;
	let isNotCompleted = false;

	const handleFocus = () => {
		isFocused = true;
		isNotCompleted = false;
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
	<label class="label hover:cursor-pointer">
		<span class="text-sm opacity-60 {isNotCompleted ? 'text-error-500' : ''}">{name}</span>
		<input
			class="input variant-form-material border-b outline-none hover:cursor-pointer
				{isFocused ? '!border-b-success-500' : isNotCompleted ? '!border-b-error-500' : '!border-b-white'}
			"
			type="text"
			{name}
			{required}
			on:focus={handleFocus}
			on:blur={handleBlur}
		/>
		{#if isNotCompleted}
			<p class="text-xs text-error-500">This field is required</p>
		{/if}
	</label>
{:else if type === 'textarea'}
	<label class="label hover:cursor-pointer">
		<span class="text-sm opacity-60 {isNotCompleted ? 'text-error-500' : ''}">{name}</span>
		<textarea
			class="textarea variant-form-material border-b outline-none hover:cursor-pointer
				{isFocused ? '!border-b-success-500' : isNotCompleted ? '!border-b-error-500' : '!border-b-white'}
			"
			rows="3"
			{name}
			{required}
			on:focus={handleFocus}
			on:blur={handleBlur}
		/>
		{#if isNotCompleted}
			<p class="text-xs text-error-500">This field is required</p>
		{/if}
	</label>
{/if}
