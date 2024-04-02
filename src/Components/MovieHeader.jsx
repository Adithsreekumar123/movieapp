import React from 'react'

export const MovieHeader = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MovieApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">ViewMovies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\book">BookMovie</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\cancel">CancleTicket</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/rate">RateMovie</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}
