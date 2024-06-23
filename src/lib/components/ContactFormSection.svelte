<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import ContactQuestion from '$lib/components/ContactQuestion.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';

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
<section id="contact" class="flex flex-col gap-y-10">
	<div>
		<h1 class="title-mobile text-center">Contact</h1>
		<h2 class="text-error-500 title-contact text-center">Ask us about</h2>
	</div>
	<ul class="flex flex-col gap-y-6">
		{#each contactQuestions as contactQuestion}
			<li><ContactQuestion {...contactQuestion} /></li>
		{/each}
	</ul>
	<div class="mb-10">
		<ContactForm />
	</div>
	<svg
		class="absolute -bottom-[112px] -right-[100px]"
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
