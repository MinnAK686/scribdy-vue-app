<template>
  <!-- Start Navbar -->

  <nav class="navbar fixed-top py-4">
    <div class="container-fluid mx-xl-5">
      <div class="d-flex justify-content-between align-items-center">
        <button
            class="btn border-0"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <h4 class="m-0">
          <router-link to="/" class="link-dark text-decoration-none">
            SCRIBD
            <!-- <img src="./assets/logo.svg" class="img-fluid" alt=""> -->
          </router-link>
        </h4>
      </div>
      <div>
        <a
            href="#"
            class="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
        >Sign in</a
        >
      </div>
      <div
          class="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header my-4">
          <h5
              class="offcanvas-title fw-bold"
              id="offcanvasWithBothOptionsLabel"
          >
            Scribd
          </h5>
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <form>
              <input type="text" class="form-control" placeholder="Search" />
            </form>
            <hr class="my-4 text-secondary" />
          </div>
          <div>
            <div class="mb-3">
              <a href="#" class="link-info text-decoration-none pr-3">
                Explore
              </a>
              <a href="#" class="link-info text-decoration-none px-3">
                Upload
              </a>
              <a href="#" class="link-info text-decoration-none pr-3"> FAQ </a>
            </div>
            <p class="fw-bold">Browse by</p>
            <div class="d-flex justify-content-between">
              <ul class="browse-list">
                <li>
                  <a href="#">Books</a>
                </li>
                <li>
                  <a href="#">Magazines</a>
                </li>
                <li>
                  <a href="#">Documents</a>
                </li>
              </ul>
              <ul class="browse-list-left">
                <li>
                  <a href="#">Audio Books</a>
                </li>
                <li>
                  <a href="#">Podcasts</a>
                </li>
                <li>
                  <a href="#">Sheet Music</a>
                </li>
              </ul>
            </div>
          </div>
          <p class="fw-bold">Interests</p>
          <div class="interests">
            <a href="#">Career & Growth</a>
            <a href="#">Business</a>
            <a href="#">Finance & Money Management</a>
            <a href="#">Politics</a>
            <a href="#">Sports & Recreation</a>
            <a href="#">Games & Activities</a>
            <a href="#">Comics & Graphic Novels</a>
            <a href="#">Social Science</a>
            <a href="#">True Crime</a>
            <a href="#">Travel</a>
          </div>
          <hr class="text-secondary my-3" />
          <div class="downloads">
            <p>Download our app to read books on any device</p>
            <div>
              <img src="../assets/img/app-store.svg" alt="" />
              <img src="../assets/img/play-store.svg" alt="" />
              <img src="../assets/img/download.svg" alt="" />
            </div>
            <hr class="text-secondary" />
          </div>
          <div class="icons">
            <div class="d-flex justify-content-around">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter"></i>
              <i class="fa-brands fa-scribd"></i>
              <i class=""></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- End Navbar -->
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>