<script>
	import '../app.css';
	import About from '../components/About.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="text-gray-700 tracking-wide container max-w-screen-lg mx-auto">
	<Header />
	<About />
	<slot />
	<Footer />
</div>
