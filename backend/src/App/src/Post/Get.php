<?php

namespace App\Post;

use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

class Get implements MiddlewareInterface
{
    private $tableGateway;

    public function __construct($tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler) : ResponseInterface
    {
        $content = $this->tableGateway->select()->toArray();

        return new JsonResponse($content);

    }
}