<script>
	import code from '../assets/code.svg';
	import Button from './Button.svelte';
</script>

<div class="flex justify-center items-center py-4">
	<img class="h-32 w-32 m-4" src={code} />
	<div>
		<div class="text-4xl">I'm Sanjay Dookhoo</div>
		<div class="py-4">
			Hello, I am a young software developer from Trinidad and Tobago, I like to create beautiful
			and user-friendly user interfaces, I can build from web applications to mobile applications.
			I'm currently open for work
		</div>
		<Button variant="primary" link={true} href="mailto:sanjaydookhoo@msn.com">Get In Touch</Button>
	</div>
</div>
