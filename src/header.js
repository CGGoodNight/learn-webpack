 function Header () {
  const dom = document.getElementById('root');
  const header = document.createElement('div');
  header.innerText = '就这？';
  dom.appendChild(header);
}
export default Header;