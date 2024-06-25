<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import ContactQuestion from '$lib/components/ContactQuestion.svelte';
	import ContactForm from '$lib/components/contact-form/ContactForm.svelte';

	interface ContactQuestion {
		question: string;
		imagePath: string;
	}

	const contactQuestions = [
		{
			question: 'The quality of our talent network',
			imagePath: 'icon-person.svg'
		},
		{
			question: 'Usage & implementation of our software',
			imagePath: 'icon-cog.svg'
		},
		{
			question: 'How we help drive innovation',
			imagePath: 'icon-chart.svg'
		}
	] as ContactQuestion[];
</script>

<Header />
<section
	id="contact"
	class="flex flex-col gap-y-10 md:w-[515px] md:m-auto lg:flex-row lg:gap-x-8 lg:m-0 lg:w-full lg:justify-center"
>
	<svg
		class="hidden absolute -left-[100px] md:block"
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
	<div class="flex flex-col gap-y-10">
		<div class="flex flex-col gap-y-6">
			<h1 class="text-3xl text-center md:text-5xl lg:text-start">Contact</h1>
			<h2 class="text-error-500 title-contact text-center text-2xl lg:text-start">Ask us about</h2>
		</div>
		<ul class="flex flex-col gap-y-6">
			{#each contactQuestions as contactQuestion}
				<li><ContactQuestion {...contactQuestion} /></li>
			{/each}
		</ul>
	</div>
	<div class="mb-10 lg:min-w-[542px]">
		<ContactForm />
	</div>
	<svg
		class="absolute -bottom-[112px] -right-[100px] md:bottom-0"
		xmlns="http://www.w3.org/2000/svg"
		width="201"
		height="225"
		><g fill="none" fill-rule="evenodd"
			><path
				fill="#012F34"
				d="M.5 100.5C.5 45.272 45.272.5 100.5.5s100 44.772 100 100-44.772 100-100 100-100-44.772-100-100zm67 0c0 18.225 14.775 33 33 33s33-14.775 33-33-14.775-33-33-33-33 14.775-33 33z"
			/><path fill="#79C8C7" d="M43.5.5v43H.5V.5z" /><path
				fill="#F67E7E"
				d="M.5 124.986c0-55.228 44.772-100 100-100s100 44.772 100 100c0 55.229-44.772 100-100 100s-100-44.771-100-100zm67 0c0 18.226 14.775 33 33 33s33-14.774 33-33c0-18.225-14.775-33-33-33s-33 14.775-33 33z"
			/></g
		></svg
	>
</section>
