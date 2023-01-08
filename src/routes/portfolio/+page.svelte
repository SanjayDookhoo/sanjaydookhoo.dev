<script>
	import ProjectCard from '../../components/ProjectCard.svelte';

	let projects = [
		{
			name: 'name',
			description: 'desct',
			tagList: ['software', 'react'],
			view: 'google.com',
			source: 'google.com'
		}
	];
</script>

portfolio

{#each projects as project, i (project.name)}
	<ProjectCard {project} />
{/each}
