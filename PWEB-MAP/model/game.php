<?php
require_once '../model/model.php';

class Game extends Model
{


public function newGame($player, $country,$code)
    {
    
        $sql = 'INSERT INTO game(id_game, player,country, scoreplayer, code) VALUES(:id_game, :player,country, :scoreplayer, :code)';
        $params = array(
            'id_game' => null,
            'player' => $player,
            'country' => $country,
            'scoreplayer' => 0,
            'code' => $code
        );
        $this->executeQuery($sql, $params);

        $sql = 'SELECT id_game FROM game where code = :code';
        $idGame = $this->executeQuery($sql)->fetch();
        $_SESSION['id_game'] = $idGame['id_game'];
   
        return true;
    }

    public function getCountry()
    {

        
        $sql = 'SELECT * FROM country
        ORDER BY RAND()
        LIMIT 1';
        $result = $this->executeQuery($sql)->fetch();
        return $result;
    }

    public function getGame()
    {
        $sql = 'SELECT * FROM game WHERE';
        $result = $this->executeQuery($sql)->fetch();
        return $result;
    }

    public function updateGameWin($id_game){
        $sql = 'UPDATE game SET scoreplayer = scoreplayer + 5 where id_game = :id_game';
        $params = array(
            'id_game' => $id_game,
        );
        $this->executeQuery($sql, $params);
    }

    public function updateGameLost($id_game){
        $sql = 'UPDATE game SET scoreplayer = scoreplayer - 5 where id_game = :id_game';
        $params = array(
            'id_game' => $id_game,
        );
        $this->executeQuery($sql, $params);
    }
}