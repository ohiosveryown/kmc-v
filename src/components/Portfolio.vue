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
          <h4 class="border-b mb-1 pb-0">portfolio</h4>
          <!-- description -->
          <h1 class="measure-8">Lorem ipsum dolor sit amet, et summo vituperata mei.</h1>
          <!-- logo / glyph -->
          <img class="logo" src="../assets/images/test-logo.png" alt="">
        </div>
      </aside>

      <!-- main content -->
      <main>

        <!-- painting -->
        <article class="mb-4">
          <h3 class="mb-1 uc">portfolio</h3>
          <!-- date -->
          <h4 class="mb-2 pt-0 border-t">painting</h4>
          <!-- piece title -->
          <h2 class="measure-6 pt-3 mb-3">Painting Piece Title #1</h2>

            <!-- piece content -->
            <div class="portfolio-content">
              <!-- sm image -->
              <figure onclick="toggleSB1()">
                <span>View Piece</span>
                <!-- sidebar img sm -->
                <img class="br-3" src="../assets/images/test-img-sm.jpg" alt="">
              </figure>

              <!-- sidebar content -->
              <div id="sb1" class="sidebar">
                <div class="sb-content">
                  <img class="br-3 mb-2" src="../assets/images/test-img-sm.jpg" alt="">
                  <h5 class="ls-1">$245.00</h5>
                  <h2>Piece Title #1</h2>
                  <div class="sb-details pt-2">
                    <p>Lorem ipsum dolor sit amet, mel at vocent docendi, ne sed tale theophrastus conclusionemque. Vix sententiae repudiandae an, no usu epicuri constituto, sed facilisi argumentum id. Nam prima petentium mnesarchum ex.</p>
                    <button class="purchase-btn uc">purchase</button>
                  </div>
                </div>
              </div>

              <!-- bg overlay -->
              <div onclick="toggleSB1()" id="ol1" class="sb-overlay">
                <div class="sb-close-glyph">
                  <img src="../assets/images/close-glyph.png" alt="">
                  <h5 class="uc pt-2">close</h5>
                </div>
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

</style>


<!-- script -->
<script>
  toggleSB1 = function() {
    document.getElementById("ol1").classList.toggle("active");
    document.getElementById("sb1").classList.toggle("active");
  }
</script>
