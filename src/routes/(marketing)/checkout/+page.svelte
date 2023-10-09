<script lang="ts">
  import { page } from "$app/stores";
  import type { FunnelElement } from "$lib/funnel";
  import type { PageData } from "./$types";

  export let data: PageData;

  const fallback: FunnelElement = {
    varient: 0,
    cta: {
      innerText: "Default Cta",
      href: "/",
    },
  };

  const funnelData = data?.funnel?.data[$page.url.pathname] || fallback;
</script>

<h1>{$page.url.pathname}</h1>
<h2>Funnel Id: {data?.funnel?.id}</h2>

{#if funnelData.varient === 0}
  <h2>Page varient 0</h2>
  <p>call to action:</p>
  <a href={funnelData.cta.href}>{funnelData.cta.innerText}</a>
{:else if funnelData.varient === 1}
  <h2>Page varient 1</h2>
  <p>call to action:</p>
  <a href={funnelData.cta.href}>{funnelData.cta.innerText}</a>
{/if}

<p>{JSON.stringify(funnelData)}</p>

<p>funnel: {JSON.stringify(data?.funnel)}</p>
