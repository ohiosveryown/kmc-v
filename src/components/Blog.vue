<!-- template -->
<template>
  <!-- view transition -->
  <transition name="fade">

  <div>

    <!-- layout wrapper -->
    <section>
      <!-- aside -->
      <aside>
        <div class="aside-content pt-0">
          <h4 class="border-b mb-1 pb-0">blog</h4>
          <h1 class="measure-8">Lorem ipsum dolor sit amet, et summo vituperata mei.</h1>
          <img class="logo" src="../assets/images/test-logo.png" alt="">
        </div>
      </aside>

      <!-- main content -->
      <main>

        <!-- january 13 2017 -->
        <article class="mb-4">
          <h3 class="mb-1">blog</h3>
          <!-- date -->
          <h4 class="mb-2 pt-0 border-t">january 23, 2017</h4>
          <!-- title -->
          <h2 class="measure-6 mb-3">Blog Title—ipsum dolor sit amet, et summo vituperata mei.</h2>
          <div class="flex-inline-mdl">
            <!-- drop date -->
            <div class="blog-date">23</div>
            <!-- blog content -->
            <div class="blog-content">
              <p>Lorem ipsum dolor sit amet, mel at vocent docendi, ne sed tale theophrastus conclusionemque. Vix sententiae repudiandae an, no usu epicuri constituto, sed facilisi argumentum id. Nam prima petentium mnesarchum ex.</p>
              <p>Augue sonet et vel, posse affert efficiantur usu ut. Eu eam quem nonumy democritum, liber putent legendos eu ius.</p>
              <p>Ut nam civibus indoctum. Eum ne atqui primis. Quo no nulla quaestio. An ludus putant sea, id postea antiopam mea, ut omnis everti expetenda sit. Inani errem expetenda per ad, te adipisci perpetua per, nulla noluisse recteque quo id.</p>
              <p>Id usu scaevola assueverit temporibus, regione denique an nec, alia delenit laoreet vel et.</p>
            </div>
          </div>
        </article>

        <!-- december 25 2016 -->
        <article class="mb-4">
          <h4 class="mb-2 pt-0 border-t">december 25, 2017</h4>
          <!-- blog image -->
          <!-- <img class=" blog-img mb-3" src="/images/blog-test.jpg" alt=""> -->
          <figure>
            <span>View Photo</span>
            <img class="br-3" src="../assets/images/test-img-sm.jpg" alt="">
          </figure>
          <h2 class="measure-6 pt-3 mb-3">Blog Title—ipsum dolor sit amet, et summo vituperata mei.</h2>
          <div class="flex-inline-mdl">
            <!-- drop date -->
            <div class="blog-date">25</div>
            <!-- blog content -->
            <div class="blog-content">
              <p>Lorem ipsum dolor sit amet, mel at vocent docendi, ne sed tale theophrastus conclusionemque. Vix sententiae repudiandae an, no usu epicuri constituto, sed facilisi argumentum id. Nam prima petentium mnesarchum ex.</p>
              <p>Augue sonet et vel, posse affert efficiantur usu ut. Eu eam quem nonumy democritum, liber putent legendos eu ius.</p>
              <p>Ut nam civibus indoctum. Eum ne atqui primis. Quo no nulla quaestio. An ludus putant sea, id postea antiopam mea, ut omnis everti expetenda sit. Inani errem expetenda per ad, te adipisci perpetua per, nulla noluisse recteque quo id.</p>
              <p>Id usu scaevola assueverit temporibus, regione denique an nec, alia delenit laoreet vel etttttt.</p>
              <div onclick="toggleClass(this)" class="toggle">
                <div class="ball"></div>
                <div class="track"></div>
              </div>
            </div>
          </div>
        </article>

      </main>

    </section>

  </div>

  </transition>

</template>


<!-- styles -->
<style lang="scss" scoped>

.logo { margin: 16vw auto auto; }
  /*
  @import "../assets/styles/_breakpoints.scss";

  .blog-date {
    @include breakpoint(mdl) { width: grid-width(1); margin: -1rem 4rem 0 0; }
  }

  .blog-content {
    @include breakpoint(mdl) { width: grid-width(9); }
  }
  */

  .blog-date { font-size: 6.4rem; font-style: italic; letter-spacing: -0.4rem; }

  section { min-height: 300vh; }

  .ball {
    background: #f7f7f7;
    border: 1px solid #9fb0b7;
    border-radius: 100px;
    height: 32px; width: 32px;
    transform: translate3d(0,0,0);
    transition: all 300ms cubic-bezier(0.680, -0.6, 0.265, 1.8);
  }

  .track {
    background: #9fb0b7;
    border-radius: 100px;
    height: 20px;
    width: 56px;
    position: relative;
    top: -26px;
    left: 4px;
    z-index: -1;
    box-shadow: none;
    transition: all 250ms ease;
    transition-delay: 100ms;
    box-shadow: inset 0 0 0 0 #49bde4;
  }

  .move {
    .ball {
      transform: translate3d(30px,0,0);
    }

    .track {
      box-shadow: inset 0 0 0 10px #49bde4;
    }
  }

</style>


<!-- script -->
<script>

  toggleClass = function(e) {
    (e).classList.toggle('move');
  }
</script>
