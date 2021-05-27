<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Authenticatable;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Illuminate\Routing\Controller
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * ログイン
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        // $credentials = request(['name', 'password']);

        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * ログインユーザーの情報を取得
     * @header Accept application/json
     * @header Authorization Bearer
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAuthUser()
    {
        $user = auth('api')->user();
        return response()->json($this->getUserResource($user));
    }

    /**
     * ログアウト
     * @header Accept application/json
     * @header Authorization Bearer
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * トークンのリフレッシュ
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        // Tymon\JWTAuth\JWT
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * レスポンスデータの作成
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        $user = auth('api')->user();

        // Tymon\JWTAuth\factory
        // Tymon\JWTAuth\Claims\Factory
        // ユーザー情報を返す。
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('api')->factory()->getTTL() * 60,
            'user'         => $this->getUserResource($user)
        ]);
    }

    /**
     * ユーザー情報のリソースを取得
     *
     * @param Authenticatable $user
     * @return array
     */
    protected function getUserResource(Authenticatable $user): array
    {
        return [
            'id'        => $user->id,
            'name'      => $user->name
        ];
    }
}
