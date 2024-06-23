<script>
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Button from '$lib/components/Button.svelte';

	const drawerStore = getDrawerStore();
</script>

<nav class="pr-9 pl-12 py-14 flex flex-col gap-y-14">
	<button class="self-end" on:click={() => drawerStore.close()}>
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
			<path
				fill="#FFF"
				fill-rule="evenodd"
				d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
			/>
		</svg>
	</button>
	<ul class="flex flex-col gap-y-14">
		<li><a class="text-1" href="/">home</a></li>
		<li><a class="text-1" href="/about">about</a></li>
		<li class="mt-2">
			<a href="/contact"><Button text="contact us" outlined /></a>
		</li>
	</ul>
	<svg
		class="absolute bottom-0 -right-[100px]"
		xmlns="http://www.w3.org/2000/svg"
		width="200"
		height="200"
		><g fill="none" fill-rule="evenodd"
			><path fill="#2C6269" d="M100 100H0V0h100z" /><path
				fill="#F67E7E"
				d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
			/><path
				fill="#79C8C7"
				d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"
			/></g
		></svg
	>
</nav>
