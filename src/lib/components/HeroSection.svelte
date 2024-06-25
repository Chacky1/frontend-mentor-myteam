<script>
	import Header from '$lib/components/header/Header.svelte';
</script>

<Header />
<section
	class="relative flex flex-col justify-center items-center gap-y-6 text-center pb-20 lg:flex-row lg:gap-x-8 lg:m-auto lg:pb-[250px] lg:text-start"
>
	<h1 class="text-3xl md:text-5xl lg:text-6xl lg:w-[635px]">
		Find the <br /> best <span class="text-error-500">talent</span>
	</h1>
	<div class="flex flex-col justify-between h-[200px]">
		<div class="hidden w-[50px] h-[4px] bg-success-500 lg:block"></div>
		<p class="text-lg md:w-[457px] lg:w-[445px]">
			Finding the right people and building high performing teams can be hard. Most companies aren’t
			tapping into the abundance of global talent. We’re about to change that.
		</p>
	</div>
	<svg
		class="absolute -bottom-12 lg:right-0"
		xmlns="http://www.w3.org/2000/svg"
		width="358"
		height="100"
		><g fill="none" fill-rule="evenodd"
			><circle cx="100" cy="100" r="100" fill="#2C6269" /><path
				fill="#012F34"
				d="M258 0c55.228 0 100 44.772 100 100s-44.772 100-100 100-100-44.772-100-100S202.772 0 258 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
			/><path fill="#79C8C7" d="M358 43h-43V0h43z" /><path
				fill="#F67E7E"
				d="M233.514 0c55.228 0 100 44.772 100 100s-44.772 100-100 100c-55.229 0-100-44.772-100-100s44.771-100 100-100zm0 67c-18.226 0-33 14.775-33 33s14.774 33 33 33c18.225 0 33-14.775 33-33s-14.775-33-33-33z"
			/><path
				fill="#79C8C7"
				d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"
			/></g
		></svg
	>
</section>
