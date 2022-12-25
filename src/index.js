import './style.css';
import './normalize.css';
import KaravanLogo from '../img/KaravanNewLogo.PNG';
import KaravanGoldenLogo from '../img/karavan-golden-logo.png';
import KaravanGoldenLogoOnly from '../img/karavan-golden-logo-only.png';
import KaravanGoldenMotoOnly from '../img/karavan-golden-moto-only.png';
import KaravanGoldenTogether from '../img/karavan-golden-together.png';
import KaravanCamelBrown from '../img/karavan-camel-brown.png';
import KaravanCamelBrownCustom from '../img/karavan-camel-brown-custom.png';
import HeroHome from '../hearts.mp4';
import Ribbon from '../img/ribbon.png';
import RibbonLong from '../img/ribbon-long.png';
import KaravanRibbonLong from '../img/karavan-ribbon-long.jpg';
import OriginalVideo from '../KaravanCoffeeCakeFood.mp4';
import FacebookLogo from '../img/facebook-golden-transparent-logo.png';
import TwitterLogo from '../img/twitter-golden-transparent-logo.png';
import InstagramLogo from '../img/instagram-golden-transparent-logo.png';
import KaravanCamelGreenCustom from '../img/karavan-camel-green-custom.png';


window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        document.getElementById('header').style.backgroundColor = "#105149";
    } else {
        document.getElementById('header').style.backgroundColor = "#00000000";
        document.getElementById('header').style.backgroundImage = 'linear-gradient(to bottom, #10665eff,#10665e88, #10665e00)';
    }
    console.log(window.scrollY);
  });
});