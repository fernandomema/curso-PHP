<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Videoclub')</title>

    <!-- Bootstrap -->
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css' integrity='sha512-usVBAd66/NpVNfBge19gws2j6JZinnca12rAe2l+d+QkLU9fiG02O1X8Q6hepIpr/EYKZvKx/I9WsnujJuOmBA==' crossorigin='anonymous'/>

  </head>
  <body>
    @include('partials.navbar')

    <div class="container">
      @yield('content')
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src={{ url('/assets/bootstrap/js/bootstrap.min.js') }}></script>
  </body>
</html>
