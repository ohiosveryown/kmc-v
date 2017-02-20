<!-- template -->
<template>
  <!-- view transition -->
  <transition name="fade">
  <!-- single wrapper for vue.js -->
  <div>
    <!-- layout wrapper -->
    <section>
      <!-- aside -->
      <aside>
        <div class="aside-content pt-0">
          <!-- title -->
          <h4 class="border-b mb-1 pb-0">blog</h4>
          <!-- description -->
          <h1 class="measure-8">Lorem ipsum dolor sit amet, et summo vituperata mei.</h1>
          <!-- logo / glyph -->
          <img class="logo" src="../assets/images/test-logo.png" alt="">
        </div>
      </aside>

      <!-- main content -->
      <main>


        <!-- january 13 2017 -->
        <article class="mb-4">
          <h3 class="mb-1 uc">blog</h3>
          <!-- date -->
          <h4 class="mb-2 pt-0 border-t">january 23, 2017</h4>
          <!-- post title -->
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
          <!-- date -->
          <h4 class="mb-2 pt-0 border-t">december 25, 2017</h4>
          <!-- blog image -->
          <figure onclick="toggleLB()">
            <span>View Photo</span>
            <!-- lightbox img sm -->
            <img class="br-3" src="../assets/images/test-img-sm.jpg" alt="">
          </figure>
          <!-- lightbox content -->
          <div id="lightbox" class="lightbox">
            <div class="lb-content">
              <!-- lightbox img lg -->
              <img onclick="toggleLB()" class="br-3" src="../assets/images/test-img-v.jpg" alt="">
            </div>
            <div onclick="toggleLB()" class="bg-overlay"></div>
          </div>
          <!-- post title -->
          <h2 class="measure-6 pt-3 mb-3">Blog Title—ipsum dolor sit amet, et summo vituperata mei.</h2>
          <div class="flex-inline-mdl">
            <!-- drop date -->
            <div class="blog-date">25</div>
            <!-- post content -->
            <div class="blog-content">
              <p>Lorem ipsum dolor sit amet, mel at vocent docendi, ne sed tale theophrastus conclusionemque. Vix sententiae repudiandae an, no usu epicuri constituto, sed facilisi argumentum id. Nam prima petentium mnesarchum ex.</p>
              <p>Augue sonet et vel, posse affert efficiantur usu ut. Eu eam quem nonumy democritum, liber putent legendos eu ius.</p>
              <p>Ut nam civibus indoctum. Eum ne atqui primis. Quo no nulla quaestio. An ludus putant sea, id postea antiopam mea, ut omnis everti expetenda sit. Inani errem expetenda per ad, te adipisci perpetua per, nulla noluisse recteque quo id.</p>
              <p>Id usu scaevola assueverit temporibus, regione denique an nec, alia delenit laoreet vel et.</p>
            </div>
          </div>
        </article>

      <!-- / main wrapper -->
      </main>
    <!-- / layout wrapper -->
    </section>

  </div>
  <!-- / view transition -->
  </transition>
<!-- / template -->
</template>


<!-- styles -->
<style lang="scss" scoped>
  /* @import "../assets/styles/_breakpoints.scss"; */

  section { min-height: 400vh; }

  .blog-date {
    font-size: 6.4rem;
    font-style: italic;
    letter-spacing: -0.4rem;
  }

</style>


<!-- script -->
<script>
  toggleLB = function() {
    document.getElementById("lightbox").classList.toggle("active");
  }
</script>
