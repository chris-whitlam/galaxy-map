import './Footer.css';

function Footer({ children }) {
  return (
    <footer>
      <span>{children || 'Created by Chris Whitlam'}</span>
    </footer>
  );
}

export default Footer;
