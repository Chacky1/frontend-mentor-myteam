<script lang="ts">
	import { page } from '$app/stores';

	const NAVIGATION_HOME_PATH = '/';
	const NAVIGATION_HOME_NAME = 'home';

	export let pageName: string;

	const isActive = (pageName: string) => {
		const currentPage = $page.url.pathname;
		return (
			currentPage === `/${pageName}` ||
			(currentPage === NAVIGATION_HOME_PATH && pageName === 'home')
		);
	};
</script>

{#if isActive(pageName)}
	<li>
		<a class="text-lg text-error-500" href="/{pageName === NAVIGATION_HOME_NAME ? '' : pageName}"
			>{pageName}</a
		>
	</li>
{:else}
	<li>
		<a
			class="text-lg hover:text-error-500"
			href="/{pageName === NAVIGATION_HOME_NAME ? '' : pageName}">{pageName}</a
		>
	</li>
{/if}
