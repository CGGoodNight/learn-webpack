import Header from './header';
import bg from './static/bg.png';
import './index.css';
import './index.scss';

new Header();

var img = new Image();
img.src = bg;
img.classList.add('bg');
var root = document.getElementById('root');
root.append(img);