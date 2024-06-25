<script lang="ts">
	import Testimonial from '$lib/components/Testimonial.svelte';

	interface Testimonial {
		quote: string;
		author: string;
		work: string;
		avatarPath: string;
	}

	const testimonials = [
		{
			quote:
				' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
			author: 'Kady Baker',
			work: 'Product Manager at Bookmark',
			avatarPath: 'avatar-kady.jpg'
		},
		{
			quote:
				'“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
			author: 'Aiysha Reese',
			work: 'Founder of Manage',
			avatarPath: 'avatar-aiysha.jpg'
		},
		{
			quote:
				'“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
			author: 'Arthur Clarke',
			work: 'Co-founder of MyPhysio',
			avatarPath: 'avatar-arthur.jpg'
		}
	] as Testimonial[];
</script>

<section id="testimonials" class="flex flex-col gap-y-14 md:w-[573px] md:m-auto lg:w-4/5">
	<svg class="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" width="147" height="100"
		><g fill="none" fill-rule="evenodd"
			><path fill="#002529" d="M0 100h100V0H0z" /><path
				fill="#79C8C7"
				d="M47 96v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47z"
			/></g
		></svg
	>
	<h2 class="text-xl text-center mt-[100px] lg:text-4xl">
		Delivering real results for top companies. Some of our <span class="text-success-500"
			>success stories.</span
		>
	</h2>
	<ul class="flex flex-col gap-y-12 mb-[100px] lg:flex-row lg:justify-center">
		{#each testimonials as testimonial}
			<li>
				<Testimonial
					quote={testimonial.quote}
					author={testimonial.author}
					work={testimonial.work}
					avatarPath={testimonial.avatarPath}
				/>
			</li>
		{/each}
	</ul>
	<svg class="absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" width="200" height="100"
		><g fill="none" fill-rule="evenodd"
			><path fill="#2C6269" d="M100 100h100V0H100z" /><path
				fill="#012F34"
				d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"
			/><path
				fill="#79C8C7"
				d="M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z"
			/></g
		></svg
	>
</section>
