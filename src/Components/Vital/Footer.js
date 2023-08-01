import React from 'react'

function Footer() {
  return (
    <div><div class="container">
    <footer class="col-md-14 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="mb-0 text-muted">© Perretes & Co.</p>
  
      <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
      </a>
  
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="fa-brands fa-twitter"></i></a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="fa-brands fa-instagram"></i></a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="fa-brands fa-linkedin"></i></a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="fa-solid fa-envelope"></i></a></li>
      </ul>
    </footer>
  </div></div>
  )
}

export default Footer