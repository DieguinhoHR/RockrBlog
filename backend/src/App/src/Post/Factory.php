<?php

namespace App\Post;

use Psr\Container\ContainerInterface;
use Zend\Db\Adapter\Adapter as ZendAdapter;
use Zend\Db\TableGateway\TableGateway;

class Factory
{
    public function __invoke(ContainerInterface $container, $requestedName)
    {
        $config = $container->get('config'); // contém tudo na pasta config
        $adapter = new ZendAdapter($config['db']);
        $tableGateway = new TableGateway('post', $adapter);

        return new $requestedName($tableGateway);
    }
}