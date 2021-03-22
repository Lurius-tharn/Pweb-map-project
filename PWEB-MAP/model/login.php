<?php
require_once 'model/model.php';

class Player extends Model
{
    public function newPlayer($login, $password)
    {
        $hash = password_hash($pwd, PASSWORD_DEFAULT);
        $sql = 'SELECT login FROM player';
        $result = $this->executeQuery($sql);

        while ($loginPlayer = $result->fetch()) {
            if (strcmp($emailPlayer['login'], $login) == 0) {
                return false;
            }
        }

        $sql = 'INSERT INTO player(id_player, login, password) VALUES(:id_player, :login, :password)';
        $params = array(
            'id_player' => trim(com_create_guid(), '{}'),
            'login' => $login,
            'pwd' => $hash
        );

        $this->executeQuery($sql, $params);
        $this->connectPlayer($login, $password);
        return true;
    }
    

      // Connect a player
      public function connectPlayer($email, $pwd)
      {
          $sql = 'SELECT * FROM player';
          $players = $this->executeQuery($sql);
          while ($Player = $players->fetch()) {
              if (strcmp($Player['email'], $email) == 0) {
                  if (password_verify($pwd, $Player['pwd'])) {
                      $_SESSION['isConnected'] = true;
                      $_SESSION['idPlayer'] = $Player['idPlayer'];
                      return true;
                  }
                  return false;
              }
          }
       }

          public function disconnectPlayer()
          {
              if (isset($_SESSION['isConnected']) and !empty($_SESSION['isConnected'])) {
                  unset($_SESSION['isConnected']);
              }
              if (isset($_SESSION['idPlayer']) and !empty($_SESSION['idPlayer'])) {
                  unset($_SESSION['idPlayer']);
              }
          }
      
  

       // Check if a player is connected
    public function isConnected()
    {
        if (isset($_SESSION['isConnected']) and !empty($_SESSION['isConnected'])) {
            return $_SESSION['isConnected'];
        }
        return false;
    }

    /* Fonction qui enregistre un joueur dans une partie
    */
    public function registerPlayer($code, $username, $isHost)
    {
        if ($this->isConnected()) {
            $idPlayer =  $_SESSION['idPlayer'];
        } else {
            $idPlayer = trim(com_create_guid(), '{}');
            $_SESSION['idPlayer'] =  $idPlayer;
        }

        $sql = 'INSERT INTO game(id_game, idPlayer, username, isHost)
            VALUES(:code, :idPlayer, :username, :isHost)';

        $params = array(
            'code' => $code,
            'idPlayer' => $idPlayer,
            'username' => $username,
            'isHost' => intval($isHost)
        );
        $this->executeQuery($sql, $params);
        return $this->getPlayerFromPlay($idPlayer, $code);
    }

    /* Fonction qui vérifie si un joueur est déjà dans une partie
    */
    public function isRegister($code, $username)
    {
        $sql = 'SELECT * FROM play WHERE username=:username AND code=:code';
        $params = array(
            'username' => $username,
            'code' => $code
        );
        $result = $this->executeQuery($sql, $params)->fetch();

        return $result;
    }



}