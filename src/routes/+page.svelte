<script>
	import About from '../components/About.svelte';
	import Badge from '../components/Badge.svelte';
	import Button from '../components/Button.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import { projects } from '../utils';

	let fullTagList = [];

	projects.forEach((project) => {
		fullTagList = [...fullTagList, ...project.tagList];
	});
	fullTagList = [...new Set(fullTagList)];

	let selectedTagList = [];
	$: console.log(selectedTagList);

	$: filteredProjects = projects.filter(
		(project) => selectedTagList.length == 0 || arrInclusionCheck(selectedTagList, project.tagList)
	);

	const handleTagClick = (tag) => {
		if (selectedTagList.includes(tag)) {
			selectedTagList = selectedTagList.filter((el) => el != tag);
		} else {
			selectedTagList = [...selectedTagList, tag];
		}
	};

	// check if arr2 has all the elements of arr1
	const arrInclusionCheck = (arr1, arr2) => {
		for (let arr1El of arr1) {
			if (!arr2.includes(arr1El)) return false;
		}
		return true;
	};
</script>

<div class="text-4xl text-center p-2 line-around">About</div>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<About />

<div class="text-4xl text-center p-2 line-around">Projects</div>

<div class="flex flex-wrap justify-center">
	<Badge
		name="showAll"
		on:click={() => (selectedTagList = [])}
		isActive={selectedTagList.length == 0}
	/>
	{#each fullTagList as tag, i (tag)}
		<Badge
			name={tag}
			on:click={() => handleTagClick(tag)}
			isActive={selectedTagList.includes(tag)}
		/>
	{/each}
</div>
<div class="flex flex-wrap justify-center">
	{#each filteredProjects as project, i (project.name)}
		<ProjectCard {project} />
	{:else}
		<div class="text-4xl text-gray-400 py-6">
			No projects that share the selected tags, try different tags
		</div>
	{/each}
</div>
