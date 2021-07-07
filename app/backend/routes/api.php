<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users\Demo\DemoController;
use App\Http\Controllers\Users\Game\EnemiesController;
use App\Http\Controllers\Users\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

// api test
Route::get('test', function () {
    return 'api connection test!';
});

// demo
Route::group(['prefix' => 'v1/game'], function () {
    // game
    Route::group(['prefix' => 'demo'], function () {
        // enemies
        Route::group(['prefix' => 'enemies'], function () {
            Route::get('/', [DemoController::class, 'index'])->name('service.demo.enemies.index');
        });
    });
});

/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login'])->name('auth.user.login');
});

// user auth
Route::group(['prefix' => 'auth', 'middleware' => 'auth:api'], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('self', [AuthController::class, 'getAuthUser']);
});

// user
/* Route::group(['prefix' => 'v1/service', 'middleware' => 'auth:api'], function () {
    // game
    Route::group(['prefix' => 'game'], function () {
        // enemies
        Route::group(['prefix' => 'enemies'], function () {
            Route::get('/', [EnemiesController::class, 'index'])->name('service.game.enemies.index');
        });
    });
}); */
