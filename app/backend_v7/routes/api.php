<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
 */

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'Users\AuthController@login');
});

Route::group(['prefix' => 'auth', 'middleware' => 'auth:api'], function () {
    Route::post('logout', 'Users\AuthController@logout');
    Route::post('refresh', 'Users\AuthController@refresh');
    Route::post('self', 'Users\AuthController@getAuthUser');
});

Route::group(['prefix' => 'auth-admins'], function () {
    Route::post('login', 'Admins\AuthController@login');
});

Route::group(['prefix' => 'auth-admins', 'middleware' => 'auth:api-admins'], function () {
    Route::post('logout', 'Admins\AuthController@logout');
    Route::post('refresh', 'Admins\AuthController@refresh');
    Route::post('self', 'Admins\AuthController@getAuthUser');
});
