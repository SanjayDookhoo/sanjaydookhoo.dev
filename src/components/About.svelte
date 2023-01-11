<script>
	import code from '../assets/code.svg';
	import Button from './Button.svelte';
</script>

<div
	class="flex flex-col md:flex-row justify-center items-center py-4 bg-red-300 rounded-lg my-4 mx-2"
>
	<img class="h-32 w-32 m-4" src={code} alt="Code Logo" />
	<div class="p-2">
		<div class="text-4xl">Name: Sanjay Dookhoo</div>
		<div class="py-4">
			Hello, I am a young software developer from Trinidad and Tobago, I like to create beautiful
			and user-friendly user interfaces, I can build from web applications to mobile applications. I
			am currently open for work
		</div>
		<Button variant="primary" link={true} href="mailto:sanjaydookhoo@msn.com">Get In Touch</Button>
	</div>
</div>
