<?php

namespace App\Post;

use App\Base\BaseTableGateway;
use PHPUnit\Runner\Exception;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

class Get extends BaseTableGateway implements MiddlewareInterface
{
    const NOT_FOUND = 404;

    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler) : ResponseInterface
    {
        $id = $request->getAttribute('id_post');
        $content = $this->getTableGateway()->select(['id' => $id])->toArray();

        $this->isContent($content);

        return new JsonResponse($content);
    }

    private function isContent($content)
    {
        if (count($content) == 0) {
            throw new Exception('Not found', self::NOT_FOUND);
        }
    }
}