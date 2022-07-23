<script context="module">
  // src/routes/posts/[url].svelte
  export const load = async ({ fetch, params, url }) => {
    const post = await fetch(`/posts/${params.url}.json`).then((r) => r.json());
    console;
    return { props: { post } };
  };
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.attributes.title}</title>
  <meta name="description" content={post.attributes.description} />
</svelte:head>

<article>
  <h1 class="section-header">{post.attributes.title}</h1>

  {@html post.html}

  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    src={post.attributes.video}
    height="400"
    width="600"
    controls
    autoplay
  />
</article>

<style>
  :global(article) {
    padding: 4vw;
  }
</style>
