<script>
    import Skills from "./Skills.svelte";
    import WorkExperience from "./WorkExperience.svelte";
    import Projects from "./Projects.svelte";

    export let data = null;
</script>

{#if data}
    <div>
        <h2 class="category-title">🪪 Profiles</h2>
        {#each Object.entries(data) as [profile, profileData] (profile)}
            <div class="bg-gray-800 p-2 rounded-lg">
                <h3 class="category-title">🪪 {profile}</h3>
                <div class="space-y-10">
                    {@render ProfessionalSummary(
                        profileData.professional_summary,
                    )}
                    <Skills data={profileData.skills} />
                    <WorkExperience data={profileData.work_experience} />
                    <Projects data={profileData.projects} />
                    <!-- cert -->
                    <!-- misc -->
                </div>
            </div>
        {/each}
    </div>
{/if}

{#snippet ProfessionalSummary(professional_summary)}
    <div>
        <h4 class="font-medium text-xl mb-2">
            {professional_summary?.title}
        </h4>
        <p>{professional_summary?.summary}</p>
    </div>
{/snippet}
