<?php

namespace App\Post;

use App\Base\BaseTableGateway;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

class GetAll extends BaseTableGateway implements MiddlewareInterface
{
    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler) : ResponseInterface
    {
        $content = $this->getTableGateway()->select()->toArray();

        return new JsonResponse($content);

    }
}