<script>
	import logo from '../assets/logo2.png';
	import github from '../assets/github.svg';
	import linkedin from '../assets/linkedin.svg';

	const imgClass = 'w-8 h-8 mr-4 social-media';
</script>

<div class="flex justify-between w-full">
	<a href="/"><img class="h-12 w-64 mt-2" src={logo} alt="Website Logo" /></a>
	<!-- <div class="flex items-center">
		<div>Home</div>
		<div>Portfolio</div>
	</div> -->
	<div class="flex items-center">
		<a href="https://github.com/SanjayDookhoo"
			><img class={imgClass} src={github} alt="Github Logo" /></a
		>
		<a href="https://linkedin.com/in/sanjay-dookhoo/"
			><img class={imgClass} src={linkedin} alt="Linkedin Logo" /></a
		>
	</div>
</div>
