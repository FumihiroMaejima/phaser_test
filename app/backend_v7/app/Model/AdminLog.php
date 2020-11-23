<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdminLog extends Model
{
    use SoftDeletes;

    //テーブル名指定
    protected $table = 'admin_log';

    // カラムの自動更新をEloquentに許可
    public $timestamps = true;

    // ソフトデリートの有効化(日付へキャストする属性)
    protected $dates = ['deleted_at'];

    // 更新可能なカラムリスト
    protected $fillable = [
        'updated_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'path', 'method', 'status', 'start_at', 'end_at'
    ];
}
