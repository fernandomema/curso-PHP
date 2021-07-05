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
        class CabeceraPagina {
            private $titulo;
            private $ubicacion;
            private $colorFuente;
            private $colorFondo;
            public function inicializar($tit,$ubi,$colorFuen,$colorFon)
            {
              $this->titulo=$tit;
              $this->ubicacion=$ubi;
              $this->colorFuente=$colorFuen;
              $this->colorFondo=$colorFon;
            }
            public function graficar()
            {
              echo '<div style="font-size:40px;text-align:'.$this->ubicacion.';color:';
              echo $this->colorFuente.';background-color:'.$this->colorFondo.'">';
              echo $this->titulo;
              echo '</div>';
            }
        }
        
        $cabecera=new CabeceraPagina();
        $cabecera->inicializar('Cabecera','center','#FF1A00','#CDEB8B');
        $cabecera->graficar();
    ?>
</body>
</html>