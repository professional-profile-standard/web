<script>
    import Renderer from "./Renderer.svelte";
    import { educationSchema } from "$lib/schema";
    import { educationSnippet, errorMessage } from "./snippets.svelte";
    const { data } = $props();
</script>

{#if data && data.length}
    <div>
        <h2 class="category-title">🎓 Educations</h2>
        <div class="space-y-4">
            {#each data as education, index (index)}
                <Renderer
                    data={education}
                    message="Error while rendering education."
                    schema={educationSchema}
                    snippet={educationSnippet}
                />
            {/each}
        </div>
    </div>
{/if}
