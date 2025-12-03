<script>
    import { linkSchema } from "$lib/schema";
    import { errorMessage } from "./PPS.svelte";
    const { data } = $props();
    const message = "Error while rendering links";
    let links = $state([]);
    let error = $state(null);
    let renderError = $state(null);

    function validate() {
        const validated = [];
        try {
            for (let link of data) {
                validated.push(linkSchema.validateSync(link));
            }
            links = validated;
            error = null;
            renderError = null;
        } catch (e) {
            error = e;
        }
    }

    $effect(() => {
        validate();
    });

    function onerror(e, r) {
        renderError = e;
    }
</script>

{#if error}
    {@render errorMessage(message, error)}
{:else if renderError}
    {@render errorMessage(message, renderError)}
{:else}
    <svelte:boundary>
        {#if links}
            <div>
                <h2 class="category-title">🔗 Links</h2>
                <ul class="space-y-2">
                    {#each links as link}
                        <li>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.url_text || link.name || link.url}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </svelte:boundary>
{/if}
