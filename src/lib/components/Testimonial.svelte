<script>
	export let quote;
	export let author;
	export let work;
	export let avatarPath;
</script>

<div class="flex flex-col gap-y-4 text-center lg:w-[350px]">
	<div class="flex justify-center relative top-10">
		<svg class="p-auto" xmlns="http://www.w3.org/2000/svg" width="67" height="56"
			><path
				fill="#2C6269"
				d="M51.273 56c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C63.976 7.782 65.286 4.069 67 0H55.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C36.857 31.23 36 35.4 36 39.063c0 5.391 1.361 9.562 4.083 12.512C42.805 54.525 46.535 56 51.273 56zm-36 0c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C27.976 7.782 29.286 4.069 31 0H19.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C.857 31.23 0 35.4 0 39.063c0 5.391 1.361 9.562 4.083 12.512C6.805 54.525 10.535 56 15.273 56z"
			/></svg
		>
	</div>
	<p class="text-sm z-10">{quote}</p>
	<div>
		<p class="text-lg text-success-500">{author}</p>
		<p class="text-xs italic">{work}</p>
	</div>
	<img
		class="rounded-full border-success-300 border-2 m-auto"
		src={avatarPath}
		alt={author}
		width="62"
		height="62"
	/>
</div>
