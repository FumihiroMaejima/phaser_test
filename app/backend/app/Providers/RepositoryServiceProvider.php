<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\GameEnemies\GameEnemiesRepository;
use App\Repositories\GameEnemies\GameEnemiesRepositoryInterface;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(GameEnemiesRepositoryInterface::class, GameEnemiesRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
