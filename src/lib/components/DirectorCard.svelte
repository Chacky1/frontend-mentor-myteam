<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let avatarPath: string;
	export let name: string;
	export let role: string;
	export let quote: string;

	let isCardFlipped = false;
</script>

<div class="h-[253px] w-[281px] relative">
	{#if !isCardFlipped}
		<div class="flex flex-col gap-y-4 items-center bg-surface-800 pt-8 px-6 h-full">
			<Avatar
				src={avatarPath}
				rounded="rounded-full"
				width="w-[96px]"
				border="border-success-300 border-2"
			/>
			<div class="flex flex-col">
				<p class="text-1 text-success-500">{name}</p>
				<p class="text-2 italic">{role}</p>
			</div>
			<button
				class="rounded-full bg-error-500 w-fit p-5 absolute -bottom-7"
				on:click={() => (isCardFlipped = true)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
					><path
						fill="#012F34"
						fill-rule="evenodd"
						d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
					/></svg
				>
			</button>
		</div>
	{:else}
		<div class="flex flex-col gap-y-4 items-center bg-surface-800 pt-8 px-6 h-full">
			<p class="text-1 text-success-500">{name}</p>
			<p class="text-2">{quote}</p>
			<div class="flex gap-x-5">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"
					><path
						fill="#FFF"
						d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
					/></svg
				>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
					><path
						fill="#FFF"
						d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
					/></svg
				>
			</div>
			<button
				class="rounded-full bg-success-500 w-fit p-5 absolute -bottom-7"
				on:click={() => (isCardFlipped = false)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17"
					><path
						fill="#012F34"
						fill-rule="evenodd"
						d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
					/></svg
				>
			</button>
		</div>
	{/if}
</div>
