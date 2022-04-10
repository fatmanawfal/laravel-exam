<html>
    <head>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.1/dist/flowbite.min.css" />

        <script src="{{ mix('js/app.js') }}" defer></script>

        @livewireStyles

    </head>

    <body>
        @include('includes.navbar')
       {{ $slot }}
      
        @include('includes.footer')
        <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
        @livewireScripts
    </body>
</html>