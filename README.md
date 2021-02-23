<!-- PROJECT LOGO -->
<br />

  <h3 align="center">Flipcards - Vanilla Javascript Game</h3>

<p align="center">
  <a href="https://sam-goldstein.netlify.app/">
    <img src="https://media.giphy.com/media/zu0ilz3mOokA05H0sU/giphy.gif" alt="Flipcards" width="600" height="400">
    <br/>
  </a>
    <a href="https://samgold2020.github.io/Flipcards"><strong>Play the Game »</strong></a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Sample Code</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This is a Vanila Javascript game complete with DOM manipulation, css grid and flipcard animation, and a toggle for dark mode.  
### Built With

* [Javascript]
* [HTML]
* [CSS]

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

None
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/samgold2020/Personal-Portfolio
   ```
2. Open locally
   ```sh
   code .
   ```
## Sample Code

The shuffle is achieved with a forEach loop which randomizes each cards position and reloads the page once the winning condition has been met.
```
let shuffleBtn = document.getElementsByClassName("shuffle")[0];

function shuffle(){
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
    card.classList.remove('flip')
  })
}

window.onload = function(){
  shuffle()
}
 ```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/samgold2020/Flipcards/issues) for a list of proposed features (and known issues).

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<!-- CONTACT -->
## Contact

Sam Goldstein - [@twitter](https://twitter.com/@sgoldstein92) - sgoldstein312@gmail.com

[Visit the deployed site here!](https://samgold2020.github.io/Flipcards/)

