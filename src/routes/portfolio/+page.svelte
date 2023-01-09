<script>
	import ProjectCard from '../../components/ProjectCard.svelte';

	let projects = [
		{
			imgSrc: 'https://simonsankar.github.io/img/messiops2.png',
			name: 'MessiOps',
			description: 'A web app dedicated to show the pure god tier brilliance of Lionel Messi.',
			tagList: ['reactjs', 'nextjs', 'strapi', 'antd', 'less'],
			view: 'http://www.google.com',
			source: '/'
		}
	];
</script>

portfolio

{#each projects as project, i (project.name)}
	<ProjectCard {project} />
{/each}
