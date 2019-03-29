<?php

namespace App\Base;

use Psr\Container\ContainerInterface;
use Zend\Db\Adapter\Adapter as ZendAdapter;
use Zend\Db\TableGateway\TableGateway;

abstract class BaseFactory
{
    protected $table;

    public function __invoke(ContainerInterface $container, $requestedName)
    {
        $config = $container->get('config'); // contém tudo na pasta config
        $adapter = new ZendAdapter($config['db']);
        $tableGateway = new TableGateway($this->table, $adapter);

        return new $requestedName($tableGateway);
    }
}