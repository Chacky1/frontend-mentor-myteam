<script lang="ts">
	import ValueProposal from '$lib/components/ValueProposal.svelte';

	interface ValueProposal {
		imagePath: string;
		title: string;
		paragraph: string;
	}

	const valueProposals = [
		{
			imagePath: 'icon-person.svg',
			title: 'Experienced Individuals',
			paragraph:
				'Our network is made up of highly experienced professionals who are passionate about what they do.'
		},
		{
			imagePath: 'icon-cog.svg',
			title: 'Easy to Implement',
			paragraph:
				'Our processes have been refined over years of implementation meaning our teams always deliver.'
		},
		{
			imagePath: 'icon-chart.svg',
			title: 'Enhanced Productivity',
			paragraph:
				'Our customized platform with in-built analytics helps you manage your distributed teams.'
		}
	] as ValueProposal[];
</script>

<section class="flex flex-col gap-y-14" id="value-proposal">
	<svg
		class="absolute -right-[100px] top-0"
		xmlns="http://www.w3.org/2000/svg"
		width="200"
		height="244"
		><g fill="none" fill-rule="evenodd"
			><path fill="#2C6269" d="M100 144H0V44h100z" /><path
				fill="#014E56"
				d="M100 44c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 199.228 0 144 44.772 44 100 44zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
			/><path
				fill="#79C8C7"
				d="M100 184v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"
			/></g
		></svg
	>
	<div class="w-3/5 flex flex-col gap-y-8">
		<div id="rectangle" class="bg-error-500 w-[50px] h-[4px]"></div>
		<h2 class="title-mobile">Build & manage distributed teams like no one else.</h2>
	</div>
	<ul class="flex flex-col gap-y-12">
		{#each valueProposals as valueProposal}
			<li>
				<ValueProposal
					imagePath={valueProposal.imagePath}
					title={valueProposal.title}
					paragraph={valueProposal.paragraph}
				/>
			</li>
		{/each}
	</ul>
</section>
