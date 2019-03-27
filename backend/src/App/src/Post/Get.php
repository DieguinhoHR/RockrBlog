<?php

namespace App\Post;

use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

class Get implements MiddlewareInterface
{
    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler) : ResponseInterface
    {
        $content = [
            [
                'author' => 'Kelsi Monahan',
                'title' => 'Qui occaecati vero et quibusdam non',
                'content' => 'saepe quia culpa',
                'posted_at' => '2018/06/01'
            ],
            [
                'author' => 'Mrs. Alexanne Schneider',
                'title' => 'Architecto quos rem unde quia accusantium',
                'content' => 'Voluptaum omnis et dolor',
                'posted_at' => '2018/06/01'
            ],
        ];
        return new JsonResponse($content);

    }
}