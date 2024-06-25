<script>
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Button from '$lib/components/utils/Button.svelte';
	import NavigationLink from '$lib/components/utils/NavigationLink.svelte';

	const drawerStore = getDrawerStore();
</script>

<nav
	class="pr-9 pl-12 py-14 flex flex-col gap-y-14 md:flex-row md:w-full md:items-center md:pr-0 md:py-0"
>
	<button class="self-end md:hidden" on:click={() => drawerStore.close()}>
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
			<path
				fill="#FFF"
				fill-rule="evenodd"
				d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
			/>
		</svg>
	</button>
	<ul class="flex flex-col gap-y-14 md:flex-row md:w-full md:gap-x-10">
		<NavigationLink pageName="home" />
		<NavigationLink pageName="about" />
	</ul>
	<a class="mt-2 md:mt-0" href="/contact"
		><Button
			text="contact us"
			hoverBgClass="bg-white"
			hoverTextClass="text-surface-900"
			outlined
		/></a
	>
	<svg
		class="absolute bottom-0 -right-[100px] md:hidden"
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
