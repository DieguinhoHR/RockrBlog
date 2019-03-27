<?php

return [
//    'db' => [
//        'driver' => 'Pdo_mysql',
//        'database' => 'rockrblog',
//    ],
    'db' => [
        'driver'   => 'Pdo',
        'dsn'      => 'mysql:host=192.168.16.1;port=3307;dbname=rockrblog',
        'database' => 'rockrblog',
        'user'     => 'root',
        'password' => 'root'
    ],
];