
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>@yield('title', 'CDC | ')</title>
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    @viteReactRefresh 
        @vite(['resources/css/app.css', 'resources/ts/app.tsx'])
        <!-- As you can see, we will use vite with jsx syntax for React-->
        @inertiaHead
  </head>
  <body>
    @inertia
    {{-- scripts --}}
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="{{ asset('assets/js/app.js') }}" defer></script>
  </body>
</html>