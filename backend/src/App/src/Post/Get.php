<?php

namespace App\Post;

use PHPUnit\Runner\Exception;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

class Get implements MiddlewareInterface
{
    const NOT_FOUND = 404;

    private $tableGateway;

    public function __construct($tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler) : ResponseInterface
    {
        $id = $request->getAttribute('id_post');
        $content = $this->tableGateway->select(['id' => $id])->toArray();

        if (count($content) == 0) {
            throw new Exception('Not found', self::NOT_FOUND);
        }

        return new JsonResponse($content);

    }
}