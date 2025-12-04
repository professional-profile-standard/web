<script>
    import Renderer from "./Renderer.svelte";
    import { profileSchema } from "$lib/schema";
    import { profileSnippet } from "./snippets.svelte";

    export let data = null;
</script>

{#if data}
    <div>
        <h2 class="category-title">🪪 Profiles</h2>
        <div class="space-y-4">
            {#each Object.entries(data) as [profile, profileData] (profile)}
                <div class="bg-card p-2 rounded-lg">
                    <h3 class="category-title">🪪 {profile}</h3>
                    <div>
                        <Renderer
                            data={profileData}
                            message="Error while rendering profile."
                            schema={profileSchema}
                            snippet={profileSnippet}
                        />
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}
