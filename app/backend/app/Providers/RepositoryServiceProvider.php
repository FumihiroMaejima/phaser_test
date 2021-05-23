<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Repositories\Admins\AdminsRepositoryInterface;
use App\Repositories\Admins\AdminsRepository;
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
        $this->app->bind(AdminsRepositoryInterface::class, AdminsRepository::class);
        $this->app->bind(AdminsRolesRepositoryInterface::class, AdminsRolesRepository::class);
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
