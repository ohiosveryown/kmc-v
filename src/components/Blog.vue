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
          <figure onclick="toggleLB()">
            <span>View Photo</span>
            <img class="br-3" src="../assets/images/test-img-sm.jpg" alt="">
          </figure>
          <!-- lightbox content -->
          <div id="modal" class="modal">
            <div class="card"></div>
            <div onclick="toggleLB()" class="modal-overlay"></div>
          </div>
          <!-- post content -->
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
  /* @import "../assets/styles/_breakpoints.scss"; */

  section { min-height: 300vh; }

  .logo {
    margin: 16vw auto auto;
  }

  .blog-date {
    font-size: 6.4rem;
    font-style: italic;
    letter-spacing: -0.4rem;
  }

  .modal {
    display: none;
  }

  .modal.active {
    display: block;
  }

  .card {
    background: #fff;
    height: 400px;
    width: 800px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .modal-overlay {
    background: rgba(0,0,0,0.8);
    position: fixed;
    top: 0; left: 0;
    height: 100vh;
    width: 100%;
    z-index: 1;
  }

</style>


<!-- script -->
<script>
  toggleLB = function() {
    document.getElementById("modal").classList.toggle("active");
    //document.getElementsByTagName("body").classList.toggle("active");
  }
</script>
