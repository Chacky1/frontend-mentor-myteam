<script>
	import Header from '$lib/components/header/Header.svelte';
</script>

<Header />
<section id="about" class="flex flex-col gap-y-4 lg:flex-row lg:w-4/5 lg:m-auto lg:gap-x-8">
	<h1 class="text-3xl text-center md:text-5xl">About</h1>
	<div
		class="flex flex-col gap-y-10 w-[327px] text-base text-center pb-20 m-auto md:w-[457px] lg:text-start lg:w-[730px]"
	>
		<div class="hidden w-[50px] h-[4px] bg-error-500 lg:block"></div>
		<p>
			We help companies build dynamic teams made up of top global talent. Using our network of
			passionate professionals we drive innovation and deliver incredible outcomes. Talented,
			diverse teams shape the best products and experiences. We’ll bring those teams to you.
		</p>
	</div>
	<svg
		class="absolute -bottom-[100px] -right-[100px] md:bottom-0"
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
</section>
