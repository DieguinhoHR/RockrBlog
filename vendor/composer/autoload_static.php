<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitedf5a810b6f140ef79906df07def38c3
{
    public static $prefixLengthsPsr4 = array (
        'Z' => 
        array (
            'Zend\\Stdlib\\' => 12,
            'Zend\\Db\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Zend\\Stdlib\\' => 
        array (
            0 => __DIR__ . '/..' . '/zendframework/zend-stdlib/src',
        ),
        'Zend\\Db\\' => 
        array (
            0 => __DIR__ . '/..' . '/zendframework/zend-db/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitedf5a810b6f140ef79906df07def38c3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitedf5a810b6f140ef79906df07def38c3::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}