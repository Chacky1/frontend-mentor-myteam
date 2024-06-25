<script lang="ts">
	import DirectorCard from './DirectorCard.svelte';

	interface Director {
		avatarPath: string;
		name: string;
		role: string;
		quote: string;
	}

	const directors = [
		{
			avatarPath: 'avatar-nikita.jpg',
			name: 'Nikita Marks',
			role: 'Founder & CEO',
			quote:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
		},
		{
			avatarPath: 'avatar-christian.jpg',
			name: 'Christian Duncan',
			role: 'Co-founder & COO',
			quote:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
		},
		{
			avatarPath: 'avatar-cruz.jpg',
			name: 'Cruz Hamer',
			role: 'Co-founder & CTO',
			quote:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
		},
		{
			avatarPath: 'avatar-drake.jpg',
			name: 'Drake Heaton',
			role: 'Business Development Lead',
			quote:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
		},
		{
			avatarPath: 'avatar-griffin.jpg',
			name: 'Griffin Wise',
			role: 'Lead Marketing',
			quote:
				'“Unique perspectives shape unique products, which is what you need to survive these days.”'
		},
		{
			avatarPath: 'avatar-aden.jpg',
			name: 'Aden Allan',
			role: 'Lead Developer',
			quote:
				'“Empowered teams create truly amazing products. Set the north star and let them follow it.”'
		}
	] as Director[];
</script>

<section class="flex flex-col gap-y-10 text-center lg:w-4/5 lg:m-auto">
	<svg
		class="absolute -top-[100px] -left-[100px] md:top-0"
		xmlns="http://www.w3.org/2000/svg"
		width="200"
		height="200"
		><g fill="none" fill-rule="evenodd"
			><path fill="#2C6269" d="M100 100h100V0H100z" /><path
				fill="#012F34"
				d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"
			/><path
				fill="#79C8C7"
				d="M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z"
			/><path
				fill="#F67E7E"
				d="M196 140v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z"
			/></g
		></svg
	>
	<h2 class="text-center text-xl lg:text-4xl">Meet the Directors</h2>
	<ul class="flex justify-center flex-wrap gap-x-3 gap-y-16 mb-10">
		{#each directors as director}
			<li><DirectorCard {...director} /></li>
		{/each}
	</ul>
	<svg class="absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" width="147" height="100"
		><g fill="none" fill-rule="evenodd"
			><path fill="#002529" d="M0 100h100V0H0z" /><path
				fill="#79C8C7"
				d="M47 96v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47z"
			/></g
		></svg
	>
</section>
