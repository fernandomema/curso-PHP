<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        class Menu {
            private $enlaces=array();
            private $titulos=array();
            public function cargarOpcion($en,$tit)
            {
              $this->enlaces[]=$en;
              $this->titulos[]=$tit;
            }
            private function mostrarHorizontal()
            {
              for($f=0;$f<count($this->enlaces);$f++)
              {
                echo '<a href="'.$this->enlaces[$f].'">'.$this->titulos[$f].'</a>';
                echo "-";
              }
            }
            private function mostrarVertical()
            {
              for($f=0;$f<count($this->enlaces);$f++)
              {
                echo '<a href="'.$this->enlaces[$f].'">'.$this->titulos[$f].'</a>';
                echo "<br>";
              }
            }
            
            public function mostrar($orientacion)
            {
              if (strtolower($orientacion)=="horizontal")
                $this->mostrarHorizontal();
              if (strtolower($orientacion)=="vertical")
                $this->mostrarVertical();
            }
          }
          
          $menu1=new Menu();
          $menu1->cargarOpcion('http://www.google.com','Google');
          $menu1->cargarOpcion('http://www.yahoo.com','Yhahoo');
          $menu1->cargarOpcion('http://www.msn.com','MSN');
          $menu1->mostrar("horizontal");
          echo '<br>';
          $menu2=new Menu();
          $menu2->cargarOpcion('http://www.google.com','Google');
          $menu2->cargarOpcion('http://www.yahoo.com','Yhahoo');
          $menu2->cargarOpcion('http://www.msn.com','MSN');
          $menu2->mostrar("vertical");
    ?>
</body>
</html>