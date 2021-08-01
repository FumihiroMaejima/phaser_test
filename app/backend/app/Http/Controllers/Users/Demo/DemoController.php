<?php

namespace App\Http\Controllers\Users\Demo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Services\Game\GameEnemiesService;
use App\Services\Demo\DemoEnemiesService;
use App\Trait\CheckHeaderTrait;
use Illuminate\Support\Facades\Config;

class DemoController extends Controller
{
    use CheckHeaderTrait;
    private $service;

    /**
     * Create a new EnemiesController instance.
     *
     * @return void
     */
    public function __construct(DemoEnemiesService $demoService)
    {
        $this->service = $demoService;
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
