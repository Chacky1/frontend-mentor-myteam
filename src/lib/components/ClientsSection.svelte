<script lang="ts">
	import ClientLogo from './ClientLogo.svelte';

	interface Client {
		name: string;
		logoPath: string;
	}

	export let clients = [
		{
			name: 'The Verge',
			logoPath: 'logo-the-verge.png'
		},
		{
			name: 'Jakarta Post',
			logoPath: 'logo-jakarta-post.png'
		},
		{
			name: 'The Guardian',
			logoPath: 'logo-the-guardian.png'
		},
		{
			name: 'Tech Radar',
			logoPath: 'logo-tech-radar.png'
		},
		{
			name: 'Gadgets Now',
			logoPath: 'logo-gadgets-now.png'
		}
	] as Client[];
</script>

<section id="clients" class="flex flex-col gap-y-16">
	<svg
		class="absolute -top-[100px] -left-[100px] md:left-0"
		xmlns="http://www.w3.org/2000/svg"
		width="200"
		height="200"
		><g fill="none" fill-rule="evenodd"
			><path fill="#2C6269" d="M100 100H0V0h100z" /><path
				fill="#014E56"
				d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
			/><path
				fill="#79C8C7"
				d="M100 140v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"
			/></g
		></svg
	>
	<h2 class="text-xl text-center">Some of our clients</h2>
	<ul class="flex flex-col items-center gap-y-12 md:flex-row md:justify-around">
		{#each clients as client}
			<li>
				<ClientLogo {...client} />
			</li>
		{/each}
	</ul>
</section>
