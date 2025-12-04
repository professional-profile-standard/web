<script>
    import { certificateSchema } from "$lib/schema";
    import { errorMessage } from "./snippets.svelte";
    import { certificateSnippet } from "./snippets.svelte";
    import Renderer from "./Renderer.svelte";
    const { data } = $props();
</script>

{#if data && data.length}
    <div>
        <h2 class="category-title">📃 Certificates</h2>
        <div class="space-y-4">
            {#each data as certificate}
                <Renderer
                    data={certificate}
                    message="Error while rendering certificate."
                    schema={certificateSchema}
                    snippet={certificateSnippet}
                />
            {/each}
        </div>
    </div>
{/if}
