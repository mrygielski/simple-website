Przygotowanie środowiska developerskiego
----------------------------------------

        # Instalacja zależności php
        php composer.phar install

        # Instalacja
        npm install
        ./gulp
        
        # Uruchamianie watcha
        ./gulp watch
        
        # Budowanie bazy danych
        php artisan doctrine:schema:create
        php artisan doctrine:generate:proxies
    
        # Aktualizacja bazy danych
        php artisan doctrine:schema:update --sql
        php artisan doctrine:schema:update --force
        php artisan doctrine:generate:proxies