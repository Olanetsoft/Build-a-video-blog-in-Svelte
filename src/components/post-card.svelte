<script>
  // src/components/post-card.svelte
  export let title;
  export let description;

  export let url;
</script>

<a href={url}>
  <article>
    <h1>{title}</h1>
    <p>{description}</p>
  </article>
</a>

<style>
  article {
    padding: 2vw;
    border-radius: 15px;
    background-color: rgb(186, 186, 186);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 2vw;
  }
  article:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  article:first-child {
    margin-top: 2vw;
  }

  article:last-child {
    margin-bottom: 2vw;
  }

  :global(a) {
    text-decoration: none;
    color: inherit;
  }
</style>
