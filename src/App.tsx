import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://photos.enjoei.com.br/batman-e-batmovel-batman-miniatura-de-plastico-e-batmovel-carrinho-dc-comics-87508917/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yNzYyOTg4OC82MDY0ODY3MDRkNjY4Mjc0MmJiMDZiMzY2ZDFkZTllZi5qcGc">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
