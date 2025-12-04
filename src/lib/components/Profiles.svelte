<script>
    import Renderer from "./Renderer.svelte";
    import { profileSchema } from "$lib/schema";
    import { profileSnippet } from "./snippets.svelte";

    export let data = null;
</script>

{#if data}
    <div>
        <h2 class="category-title">🪪 Profiles</h2>
        {#each Object.entries(data) as [profile, profileData] (profile)}
            <div>
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
{/if}
