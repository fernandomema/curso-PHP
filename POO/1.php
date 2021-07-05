<html>

<head>
    <title>Pruebas</title>
</head>

<body>
    <?php
        class Empleado {
            private $nombre;
            private $sueldo;
            public function inicializar($nombre,$sueldo) {
                $this->nombre=$nombre;
                $this->sueldo=$sueldo;
            }
            public function pagaImpuestos()
            {
                echo $this->nombre;
                echo '-';
                if ($this->sueldo>3000)
                echo 'Debe pagar impuestos';
                else
                echo 'No paga impuestos';
                echo '<br>';
            }
        }

        $empleado1=new Empleado();
        $empleado1->inicializar('Jesus',1800);
        $empleado1->pagaImpuestos();
        $empleado1=new Empleado();
        $empleado1->inicializar('Maria',2400);
        $empleado1->pagaImpuestos();
    ?>
</body>

</html>