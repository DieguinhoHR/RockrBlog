<?php

namespace App\Contact;

use PHPUnit\Runner\Exception;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

class Store implements MiddlewareInterface
{
    const CREATED = 201;

    private $tableGateway;

    public function __construct($tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler) : ResponseInterface
    {
        $data = $request->getParsedBody();

        $this->tableGateway->insert($data);

        $content = [
            'id' => $this->tableGateway->getLastInsertValue(),
        ];

        return new JsonResponse($content, self::CREATED);
    }
}