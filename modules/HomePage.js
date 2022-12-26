export default class Home {
    constructor() {
        
    }

    welcomeSection = async () => {
      const dynamicSection = document.createElement('section');
      dynamicSection.id = 'WelcomeSection';
      dynamicSection.className = 'WelcomeSection d-flex';

      dynamicSection.innerHTML += `
       <div class="left-image col-3"></div>
       <div class="col-md-6 col-sm-12">
        <div>
          <h1>Welcome to Karavan!</h1>
          <p>Karavan Coffee makes its best effort to create a unique place where customers can socialize with each other in a comfortable and relaxing environment while enjoying hot and cold drinks as well as uniquely prepared pastry and food choices.</p>
          <div align='center'>
            <button>Learn more about us!</button>
          </div>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100 mx-auto" src="0bcf35f8299d1ee450d1.png" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 mx-auto" src="0bcf35f8299d1ee450d1.png" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 mx-auto" src="0bcf35f8299d1ee450d1.png" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
        <div class="right-image col-3"></div>
      `;
      
      const emptySection = document.getElementById('dynamic-page');
      emptySection.appendChild(dynamicSection);
    }

    whyKaravanSection = async () => {
        const dynamicSection = document.createElement('section');
        dynamicSection.id = 'WhyKaravanSection';
        dynamicSection.className = 'WhyKaravanSection';
  
        dynamicSection.innerHTML += `
          <h1>Why Karavan?</h1>
          <div class="WhyKaravanMain">
          <div class="keypoint-img">
            <img id="keypoint-img" src='' alt=''>
          </div>
          <div class="statistics container">
            <div class="row">
              <div class="stat col-sm">
                <i class="fa fa-calendar fa-2x"></i>
                <p class="fs-2"><span id='0101'>1987</span></p>
                <p>Establishment Date</p>
              </div>
              <div class="stat col-sm">
                <i class="fa fa-coffee fa-2x"></i>
                <p class="fs-2"><span id='0102'>2</span>M+</p>
                <p>Macchiato sold at our flagship branch since opening</p>
              </div>
              <div class="stat col-sm">
                <i class="fa fa-building-o fa-2x"></i>
                <p class="fs-2"><span id='0103'>5</span></p>
                <p>Branches and 2 coming soon</p>
              </div>
            </div>
            <div class="row">
              <div class="stat col-sm">
                <i class="fa fa-users fa-2x"></i>
                <p class="fs-2"><span id='0104'>320</span>+</p>
                <p>Employees</p>
              </div>
              <div class="stat col-sm">
                <i class="fa fa-cutlery fa-2x"></i>
                <p class="fs-2"><span id='0105'>200</span>+</p>
                <p class="align-content-center">Food & Beverage Variety</p>
              </div>
              <div class="stat col-sm">
                <i><img src="6beeaf692a6a15848cee.png" height="42px" widht="50px"></i>
                <p class="fs-2"><span id='0106'>100</span></p>
                <p class="align-content-center">Pastry & Food Cheifs</p>
              </div>
            </div>
          </div>
          </div>
        `;
      const emptySection = document.getElementById('dynamic-page');
      emptySection.appendChild(dynamicSection);
    }
}