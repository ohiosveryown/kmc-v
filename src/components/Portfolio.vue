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

              <div id="sb1" class="sb-content">
                <p>this is sidebar content and it goes here...</p>
              </div>
              <div onclick="toggleSB1()" id="ol1" class="sb-overlay"></div>


              <!--
              <div id="sb1" class="sidebar">
                <p>this is sidebar content and it goes here.</p>
              </div>
              <div onclick="toggleSB1()" id="ol1" class="bg-overlay"></div>
              <p>Lorem ipsum dolor sit amet, mel at vocent docendi, ne sed tale theophrastus conclusionemque. Vix sententiae repudiandae an, no usu epicuri constituto, sed facilisi argumentum id. Nam prima petentium mnesarchum ex.</p>
              -->
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
