<?php

namespace App\Http\Controllers\Users\Game;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Services\Game\GameEnemiesService;
use App\Trait\CheckHeaderTrait;
use Illuminate\Support\Facades\Config;

class EnemiesController extends Controller
{
    use CheckHeaderTrait;
    private $service;

    /**
     * Create a new EnemiesController instance.
     *
     * @return void
     */
    public function __construct(GameEnemiesService $enemiesService)
    {
        $this->middleware('auth:api');
        $this->service = $enemiesService;
    }

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response|\Illuminate\Contracts\Routing\ResponseFactory
     */
    public function index(Request $request)
    {
        // 権限チェック
        /* if (!$this->checkRequestAuthority($request, Config::get('myapp.executionRole.services.game.enemies'))) {
            return response()->json(['error' => 'Forbidden'], 403);
        } */

        // サービスの実行
        return $this->service->getEnemies($request);
    }
}
