<header>
  <h1><a href="/">Home</a></h1>
</header>
<slot />

<style>
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding-left: 4vw;
    padding-right: 4vw;
  }

  h1 {
    margin: 5;
    font-weight: 400;
    font-size: 25px;
  }
</style>
